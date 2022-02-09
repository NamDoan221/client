/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { BidiModule } from '@angular/cdk/bidi';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzRateItemComponent } from './rate-item.component';
import { NzRateComponent } from './rate.component';
import * as ɵngcc0 from '@angular/core';
export class NzRateModule {
}
NzRateModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzRateModule });
NzRateModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzRateModule_Factory(t) { return new (t || NzRateModule)(); }, imports: [[BidiModule, CommonModule, NzIconModule, NzToolTipModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzRateModule, { declarations: function () { return [NzRateComponent, NzRateItemComponent]; }, imports: function () { return [BidiModule, CommonModule, NzIconModule, NzToolTipModule]; }, exports: function () { return [NzRateComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzRateModule, [{
        type: NgModule,
        args: [{
                exports: [NzRateComponent],
                declarations: [NzRateComponent, NzRateItemComponent],
                imports: [BidiModule, CommonModule, NzIconModule, NzToolTipModule]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0ZS5tb2R1bGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvcmF0ZS9yYXRlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFeEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQU9uRCxNQUFNLE9BQU8sWUFBWTtBQUFHO3dDQUwzQixRQUFRLFNBQUM7TUFDUixPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUMsa0JBQzFCLFlBQVksRUFBRSxDQUFDLGVBQWUsRUFBRSxtQkFBbUIsQ0FBQyxrQkFDcEQsT0FBTyxFQUFFLENBQUMsVUFBVSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsZUFBZSxDQUFDO0FBQ25FOzs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQmlkaU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOekljb25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xuaW1wb3J0IHsgTnpUb29sVGlwTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC90b29sdGlwJztcblxuaW1wb3J0IHsgTnpSYXRlSXRlbUNvbXBvbmVudCB9IGZyb20gJy4vcmF0ZS1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOelJhdGVDb21wb25lbnQgfSBmcm9tICcuL3JhdGUuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZXhwb3J0czogW056UmF0ZUNvbXBvbmVudF0sXG4gIGRlY2xhcmF0aW9uczogW056UmF0ZUNvbXBvbmVudCwgTnpSYXRlSXRlbUNvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtCaWRpTW9kdWxlLCBDb21tb25Nb2R1bGUsIE56SWNvbk1vZHVsZSwgTnpUb29sVGlwTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBOelJhdGVNb2R1bGUge31cbiJdfQ==