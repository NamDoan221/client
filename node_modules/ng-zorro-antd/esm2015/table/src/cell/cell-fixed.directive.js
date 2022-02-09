/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export class NzCellFixedDirective {
    constructor(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.nzRight = false;
        this.nzLeft = false;
        this.colspan = null;
        this.colSpan = null;
        this.changes$ = new Subject();
        this.isAutoLeft = false;
        this.isAutoRight = false;
        this.isFixedLeft = false;
        this.isFixedRight = false;
        this.isFixed = false;
    }
    setAutoLeftWidth(autoLeft) {
        this.renderer.setStyle(this.elementRef.nativeElement, 'left', autoLeft);
    }
    setAutoRightWidth(autoRight) {
        this.renderer.setStyle(this.elementRef.nativeElement, 'right', autoRight);
    }
    setIsFirstRight(isFirstRight) {
        this.setFixClass(isFirstRight, 'ant-table-cell-fix-right-first');
    }
    setIsLastLeft(isLastLeft) {
        this.setFixClass(isLastLeft, 'ant-table-cell-fix-left-last');
    }
    setFixClass(flag, className) {
        // the setFixClass function may call many times, so remove it first.
        this.renderer.removeClass(this.elementRef.nativeElement, className);
        if (flag) {
            this.renderer.addClass(this.elementRef.nativeElement, className);
        }
    }
    ngOnChanges() {
        this.setIsFirstRight(false);
        this.setIsLastLeft(false);
        this.isAutoLeft = this.nzLeft === '' || this.nzLeft === true;
        this.isAutoRight = this.nzRight === '' || this.nzRight === true;
        this.isFixedLeft = this.nzLeft !== false;
        this.isFixedRight = this.nzRight !== false;
        this.isFixed = this.isFixedLeft || this.isFixedRight;
        const validatePx = (value) => {
            if (typeof value === 'string' && value !== '') {
                return value;
            }
            else {
                return null;
            }
        };
        this.setAutoLeftWidth(validatePx(this.nzLeft));
        this.setAutoRightWidth(validatePx(this.nzRight));
        this.changes$.next();
    }
}
NzCellFixedDirective.ɵfac = function NzCellFixedDirective_Factory(t) { return new (t || NzCellFixedDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
NzCellFixedDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzCellFixedDirective, selectors: [["td", "nzRight", ""], ["th", "nzRight", ""], ["td", "nzLeft", ""], ["th", "nzLeft", ""]], hostVars: 6, hostBindings: function NzCellFixedDirective_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("position", ctx.isFixed ? "sticky" : null);
        ɵngcc0.ɵɵclassProp("ant-table-cell-fix-right", ctx.isFixedRight)("ant-table-cell-fix-left", ctx.isFixedLeft);
    } }, inputs: { nzRight: "nzRight", nzLeft: "nzLeft", colspan: "colspan", colSpan: "colSpan" }, features: [ɵngcc0.ɵɵNgOnChangesFeature] });
NzCellFixedDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
NzCellFixedDirective.propDecorators = {
    nzRight: [{ type: Input }],
    nzLeft: [{ type: Input }],
    colspan: [{ type: Input }],
    colSpan: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCellFixedDirective, [{
        type: Directive,
        args: [{
                selector: 'td[nzRight],th[nzRight],td[nzLeft],th[nzLeft]',
                host: {
                    '[class.ant-table-cell-fix-right]': `isFixedRight`,
                    '[class.ant-table-cell-fix-left]': `isFixedLeft`,
                    '[style.position]': `isFixed? 'sticky' : null`
                }
            }]
    }], function () { return [{ type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ElementRef }]; }, { nzRight: [{
            type: Input
        }], nzLeft: [{
            type: Input
        }], colspan: [{
            type: Input
        }], colSpan: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC1maXhlZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvdGFibGUvc3JjL2NlbGwvY2VsbC1maXhlZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUVILE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBYSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkYsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFVL0IsTUFBTSxPQUFPLG9CQUFvQjtBQUFHLElBcUNsQyxZQUFvQixRQUFtQixFQUFVLFVBQXNCO0FBQUksUUFBdkQsYUFBUSxHQUFSLFFBQVEsQ0FBVztBQUFDLFFBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtBQUFDLFFBcEMvRCxZQUFPLEdBQXFCLEtBQUssQ0FBQztBQUM3QyxRQUFXLFdBQU0sR0FBcUIsS0FBSyxDQUFDO0FBQzVDLFFBQVcsWUFBTyxHQUFrQixJQUFJLENBQUM7QUFDekMsUUFBVyxZQUFPLEdBQWtCLElBQUksQ0FBQztBQUN6QyxRQUFFLGFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0FBQ2pDLFFBQUUsZUFBVSxHQUFHLEtBQUssQ0FBQztBQUNyQixRQUFFLGdCQUFXLEdBQUcsS0FBSyxDQUFDO0FBQ3RCLFFBQUUsZ0JBQVcsR0FBRyxLQUFLLENBQUM7QUFDdEIsUUFBRSxpQkFBWSxHQUFHLEtBQUssQ0FBQztBQUN2QixRQUFFLFlBQU8sR0FBRyxLQUFLLENBQUM7QUFDbEIsSUEwQjRFLENBQUM7QUFDN0UsSUExQkUsZ0JBQWdCLENBQUMsUUFBdUI7QUFBSSxRQUMxQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7QUFDNUUsSUFBRSxDQUFDO0FBQ0gsSUFD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Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ3RkW256UmlnaHRdLHRoW256UmlnaHRdLHRkW256TGVmdF0sdGhbbnpMZWZ0XScsXG4gIGhvc3Q6IHtcbiAgICAnW2NsYXNzLmFudC10YWJsZS1jZWxsLWZpeC1yaWdodF0nOiBgaXNGaXhlZFJpZ2h0YCxcbiAgICAnW2NsYXNzLmFudC10YWJsZS1jZWxsLWZpeC1sZWZ0XSc6IGBpc0ZpeGVkTGVmdGAsXG4gICAgJ1tzdHlsZS5wb3NpdGlvbl0nOiBgaXNGaXhlZD8gJ3N0aWNreScgOiBudWxsYFxuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56Q2VsbEZpeGVkRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgbnpSaWdodDogc3RyaW5nIHwgYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBuekxlZnQ6IHN0cmluZyB8IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgY29sc3BhbjogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIGNvbFNwYW46IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBjaGFuZ2VzJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIGlzQXV0b0xlZnQgPSBmYWxzZTtcbiAgaXNBdXRvUmlnaHQgPSBmYWxzZTtcbiAgaXNGaXhlZExlZnQgPSBmYWxzZTtcbiAgaXNGaXhlZFJpZ2h0ID0gZmFsc2U7XG4gIGlzRml4ZWQgPSBmYWxzZTtcblxuICBzZXRBdXRvTGVmdFdpZHRoKGF1dG9MZWZ0OiBzdHJpbmcgfCBudWxsKTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2xlZnQnLCBhdXRvTGVmdCk7XG4gIH1cblxuICBzZXRBdXRvUmlnaHRXaWR0aChhdXRvUmlnaHQ6IHN0cmluZyB8IG51bGwpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAncmlnaHQnLCBhdXRvUmlnaHQpO1xuICB9XG5cbiAgc2V0SXNGaXJzdFJpZ2h0KGlzRmlyc3RSaWdodDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuc2V0Rml4Q2xhc3MoaXNGaXJzdFJpZ2h0LCAnYW50LXRhYmxlLWNlbGwtZml4LXJpZ2h0LWZpcnN0Jyk7XG4gIH1cblxuICBzZXRJc0xhc3RMZWZ0KGlzTGFzdExlZnQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnNldEZpeENsYXNzKGlzTGFzdExlZnQsICdhbnQtdGFibGUtY2VsbC1maXgtbGVmdC1sYXN0Jyk7XG4gIH1cblxuICBwcml2YXRlIHNldEZpeENsYXNzKGZsYWc6IGJvb2xlYW4sIGNsYXNzTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgLy8gdGhlIHNldEZpeENsYXNzIGZ1bmN0aW9uIG1heSBjYWxsIG1hbnkgdGltZXMsIHNvIHJlbW92ZSBpdCBmaXJzdC5cbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBjbGFzc05hbWUpO1xuXG4gICAgaWYgKGZsYWcpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYpIHt9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRJc0ZpcnN0UmlnaHQoZmFsc2UpO1xuICAgIHRoaXMuc2V0SXNMYXN0TGVmdChmYWxzZSk7XG4gICAgdGhpcy5pc0F1dG9MZWZ0ID0gdGhpcy5uekxlZnQgPT09ICcnIHx8IHRoaXMubnpMZWZ0ID09PSB0cnVlO1xuICAgIHRoaXMuaXNBdXRvUmlnaHQgPSB0aGlzLm56UmlnaHQgPT09ICcnIHx8IHRoaXMubnpSaWdodCA9PT0gdHJ1ZTtcbiAgICB0aGlzLmlzRml4ZWRMZWZ0ID0gdGhpcy5uekxlZnQgIT09IGZhbHNlO1xuICAgIHRoaXMuaXNGaXhlZFJpZ2h0ID0gdGhpcy5uelJpZ2h0ICE9PSBmYWxzZTtcbiAgICB0aGlzLmlzRml4ZWQgPSB0aGlzLmlzRml4ZWRMZWZ0IHx8IHRoaXMuaXNGaXhlZFJpZ2h0O1xuICAgIGNvbnN0IHZhbGlkYXRlUHggPSAodmFsdWU6IHN0cmluZyB8IGJvb2xlYW4pOiBzdHJpbmcgfCBudWxsID0+IHtcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlICE9PSAnJykge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9O1xuICAgIHRoaXMuc2V0QXV0b0xlZnRXaWR0aCh2YWxpZGF0ZVB4KHRoaXMubnpMZWZ0KSk7XG4gICAgdGhpcy5zZXRBdXRvUmlnaHRXaWR0aCh2YWxpZGF0ZVB4KHRoaXMubnpSaWdodCkpO1xuICAgIHRoaXMuY2hhbmdlcyQubmV4dCgpO1xuICB9XG59XG4iXX0=