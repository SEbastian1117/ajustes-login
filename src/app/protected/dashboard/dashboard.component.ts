import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/pets/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  get user(){    
    return `Welcome ${this.authService.user.name} your ID is ${this.authService.user.uid} and your email is ${this.authService.user.email}`
  }

  constructor(private router: Router,
              private authService: AuthService) { }

  logout(){
    this.router.navigateByUrl('/royal-business/login')
    this.authService.logout()
  }
}
