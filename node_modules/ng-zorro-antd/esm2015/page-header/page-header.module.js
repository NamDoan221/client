/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { BidiModule } from '@angular/cdk/bidi';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderAvatarDirective, NzPageHeaderBreadcrumbDirective, NzPageHeaderContentDirective, NzPageHeaderExtraDirective, NzPageHeaderFooterDirective, NzPageHeaderSubtitleDirective, NzPageHeaderTagDirective, NzPageHeaderTitleDirective } from './page-header-cells';
import { NzPageHeaderComponent } from './page-header.component';
import * as ɵngcc0 from '@angular/core';
const NzPageHeaderCells = [
    NzPageHeaderTitleDirective,
    NzPageHeaderSubtitleDirective,
    NzPageHeaderContentDirective,
    NzPageHeaderTagDirective,
    NzPageHeaderExtraDirective,
    NzPageHeaderFooterDirective,
    NzPageHeaderBreadcrumbDirective,
    NzPageHeaderAvatarDirective
];
export class NzPageHeaderModule {
}
NzPageHeaderModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzPageHeaderModule });
NzPageHeaderModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzPageHeaderModule_Factory(t) { return new (t || NzPageHeaderModule)(); }, imports: [[BidiModule, CommonModule, NzOutletModule, NzIconModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzPageHeaderModule, { declarations: function () { return [NzPageHeaderComponent, NzPageHeaderTitleDirective,
        NzPageHeaderSubtitleDirective,
        NzPageHeaderContentDirective,
        NzPageHeaderTagDirective,
        NzPageHeaderExtraDirective,
        NzPageHeaderFooterDirective,
        NzPageHeaderBreadcrumbDirective,
        NzPageHeaderAvatarDirective]; }, imports: function () { return [BidiModule, CommonModule, NzOutletModule, NzIconModule]; }, exports: function () { return [NzPageHeaderComponent, NzPageHeaderTitleDirective,
        NzPageHeaderSubtitleDirective,
        NzPageHeaderContentDirective,
        NzPageHeaderTagDirective,
        NzPageHeaderExtraDirective,
        NzPageHeaderFooterDirective,
        NzPageHeaderBreadcrumbDirective,
        NzPageHeaderAvatarDirective]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzPageHeaderModule, [{
        type: NgModule,
        args: [{
                imports: [BidiModule, CommonModule, NzOutletModule, NzIconModule],
                exports: [NzPageHeaderComponent, NzPageHeaderCells],
                declarations: [NzPageHeaderComponent, NzPageHeaderCells]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1oZWFkZXIubW9kdWxlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL3BhZ2UtaGVhZGVyL3BhZ2UtaGVhZGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUNMLDJCQUEyQixFQUMzQiwrQkFBK0IsRUFDL0IsNEJBQTRCLEVBQzVCLDBCQUEwQixFQUMxQiwyQkFBMkIsRUFDM0IsNkJBQTZCLEVBQzdCLHdCQUF3QixFQUN4QiwwQkFBMEIsRUFDM0IsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7QUFFaEUsTUFBTSxpQkFBaUIsR0FBRztBQUMxQixJQUFFLDBCQUEwQjtBQUM1QixJQUFFLDZCQUE2QjtBQUMvQixJQUFFLDRCQUE0QjtBQUM5QixJQUFFLHdCQUF3QjtBQUMxQixJQUFFLDBCQUEwQjtBQUM1QixJQUFFLDJCQUEyQjtBQUM3QixJQUFFLCtCQUErQjtBQUNqQyxJQUFFLDJCQUEyQjtBQUM3QixDQUFDLENBQUM7QUFPRixNQUFNLE9BQU8sa0JBQWtCO0FBQUc7OENBTGpDLFFBQVEsU0FBQztBQUNSLE9BQU8sRUFBRSxDQUFDLFVBQVUsRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLFlBQVksQ0FBQyxrQkFDakUsT0FBTyxFQUFFLENBQUMscUJBQXFCLEVBQUUsaUJBQWlCLENBQUMsa0JBQ25ELFlBQVksRUFBRSxDQUFDLHFCQUFxQixFQUFFLGlCQUFpQixDQUFDO0tBQ3pEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUNJO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBCaWRpTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56T3V0bGV0TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL291dGxldCc7XG5pbXBvcnQgeyBOekljb25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xuXG5pbXBvcnQge1xuICBOelBhZ2VIZWFkZXJBdmF0YXJEaXJlY3RpdmUsXG4gIE56UGFnZUhlYWRlckJyZWFkY3J1bWJEaXJlY3RpdmUsXG4gIE56UGFnZUhlYWRlckNvbnRlbnREaXJlY3RpdmUsXG4gIE56UGFnZUhlYWRlckV4dHJhRGlyZWN0aXZlLFxuICBOelBhZ2VIZWFkZXJGb290ZXJEaXJlY3RpdmUsXG4gIE56UGFnZUhlYWRlclN1YnRpdGxlRGlyZWN0aXZlLFxuICBOelBhZ2VIZWFkZXJUYWdEaXJlY3RpdmUsXG4gIE56UGFnZUhlYWRlclRpdGxlRGlyZWN0aXZlXG59IGZyb20gJy4vcGFnZS1oZWFkZXItY2VsbHMnO1xuaW1wb3J0IHsgTnpQYWdlSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9wYWdlLWhlYWRlci5jb21wb25lbnQnO1xuXG5jb25zdCBOelBhZ2VIZWFkZXJDZWxscyA9IFtcbiAgTnpQYWdlSGVhZGVyVGl0bGVEaXJlY3RpdmUsXG4gIE56UGFnZUhlYWRlclN1YnRpdGxlRGlyZWN0aXZlLFxuICBOelBhZ2VIZWFkZXJDb250ZW50RGlyZWN0aXZlLFxuICBOelBhZ2VIZWFkZXJUYWdEaXJlY3RpdmUsXG4gIE56UGFnZUhlYWRlckV4dHJhRGlyZWN0aXZlLFxuICBOelBhZ2VIZWFkZXJGb290ZXJEaXJlY3RpdmUsXG4gIE56UGFnZUhlYWRlckJyZWFkY3J1bWJEaXJlY3RpdmUsXG4gIE56UGFnZUhlYWRlckF2YXRhckRpcmVjdGl2ZVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0JpZGlNb2R1bGUsIENvbW1vbk1vZHVsZSwgTnpPdXRsZXRNb2R1bGUsIE56SWNvbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtOelBhZ2VIZWFkZXJDb21wb25lbnQsIE56UGFnZUhlYWRlckNlbGxzXSxcbiAgZGVjbGFyYXRpb25zOiBbTnpQYWdlSGVhZGVyQ29tcG9uZW50LCBOelBhZ2VIZWFkZXJDZWxsc11cbn0pXG5leHBvcnQgY2xhc3MgTnpQYWdlSGVhZGVyTW9kdWxlIHt9XG4iXX0=