import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterComponent } from './filter/filter.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { Test1Component } from './test1/test1.component';

const routes: Routes = [
  {
    path:"", component:Test1Component
  },
  {
    path:"f", component:FilterComponent
  },
  {
    path:"l", component:LoginComponent
  },
  {
    path:"n", component:NavigationComponent,
    canActivate:[AuthGuard]
  },
  {
    path:"d",
    loadChildren:()=>import('./demomodule/demomodule.module').then((m)=>m.DemomoduleModule)
  },
  {
    path:"**", component:NotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
