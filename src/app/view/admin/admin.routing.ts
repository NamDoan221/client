import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserCanActive } from 'src/app/shared/services/auth.service';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [UserCanActive],
    component: AdminComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'users' },
      {
        path: 'users',
        loadChildren: () =>
          import('./user-management/user-management.module').then((m) => m.UserManagementModule),
      },
      {
        path: 'products',
        loadChildren: () =>
          import('./products/products.module').then((m) => m.ProductsModule),
      },
      {
        path: 'category',
        loadChildren: () =>
          import('./category/category.module').then((m) => m.CategoryModule),
      },
      {
        path: 'order',
        loadChildren: () =>
          import('./order/order.module').then((m) => m.OrderModule),
      },
      {
        path: 'me',
        loadChildren: () =>
          import('./account/account.module').then((m) => m.AccountModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
