import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { CardModule } from 'src/app/shared/card/card.module';
import { IconsProviderModule } from 'src/app/shared/icon-ant/icons-provider.module';
import { AccountComponent } from './account.component';
import { AccountRoutingModule } from './account.routing';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    NzInputModule,
    NzUploadModule,
    NzModalModule,
    NzButtonModule,
    IconsProviderModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    NzImageModule
  ],
  declarations: [AccountComponent]
})
export class AccountModule { }
