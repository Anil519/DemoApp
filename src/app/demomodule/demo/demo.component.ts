import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  constructor(private fb:FormBuilder){}
  login=this.fb.group({
     uname:["Anil",Validators.required],
     password:["123", Validators.required]
   })

   submit(){
    console.log(this.login)
   }
}
