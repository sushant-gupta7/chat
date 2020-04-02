import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path:'chat',component:AppComponent},
  {path:'', redirectTo:'chat', pathMatch: 'full'},
  // {pathMatch:'**',redirectTo:'chat'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
