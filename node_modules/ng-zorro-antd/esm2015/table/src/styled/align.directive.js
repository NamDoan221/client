/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, Input } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export class NzCellAlignDirective {
    constructor() {
        this.nzAlign = null;
    }
}
NzCellAlignDirective.ɵfac = function NzCellAlignDirective_Factory(t) { return new (t || NzCellAlignDirective)(); };
NzCellAlignDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzCellAlignDirective, selectors: [["th", "nzAlign", ""], ["td", "nzAlign", ""]], hostVars: 2, hostBindings: function NzCellAlignDirective_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("text-align", ctx.nzAlign);
    } }, inputs: { nzAlign: "nzAlign" } });
NzCellAlignDirective.propDecorators = {
    nzAlign: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCellAlignDirective, [{
        type: Directive,
        args: [{
                selector: 'th[nzAlign],td[nzAlign]',
                host: {
                    '[style.text-align]': 'nzAlign'
                }
            }]
    }], function () { return []; }, { nzAlign: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxpZ24uZGlyZWN0aXZlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9jb21wb25lbnRzL3RhYmxlL3NyYy9zdHlsZWQvYWxpZ24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFRakQsTUFBTSxPQUFPLG9CQUFvQjtBQUNqQyxJQVBBO0FBQ0csUUFNUSxZQUFPLEdBQXVDLElBQUksQ0FBQztBQUM5RCxJQUFBLENBQUM7QUFDRDtnREFUQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFO0dBQXlCLGtCQUNuQyxJQUFJLEVBQUUsc0JBQ0osb0JBQW9CLEVBQUUsU0FBUyxrQkFDaEMsY0FDRjs7MkNBQ0k7QUFBQztBQUNJLHNCQUFQLEtBQUs7QUFBSTs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAndGhbbnpBbGlnbl0sdGRbbnpBbGlnbl0nLFxuICBob3N0OiB7XG4gICAgJ1tzdHlsZS50ZXh0LWFsaWduXSc6ICduekFsaWduJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56Q2VsbEFsaWduRGlyZWN0aXZlIHtcbiAgQElucHV0KCkgbnpBbGlnbjogJ2xlZnQnIHwgJ3JpZ2h0JyB8ICdjZW50ZXInIHwgbnVsbCA9IG51bGw7XG59XG4iXX0=