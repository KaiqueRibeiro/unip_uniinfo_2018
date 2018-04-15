// IMPORTAÇÕES E DECLARAÇÕES DOS COMPONENTES


//  IMPORTANTE A INSTALAÇÃO DOS MODULOS DO FIREBASE:
//  npm install firebase angularfire2 --save

//  IMPORTANTE A INSTALAÇÃO DO MODULO DE IMAGENS:
//  npm install --save ionic-img-viewer

//  IMPORTAÇÕES PADRÕES DO SISTEMA
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//  IMPORTAÇÃO DO MODULO DE IMAGEM
import { IonicImageViewerModule } from 'ionic-img-viewer';

//  IMPORTAÇÃO DAS PAGINAS
import { EventosPage } from '../pages/eventos/eventos';
import { CursosPage } from '../pages/cursos/cursos';
import { LnoturnoPage } from '../pages/lnoturno/lnoturno';
import { LmatitunoPage } from '../pages/lmatituno/lmatituno';
import { CinfoPage } from '../pages/cinfo/cinfo';
import { CinfoPageModule } from '../pages/cinfo/cinfo.module';
import { LinfoPage } from '../pages/linfo/linfo';
import { LinfoPageModule } from '../pages/linfo/linfo.module';
import { LocaisPage } from '../pages/locais/locais';
import { InfoPage } from '../pages/info/info';

//  IMPORTAÇÃO DA ABA INFERIOR
import { TabsPage } from '../pages/tabs/tabs';

//   IMPORTAÇÃO DOS PROVIDERS
import { EventosProvider } from '../providers/eventos/eventos';
import { CursosProvider } from '../providers/cursos/cursos';
import { LocaisProvider } from '../providers/locais/locais';

//  IMPORTAÇÃO DA SPLASH SCREEN E DO STATUS BAR
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//  IMPORTAÇÃO DOS MODULOS DO BANCO DE DADOS
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, AngularFireDatabaseModule } from 'angularfire2/database';

//  VARIÁVEL DE IDENTIFICAÇÃO DO DB (EXCLUSIVA)
const firebaseConfig = {
  apiKey: "AIzaSyDhqijPVnyH4dHbP8YDKC4ZOM4L9_juCNk",
  authDomain: "uniinfo-database-full.firebaseapp.com",
  databaseURL: "https://uniinfo-database-full.firebaseio.com",
  projectId: "uniinfo-database-full",
  storageBucket: "uniinfo-database-full.appspot.com",
  messagingSenderId: "613710825075"
};

//  DECLARAÇÕES DOS RECURSOS E PÁGINAS
@NgModule({
  declarations: [
    MyApp,

    EventosPage,

    CursosPage,
    LnoturnoPage,
    LmatitunoPage,

    LocaisPage,
    InfoPage,
    
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      platforms: {
        ios: {
          backButtonText: ''
        }
      }
    }),

    IonicImageViewerModule,

    CinfoPageModule,
    LinfoPageModule,

    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,

    EventosPage,

    CursosPage,
    LnoturnoPage,
    LmatitunoPage,
    CinfoPage,
    
    LocaisPage,
    InfoPage,
    LinfoPage,

    TabsPage
  ],

//  DECLARAÇÃO DOS PROVIDERS
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},

    EventosProvider,
    CursosProvider,
    LocaisProvider
  ]
})
export class AppModule {}