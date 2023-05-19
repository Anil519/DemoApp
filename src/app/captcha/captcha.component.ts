import { Component, OnInit } from '@angular/core';
import * as QRCode from 'qrcode-generator';

@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.css']
})
export class CaptchaComponent implements OnInit {
   qrCodeElement: any;
  qrCodeData:any
  myVariable:any;
  char:any;
  captch:any;
  constructor() {
    this.qrCodeData = 'Your QR Code Data';
  }

  ngOnInit(): void {
    this.captchtext()
  }
 

  captchtext(){
    let captch:any=" "
    let char="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()";
    for(let i=0; i<=7; i++){
    let index = Math.floor(Math.random()*char.length)
    captch= captch + char[index]
    this.captch=captch.trim();
  }
  console.log(Math.floor( Math.random()*25))
  }

  validate(){
    console.log("test", this.myVariable)
    console.log("capt", this.captch)
    if(this.myVariable!=null ||  this.myVariable!=undefined)
    {

      if(this.captch===this.myVariable)
      {
        alert("captch is validated")
      }
      else{
        alert("captch is not valid")
      }
    }
    else{
      alert("empty not allowed")
    }
  }


  

}
