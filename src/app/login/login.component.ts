import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: '',
    password: ''
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  constructor(private authService: AuthService, private storageService:
    StorageService, private router: Router, private route: ActivatedRoute,) { }
  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }
  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: data => {
        if (data.length === 1) {
          console.log(data)
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.router.navigate(['/admin-dashboard']);
          // this.storageService.saveUser(data);
        } else if (data.length === 0) {
          alert('Login failed')
        }

        // this.roles = this.storageService.getUser().roles;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }
  reloadPage(): void {
    window.location.reload();
  }
}

// import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../_services/auth.service';
// import { TokenStorageService } from '../_services/token-storage.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   form: any = {
//     username: null,
//     password: null
//   };
//   isLoggedIn = false;
//   isLoginFailed = false;
//   errorMessage = '';
//   roles: string[] = [];
//   constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

//   ngOnInit(): void {
//     if (this.tokenStorage.getToken()) {
//       this.isLoggedIn = true;
//       this.roles = this.tokenStorage.getUser().roles;
//   }
//   }
//   GETDbUser(): void {
//     const { username, password } = this.form;
//     this.authService.login(username, password).subscribe(
//       data => {
//         this.tokenStorage.saveToken(data.accessToken);
//         this.tokenStorage.saveUser(data);
//         this.isLoginFailed = false;
//         this.isLoggedIn = true;
//         this.roles = this.tokenStorage.getUser().roles;
//         this.reloadPage();
//       },
//       err => {
//         this.errorMessage = err.error.message;
//         this.isLoginFailed = true;
//       }
//     );
//   }
//   reloadPage(): void {
//     window.location.reload();
//   }
// }
