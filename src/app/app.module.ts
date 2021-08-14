import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyApVynxRi0kTpXVlGeY-Aiue9VFbaCQMkQ",
      authDomain: "optimal-chimera-286212.firebaseapp.com",
      projectId: "optimal-chimera-286212",
      storageBucket: "optimal-chimera-286212.appspot.com",
      messagingSenderId: "574814024132",
      appId: "1:574814024132:web:8522caa76e68cfcd1ab491",
      measurementId: "G-N0TM44WF6C"
    }),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
