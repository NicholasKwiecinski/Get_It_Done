import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AngularFireModule } from 'angularfire2';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';


const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDSV-SSg-AbPsGSLPtTLLKg5LsTwQVWb48",
  authDomain: "get-it-done-d2aca.firebaseapp.com",
  databaseURL: "https://get-it-done-d2aca.firebaseio.com",
  projectId: "get-it-done-d2aca",
  storageBucket: "get-it-done-d2aca.appspot.com",
  messagingSenderId: "1013357034106"
};

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    
  ]
})
export class AppModule {}
