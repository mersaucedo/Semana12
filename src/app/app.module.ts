import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './template/contact.component';
import { ContactReactiveComponent } from './contact-reactive/contact-reactive.component';


@NgModule({
    declarations: [
        AppComponent,
        ContactComponent,
        ContactReactiveComponent,
        
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule
       
    ]
})
export class AppModule { }
