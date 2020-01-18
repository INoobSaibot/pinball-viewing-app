import { Component, OnInit, Input, HostListener, Directive } from '@angular/core';
import { PinballMachineRecordService } from '../pinballMacineRecords/pinball-machine-record.service';
import { PinballMachine, PinballMachineRecord } from '../view-pinball-machine-record/model/pinball-machine-record.model';
import 'hammerjs';

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

  private title: string;
  private focusedImageSrcString: string;
  private imageNumberSelected: number = 0;

  ngOnInit() {
    // being dev only
    if (this.devOnly) {
      this.pinballMachineRecord = this.pinballMachineRecordService.getPinballMachine();
    }
    // end dev only
    let images: string[] = this.pinballMachineRecord.pinballMachine.images;

    this.title = this.pinballMachineRecord.pinballMachine.title;
    if(images && images.length > 0) {
      this.focusedImageSrcString = this.pinballMachineRecord.pinballMachine.images[this.imageNumberSelected];
    }

  }

  get uri(): string{
    return this.pinballMachineRecord.uri;
  }

  private getBase64Image(index): string {
    return this.base64 + this.pinballMachineRecord.pinballMachine.images[index];
  }

  private isPreviousClick() {
    let images: string[] = this.pinballMachineRecord.pinballMachine.images;
    
    if (images && this.imageNumberSelected === 0) {
      this.imageNumberSelected = images.length -1;
    } else {
      this.imageNumberSelected -=1;
    }
    this.focusedImageSrcString = images[this.imageNumberSelected];
  }

  private isNextClick() {
    let images: string[] = this.pinballMachineRecord.pinballMachine.images;
    
    if (images && this.imageNumberSelected === images.length -1) {
      this.imageNumberSelected = 0;
    } else {
      this.imageNumberSelected +=1;
    }
    this.focusedImageSrcString = images[this.imageNumberSelected];
  }

  private swipeHandler(e) {
    // if(e.deltaX > 0) {
    //   this.isPreviousClick();
    // } else {
    //   this.isNextClick();
    // }
  }

  private panHandler(e) {
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
}
