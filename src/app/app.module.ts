import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FoodMenuComponent } from './food-menu/food-menu.component';
import { WorkersListComponent } from './workers-list/workers-list.component';
import { OrderModalComponent } from './order-modal/order-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FoodMenuComponent,
    WorkersListComponent,
    OrderModalComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
