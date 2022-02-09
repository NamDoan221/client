/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { BidiModule } from '@angular/cdk/bidi';
import { LayoutModule } from '@angular/cdk/layout';
import { PlatformModule } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzColDirective } from './col.directive';
import { NzRowDirective } from './row.directive';
import * as ɵngcc0 from '@angular/core';
export class NzGridModule {
}
NzGridModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzGridModule });
NzGridModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzGridModule_Factory(t) { return new (t || NzGridModule)(); }, imports: [[BidiModule, CommonModule, LayoutModule, PlatformModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzGridModule, { declarations: function () { return [NzColDirective, NzRowDirective]; }, imports: function () { return [BidiModule, CommonModule, LayoutModule, PlatformModule]; }, exports: function () { return [NzColDirective, NzRowDirective]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzGridModule, [{
        type: NgModule,
        args: [{
                declarations: [NzColDirective, NzRowDirective],
                exports: [NzColDirective, NzRowDirective],
                imports: [BidiModule, CommonModule, LayoutModule, PlatformModule]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5tb2R1bGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvZ3JpZC9ncmlkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFPakQsTUFBTSxPQUFPLFlBQVk7QUFBRzt3Q0FMM0IsUUFBUSxTQUFDO01BQ1IsWUFBWSxFQUFFLENBQUMsY0FBYyxFQUFFLGNBQWMsQ0FBQyxrQkFDOUMsT0FBTyxFQUFFLENBQUMsY0FBYyxFQUFFLGNBQWMsQ0FBQyxrQkFDekMsT0FBTyxFQUFFLENBQUMsVUFBVSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsY0FBYyxDQUFDO1NBQ2xFOzs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQmlkaU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IExheW91dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9sYXlvdXQnO1xuaW1wb3J0IHsgUGxhdGZvcm1Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56Q29sRGlyZWN0aXZlIH0gZnJvbSAnLi9jb2wuZGlyZWN0aXZlJztcbmltcG9ydCB7IE56Um93RGlyZWN0aXZlIH0gZnJvbSAnLi9yb3cuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTnpDb2xEaXJlY3RpdmUsIE56Um93RGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW056Q29sRGlyZWN0aXZlLCBOelJvd0RpcmVjdGl2ZV0sXG4gIGltcG9ydHM6IFtCaWRpTW9kdWxlLCBDb21tb25Nb2R1bGUsIExheW91dE1vZHVsZSwgUGxhdGZvcm1Nb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIE56R3JpZE1vZHVsZSB7fVxuIl19