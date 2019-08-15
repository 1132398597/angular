import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetalComponent} from './hero-detal/hero-detal.component';

const routes:Routes=[
  {path:"",redirectTo:"/dashboard",pathMatch:'full'},
  {path:"heroes",component:HeroesComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"detail/:id",component:HeroDetalComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
