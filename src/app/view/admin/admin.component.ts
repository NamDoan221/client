import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public isCollapsed: boolean;
  constructor(
    private router: Router,
    private toast: ToastrService,
    private auth: AuthService
  ) { 
    this.isCollapsed = false;
  }

  ngOnInit(): void {
  }

  async handlerLogout(): Promise<any> {
    try {
      const result = await this.auth.logout();
      localStorage.removeItem('access-token');
      this.router.navigate(['/login']);
    } catch (error) {
      this.toast.error('Thao tác thất bại!');
      console.log(error);
    }
  }

}
