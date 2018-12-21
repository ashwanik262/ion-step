import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Pedometer } from '@ionic-native/pedometer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  stepdata:any;
  numberOfSteps:number=0;
  goal:number=200;
  isStart:boolean=false;

  constructor(public navCtrl: NavController,public pedometer:Pedometer) {

  }

  check(){
    this.pedometer.isDistanceAvailable()
  .then((available: boolean) => console.log(available))
  .catch((error: any) => console.log(error));


  }

  start(){
    this.pedometer.startPedometerUpdates()
   .subscribe((data) => {
     this.isStart=true;
     this.stepdata=data;
     this.numberOfSteps=data.numberOfSteps;
     console.log(data);
     console.log(this.numberOfSteps);
   });
  }

   stop(){
     this.pedometer.stopPedometerUpdates();
     this.isStart=false;
   }

}
