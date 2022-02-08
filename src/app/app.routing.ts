import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'product' },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./sign-up/sign-up.module').then((m) => m.HnSignUpModule),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('./view/user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./view/user/cart/cart.module').then((m) => m.CartModule),
  },
  {
    path: 'order',
    loadChildren: () =>
      import('./view/user/order/order.module').then((m) => m.OrderModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./view/admin/admin.module').then((m) => m.AdminModule),
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
