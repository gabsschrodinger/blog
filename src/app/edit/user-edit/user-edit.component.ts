import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User = new User();
  userId: number;
  confirmPass: string;
  userType: string;

  constructor(
    public auth: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

    window.scroll(0, 0);

    if(environment.token == '') {
      /* alert('Session expired!'); */
      this.router.navigate(['/login']);
    }

    this.userId = this.route.snapshot.params['id'];
    this.findByIdUser(this.userId);
  }

  confirmPassword(event: any) {
    this.confirmPass = event.target.value;
  }

  typeUser(event: any) {
    this.userType = event.target.value;
  }

  updateUser() {
    this.user.type = this.userType;

    if(this.user.password != this.confirmPass) {
      alert('Password field and confirm password field are different. Please, insert the same value in both fields!');
    } else {
      this.auth.signup(this.user).subscribe((resp: User) => {
        this.user = resp;
        alert('User updated!');
        environment.token = '';
        this.router.navigate(['/login']);
      })
    }
  }

  findByIdUser(id: number) {
    this.auth.getByIdUser(id).subscribe((resp: User) => {
      this.user = resp;
    })
  }

}
