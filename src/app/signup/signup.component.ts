import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User = new User;
  confirmPass: string
  userType: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0);
  }

  confirmPassword(event: any) {
    this.confirmPass = event.target.value;
  }

  typeUser(event: any) {
    this.userType = event.target.value;
  }

  register() {
    this.user.type = this.userType;

    if(this.user.password != this.confirmPass) {
      alert('Password field and confirm password field are different. Please, insert the same value in both fields!');
    } else {
      this.authService.signup(this.user).subscribe((resp: User) => {
        this.user = resp;
        this.router.navigate(['/login']);
        alert('User registered!');
      })
    }
  }
}
