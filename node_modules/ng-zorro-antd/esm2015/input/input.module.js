/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { BidiModule } from '@angular/cdk/bidi';
import { PlatformModule } from '@angular/cdk/platform';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAutosizeDirective } from './autosize.directive';
import { NzInputGroupSlotComponent } from './input-group-slot.component';
import { NzInputGroupComponent, NzInputGroupWhitSuffixOrPrefixDirective } from './input-group.component';
import { NzInputDirective } from './input.directive';
import { NzTextareaCountComponent } from './textarea-count.component';
import * as ɵngcc0 from '@angular/core';
export class NzInputModule {
}
NzInputModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzInputModule });
NzInputModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzInputModule_Factory(t) { return new (t || NzInputModule)(); }, imports: [[BidiModule, CommonModule, NzIconModule, PlatformModule, NzOutletModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzInputModule, { declarations: function () { return [NzTextareaCountComponent,
        NzInputDirective,
        NzInputGroupComponent,
        NzAutosizeDirective,
        NzInputGroupSlotComponent,
        NzInputGroupWhitSuffixOrPrefixDirective]; }, imports: function () { return [BidiModule, CommonModule, NzIconModule, PlatformModule, NzOutletModule]; }, exports: function () { return [NzTextareaCountComponent,
        NzInputDirective,
        NzInputGroupComponent,
        NzAutosizeDirective,
        NzInputGroupWhitSuffixOrPrefixDirective]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzInputModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    NzTextareaCountComponent,
                    NzInputDirective,
                    NzInputGroupComponent,
                    NzAutosizeDirective,
                    NzInputGroupSlotComponent,
                    NzInputGroupWhitSuffixOrPrefixDirective
                ],
                exports: [
                    NzTextareaCountComponent,
                    NzInputDirective,
                    NzInputGroupComponent,
                    NzAutosizeDirective,
                    NzInputGroupWhitSuffixOrPrefixDirective
                ],
                imports: [BidiModule, CommonModule, NzIconModule, PlatformModule, NzOutletModule]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQubW9kdWxlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL2lucHV0L2lucHV0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRWxELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSx1Q0FBdUMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3JELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDOztBQW9CdEUsTUFBTSxPQUFPLGFBQWE7QUFBRzt5Q0FsQjVCLFFBQVEsU0FBQztLQUNSLFlBQVksRUFBRSxzQkFDWix3QkFBd0Isc0JBQ3hCLGdCQUFnQixzQkFDaEIscUJBQXFCLHNCQUNyQixtQkFBbUIsc0JBQ25CO2dCQUF5QixzQkFDekIsdUNBQXVDLGtCQUN4QyxrQkFDRCxPQUFPLEVBQUUsc0JBQ1Asd0JBQXdCO21CQUN4QjtTQUFnQjtBQUNoQixxQkFBcUI7Y0FDckIsbUJBQW1CO29CQUNuQix1Q0FBdUMsa0JBQ3hDLGtCQUNELE9BQU8sRUFBRSxDQUFDLFVBQVUsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxjQUFjLENBQUMsY0FDbEY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IEJpZGlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQgeyBQbGF0Zm9ybU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpPdXRsZXRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvb3V0bGV0JztcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XG5cbmltcG9ydCB7IE56QXV0b3NpemVEaXJlY3RpdmUgfSBmcm9tICcuL2F1dG9zaXplLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOeklucHV0R3JvdXBTbG90Q29tcG9uZW50IH0gZnJvbSAnLi9pbnB1dC1ncm91cC1zbG90LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOeklucHV0R3JvdXBDb21wb25lbnQsIE56SW5wdXRHcm91cFdoaXRTdWZmaXhPclByZWZpeERpcmVjdGl2ZSB9IGZyb20gJy4vaW5wdXQtZ3JvdXAuY29tcG9uZW50JztcbmltcG9ydCB7IE56SW5wdXREaXJlY3RpdmUgfSBmcm9tICcuL2lucHV0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOelRleHRhcmVhQ291bnRDb21wb25lbnQgfSBmcm9tICcuL3RleHRhcmVhLWNvdW50LmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE56VGV4dGFyZWFDb3VudENvbXBvbmVudCxcbiAgICBOeklucHV0RGlyZWN0aXZlLFxuICAgIE56SW5wdXRHcm91cENvbXBvbmVudCxcbiAgICBOekF1dG9zaXplRGlyZWN0aXZlLFxuICAgIE56SW5wdXRHcm91cFNsb3RDb21wb25lbnQsXG4gICAgTnpJbnB1dEdyb3VwV2hpdFN1ZmZpeE9yUHJlZml4RGlyZWN0aXZlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBOelRleHRhcmVhQ291bnRDb21wb25lbnQsXG4gICAgTnpJbnB1dERpcmVjdGl2ZSxcbiAgICBOeklucHV0R3JvdXBDb21wb25lbnQsXG4gICAgTnpBdXRvc2l6ZURpcmVjdGl2ZSxcbiAgICBOeklucHV0R3JvdXBXaGl0U3VmZml4T3JQcmVmaXhEaXJlY3RpdmVcbiAgXSxcbiAgaW1wb3J0czogW0JpZGlNb2R1bGUsIENvbW1vbk1vZHVsZSwgTnpJY29uTW9kdWxlLCBQbGF0Zm9ybU1vZHVsZSwgTnpPdXRsZXRNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIE56SW5wdXRNb2R1bGUge31cbiJdfQ==