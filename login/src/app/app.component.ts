import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SignupComponent, LoginComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'login';
}
