/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, ElementRef, Input } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export class NzTrExpandDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.nzExpand = true;
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-table-expanded-row');
    }
}
NzTrExpandDirective.ɵfac = function NzTrExpandDirective_Factory(t) { return new (t || NzTrExpandDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NzTrExpandDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzTrExpandDirective, selectors: [["tr", "nzExpand", ""]], hostVars: 1, hostBindings: function NzTrExpandDirective_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵhostProperty("hidden", !ctx.nzExpand);
    } }, inputs: { nzExpand: "nzExpand" } });
NzTrExpandDirective.ctorParameters = () => [
    { type: ElementRef }
];
NzTrExpandDirective.propDecorators = {
    nzExpand: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTrExpandDirective, [{
        type: Directive,
        args: [{
                selector: 'tr[nzExpand]',
                host: {
                    '[hidden]': `!nzExpand`
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { nzExpand: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHItZXhwYW5kLmRpcmVjdGl2ZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vY29tcG9uZW50cy90YWJsZS9zcmMvdGFibGUvdHItZXhwYW5kLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVE3RCxNQUFNLE9BQU8sbUJBQW1CO0FBQ2hDLElBRUUsWUFBb0IsVUFBc0I7QUFDNUMsUUFEc0IsZUFBVSxHQUFWLFVBQVUsQ0FBWTtBQUFDLFFBRmxDLGFBQVEsR0FBRyxJQUFJLENBQUM7QUFDM0IsUUFFSSxtREFBbUQ7QUFDdkQsUUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUM7QUFDMUUsSUFBRSxDQUFDO0FBQ0g7K0NBYkMsU0FBUyxTQUFDLGtCQUNULFFBQVEsRUFBRSxjQUFjLGtCQUN4QixJQUFJLEVBQUUsc0JBQ0o7T0FBVSxFQUFFLFdBQVcsa0JBQ3hCLGNBQ0Y7OzZDQUNJO0FBQUM7QUFDVSxZQVRJLFVBQVU7QUFBRztBQUFHO0FBRXhCLHVCQU9ULEtBQUs7QUFBSTs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAndHJbbnpFeHBhbmRdJyxcbiAgaG9zdDoge1xuICAgICdbaGlkZGVuXSc6IGAhbnpFeHBhbmRgXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpUckV4cGFuZERpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpIG56RXhwYW5kID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICAvLyBUT0RPOiBtb3ZlIHRvIGhvc3QgYWZ0ZXIgVmlldyBFbmdpbmUgZGVwcmVjYXRpb25cbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhbnQtdGFibGUtZXhwYW5kZWQtcm93Jyk7XG4gIH1cbn1cbiJdfQ==