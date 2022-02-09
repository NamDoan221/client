/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/i18n';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from 'ng-zorro-antd/core/outlet';
import * as ɵngcc4 from './partial/default';
import * as ɵngcc5 from './partial/simple';

function NzEmptyComponent_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelement(1, "img", 5);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("src", ctx_r5.nzNotFoundImage, ɵngcc0.ɵɵsanitizeUrl)("alt", ctx_r5.isContentString ? ctx_r5.nzNotFoundContent : "empty");
} }
function NzEmptyComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, NzEmptyComponent_ng_container_1_ng_container_1_Template, 2, 2, "ng-container", 4);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r0.nzNotFoundImage);
} }
function NzEmptyComponent_nz_empty_default_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nz-empty-default");
} }
function NzEmptyComponent_nz_empty_simple_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nz-empty-simple");
} }
function NzEmptyComponent_p_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r6 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r6.isContentString ? ctx_r6.nzNotFoundContent : ctx_r6.locale["description"], " ");
} }
function NzEmptyComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "p", 6);
    ɵngcc0.ɵɵtemplate(1, NzEmptyComponent_p_4_ng_container_1_Template, 2, 1, "ng-container", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r3.nzNotFoundContent);
} }
function NzEmptyComponent_div_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r7 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", ctx_r7.nzNotFoundFooter, " ");
} }
function NzEmptyComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 7);
    ɵngcc0.ɵɵtemplate(1, NzEmptyComponent_div_5_ng_container_1_Template, 2, 1, "ng-container", 4);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("nzStringTemplateOutlet", ctx_r4.nzNotFoundFooter);
} }
const NzEmptyDefaultImages = ['default', 'simple'];
export class NzEmptyComponent {
    constructor(i18n, cdr) {
        this.i18n = i18n;
        this.cdr = cdr;
        this.nzNotFoundImage = 'default';
        this.isContentString = false;
        this.isImageBuildIn = true;
        this.destroy$ = new Subject();
    }
    ngOnChanges(changes) {
        const { nzNotFoundContent, nzNotFoundImage } = changes;
        if (nzNotFoundContent) {
            const content = nzNotFoundContent.currentValue;
            this.isContentString = typeof content === 'string';
        }
        if (nzNotFoundImage) {
            const image = nzNotFoundImage.currentValue || 'default';
            this.isImageBuildIn = NzEmptyDefaultImages.findIndex(i => i === image) > -1;
        }
    }
    ngOnInit() {
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.locale = this.i18n.getLocaleData('Empty');
            this.cdr.markForCheck();
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzEmptyComponent.ɵfac = function NzEmptyComponent_Factory(t) { return new (t || NzEmptyComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc1.NzI18nService), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
NzEmptyComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzEmptyComponent, selectors: [["nz-empty"]], hostAttrs: [1, "ant-empty"], inputs: { nzNotFoundImage: "nzNotFoundImage", nzNotFoundContent: "nzNotFoundContent", nzNotFoundFooter: "nzNotFoundFooter" }, exportAs: ["nzEmpty"], features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 6, vars: 5, consts: [[1, "ant-empty-image"], [4, "ngIf"], ["class", "ant-empty-description", 4, "ngIf"], ["class", "ant-empty-footer", 4, "ngIf"], [4, "nzStringTemplateOutlet"], [3, "src", "alt"], [1, "ant-empty-description"], [1, "ant-empty-footer"]], template: function NzEmptyComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, NzEmptyComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        ɵngcc0.ɵɵtemplate(2, NzEmptyComponent_nz_empty_default_2_Template, 1, 0, "nz-empty-default", 1);
        ɵngcc0.ɵɵtemplate(3, NzEmptyComponent_nz_empty_simple_3_Template, 1, 0, "nz-empty-simple", 1);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(4, NzEmptyComponent_p_4_Template, 2, 1, "p", 2);
        ɵngcc0.ɵɵtemplate(5, NzEmptyComponent_div_5_Template, 2, 1, "div", 3);
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.isImageBuildIn);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.isImageBuildIn && ctx.nzNotFoundImage !== "simple");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.isImageBuildIn && ctx.nzNotFoundImage === "simple");
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzNotFoundContent !== null);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzNotFoundFooter);
    } }, directives: [ɵngcc2.NgIf, ɵngcc3.NzStringTemplateOutletDirective, ɵngcc4.NzEmptyDefaultComponent, ɵngcc5.NzEmptySimpleComponent], encapsulation: 2, changeDetection: 0 });
