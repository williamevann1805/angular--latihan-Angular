import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  angka1 = parseInt((document.getElementById("a")as HTMLInputElement).value);
  angka2 = parseInt((document.getElementById("b")as HTMLInputElement).value);

  countGanjil()
  {
    var hasil = Math.pow(this.angka1, this.angka2);
    alert(hasil);   
  }
}