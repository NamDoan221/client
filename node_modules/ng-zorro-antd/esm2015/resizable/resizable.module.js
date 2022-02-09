/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzResizableDirective } from './resizable.directive';
import { NzResizeHandleComponent } from './resize-handle.component';
import { NzResizeHandlesComponent } from './resize-handles.component';
import * as ɵngcc0 from '@angular/core';
export class NzResizableModule {
}
NzResizableModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NzResizableModule });
NzResizableModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function NzResizableModule_Factory(t) { return new (t || NzResizableModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NzResizableModule, { declarations: function () { return [NzResizableDirective, NzResizeHandleComponent, NzResizeHandlesComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [NzResizableDirective, NzResizeHandleComponent, NzResizeHandlesComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzResizableModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [NzResizableDirective, NzResizeHandleComponent, NzResizeHandlesComponent],
                exports: [NzResizableDirective, NzResizeHandleComponent, NzResizeHandlesComponent]
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXphYmxlLm1vZHVsZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy9yZXNpemFibGUvcmVzaXphYmxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDN0QsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7O0FBT3RFLE1BQU0sT0FBTyxpQkFBaUI7QUFBRzs2Q0FMaEMsUUFBUSxTQUFDO0NBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLGtCQUN2QixZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSx1QkFBdUIsRUFBRSx3QkFBd0IsQ0FBQyxrQkFDdkYsT0FBTyxFQUFFLENBQUM7S0FBb0IsRUFBRSx1QkFBdUIsRUFBRSx3QkFBd0IsQ0FBQyxjQUNuRjs7Ozs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOelJlc2l6YWJsZURpcmVjdGl2ZSB9IGZyb20gJy4vcmVzaXphYmxlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOelJlc2l6ZUhhbmRsZUNvbXBvbmVudCB9IGZyb20gJy4vcmVzaXplLWhhbmRsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpSZXNpemVIYW5kbGVzQ29tcG9uZW50IH0gZnJvbSAnLi9yZXNpemUtaGFuZGxlcy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbTnpSZXNpemFibGVEaXJlY3RpdmUsIE56UmVzaXplSGFuZGxlQ29tcG9uZW50LCBOelJlc2l6ZUhhbmRsZXNDb21wb25lbnRdLFxuICBleHBvcnRzOiBbTnpSZXNpemFibGVEaXJlY3RpdmUsIE56UmVzaXplSGFuZGxlQ29tcG9uZW50LCBOelJlc2l6ZUhhbmRsZXNDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIE56UmVzaXphYmxlTW9kdWxlIHt9XG4iXX0=