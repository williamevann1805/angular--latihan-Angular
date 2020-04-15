import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent{
  angka1 : number;
  angka2 : number;
  hasil : number;
  GanjilKah : boolean = true;
  CountGanjil()
  {
    this.hasil = 1;
    this.angka1 = parseInt((document.getElementById("a")as HTMLInputElement).value);
    this.angka2 = parseInt((document.getElementById("b")as HTMLInputElement).value);
    
    this.hasil = Math.pow(this.angka1,this.angka2);

    if(this.hasil % 2 == 0)
    {
      this.GanjilKah = false;
    }
  }
}
