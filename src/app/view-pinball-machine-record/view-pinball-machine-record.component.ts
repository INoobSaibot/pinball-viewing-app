import { Component, HostListener, OnInit } from '@angular/core';
import 'hammerjs';
import { PinballMachineRecordService } from '../pinballMachineRecords/pinball-machine-record.service';
import { PinballMachineRecord } from '../view-pinball-machine-record/model/pinball-machine-record.model';

@Component({
  selector: 'view-pinball-machine-record',
  templateUrl: './view-pinball-machine-record.component.html',
  styleUrls: ['./view-pinball-machine-record.component.less']
})
export class ViewPinballMachineRecordComponent implements OnInit {

  @HostListener('document:keydown.ArrowRight', ['$event']) onRightArrowKeydownHandler(event: KeyboardEvent) {
    this.isNextClick();
  }

  @HostListener('document:keydown.ArrowLeft', ['$event']) onLeftArrowKeydownHandler(event: KeyboardEvent) {
    this.isPreviousClick();
  }


  readonly base64: string = 'data:image/jpeg;base64, '
  constructor(private pinballMachineRecordService: PinballMachineRecordService) { }

  pinballMachineRecord: PinballMachineRecord;
  devOnly: boolean = true;

  title: string;
  ipdbNumber: string;
  focusedImageSrcString: string;
  imageNumberSelected: number = 0;

  glossaryModalOpen: boolean;
  popupAliveSince: number;

  ngOnInit() {
    // being dev only
    if (this.devOnly) {
      this.pinballMachineRecord = this.pinballMachineRecordService.getPinballMachine();
      this.glossaryModalOpen = true;
      this.popupAliveSince = Date.now();
    }
    // end dev only

    this.title = this.pinballMachineRecord.pinballMachine.title;
    this.ipdbNumber = this.pinballMachineRecord.ipdbNumber;
    this.setDefaultImg();

  }

  closeClicked(e) {
    this.glossaryModalOpen = false;
  }

  get uri(): string{
    return this.pinballMachineRecord.uri;
  }

  getBase64Image(index): string {
    return this.base64 + this.pinballMachineRecord.pinballMachine.images[index];
  }

  handleGlossaryClick() {
    if(this.glossaryModalOpen === false) {
      this.glossaryModalOpen = true;
      this.popupAliveSince = Date.now();
    }
  }

  clickedOutside(e) {
    const now: number = Date.now();
    const milliseconds = 10; /* clicking open was being picked up as an outside click even though the listener for it was added by the click itself */
    const realOutsideClick = now - this.popupAliveSince > milliseconds;
    if(realOutsideClick) {
      this.glossaryModalOpen = false;
    }
    // else, this was click from less than 10 millis ago, probably the popup-show-button
  }

  isPreviousClick() {
    let images: string[] = this.pinballMachineRecord.pinballMachine.images;

    if (images && this.imageNumberSelected === 0) {
      this.imageNumberSelected = images.length -1;
    } else {
      this.imageNumberSelected -=1;
    }
    this.focusedImageSrcString = images[this.imageNumberSelected];
  }

  isNextClick() {
    let images: string[] = this.pinballMachineRecord.pinballMachine.images;

    if (images && this.imageNumberSelected === images.length -1) {
      this.imageNumberSelected = 0;
    } else {
      this.imageNumberSelected +=1;
    }
    this.focusedImageSrcString = images[this.imageNumberSelected];
  }

  swipeHandler(e) {
    // if(e.deltaX > 0) {
    //   this.isPreviousClick();
    // } else {
    //   this.isNextClick();
    // }
  }

  panHandler(e) {
    let originalVelocity = e.velocityX;
    const velocityFactor = 8;
    const newVelocityNumber =  originalVelocity * velocityFactor;
    // let intVal = Math.floor(newVelocityNumber);

    if(newVelocityNumber > 1) {
      this.isPreviousClick();
    } else if (newVelocityNumber < -1){
      this.isNextClick();
    }
  }

  private setDefaultImg() {
    let images: string[] = this.pinballMachineRecord.pinballMachine.images;
    const defaultImg: string = '';

    if(images && images.length > 0) {
      this.focusedImageSrcString = this.pinballMachineRecord.pinballMachine.images[this.imageNumberSelected];
    } else {
      this.focusedImageSrcString = defaultImg;
    }
  }
}
