import { Component, inject } from '@angular/core';
import { SignupComponent } from '../signup/signup.component';
import { AuthService } from '../../shared/service/auth.service';

@Component({
  selector: 'app-login',
  imports: [SignupComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private authService=inject(AuthService)
}
