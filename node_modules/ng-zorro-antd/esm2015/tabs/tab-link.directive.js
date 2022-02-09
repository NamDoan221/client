/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, ElementRef, Host, Optional, Self, TemplateRef } from '@angular/core';
import { RouterLink, RouterLinkWithHref } from '@angular/router';
/**
 * Fix https://github.com/angular/angular/issues/8563
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/router';
export class NzTabLinkTemplateDirective {
    constructor(templateRef) {
        this.templateRef = templateRef;
    }
}
NzTabLinkTemplateDirective.ɵfac = function NzTabLinkTemplateDirective_Factory(t) { return new (t || NzTabLinkTemplateDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.TemplateRef, 1)); };
NzTabLinkTemplateDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzTabLinkTemplateDirective, selectors: [["ng-template", "nzTabLink", ""]], exportAs: ["nzTabLinkTemplate"] });
NzTabLinkTemplateDirective.ctorParameters = () => [
    { type: TemplateRef, decorators: [{ type: Host }] }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTabLinkTemplateDirective, [{
        type: Directive,
        args: [{
                selector: 'ng-template[nzTabLink]',
                exportAs: 'nzTabLinkTemplate'
            }]
    }], function () { return [{ type: ɵngcc0.TemplateRef, decorators: [{
                type: Host
            }] }]; }, null); })();
/**
 * This component is for catching `routerLink` directive.
 */
export class NzTabLinkDirective {
    constructor(elementRef, routerLink, routerLinkWithHref) {
        this.elementRef = elementRef;
        this.routerLink = routerLink;
        this.routerLinkWithHref = routerLinkWithHref;
    }
}
NzTabLinkDirective.ɵfac = function NzTabLinkDirective_Factory(t) { return new (t || NzTabLinkDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.RouterLink, 10), ɵngcc0.ɵɵdirectiveInject(ɵngcc1.RouterLinkWithHref, 10)); };
NzTabLinkDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzTabLinkDirective, selectors: [["a", "nz-tab-link", ""]], exportAs: ["nzTabLink"] });
NzTabLinkDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: RouterLink, decorators: [{ type: Optional }, { type: Self }] },
    { type: RouterLinkWithHref, decorators: [{ type: Optional }, { type: Self }] }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTabLinkDirective, [{
        type: Directive,
        args: [{
                selector: 'a[nz-tab-link]',
                exportAs: 'nzTabLink'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc1.RouterLink, decorators: [{
                type: Optional
            }, {
                type: Self
            }] }, { type: ɵngcc1.RouterLinkWithHref, decorators: [{
                type: Optional
            }, {
                type: Self
            }] }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWxpbmsuZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL3RhYnMvdGFiLWxpbmsuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekYsT0FBTyxFQUFFLFVBQVUsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBSWpFO0FBQ0E7QUFDQSxHQUFHOzs7QUFLSCxNQUFNLE9BQU8sMEJBQTBCO0FBQ3ZDLElBQUUsWUFBMkIsV0FBNEM7QUFBSSxRQUFoRCxnQkFBVyxHQUFYLFdBQVcsQ0FBaUM7QUFBQyxJQUFFLENBQUM7QUFDN0U7c0RBTkMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSx3QkFBd0Isa0JBQ2xDLFFBQVEsRUFBRSxtQkFBbUI7SUFDOUIsNktBQ0k7QUFBQztBQUNVLFlBYnNDLFdBQVcsdUJBYWxELElBQUk7QUFBTTs7Ozs7Ozs7O2tDQUFFO0FBRzNCO0FBQ0E7QUFDQSxHQUFHO0FBS0gsTUFBTSxPQUFPLGtCQUFrQjtBQUMvQixJQUFFLFlBQ1MsVUFBeUMsRUFDckIsVUFBdUIsRUFDdkIsa0JBQXVDO0FBQ25FLFFBSFEsZUFBVSxHQUFWLFVBQVUsQ0FBK0I7QUFBQyxRQUN0QixlQUFVLEdBQVYsVUFBVSxDQUFhO0FBQUMsUUFDeEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFxQjtBQUN0RSxJQUFLLENBQUM7QUFDTjs4Q0FWQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLGdCQUFnQixrQkFDMUIsUUFBUSxFQUFFLFdBQVcsY0FDdEI7aUpBQ0k7QUFBQztBQUVMLFlBekJtQixVQUFVO0FBQUksWUFDekIsVUFBVSx1QkF5QmQsUUFBUSxZQUFJLElBQUk7QUFBTyxZQXpCUCxrQkFBa0IsdUJBMEJsQyxRQUFRLFlBQUksSUFBSTtBQUFNOzs7Ozs7Ozs7Ozs7Ozs7a0NBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdCwgT3B0aW9uYWwsIFNlbGYsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJMaW5rLCBSb3V0ZXJMaW5rV2l0aEhyZWYgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBUYWJUZW1wbGF0ZUNvbnRleHQgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuXG4vKipcbiAqIEZpeCBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy84NTYzXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ25nLXRlbXBsYXRlW256VGFiTGlua10nLFxuICBleHBvcnRBczogJ256VGFiTGlua1RlbXBsYXRlJ1xufSlcbmV4cG9ydCBjbGFzcyBOelRhYkxpbmtUZW1wbGF0ZURpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgcHVibGljIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxUYWJUZW1wbGF0ZUNvbnRleHQ+KSB7fVxufVxuXG4vKipcbiAqIFRoaXMgY29tcG9uZW50IGlzIGZvciBjYXRjaGluZyBgcm91dGVyTGlua2AgZGlyZWN0aXZlLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdhW256LXRhYi1saW5rXScsXG4gIGV4cG9ydEFzOiAnbnpUYWJMaW5rJ1xufSlcbmV4cG9ydCBjbGFzcyBOelRhYkxpbmtEaXJlY3RpdmUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MQW5jaG9yRWxlbWVudD4sXG4gICAgQE9wdGlvbmFsKCkgQFNlbGYoKSBwdWJsaWMgcm91dGVyTGluaz86IFJvdXRlckxpbmssXG4gICAgQE9wdGlvbmFsKCkgQFNlbGYoKSBwdWJsaWMgcm91dGVyTGlua1dpdGhIcmVmPzogUm91dGVyTGlua1dpdGhIcmVmXG4gICkge31cbn1cbiJdfQ==