import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { TestPipe } from './test.pipe';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutComponent } from './layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { Test1Component } from './test1/test1.component';
import { HttpClientModule } from '@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import { HeaderComponent } from './header/header.component';
import {MatCardModule} from '@angular/material/card';
import { PaginationComponent } from './pagination/pagination.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { CustomTooltipComponent } from './custom-tooltip/custom-tooltip.component';
import { CaptchaComponent } from './captcha/captcha.component';
import { QRCodeModule } from 'angularx-qrcode';




@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    TestPipe,
    NavigationComponent,
    LayoutComponent,
    NotfoundComponent,
    LoginComponent,
    TestComponent,
    Test1Component,
    HeaderComponent,
    PaginationComponent,
    CustomTooltipComponent,
    CaptchaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatMenuModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatExpansionModule,
    MatCardModule,
    MatPaginatorModule,
    QRCodeModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
