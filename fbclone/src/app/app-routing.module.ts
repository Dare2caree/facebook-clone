import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HomeModule } from './components/home/home.module';
import { FbgGuard } from './guards/fbg.guard';

const routes: Routes = [
{path:'',
component:HomeComponent,
// loadChildren:()=>import('./components/home/home.module').
// then((m:{HomeModule:HomeModule}) => { m.HomeModule}),
canActivate:[FbgGuard]


},
  {path:'login',component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
