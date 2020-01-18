import { Injectable } from '@angular/core';
import { PinballMachine, PinballMachineRecord } from '../view-pinball-machine-record/model/pinball-machine-record.model'

@Injectable({
  providedIn: 'root'
})
export class PinballMachineRecordService {

  constructor() {
    this.init();
   }

   private blackHoleRecord: PinballMachineRecord;

  getPinballMachine() {
    return this.blackHoleRecord;
  }

  init() {
      let blackHoleMachine: PinballMachine;
      let images: string[] = this.getMockImages();
      blackHoleMachine = {title: 'Black Hole', images: images};
      
      //
      this.blackHoleRecord = {pinballMachine: blackHoleMachine, ipdbNumber: '307'};
    }

    private getMockImages(): string[] {
      let images: string[] = new Array;
      
      images.push('https://www.ipdb.org/images/307/image-1.jpg');
      images.push('https://www.ipdb.org/images/307/307f1.jpg');
      images.push('https://www.ipdb.org/images/307/307f2.jpg');

      images.push('https://www.ipdb.org/images/307/image-2.jpg');
      images.push('https://www.ipdb.org/images/307/image-3.jpg');
      images.push('https://www.ipdb.org/images/307/image-4.jpg');
      images.push('https://www.ipdb.org/images/307/image-5.jpg');

      images.push('https://www.ipdb.org/images/307/image-6.jpg');
      images.push('https://www.ipdb.org/images/307/image-7.jpg');
      images.push('https://www.ipdb.org/images/307/image-8.jpg');
      images.push('https://www.ipdb.org/images/307/image-9.jpg');
      images.push('https://www.ipdb.org/images/307/image-10.jpg');

      images.push('https://www.ipdb.org/images/307/image-11.jpg');
      images.push('https://www.ipdb.org/images/307/image-12.jpg');
      images.push('https://www.ipdb.org/images/307/image-13.jpg');
      images.push('https://www.ipdb.org/images/307/image-14.jpg');
      images.push('https://www.ipdb.org/images/307/image-15.jpg');

      images.push('https://www.ipdb.org/images/307/image-16.jpg');
      images.push('https://www.ipdb.org/images/307/image-17.jpg');
      images.push('https://www.ipdb.org/images/307/image-18.jpg');
      images.push('https://www.ipdb.org/images/307/image-19.jpg');
      images.push('https://www.ipdb.org/images/307/image-20.jpg');
      
      images.push('https://www.ipdb.org/images/307/image-21.jpg');
      images.push('https://www.ipdb.org/images/307/image-22.jpg');
      images.push('https://www.ipdb.org/images/307/image-23.jpg');
      images.push('https://www.ipdb.org/images/307/image-24.jpg');
      images.push('https://www.ipdb.org/images/307/image-25.jpg');

      images.push('https://www.svgrepo.com/show/57845/pinball.svg');
      images.push('https://www.svgrepo.com/show/79244/pinball-game.svg');
      images.push('https://i.etsystatic.com/17857814/r/il/4b7e9e/1986145269/il_794xN.1986145269_i6f3.jpg');

      return images;
    }
 
}