NzEmptyComponent.ctorParameters = () => [
    { type: NzI18nService },
    { type: ChangeDetectorRef }
];
NzEmptyComponent.propDecorators = {
    nzNotFoundImage: [{ type: Input }],
    nzNotFoundContent: [{ type: Input }],
    nzNotFoundFooter: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzEmptyComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-empty',
                exportAs: 'nzEmpty',
                template: `
    <div class="ant-empty-image">
      <ng-container *ngIf="!isImageBuildIn">
        <ng-container *nzStringTemplateOutlet="nzNotFoundImage">
          <img [src]="nzNotFoundImage" [alt]="isContentString ? nzNotFoundContent : 'empty'" />
        </ng-container>
      </ng-container>
      <nz-empty-default *ngIf="isImageBuildIn && nzNotFoundImage !== 'simple'"></nz-empty-default>
      <nz-empty-simple *ngIf="isImageBuildIn && nzNotFoundImage === 'simple'"></nz-empty-simple>
    </div>
    <p class="ant-empty-description" *ngIf="nzNotFoundContent !== null">
      <ng-container *nzStringTemplateOutlet="nzNotFoundContent">
        {{ isContentString ? nzNotFoundContent : locale['description'] }}
      </ng-container>
    </p>
    <div class="ant-empty-footer" *ngIf="nzNotFoundFooter">
      <ng-container *nzStringTemplateOutlet="nzNotFoundFooter">
        {{ nzNotFoundFooter }}
      </ng-container>
    </div>
  `,
                host: {
                    class: 'ant-empty'
                }
            }]
    }], function () { return [{ type: ɵngcc1.NzI18nService }, { type: ɵngcc0.ChangeDetectorRef }]; }, { nzNotFoundImage: [{
            type: Input
        }], nzNotFoundContent: [{
            type: Input
        }], nzNotFoundFooter: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wdHkuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL2VtcHR5L2VtcHR5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULEtBQUssRUFNTCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUF3QixhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekUsTUFBTSxvQkFBb0IsR0FBRyxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQVUsQ0FBQztBQWlDNUQsTUFBTSxPQUFPLGdCQUFnQjtBQUFHLElBVzlCLFlBQW9CLElBQW1CLEVBQVUsR0FBc0I7QUFBSSxRQUF2RCxTQUFJLEdBQUosSUFBSSxDQUFlO0FBQUMsUUFBUyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtBQUFDLFFBVi9ELG9CQUFlLEdBQTZCLFNBQVMsQ0FBQztBQUNqRSxRQUdFLG9CQUFlLEdBQUcsS0FBSyxDQUFDO0FBQzFCLFFBQUUsbUJBQWMsR0FBRyxJQUFJLENBQUM7QUFDeEIsUUFFbUIsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7QUFDbEQsSUFDNEUsQ0FBQztBQUM3RSxJQUNFLFdBQVcsQ0FBQyxPQUFzQjtBQUFJLFFBQ3BDLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxlQUFlLEVBQUUsR0FBRyxPQUFPLENBQUM7QUFDM0QsUUFDSSxJQUFJLGlCQUFpQixFQUFFO0FBQzNCLFlBQU0sTUFBTSxPQUFPLEdBQUcsaUJBQWlCLENBQUMsWUFBWSxDQUFDO0FBQ3JELFlBQU0sSUFBSSxDQUFDLGVBQWUsR0FBRyxPQUFPLE9BQU8sS0FBSyxRQUFRLENBQUM7QUFDekQsU0FBSztBQUNMLFFBQ0ksSUFBSSxlQUFlLEVBQUU7QUFDekIsWUFBTSxNQUFNLEtBQUssR0FBRyxlQUFlLENBQUMsWUFBWSxJQUFJLFNBQVMsQ0FBQztBQUM5RCxZQUFNLElBQUksQ0FBQyxjQUFjLEdBQUcsb0JBQW9CLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ2xGLFNBQUs7QUFDTCxJQUFFLENBQUM7QUFDSCxJQUNFLFFBQVE7QUFBSyxRQUNYLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtBQUN6RSxZQUFNLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDckQsWUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0FBQzlCLFFBQUksQ0FBQyxDQUFDLENBQUM7QUFDUCxJQUFFLENBQUM7QUFDSCxJQUNFLFdBQVc7QUFBSyxRQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDekIsUUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQzdCLElBQUUsQ0FBQztBQUNIOzRDQXBFQyxTQUFTLFNBQUMsa0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU0sa0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLGtCQUNyQztNQUFRLEVBQUUsVUFBVSxrQkFDcEIsUUFBUSxFQUFFLFNBQVMsa0JBQ25CLFFBQVEsRUFBRTs7Ozs7WUFvQlQsa0JBQ0Q7R0FBSSxFQUFFLHNCQUNKLEtBQUssRUFBRSxXQUFXLGtCQUNuQjtFQUNGOzs7Ozs7Ozs7Ozs7bUxBQ0k7QUFBQztBQUEwQyxZQW5DakIsYUFBYTtBQUFJLFlBYjlDLGlCQUFpQjtBQUNsQjtBQUFHO0FBR0MsOEJBNkNGLEtBQUs7QUFBSyxnQ0FDVixLQUFLO0FBQUssK0JBQ1YsS0FBSztBQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBOekVtcHR5STE4bkludGVyZmFjZSwgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5cbmNvbnN0IE56RW1wdHlEZWZhdWx0SW1hZ2VzID0gWydkZWZhdWx0JywgJ3NpbXBsZSddIGFzIGNvbnN0O1xudHlwZSBOekVtcHR5Tm90Rm91bmRJbWFnZVR5cGUgPSB0eXBlb2YgTnpFbXB0eURlZmF1bHRJbWFnZXNbbnVtYmVyXSB8IG51bGwgfCBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzZWxlY3RvcjogJ256LWVtcHR5JyxcbiAgZXhwb3J0QXM6ICduekVtcHR5JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiYW50LWVtcHR5LWltYWdlXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWlzSW1hZ2VCdWlsZEluXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJuek5vdEZvdW5kSW1hZ2VcIj5cbiAgICAgICAgICA8aW1nIFtzcmNdPVwibnpOb3RGb3VuZEltYWdlXCIgW2FsdF09XCJpc0NvbnRlbnRTdHJpbmcgPyBuek5vdEZvdW5kQ29udGVudCA6ICdlbXB0eSdcIiAvPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgPG56LWVtcHR5LWRlZmF1bHQgKm5nSWY9XCJpc0ltYWdlQnVpbGRJbiAmJiBuek5vdEZvdW5kSW1hZ2UgIT09ICdzaW1wbGUnXCI+PC9uei1lbXB0eS1kZWZhdWx0PlxuICAgICAgPG56LWVtcHR5LXNpbXBsZSAqbmdJZj1cImlzSW1hZ2VCdWlsZEluICYmIG56Tm90Rm91bmRJbWFnZSA9PT0gJ3NpbXBsZSdcIj48L256LWVtcHR5LXNpbXBsZT5cbiAgICA8L2Rpdj5cbiAgICA8cCBjbGFzcz1cImFudC1lbXB0eS1kZXNjcmlwdGlvblwiICpuZ0lmPVwibnpOb3RGb3VuZENvbnRlbnQgIT09IG51bGxcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJuek5vdEZvdW5kQ29udGVudFwiPlxuICAgICAgICB7eyBpc0NvbnRlbnRTdHJpbmcgPyBuek5vdEZvdW5kQ29udGVudCA6IGxvY2FsZVsnZGVzY3JpcHRpb24nXSB9fVxuICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9wPlxuICAgIDxkaXYgY2xhc3M9XCJhbnQtZW1wdHktZm9vdGVyXCIgKm5nSWY9XCJuek5vdEZvdW5kRm9vdGVyXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwibnpOb3RGb3VuZEZvb3RlclwiPlxuICAgICAgICB7eyBuek5vdEZvdW5kRm9vdGVyIH19XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnYW50LWVtcHR5J1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56RW1wdHlDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgbnpOb3RGb3VuZEltYWdlOiBOekVtcHR5Tm90Rm91bmRJbWFnZVR5cGUgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIG56Tm90Rm91bmRDb250ZW50Pzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsO1xuICBASW5wdXQoKSBuek5vdEZvdW5kRm9vdGVyPzogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgaXNDb250ZW50U3RyaW5nID0gZmFsc2U7XG4gIGlzSW1hZ2VCdWlsZEluID0gdHJ1ZTtcbiAgbG9jYWxlITogTnpFbXB0eUkxOG5JbnRlcmZhY2U7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgbnpOb3RGb3VuZENvbnRlbnQsIG56Tm90Rm91bmRJbWFnZSB9ID0gY2hhbmdlcztcblxuICAgIGlmIChuek5vdEZvdW5kQ29udGVudCkge1xuICAgICAgY29uc3QgY29udGVudCA9IG56Tm90Rm91bmRDb250ZW50LmN1cnJlbnRWYWx1ZTtcbiAgICAgIHRoaXMuaXNDb250ZW50U3RyaW5nID0gdHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnO1xuICAgIH1cblxuICAgIGlmIChuek5vdEZvdW5kSW1hZ2UpIHtcbiAgICAgIGNvbnN0IGltYWdlID0gbnpOb3RGb3VuZEltYWdlLmN1cnJlbnRWYWx1ZSB8fCAnZGVmYXVsdCc7XG4gICAgICB0aGlzLmlzSW1hZ2VCdWlsZEluID0gTnpFbXB0eURlZmF1bHRJbWFnZXMuZmluZEluZGV4KGkgPT4gaSA9PT0gaW1hZ2UpID4gLTE7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMubG9jYWxlID0gdGhpcy5pMThuLmdldExvY2FsZURhdGEoJ0VtcHR5Jyk7XG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19