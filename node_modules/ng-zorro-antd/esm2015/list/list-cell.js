/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, Directive, Input } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/empty';

const _c0 = ["*"];
export class NzListEmptyComponent {
}
NzListEmptyComponent.ɵfac = function NzListEmptyComponent_Factory(t) { return new (t || NzListEmptyComponent)(); };
NzListEmptyComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzListEmptyComponent, selectors: [["nz-list-empty"]], hostAttrs: [1, "ant-list-empty-text"], inputs: { nzNoResult: "nzNoResult" }, exportAs: ["nzListHeader"], decls: 1, vars: 2, consts: [[3, "nzComponentName", "specificContent"]], template: function NzListEmptyComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "nz-embed-empty", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("nzComponentName", "list")("specificContent", ctx.nzNoResult);
    } }, directives: [ɵngcc1.NzEmbedEmptyComponent], encapsulation: 2, changeDetection: 0 });
NzListEmptyComponent.propDecorators = {
    nzNoResult: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzListEmptyComponent, [{
        type: Component,
        args: [{
                selector: 'nz-list-empty',
                exportAs: 'nzListHeader',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: ` <nz-embed-empty [nzComponentName]="'list'" [specificContent]="nzNoResult"></nz-embed-empty> `,
                host: {
                    class: 'ant-list-empty-text'
                }
            }]
    }], null, { nzNoResult: [{
            type: Input
        }] }); })();
export class NzListHeaderComponent {
}
NzListHeaderComponent.ɵfac = function NzListHeaderComponent_Factory(t) { return new (t || NzListHeaderComponent)(); };
NzListHeaderComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzListHeaderComponent, selectors: [["nz-list-header"]], hostAttrs: [1, "ant-list-header"], exportAs: ["nzListHeader"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzListHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzListHeaderComponent, [{
        type: Component,
        args: [{
                selector: 'nz-list-header',
                exportAs: 'nzListHeader',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: ` <ng-content></ng-content> `,
                host: {
                    class: 'ant-list-header'
                }
            }]
    }], null, null); })();
export class NzListFooterComponent {
}
NzListFooterComponent.ɵfac = function NzListFooterComponent_Factory(t) { return new (t || NzListFooterComponent)(); };
NzListFooterComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzListFooterComponent, selectors: [["nz-list-footer"]], hostAttrs: [1, "ant-list-footer"], exportAs: ["nzListFooter"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzListFooterComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzListFooterComponent, [{
        type: Component,
        args: [{
                selector: 'nz-list-footer',
                exportAs: 'nzListFooter',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: ` <ng-content></ng-content> `,
                host: {
                    class: 'ant-list-footer'
                }
            }]
    }], null, null); })();
export class NzListPaginationComponent {
}
NzListPaginationComponent.ɵfac = function NzListPaginationComponent_Factory(t) { return new (t || NzListPaginationComponent)(); };
NzListPaginationComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzListPaginationComponent, selectors: [["nz-list-pagination"]], hostAttrs: [1, "ant-list-pagination"], exportAs: ["nzListPagination"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function NzListPaginationComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzListPaginationComponent, [{
        type: Component,
        args: [{
                selector: 'nz-list-pagination',
                exportAs: 'nzListPagination',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: ` <ng-content></ng-content> `,
                host: {
                    class: 'ant-list-pagination'
                }
            }]
    }], null, null); })();
export class NzListLoadMoreDirective {
}
NzListLoadMoreDirective.ɵfac = function NzListLoadMoreDirective_Factory(t) { return new (t || NzListLoadMoreDirective)(); };
NzListLoadMoreDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzListLoadMoreDirective, selectors: [["nz-list-load-more"]], exportAs: ["nzListLoadMoreDirective"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzListLoadMoreDirective, [{
        type: Directive,
        args: [{
                selector: 'nz-list-load-more',
                exportAs: 'nzListLoadMoreDirective'
            }]
    }], null, null); })();
