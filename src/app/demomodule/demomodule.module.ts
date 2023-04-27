import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponent } from './demo/demo.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from  '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path:'', component:DemoComponent
  }
  
];
@NgModule({
  declarations: [
    DemoComponent
  ],
  imports:[
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
})
export class DemomoduleModule { }
