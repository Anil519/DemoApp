import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from './app.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  payload:any;
  title = 'Demo App';
  person={
  "name":"Anil",
  "gender":"M",
  "Role":"Developer"
  }
wish="Good Morning";
clients=["hello","hi","goodmorning"];
employee=["emp","manger","ceo"];
panelOpenState = false;
constructor(private serivce:AppService){

}
  ngOnInit(): void {

    this.get()
    
  }

show(p:any,  un:any){
  console.log(un)
  console.log(p)
}

submit(ppp:any){

  console.log("hello", ppp)

  ppp.setValue({
    'uname':"Anil",
    'pass':"passs"

  })

}

login=new FormGroup({

  uname:new FormControl("Anil",[Validators.required, Validators.minLength(4)]),
  pass:new FormControl("Anil", [Validators.required, Validators.minLength(5)])


})

click(){
  console.log(this.login.value)
  this.payload=this.login.value

this.serivce.save(this.payload).subscribe((res)=>{
  Swal.fire({
    icon: 'success',
  title: 'Your work has been saved',
  showConfirmButton: false,
  timer: 1500
  })
 

})}

get(){

  this.serivce.get().subscribe((res)=>{
  
  })
}

put(){
  this.serivce.updateUser(1,this.payload)
}

}