export class NzListGridDirective {
}
NzListGridDirective.ɵfac = function NzListGridDirective_Factory(t) { return new (t || NzListGridDirective)(); };
NzListGridDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzListGridDirective, selectors: [["nz-list", "nzGrid", ""]], hostAttrs: [1, "ant-list-grid"] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzListGridDirective, [{
        type: Directive,
        args: [{
                selector: 'nz-list[nzGrid]',
                host: {
                    class: 'ant-list-grid'
                }
            }]
    }], null, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1jZWxsLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL2xpc3QvbGlzdC1jZWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBV2xHLE1BQU0sT0FBTyxvQkFBb0I7QUFDakM7Z0RBVkMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSxlQUFlO1dBQ3pCLFFBQVEsRUFBRSxjQUFjLGtCQUN4QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTSxrQkFDL0MsUUFBUSxFQUFFLCtGQUErRixrQkFDekcsSUFBSSxFQUFFLHNCQUNKLEtBQUssRUFBRSxxQkFBcUIsa0JBQzdCLGNBQ0Y7Ozs7NkZBQ0k7QUFBQztBQUNJLHlCQUFQLEtBQUs7QUFBSTs7Ozs7Ozs7Ozs7Ozs7b0JBQUU7QUFZZCxNQUFNLE9BQU8scUJBQXFCO0FBQUc7aURBVHBDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO1VBQzFCLFFBQVEsRUFBRSxjQUFjLGtCQUN4QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTSxrQkFDL0MsUUFBUSxFQUFFLDZCQUE2QixrQkFDdkMsSUFBSSxFQUFFLHNCQUNKLEtBQUssRUFBRSxpQkFBaUIsa0JBQ3pCLGNBQ0Y7Ozs7Ozs7Ozs7Ozs7OzswQkFDSTtBQVdMLE1BQU0sT0FBTyxxQkFBcUI7QUFBRztpREFUcEMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSxnQkFBZ0I7VUFDMUIsUUFBUSxFQUFFLGNBQWMsa0JBQ3hCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNLGtCQUMvQyxRQUFRLEVBQUUsNkJBQTZCLGtCQUN2QyxJQUFJLEVBQUUsc0JBQ0osS0FBSyxFQUFFLGlCQUFpQixrQkFDekIsY0FDRjs7Ozs7Ozs7Ozs7Ozs7OzBCQUNJO0FBV0wsTUFBTSxPQUFPLHlCQUF5QjtBQUFHO3FEQVR4QyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtNQUM5QixRQUFRLEVBQUUsa0JBQWtCLGtCQUM1QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTSxrQkFDL0MsUUFBUSxFQUFFLDZCQUE2QixrQkFDdkMsSUFBSSxFQUFFLHNCQUNKLEtBQUssRUFBRSxxQkFBcUIsa0JBQzdCLGNBQ0Y7Ozs7Ozs7Ozs7Ozs7OzswQkFDSTtBQU1MLE1BQU0sT0FBTyx1QkFBdUI7QUFBRzttREFKdEMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSxtQkFBbUI7U0FDN0IsUUFBUSxFQUFFLHlCQUF5QixjQUNwQzs7Ozs7OzswQkFDSTtBQVFMLE1BQU0sT0FBTyxtQkFBbUI7QUFBRzsrQ0FObEMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSxpQkFBaUI7ZUFDM0IsSUFBSSxFQUFFLHNCQUNKLEtBQUssRUFBRSxlQUFlLGtCQUN2QixjQUNGOzs7Ozs7Ozs7MEJBQ0k7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIERpcmVjdGl2ZSwgSW5wdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LWxpc3QtZW1wdHknLFxuICBleHBvcnRBczogJ256TGlzdEhlYWRlcicsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICB0ZW1wbGF0ZTogYCA8bnotZW1iZWQtZW1wdHkgW256Q29tcG9uZW50TmFtZV09XCInbGlzdCdcIiBbc3BlY2lmaWNDb250ZW50XT1cIm56Tm9SZXN1bHRcIj48L256LWVtYmVkLWVtcHR5PiBgLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdhbnQtbGlzdC1lbXB0eS10ZXh0J1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56TGlzdEVtcHR5Q29tcG9uZW50IHtcbiAgQElucHV0KCkgbnpOb1Jlc3VsdD86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1saXN0LWhlYWRlcicsXG4gIGV4cG9ydEFzOiAnbnpMaXN0SGVhZGVyJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnYW50LWxpc3QtaGVhZGVyJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56TGlzdEhlYWRlckNvbXBvbmVudCB7fVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1saXN0LWZvb3RlcicsXG4gIGV4cG9ydEFzOiAnbnpMaXN0Rm9vdGVyJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcbiAgaG9zdDoge1xuICAgIGNsYXNzOiAnYW50LWxpc3QtZm9vdGVyJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56TGlzdEZvb3RlckNvbXBvbmVudCB7fVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1saXN0LXBhZ2luYXRpb24nLFxuICBleHBvcnRBczogJ256TGlzdFBhZ2luYXRpb24nLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdhbnQtbGlzdC1wYWdpbmF0aW9uJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56TGlzdFBhZ2luYXRpb25Db21wb25lbnQge31cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbnotbGlzdC1sb2FkLW1vcmUnLFxuICBleHBvcnRBczogJ256TGlzdExvYWRNb3JlRGlyZWN0aXZlJ1xufSlcbmV4cG9ydCBjbGFzcyBOekxpc3RMb2FkTW9yZURpcmVjdGl2ZSB7fVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICduei1saXN0W256R3JpZF0nLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdhbnQtbGlzdC1ncmlkJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56TGlzdEdyaWREaXJlY3RpdmUge31cbiJdfQ==