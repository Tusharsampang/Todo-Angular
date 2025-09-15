import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { TodosComponent } from './components/todos/todos.component';
import { authguradGuard } from './shared/guard/authgurad.guard';

export const routes: Routes = [
      {
        path:'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path:"todos",
        component:TodosComponent,
        canActivate:[authguradGuard]
    }
];
