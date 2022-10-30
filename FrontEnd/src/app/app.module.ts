import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoapComponent } from './components/logoap/logoap.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutComponent } from './components/about/about.component';
import { ExpComponent } from './components/exp/exp.component';
import { EduComponent } from './components/edu/edu.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HsskillsComponent } from './components/hsskills/hsskills.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component'
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './components/exp/new-experiencia.component';
import { EditExperienciaComponent } from './components/exp/edit-experiencia.component';
import { NeweducacionComponent } from './components/edu/neweducacion.component';
import { EditeducacionComponent } from './components/edu/editeducacion.component';
import { EditSkillComponent } from './components/hsskills/edit-skill.component';
import { NewSkillComponent } from './components/hsskills/new-skill.component';
import { EditaboutComponent } from './components/about/editabout.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoapComponent,
    BannerComponent,
    AboutComponent,
    ExpComponent,
    EduComponent,
    HsskillsComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    EditSkillComponent,
    NewSkillComponent,
    EditaboutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()), 
  ],
  providers: [
    interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
