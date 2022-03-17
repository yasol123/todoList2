import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MxgraphComponent } from './mxgraph/mxgraph.component';
import { RouteProtectionService } from './service/route-protection.service';
import { TodoComponent } from './todo/todo.component';
import { WelcomeComponent } from './welcome/welcome.component';

// welcome
const routes: Routes = [
  { path: '', component: LoginComponent}, //canActivate, RouteProtection
  { path: 'login', component: LoginComponent},
  // {path: 'mxgraph', component: MxgraphComponent},
  { path: 'welcome/:name', component: WelcomeComponent, canActivate:[RouteProtectionService]},
  {path: 'todos', component: ListTodosComponent, canActivate:[RouteProtectionService]},
  {path: 'logout', component: LogoutComponent, canActivate:[RouteProtectionService]},
  {path: 'todos/:id', component: TodoComponent, canActivate:[RouteProtectionService]},
  {path:'**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
