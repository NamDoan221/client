import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { IconsProviderModule } from 'src/app/shared/icon-ant/icons-provider.module';
import { MsFormatNumberPipeModule } from 'src/app/shared/pipes/format-number.pipe';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user.routing';

@NgModule({
  imports: [
    CommonModule,
    IconsProviderModule,
    UserRoutingModule,
    NzLayoutModule,
    NzSpinModule,
    NzAvatarModule,
    MsFormatNumberPipeModule
  ],
  declarations: [UserComponent]
})
export class UserModule { }
