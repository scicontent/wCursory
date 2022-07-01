import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { StorageService } from 'src/app/_services/storage.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AuthService, private storageService: StorageService, private router:Router) { }

  ngOnInit(): void {
  }
  // logout(): void {
  //   this.auth.logout().subscribe({
  //     next: res => {
  //       console.log(res);
  //       this.storageService.clean();
  //     },
  //     error: err => {
  //       console.log(err);
  //     }
  //   });

  //   window.location.reload();
  // }
  logout() : void {
    this.storageService.clean()
    this.router.navigate(['login'])
  }
}
