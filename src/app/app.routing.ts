import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'games',
    component: GamesComponent
  },
  {
    path: 'art',
    component: ArtComponent
  },
  {
    path: 'tech',
    component: TechComponent
  },
  {
    path: 'film',
    component: FilmComponent
  },
  {
    path: 'music',
    component: MusicComponent
  },
  {
    path: 'new',
    component: NewProjectComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'projects/:id',
    component: ProjectDetailComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
