/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from 'ng-zorro-antd/avatar';

const _c0 = ["*"];
function NzListItemMetaAvatarComponent_nz_avatar_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nz-avatar", 3);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("nzSrc", ctx_r0.nzSrc);
} }
function NzListItemMetaAvatarComponent_ng_content_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵprojection(0, 0, ["*ngIf", "!nzSrc"]);
} }
export class NzListItemMetaTitleComponent {
}
NzListItemMetaTitleComponent.ɵfac = function NzListItemMetaTitleComponent_Factory(t) { return new (t || NzListItemMetaTitleComponent)(); };
NzListItemMetaTitleComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzListItemMetaTitleComponent, selectors: [["nz-list-item-meta-title"]], exportAs: ["nzListItemMetaTitle"], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "ant-list-item-meta-title"]], template: function NzListItemMetaTitleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "h4", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzListItemMetaTitleComponent, [{
        type: Component,
        args: [{
                selector: 'nz-list-item-meta-title',
                exportAs: 'nzListItemMetaTitle',
                template: `
    <h4 class="ant-list-item-meta-title">
      <ng-content></ng-content>
    </h4>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, null); })();
export class NzListItemMetaDescriptionComponent {
}
NzListItemMetaDescriptionComponent.ɵfac = function NzListItemMetaDescriptionComponent_Factory(t) { return new (t || NzListItemMetaDescriptionComponent)(); };
NzListItemMetaDescriptionComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzListItemMetaDescriptionComponent, selectors: [["nz-list-item-meta-description"]], exportAs: ["nzListItemMetaDescription"], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "ant-list-item-meta-description"]], template: function NzListItemMetaDescriptionComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzListItemMetaDescriptionComponent, [{
        type: Component,
        args: [{
                selector: 'nz-list-item-meta-description',
                exportAs: 'nzListItemMetaDescription',
                template: `
    <div class="ant-list-item-meta-description">
      <ng-content></ng-content>
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, null); })();
export class NzListItemMetaAvatarComponent {
}
NzListItemMetaAvatarComponent.ɵfac = function NzListItemMetaAvatarComponent_Factory(t) { return new (t || NzListItemMetaAvatarComponent)(); };
NzListItemMetaAvatarComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzListItemMetaAvatarComponent, selectors: [["nz-list-item-meta-avatar"]], inputs: { nzSrc: "nzSrc" }, exportAs: ["nzListItemMetaAvatar"], ngContentSelectors: _c0, decls: 3, vars: 2, consts: [[1, "ant-list-item-meta-avatar"], [3, "nzSrc", 4, "ngIf"], [4, "ngIf"], [3, "nzSrc"]], template: function NzListItemMetaAvatarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, NzListItemMetaAvatarComponent_nz_avatar_1_Template, 1, 1, "nz-avatar", 1);
        ɵngcc0.ɵɵtemplate(2, NzListItemMetaAvatarComponent_ng_content_2_Template, 1, 0, "ng-content", 2);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.nzSrc);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.nzSrc);
    } }, directives: [ɵngcc1.NgIf, ɵngcc2.NzAvatarComponent], encapsulation: 2, changeDetection: 0 });
NzListItemMetaAvatarComponent.propDecorators = {
    nzSrc: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzListItemMetaAvatarComponent, [{
        type: Component,
        args: [{
                selector: 'nz-list-item-meta-avatar',
                exportAs: 'nzListItemMetaAvatar',
                template: `
    <div class="ant-list-item-meta-avatar">
      <nz-avatar *ngIf="nzSrc" [nzSrc]="nzSrc"></nz-avatar>
      <ng-content *ngIf="!nzSrc"></ng-content>
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { nzSrc: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1pdGVtLW1ldGEtY2VsbC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy9saXN0L2xpc3QtaXRlbS1tZXRhLWNlbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUVILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFZMUUsTUFBTSxPQUFPLDRCQUE0QjtBQUFHO3dEQVYzQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtLQUNuQyxRQUFRLEVBQUUscUJBQXFCLGtCQUMvQixRQUFRLEVBQUUseUZBSVQsa0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU0sY0FDaEQ7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFDSTtBQVlMLE1BQU0sT0FBTyxrQ0FBa0M7QUFBRzs4REFWakQsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSwrQkFBK0Isa0JBQ3pDO09BQVEsRUFBRSwyQkFBMkIsa0JBQ3JDLFFBQVEsRUFBRSxpR0FJVCxrQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTSxjQUNoRDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUNJO0FBYUwsTUFBTSxPQUFPLDZCQUE2QjtBQUMxQzt5REFaQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtJQUNwQyxRQUFRLEVBQUUsc0JBQXNCLGtCQUNoQyxRQUFRLEVBQUUsdUtBS1Qsa0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU0sY0FDaEQ7Ozs7Ozs7Ozs7O3NHQUNJO0FBQUM7QUFDSSxvQkFBUCxLQUFLO0FBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LWxpc3QtaXRlbS1tZXRhLXRpdGxlJyxcbiAgZXhwb3J0QXM6ICduekxpc3RJdGVtTWV0YVRpdGxlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aDQgY2xhc3M9XCJhbnQtbGlzdC1pdGVtLW1ldGEtdGl0bGVcIj5cbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICA8L2g0PlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBOekxpc3RJdGVtTWV0YVRpdGxlQ29tcG9uZW50IHt9XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LWxpc3QtaXRlbS1tZXRhLWRlc2NyaXB0aW9uJyxcbiAgZXhwb3J0QXM6ICduekxpc3RJdGVtTWV0YURlc2NyaXB0aW9uJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiYW50LWxpc3QtaXRlbS1tZXRhLWRlc2NyaXB0aW9uXCI+XG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIE56TGlzdEl0ZW1NZXRhRGVzY3JpcHRpb25Db21wb25lbnQge31cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbnotbGlzdC1pdGVtLW1ldGEtYXZhdGFyJyxcbiAgZXhwb3J0QXM6ICduekxpc3RJdGVtTWV0YUF2YXRhcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBjbGFzcz1cImFudC1saXN0LWl0ZW0tbWV0YS1hdmF0YXJcIj5cbiAgICAgIDxuei1hdmF0YXIgKm5nSWY9XCJuelNyY1wiIFtuelNyY109XCJuelNyY1wiPjwvbnotYXZhdGFyPlxuICAgICAgPG5nLWNvbnRlbnQgKm5nSWY9XCIhbnpTcmNcIj48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG4gIGAsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIE56TGlzdEl0ZW1NZXRhQXZhdGFyQ29tcG9uZW50IHtcbiAgQElucHV0KCkgbnpTcmM/OiBzdHJpbmc7XG59XG4iXX0=