/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { BidiModule } from '@angular/cdk/bidi';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzRadioButtonDirective } from './radio-button.directive';
import { NzRadioGroupComponent } from './radio-group.component';
import { NzRadioComponent } from './radio.component';
import * as ɵngcc0 from '@angular/core';
export class NzRadioModule {
}
NzRadioModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzRadioModule });
NzRadioModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzRadioModule_Factory(t) { return new (t || NzRadioModule)(); }, imports: [[BidiModule, CommonModule, FormsModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzRadioModule, { declarations: function () { return [NzRadioComponent, NzRadioButtonDirective, NzRadioGroupComponent]; }, imports: function () { return [BidiModule, CommonModule, FormsModule]; }, exports: function () { return [NzRadioComponent, NzRadioButtonDirective, NzRadioGroupComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzRadioModule, [{
        type: NgModule,
        args: [{
                imports: [BidiModule, CommonModule, FormsModule],
                exports: [NzRadioComponent, NzRadioButtonDirective, NzRadioGroupComponent],
                declarations: [NzRadioComponent, NzRadioButtonDirective, NzRadioGroupComponent]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8ubW9kdWxlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL3JhZGlvL3JhZGlvLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7QUFPckQsTUFBTSxPQUFPLGFBQWE7QUFBRzt5Q0FMNUIsUUFBUSxTQUFDO0tBQ1IsT0FBTyxFQUFFLENBQUMsVUFBVSxFQUFFLFlBQVksRUFBRSxXQUFXLENBQUMsa0JBQ2hELE9BQU8sRUFBRSxDQUFDLGdCQUFnQixFQUFFLHNCQUFzQixFQUFFLHFCQUFxQixDQUFDLGtCQUMxRSxZQUFZLEVBQUUsQ0FBQztTQUFnQixFQUFFLHNCQUFzQixFQUFFLHFCQUFxQixDQUFDLGNBQ2hGOzs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgQmlkaU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IE56UmFkaW9CdXR0b25EaXJlY3RpdmUgfSBmcm9tICcuL3JhZGlvLWJ1dHRvbi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTnpSYWRpb0dyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9yYWRpby1ncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpSYWRpb0NvbXBvbmVudCB9IGZyb20gJy4vcmFkaW8uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0JpZGlNb2R1bGUsIENvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGVdLFxuICBleHBvcnRzOiBbTnpSYWRpb0NvbXBvbmVudCwgTnpSYWRpb0J1dHRvbkRpcmVjdGl2ZSwgTnpSYWRpb0dyb3VwQ29tcG9uZW50XSxcbiAgZGVjbGFyYXRpb25zOiBbTnpSYWRpb0NvbXBvbmVudCwgTnpSYWRpb0J1dHRvbkRpcmVjdGl2ZSwgTnpSYWRpb0dyb3VwQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBOelJhZGlvTW9kdWxlIHt9XG4iXX0=