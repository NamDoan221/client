/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, ElementRef, Input } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export class NzRowIndentDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.indentSize = 0;
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-table-row-indent');
    }
}
NzRowIndentDirective.ɵfac = function NzRowIndentDirective_Factory(t) { return new (t || NzRowIndentDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NzRowIndentDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzRowIndentDirective, selectors: [["nz-row-indent"]], hostVars: 2, hostBindings: function NzRowIndentDirective_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("padding-left", ctx.indentSize, "px");
    } }, inputs: { indentSize: "indentSize" } });
NzRowIndentDirective.ctorParameters = () => [
    { type: ElementRef }
];
NzRowIndentDirective.propDecorators = {
    indentSize: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzRowIndentDirective, [{
        type: Directive,
        args: [{
                selector: 'nz-row-indent',
                host: {
                    '[style.padding-left.px]': 'indentSize'
                }
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { indentSize: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LWluZGVudC5kaXJlY3RpdmUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvdGFibGUvc3JjL2FkZG9uL3Jvdy1pbmRlbnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBUTdELE1BQU0sT0FBTyxvQkFBb0I7QUFDakMsSUFFRSxZQUFvQixVQUFzQjtBQUM1QyxRQURzQixlQUFVLEdBQVYsVUFBVSxDQUFZO0FBQUMsUUFGbEMsZUFBVSxHQUFHLENBQUMsQ0FBQztBQUMxQixRQUVJLG1EQUFtRDtBQUN2RCxRQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUN4RSxJQUFFLENBQUM7QUFDSDtnREFiQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLGVBQWUsa0JBQ3pCLElBQUksRUFBRSxzQkFDSjtxQkFBeUIsRUFBRSxZQUFZLGtCQUN4QyxjQUNGOztpREFDSTtBQUFDO0FBQ1UsWUFUSSxVQUFVO0FBQUc7QUFBRztBQUdwQyx5QkFNRyxLQUFLO0FBQUk7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ256LXJvdy1pbmRlbnQnLFxuICBob3N0OiB7XG4gICAgJ1tzdHlsZS5wYWRkaW5nLWxlZnQucHhdJzogJ2luZGVudFNpemUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpSb3dJbmRlbnREaXJlY3RpdmUge1xuICBASW5wdXQoKSBpbmRlbnRTaXplID0gMDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHtcbiAgICAvLyBUT0RPOiBtb3ZlIHRvIGhvc3QgYWZ0ZXIgVmlldyBFbmdpbmUgZGVwcmVjYXRpb25cbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhbnQtdGFibGUtcm93LWluZGVudCcpO1xuICB9XG59XG4iXX0=