/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, ElementRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export class NzDropDownADirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-dropdown-link');
    }
}
NzDropDownADirective.ɵfac = function NzDropDownADirective_Factory(t) { return new (t || NzDropDownADirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NzDropDownADirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzDropDownADirective, selectors: [["a", "nz-dropdown", ""]] });
NzDropDownADirective.ctorParameters = () => [
    { type: ElementRef }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzDropDownADirective, [{
        type: Directive,
        args: [{
                selector: 'a[nz-dropdown]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tYS5kaXJlY3RpdmUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24tYS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUVILE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUt0RCxNQUFNLE9BQU8sb0JBQW9CO0FBQ2pDLElBQUUsWUFBb0IsVUFBc0I7QUFDNUMsUUFEc0IsZUFBVSxHQUFWLFVBQVUsQ0FBWTtBQUFDLFFBQ3pDLG1EQUFtRDtBQUN2RCxRQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUNyRSxJQUFFLENBQUM7QUFDSDtnREFSQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLGdCQUFnQixjQUMzQjs0SEFDSTtBQUFDO0FBQ1UsWUFOSSxVQUFVO0FBQUc7Ozs7OzsyRUFBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2FbbnotZHJvcGRvd25dJ1xufSlcbmV4cG9ydCBjbGFzcyBOekRyb3BEb3duQURpcmVjdGl2ZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICAgIC8vIFRPRE86IG1vdmUgdG8gaG9zdCBhZnRlciBWaWV3IEVuZ2luZSBkZXByZWNhdGlvblxuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FudC1kcm9wZG93bi1saW5rJyk7XG4gIH1cbn1cbiJdfQ==