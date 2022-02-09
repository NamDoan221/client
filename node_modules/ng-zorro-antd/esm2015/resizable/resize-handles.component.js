/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from './resize-handle.component';

function NzResizeHandlesComponent_nz_resize_handle_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "nz-resize-handle", 1);
} if (rf & 2) {
    const dir_r1 = ctx.$implicit;
    ɵngcc0.ɵɵproperty("nzDirection", dir_r1);
} }
export const DEFAULT_RESIZE_DIRECTION = [
    'bottomRight',
    'topRight',
    'bottomLeft',
    'topLeft',
    'bottom',
    'right',
    'top',
    'left'
];
export class NzResizeHandlesComponent {
    constructor() {
        this.nzDirections = DEFAULT_RESIZE_DIRECTION;
        this.directions = new Set(this.nzDirections);
    }
    ngOnChanges(changes) {
        if (changes.nzDirections) {
            this.directions = new Set(changes.nzDirections.currentValue);
        }
    }
}
NzResizeHandlesComponent.ɵfac = function NzResizeHandlesComponent_Factory(t) { return new (t || NzResizeHandlesComponent)(); };
NzResizeHandlesComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzResizeHandlesComponent, selectors: [["nz-resize-handles"]], inputs: { nzDirections: "nzDirections" }, exportAs: ["nzResizeHandles"], features: [ɵngcc0.ɵɵNgOnChangesFeature], decls: 1, vars: 1, consts: [[3, "nzDirection", 4, "ngFor", "ngForOf"], [3, "nzDirection"]], template: function NzResizeHandlesComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵtemplate(0, NzResizeHandlesComponent_nz_resize_handle_0_Template, 1, 1, "nz-resize-handle", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngForOf", ctx.directions);
    } }, directives: [ɵngcc1.NgForOf, ɵngcc2.NzResizeHandleComponent], encapsulation: 2, changeDetection: 0 });
NzResizeHandlesComponent.ctorParameters = () => [];
NzResizeHandlesComponent.propDecorators = {
    nzDirections: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzResizeHandlesComponent, [{
        type: Component,
        args: [{
                selector: 'nz-resize-handles',
                exportAs: 'nzResizeHandles',
                template: ` <nz-resize-handle *ngFor="let dir of directions" [nzDirection]="dir"></nz-resize-handle> `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return []; }, { nzDirections: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplLWhhbmRsZXMuY29tcG9uZW50LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9jb21wb25lbnRzL3Jlc2l6YWJsZS9yZXNpemUtaGFuZGxlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUVILE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE0QixNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7QUFJcEcsTUFBTSxDQUFDLE1BQU0sd0JBQXdCLEdBQXdCO0FBQzdELElBQUUsYUFBYTtBQUNmLElBQUUsVUFBVTtBQUNaLElBQUUsWUFBWTtBQUNkLElBQUUsU0FBUztBQUNYLElBQUUsUUFBUTtBQUNWLElBQUUsT0FBTztBQUNULElBQUUsS0FBSztBQUNQLElBQUUsTUFBTTtBQUNSLENBQUMsQ0FBQztBQVFGLE1BQU0sT0FBTyx3QkFBd0I7QUFBRyxJQUl0QztBQUNGLFFBSlcsaUJBQVksR0FBd0Isd0JBQXdCLENBQUM7QUFDeEUsUUFHSSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUNqRCxJQUFFLENBQUM7QUFDSCxJQUNFLFdBQVcsQ0FBQyxPQUFzQjtBQUFJLFFBQ3BDLElBQUksT0FBTyxDQUFDLFlBQVksRUFBRTtBQUM5QixZQUFNLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUNuRSxTQUFLO0FBQ0wsSUFBRSxDQUFDO0FBQ0g7b0RBbkJDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsbUJBQW1CO09BQzdCLFFBQVEsRUFBRSxpQkFBaUIsa0JBQzNCLFFBQVEsRUFBRSw0RkFBNEYsa0JBQ3RHLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNLGNBQ2hEOzs7OytHQUNJO0FBQUM7QUFBb0Q7QUFDakIsMkJBQXRDLEtBQUs7QUFBSTs7Ozs7Ozs7Ozs7b0JBQUU7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpSZXNpemVEaXJlY3Rpb24gfSBmcm9tICcuL3Jlc2l6ZS1oYW5kbGUuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfUkVTSVpFX0RJUkVDVElPTjogTnpSZXNpemVEaXJlY3Rpb25bXSA9IFtcbiAgJ2JvdHRvbVJpZ2h0JyxcbiAgJ3RvcFJpZ2h0JyxcbiAgJ2JvdHRvbUxlZnQnLFxuICAndG9wTGVmdCcsXG4gICdib3R0b20nLFxuICAncmlnaHQnLFxuICAndG9wJyxcbiAgJ2xlZnQnXG5dO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei1yZXNpemUtaGFuZGxlcycsXG4gIGV4cG9ydEFzOiAnbnpSZXNpemVIYW5kbGVzJyxcbiAgdGVtcGxhdGU6IGAgPG56LXJlc2l6ZS1oYW5kbGUgKm5nRm9yPVwibGV0IGRpciBvZiBkaXJlY3Rpb25zXCIgW256RGlyZWN0aW9uXT1cImRpclwiPjwvbnotcmVzaXplLWhhbmRsZT4gYCxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTnpSZXNpemVIYW5kbGVzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgbnpEaXJlY3Rpb25zOiBOelJlc2l6ZURpcmVjdGlvbltdID0gREVGQVVMVF9SRVNJWkVfRElSRUNUSU9OO1xuICBkaXJlY3Rpb25zOiBTZXQ8TnpSZXNpemVEaXJlY3Rpb24+O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZGlyZWN0aW9ucyA9IG5ldyBTZXQodGhpcy5uekRpcmVjdGlvbnMpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLm56RGlyZWN0aW9ucykge1xuICAgICAgdGhpcy5kaXJlY3Rpb25zID0gbmV3IFNldChjaGFuZ2VzLm56RGlyZWN0aW9ucy5jdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgfVxufVxuIl19