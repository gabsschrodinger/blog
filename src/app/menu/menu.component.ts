import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  name = environment.name;
  picture = environment.picture;
  id = environment.id;

  constructor(
    private router: Router,
    public auth: AuthService
  ) { }

  ngOnInit() {
  }

  exit() {
    this.router.navigate(['/login']);
    environment.token = '';
    environment.name = '';
    environment.picture = '';
    environment.id = 0;
  }

}
