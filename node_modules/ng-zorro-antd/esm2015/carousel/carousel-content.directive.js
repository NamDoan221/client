/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, ElementRef, Renderer2 } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export class NzCarouselContentDirective {
    constructor(elementRef, renderer) {
        this.renderer = renderer;
        this._active = false;
        this.el = elementRef.nativeElement;
        this.renderer.addClass(elementRef.nativeElement, 'slick-slide');
    }
    set isActive(value) {
        this._active = value;
        if (this.isActive) {
            this.renderer.addClass(this.el, 'slick-active');
        }
        else {
            this.renderer.removeClass(this.el, 'slick-active');
        }
    }
    get isActive() {
        return this._active;
    }
}
NzCarouselContentDirective.ɵfac = function NzCarouselContentDirective_Factory(t) { return new (t || NzCarouselContentDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2)); };
NzCarouselContentDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzCarouselContentDirective, selectors: [["", "nz-carousel-content", ""]], exportAs: ["nzCarouselContent"] });
NzCarouselContentDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzCarouselContentDirective, [{
        type: Directive,
        args: [{
                selector: '[nz-carousel-content]',
                exportAs: 'nzCarouselContent'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }, { type: ɵngcc0.Renderer2 }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwtY29udGVudC5kaXJlY3RpdmUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvY2Fyb3VzZWwvY2Fyb3VzZWwtY29udGVudC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUVILE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFNakUsTUFBTSxPQUFPLDBCQUEwQjtBQUN2QyxJQWlCRSxZQUFZLFVBQXNCLEVBQVUsUUFBbUI7QUFDakUsUUFEOEMsYUFBUSxHQUFSLFFBQVEsQ0FBVztBQUFDLFFBRnhELFlBQU8sR0FBRyxLQUFLLENBQUM7QUFDMUIsUUFFSSxJQUFJLENBQUMsRUFBRSxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUM7QUFDdkMsUUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBQ3BFLElBQUUsQ0FBQztBQUNILElBbkJFLElBQUksUUFBUSxDQUFDLEtBQWM7QUFDN0IsUUFBSSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztBQUN6QixRQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtBQUN2QixZQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsY0FBYyxDQUFDLENBQUM7QUFDdEQsU0FBSztBQUFDLGFBQUs7QUFDWCxZQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsY0FBYyxDQUFDLENBQUM7QUFDekQsU0FBSztBQUNMLElBQUUsQ0FBQztBQUNILElBQ0UsSUFBSSxRQUFRO0FBQUssUUFDZixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDeEIsSUFBRSxDQUFDO0FBQ0g7c0RBbkJDLFNBQVMsU0FBQyxrQkFDVCxRQUFRLEVBQUUsdUJBQXVCLGtCQUNqQyxRQUFRLEVBQUUsbUJBQW1CLGNBQzlCO2dMQUNJO0FBQUM7QUFDVSxZQVBJLFVBQVU7QUFBSSxZQUFGLFNBQVM7QUFBRzs7Ozs7Ozt1R0FBRTtBQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW256LWNhcm91c2VsLWNvbnRlbnRdJyxcbiAgZXhwb3J0QXM6ICduekNhcm91c2VsQ29udGVudCdcbn0pXG5leHBvcnQgY2xhc3MgTnpDYXJvdXNlbENvbnRlbnREaXJlY3RpdmUge1xuICByZWFkb25seSBlbDogSFRNTEVsZW1lbnQ7XG5cbiAgc2V0IGlzQWN0aXZlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fYWN0aXZlID0gdmFsdWU7XG4gICAgaWYgKHRoaXMuaXNBY3RpdmUpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbCwgJ3NsaWNrLWFjdGl2ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwsICdzbGljay1hY3RpdmUnKTtcbiAgICB9XG4gIH1cblxuICBnZXQgaXNBY3RpdmUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZTtcbiAgfVxuXG4gIHByaXZhdGUgX2FjdGl2ZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICAgIHRoaXMuZWwgPSBlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdzbGljay1zbGlkZScpO1xuICB9XG59XG4iXX0=