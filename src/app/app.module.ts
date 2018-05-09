import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GamesComponent } from './games/games.component';
import { MusicComponent } from './music/music.component';
import { ArtComponent } from './art/art.component';
import { FilmComponent } from './film/film.component';
import { TechComponent } from './tech/tech.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { AdminComponent } from './admin/admin.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { FundingComponent } from './funding/funding.component';

export const firebaseConfig = {
  		apiKey: masterFirebaseConfig.apiKey,
  		authDomain: masterFirebaseConfig.authDomain,
  		databaseURL: masterFirebaseConfig.databaseURL,
  		storageBucket: masterFirebaseConfig.storageBucket
	};


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GamesComponent,
    MusicComponent,
    ArtComponent,
    FilmComponent,
    TechComponent,
    NewProjectComponent,
    AdminComponent,
    EditProjectComponent,
    ProjectDetailComponent,
    FundingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
