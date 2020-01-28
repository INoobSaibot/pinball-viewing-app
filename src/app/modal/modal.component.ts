import { Component, OnInit, Input, ElementRef, Output, EventEmitter } from '@angular/core';
import { PinballMachineRecord } from '../view-pinball-machine-record/model/pinball-machine-record.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent implements OnInit {

  constructor(private el: ElementRef) { }

  @Input() pinballMachineRecord: PinballMachineRecord;
  @Output() closeClicked = new EventEmitter;
  items: any;
  hidden: boolean;

  ngOnInit() {
    this.items = this.toArray(this.pinballMachineRecord);
    this.hidden = false;
  }

  private toArray(obj: any): any {
    let arr = new Array;

    for (let key in obj) {
      arr.push(ModalComponent.fieldName(key, obj))
    }
    return arr;
  }

  private static fieldName(key: string, obj:any): string {
    let outStr: string = '';

    outStr = `${key} --> ${obj[key]}`;

    return outStr;
  }

  close() {
    //this.hidden = true;
    this.closeClicked.emit();
  }

}
