import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditaboutComponent } from './components/about/editabout.component';
import { EditeducacionComponent } from './components/edu/editeducacion.component';
import { NeweducacionComponent } from './components/edu/neweducacion.component';
import { EditExperienciaComponent } from './components/exp/edit-experiencia.component';
import { NewExperienciaComponent } from './components/exp/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { EditSkillComponent } from './components/hsskills/edit-skill.component';
import { NewSkillComponent } from './components/hsskills/new-skill.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'nuevaexp', component:NewExperienciaComponent},
  {path: 'editexp/:id', component: EditExperienciaComponent},
  {path: 'nuevaedu', component: NeweducacionComponent},
  {path: 'editedu/:id', component: EditeducacionComponent},
  {path: 'newskill', component: NewSkillComponent},
  {path: 'editskill/:id', component: EditSkillComponent},
  {path: 'editabout/:id', component: EditaboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
