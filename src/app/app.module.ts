import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {environment} from '../environments/environment';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {LoginComponent} from './login.component';
import { FirebaseService } from './firebase.service';


@NgModule({
  imports:      [ 
    BrowserModule,
    HttpClientModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase, 'firebase-workshop'),
    AngularFireAuthModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    LoginComponent
  ],
  providers: [FirebaseService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
