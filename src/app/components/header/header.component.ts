import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.watchLogin().subscribe((isLoggedIn: boolean) => {
      this.isLoggedIn = isLoggedIn;
      console.log(this.isLoggedIn);
    })  
  }

  DashBoard() {
    this.authService.routeToDashboard();
  }


  Logout(){
    this.authService.logout();
  }

}
