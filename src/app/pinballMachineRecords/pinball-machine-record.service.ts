import { Injectable } from '@angular/core';
import { PinballMachine, PinballMachineRecord, PhotoRecord } from '../view-pinball-machine-record/model/pinball-machine-record.model';

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
      let bornOn = new Date(1981, 10);
      let notableFeaturesStr = `	Flippers (6), Pop bumpers (6), Slingshots (3), 5-bank drop targets (1), 4-bank drop targets (2), 3-bank drop targets (1), Kick-out holes (2), Kick target (1), Horseshoe lane (1), Spinning target (1), Rollunder (1), Cellar hole (1), Right outlane ball detour gate. Score display in playfield. Backglass animation (rotating disc, non-export only). First machine to offer a lower playfield sloped away from the player with the flippers at the backbox end. Multiball and speech (non-export only).`;
      let notableFeaturesListStr = notableFeaturesStr.split(',');
      let notes: string = `'Black Hole' was considered a high-maintenance game when released and wasn't popular with operators as a result. The multiball is one of the hardest around to get but rewarding when you do as it is possible to have 3 balls going in total on two different levels.

      Speech generated by a Votrax SC-01.
      
      A Hollywood movie "The Black Hole" came out in 1979.
      
      Click here for an interesting article with photographs about the origins and prototypes for Black Hole.`;
      let uri = 'https://www.amazon.com/gp/product/0764337858/ref=as_li_tl?ie=UTF8'
        +'&camp=1789&creative=390957&creativeASIN=0764337858&linkCode=as2&tag='
        +'theinternetpi-20&linkId=Z72T2JLDLWNKE4TA';

      let photoRecord: PhotoRecord = {linkDisplayName: 'The Complete Pinball Book', uri:''}

      blackHoleMachine = {title: 'Black Hole', images: images, manufacturer: `D. Gottlieb & Company, a Columbia Pictures Industries Company (1977-1983)
        [Trade Name: Gottlieb]`, dateOfManufacturer: bornOn, modelNumber:'668', mpu:'Gottlieb System 80 \n Solid State Electronis (SS)', specialty:['Widebdy', 'Mechanical Backbox Animation'], 
        notableFeatures:notableFeaturesListStr, designBy:['John Buras', 'Shing Lam'], artBy: ['Terry Doerzaph'], notes: notes,
      };
      
      //
      this.blackHoleRecord = { pinballMachine: blackHoleMachine, ipdbNumber: '307', averageFunRating: '7.8'
        ,serialNumberDatabase: '	View at The Internet Pinball Serial Number Database (IPSND.net)', production: 8774
        ,photosIn: [photoRecord]
        };
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
