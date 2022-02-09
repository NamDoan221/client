/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { BidiModule } from '@angular/cdk/bidi';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCollapsePanelComponent } from './collapse-panel.component';
import { NzCollapseComponent } from './collapse.component';
import * as ɵngcc0 from '@angular/core';
export class NzCollapseModule {
}
NzCollapseModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzCollapseModule });
NzCollapseModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzCollapseModule_Factory(t) { return new (t || NzCollapseModule)(); }, imports: [[BidiModule, CommonModule, NzIconModule, NzOutletModule, NzNoAnimationModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzCollapseModule, { declarations: function () { return [NzCollapsePanelComponent, NzCollapseComponent]; }, imports: function () { return [BidiModule, CommonModule, NzIconModule, NzOutletModule, NzNoAnimationModule]; }, exports: function () { return [NzCollapsePanelComponent, NzCollapseComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCollapseModule, [{
        type: NgModule,
        args: [{
                declarations: [NzCollapsePanelComponent, NzCollapseComponent],
                exports: [NzCollapsePanelComponent, NzCollapseComponent],
                imports: [BidiModule, CommonModule, NzIconModule, NzOutletModule, NzNoAnimationModule]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2UubW9kdWxlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL2NvbGxhcHNlL2NvbGxhcHNlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFbEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBTzNELE1BQU0sT0FBTyxnQkFBZ0I7QUFBRzs0Q0FML0IsUUFBUSxTQUFDO0VBQ1IsWUFBWSxFQUFFLENBQUMsd0JBQXdCLEVBQUUsbUJBQW1CLENBQUMsa0JBQzdELE9BQU8sRUFBRSxDQUFDLHdCQUF3QixFQUFFLG1CQUFtQixDQUFDLGtCQUN4RCxPQUFPLEVBQUUsQ0FBQyxVQUFVLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxjQUFjLEVBQUU7UUFBbUIsQ0FBQyxjQUN2Rjs7Ozs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IEJpZGlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpOb0FuaW1hdGlvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9uby1hbmltYXRpb24nO1xuaW1wb3J0IHsgTnpPdXRsZXRNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvb3V0bGV0JztcbmltcG9ydCB7IE56SWNvbk1vZHVsZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaWNvbic7XG5cbmltcG9ydCB7IE56Q29sbGFwc2VQYW5lbENvbXBvbmVudCB9IGZyb20gJy4vY29sbGFwc2UtcGFuZWwuY29tcG9uZW50JztcbmltcG9ydCB7IE56Q29sbGFwc2VDb21wb25lbnQgfSBmcm9tICcuL2NvbGxhcHNlLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW056Q29sbGFwc2VQYW5lbENvbXBvbmVudCwgTnpDb2xsYXBzZUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtOekNvbGxhcHNlUGFuZWxDb21wb25lbnQsIE56Q29sbGFwc2VDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbQmlkaU1vZHVsZSwgQ29tbW9uTW9kdWxlLCBOekljb25Nb2R1bGUsIE56T3V0bGV0TW9kdWxlLCBOek5vQW5pbWF0aW9uTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBOekNvbGxhcHNlTW9kdWxlIHt9XG4iXX0=