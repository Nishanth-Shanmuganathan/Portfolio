import { ProjectsComponent } from './pages/projects/projects.component';
import { AchievementsComponent } from './pages/achievements/achievements.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { AcademicsComponent } from './pages/academics/academics.component';
import { AboutComponent } from './pages/about/about.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AboutComponent
  },
  {
    path: 'academics',
    component: AcademicsComponent,
  },
  {
    path: 'skills',
    component: SkillsComponent,
  },
  {
    path: 'achievements',
    component: AchievementsComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  }, {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
