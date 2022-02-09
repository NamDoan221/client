/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
/**
 * A collection module of standard output for all lib components
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzI18nModule } from 'ng-zorro-antd/i18n';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { DateHeaderComponent } from './date-header.component';
import { DateTableComponent } from './date-table.component';
import { DecadeHeaderComponent } from './decade-header.component';
import { DecadeTableComponent } from './decade-table.component';
import { MonthHeaderComponent } from './month-header.component';
import { MonthTableComponent } from './month-table.component';
import { YearHeaderComponent } from './year-header.component';
import { YearTableComponent } from './year-table.component';
import * as ɵngcc0 from '@angular/core';
export class LibPackerModule {
}
LibPackerModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: LibPackerModule });
LibPackerModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function LibPackerModule_Factory(t) { return new (t || LibPackerModule)(); }, imports: [[CommonModule, FormsModule, NzI18nModule, NzTimePickerModule, NzOutletModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(LibPackerModule, { declarations: function () { return [DateHeaderComponent,
        DateTableComponent,
        DecadeHeaderComponent,
        DecadeTableComponent,
        MonthHeaderComponent,
        MonthTableComponent,
        YearHeaderComponent,
        YearTableComponent]; }, imports: function () { return [CommonModule, FormsModule, NzI18nModule, NzTimePickerModule, NzOutletModule]; }, exports: function () { return [DateHeaderComponent,
        DateTableComponent,
        DecadeHeaderComponent,
        DecadeTableComponent,
        MonthHeaderComponent,
        MonthTableComponent,
        YearHeaderComponent,
        YearTableComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(LibPackerModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, FormsModule, NzI18nModule, NzTimePickerModule, NzOutletModule],
                exports: [
                    DateHeaderComponent,
                    DateTableComponent,
                    DecadeHeaderComponent,
                    DecadeTableComponent,
                    MonthHeaderComponent,
                    MonthTableComponent,
                    YearHeaderComponent,
                    YearTableComponent
                ],
                declarations: [
                    DateHeaderComponent,
                    DateTableComponent,
                    DecadeHeaderComponent,
                    DecadeTableComponent,
                    MonthHeaderComponent,
                    MonthTableComponent,
                    YearHeaderComponent,
                    YearTableComponent
                ]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLXBhY2tlci5tb2R1bGUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvZGF0ZS1waWNrZXIvbGliL2xpYi1wYWNrZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUVILE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFM0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQXlCNUQsTUFBTSxPQUFPLGVBQWU7QUFBRzsyQ0F2QjlCLFFBQVEsU0FBQztHQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLGtCQUFrQixFQUFFLGNBQWMsQ0FBQyxrQkFDdEYsT0FBTyxFQUFFLHNCQUNQLG1CQUFtQixzQkFDbkIsa0JBQWtCLHNCQUNsQjtXQUFxQixzQkFDckIsb0JBQW9CLHNCQUNwQixvQkFBb0Isc0JBQ3BCLG1CQUFtQixzQkFDbkI7U0FBbUI7R0FDbkIsa0JBQWtCO1FBQ25CLGtCQUNEO1FBQVksRUFBRTtFQUNaLG1CQUFtQjtjQUNuQjtHQUFrQixzQkFDbEIscUJBQXFCLHNCQUNyQixvQkFBb0Isc0JBQ3BCLG9CQUFvQixzQkFDcEIsbUJBQW1CLHNCQUNuQjtnQkFBbUI7VUFDbkIsa0JBQWtCO2VBQ25CLGNBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFDSTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuLyoqXG4gKiBBIGNvbGxlY3Rpb24gbW9kdWxlIG9mIHN0YW5kYXJkIG91dHB1dCBmb3IgYWxsIGxpYiBjb21wb25lbnRzXG4gKi9cblxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE56T3V0bGV0TW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL291dGxldCc7XG5cbmltcG9ydCB7IE56STE4bk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5pbXBvcnQgeyBOelRpbWVQaWNrZXJNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL3RpbWUtcGlja2VyJztcbmltcG9ydCB7IERhdGVIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGUtaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRlVGFibGVDb21wb25lbnQgfSBmcm9tICcuL2RhdGUtdGFibGUuY29tcG9uZW50JztcbmltcG9ydCB7IERlY2FkZUhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vZGVjYWRlLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGVjYWRlVGFibGVDb21wb25lbnQgfSBmcm9tICcuL2RlY2FkZS10YWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9udGhIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL21vbnRoLWhlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTW9udGhUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vbW9udGgtdGFibGUuY29tcG9uZW50JztcbmltcG9ydCB7IFllYXJIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL3llYXItaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBZZWFyVGFibGVDb21wb25lbnQgfSBmcm9tICcuL3llYXItdGFibGUuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIE56STE4bk1vZHVsZSwgTnpUaW1lUGlja2VyTW9kdWxlLCBOek91dGxldE1vZHVsZV0sXG4gIGV4cG9ydHM6IFtcbiAgICBEYXRlSGVhZGVyQ29tcG9uZW50LFxuICAgIERhdGVUYWJsZUNvbXBvbmVudCxcbiAgICBEZWNhZGVIZWFkZXJDb21wb25lbnQsXG4gICAgRGVjYWRlVGFibGVDb21wb25lbnQsXG4gICAgTW9udGhIZWFkZXJDb21wb25lbnQsXG4gICAgTW9udGhUYWJsZUNvbXBvbmVudCxcbiAgICBZZWFySGVhZGVyQ29tcG9uZW50LFxuICAgIFllYXJUYWJsZUNvbXBvbmVudFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBEYXRlSGVhZGVyQ29tcG9uZW50LFxuICAgIERhdGVUYWJsZUNvbXBvbmVudCxcbiAgICBEZWNhZGVIZWFkZXJDb21wb25lbnQsXG4gICAgRGVjYWRlVGFibGVDb21wb25lbnQsXG4gICAgTW9udGhIZWFkZXJDb21wb25lbnQsXG4gICAgTW9udGhUYWJsZUNvbXBvbmVudCxcbiAgICBZZWFySGVhZGVyQ29tcG9uZW50LFxuICAgIFllYXJUYWJsZUNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIExpYlBhY2tlck1vZHVsZSB7fVxuIl19