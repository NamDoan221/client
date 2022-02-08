import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IconsProviderModule } from 'src/app/shared/icon-ant/icons-provider.module';
import { CardModule } from 'src/app/shared/card/card.module';
import { ProductListComponent } from './product-list.component';
import { ProductListRoutingModule } from './product-list.routing';
import { ProductItemComponent } from './item/item.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { MsFormatNumberPipeModule } from 'src/app/shared/pipes/format-number.pipe';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';

@NgModule({
  imports: [
    CommonModule,
    NzInputModule,
    NzUploadModule,
    NzModalModule,
    NzButtonModule,
    IconsProviderModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    ProductListRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    NzBreadCrumbModule,
    NzSpinModule,
    NzAvatarModule,
    MsFormatNumberPipeModule
  ],
  declarations: [ProductListComponent, ProductItemComponent]
})
export class ProductListModule { }
