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
    this.isNextClick(event);
  }

  @HostListener('document:keydown.ArrowLeft', ['$event']) onLeftArrowKeydownHandler(event: KeyboardEvent) {
    this.isPreviousClick(event);
  }

  readonly base64: string = 'data:image/jpeg;base64, '
  constructor(private pinballMachineRecordService: PinballMachineRecordService) { }

  pinballMachineRecord: PinballMachineRecord;
  devOnly: boolean = true;

  title: string;
  ipdbNumber: string;

  focusedImageSrcString: string;
  images: string[];
  pushedToLeft: any[];

  imageNumberSelected: number = 0;

  glossaryModalOpen: boolean;

  ngOnInit() {
    // being dev only
    if (this.devOnly) {
      this.pinballMachineRecord = this.pinballMachineRecordService.getPinballMachine();
      this.glossaryModalOpen = true;
    }
    // end dev only
    
    this.images = this.pinballMachineRecord.pinballMachine.images;
    this.title = this.pinballMachineRecord.pinballMachine.title;
    this.ipdbNumber = this.pinballMachineRecord.ipdbNumber;
    this.pushedToLeft = new Array();
  }

  closeClicked() {
    this.glossaryModalOpen = false;
  }

  get uri(): string{
    return this.pinballMachineRecord.uri;
  }

  handleGlossaryClick(e: MouseEvent) {
    if(this.glossaryModalOpen === false) {
      this.glossaryModalOpen = true;
      e.stopPropagation();
    }
  }

  clickedOutside(e) {
    this.glossaryModalOpen = false;
  }

  isPreviousClick(event: Event) {
    if (event.stopPropagation) {event.stopPropagation();}
    this.loseFocus(this.imageNumberSelected);
    let images: string[] = this.pinballMachineRecord.pinballMachine.images;

    if (images && this.imageNumberSelected === 0) {
      this.imageNumberSelected = images.length -1;
    } else {
      this.imageNumberSelected -=1;
    }
  }

  isNextClick(event: Event) {
    if (event.stopPropagation) {event.stopPropagation();}
    this.loseFocus(this.imageNumberSelected);

    let images: string[] = this.pinballMachineRecord.pinballMachine.images;

    if (images && this.imageNumberSelected === images.length -1) {
      this.imageNumberSelected = 0;
    } else {
      this.imageNumberSelected +=1;
    }
  }

  loseFocus(n) {
    this.pushedToLeft.shift();
    this.pushedToLeft.push(n);
  }

  hasLeftTransition(index) {
    if(this.pushedToLeft.includes(index)) {
      return true;
    }
    return false;

  }

  focusedPosition(i) {
    if(i === this.imageNumberSelected){
      return true;
    }
  }

  panHandler(e) {
    let originalVelocity = e.velocityX;
    const velocityFactor = 8;
    const newVelocityNumber =  originalVelocity * velocityFactor;

    if(newVelocityNumber > 1) {
      this.isPreviousClick(e);
    } else if (newVelocityNumber < -1){
      this.isNextClick(e);
    }
  }

  generateId(i){
    return('box'+(i+1));
  }
}
