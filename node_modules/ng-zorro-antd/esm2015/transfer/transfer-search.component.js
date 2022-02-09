/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/forms';
import * as ɵngcc2 from '@angular/common';
import * as ɵngcc3 from 'ng-zorro-antd/core/transition-patch';
import * as ɵngcc4 from 'ng-zorro-antd/icon';

const _c0 = ["nz-transfer-search", ""];
function NzTransferSearchComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "a", 3);
    ɵngcc0.ɵɵlistener("click", function NzTransferSearchComponent_a_1_Template_a_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r4); const ctx_r3 = ɵngcc0.ɵɵnextContext(); return ctx_r3._clear(); });
    ɵngcc0.ɵɵelement(1, "i", 4);
    ɵngcc0.ɵɵelementEnd();
} }
function NzTransferSearchComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 5);
    ɵngcc0.ɵɵelement(1, "i", 6);
    ɵngcc0.ɵɵelementEnd();
} }
const _c1 = function (a0) { return { "ant-input-disabled": a0 }; };
export class NzTransferSearchComponent {
    // endregion
    constructor(cdr) {
        this.cdr = cdr;
        this.disabled = false;
        this.valueChanged = new EventEmitter();
        this.valueClear = new EventEmitter();
    }
    _handle() {
        this.valueChanged.emit(this.value);
    }
    _clear() {
        if (this.disabled) {
            return;
        }
        this.value = '';
        this.valueClear.emit();
    }
    ngOnChanges() {
        this.cdr.detectChanges();
    }
}
NzTransferSearchComponent.ɵfac = function NzTransferSearchComponent_Factory(t) { return new (t || NzTransferSearchComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
NzTransferSearchComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NzTransferSearchComponent, selectors: [["", "nz-transfer-search", ""]], inputs: { disabled: "disabled", value: "value", placeholder: "placeholder" }, outputs: { valueChanged: "valueChanged", valueClear: "valueClear" }, exportAs: ["nzTransferSearch"], features: [ɵngcc0.ɵɵNgOnChangesFeature], attrs: _c0, decls: 4, vars: 8, consts: [[1, "ant-input", "ant-transfer-list-search", 3, "ngModel", "disabled", "placeholder", "ngClass", "ngModelChange"], ["class", "ant-transfer-list-search-action", 3, "click", 4, "ngIf", "ngIfElse"], ["def", ""], [1, "ant-transfer-list-search-action", 3, "click"], ["nz-icon", "", "nzType", "close-circle"], [1, "ant-transfer-list-search-action"], ["nz-icon", "", "nzType", "search"]], template: function NzTransferSearchComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "input", 0);
        ɵngcc0.ɵɵlistener("ngModelChange", function NzTransferSearchComponent_Template_input_ngModelChange_0_listener($event) { return ctx.value = $event; })("ngModelChange", function NzTransferSearchComponent_Template_input_ngModelChange_0_listener() { return ctx._handle(); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(1, NzTransferSearchComponent_a_1_Template, 2, 0, "a", 1);
        ɵngcc0.ɵɵtemplate(2, NzTransferSearchComponent_ng_template_2_Template, 2, 0, "ng-template", null, 2, ɵngcc0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = ɵngcc0.ɵɵreference(3);
        ɵngcc0.ɵɵproperty("ngModel", ctx.value)("disabled", ctx.disabled)("placeholder", ctx.placeholder)("ngClass", ɵngcc0.ɵɵpureFunction1(6, _c1, ctx.disabled));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.value && ctx.value.length > 0)("ngIfElse", _r1);
    } }, directives: [ɵngcc1.DefaultValueAccessor, ɵngcc1.NgControlStatus, ɵngcc1.NgModel, ɵngcc2.NgClass, ɵngcc2.NgIf, ɵngcc3.ɵNzTransitionPatchDirective, ɵngcc4.NzIconDirective], encapsulation: 2, changeDetection: 0 });
NzTransferSearchComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
NzTransferSearchComponent.propDecorators = {
    placeholder: [{ type: Input }],
    value: [{ type: Input }],
    disabled: [{ type: Input }],
    valueChanged: [{ type: Output }],
    valueClear: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTransferSearchComponent, [{
        type: Component,
        args: [{
                selector: '[nz-transfer-search]',
                exportAs: 'nzTransferSearch',
                preserveWhitespaces: false,
                template: `
    <input
      [(ngModel)]="value"
      (ngModelChange)="_handle()"
      [disabled]="disabled"
      [placeholder]="placeholder"
      class="ant-input ant-transfer-list-search"
      [ngClass]="{ 'ant-input-disabled': disabled }"
    />
    <a *ngIf="value && value.length > 0; else def" class="ant-transfer-list-search-action" (click)="_clear()">
      <i nz-icon nzType="close-circle"></i>
    </a>
    <ng-template #def>
      <span class="ant-transfer-list-search-action"><i nz-icon nzType="search"></i></span>
    </ng-template>
  `,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { disabled: [{
            type: Input
        }], valueChanged: [{
            type: Output
        }], valueClear: [{
            type: Output
        }], value: [{
            type: Input
        }], placeholder: [{
            type: Input
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmZXItc2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy90cmFuc2Zlci90cmFuc2Zlci1zZWFyY2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QnZCLE1BQU0sT0FBTyx5QkFBeUI7QUFBRyxJQVV2QyxZQUFZO0FBQ2QsSUFDRSxZQUFvQixHQUFzQjtBQUFJLFFBQTFCLFFBQUcsR0FBSCxHQUFHLENBQW1CO0FBQUMsUUFQbEMsYUFBUSxHQUFZLEtBQUssQ0FBQztBQUNyQyxRQUNxQixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7QUFDL0QsUUFBcUIsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7QUFDM0QsSUFHK0MsQ0FBQztBQUNoRCxJQUNFLE9BQU87QUFBSyxRQUNWLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN2QyxJQUFFLENBQUM7QUFDSCxJQUNFLE1BQU07QUFBSyxRQUNULElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtBQUN2QixZQUFNLE9BQU87QUFDYixTQUFLO0FBQ0wsUUFBSSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztBQUNwQixRQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDM0IsSUFBRSxDQUFDO0FBQ0gsSUFDRSxXQUFXO0FBQUssUUFDZCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0FBQzdCLElBQUUsQ0FBQztBQUNIO3FEQXBEQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLHNCQUFzQixrQkFDaEMsUUFBUSxFQUFFLGtCQUFrQjtJQUM1QixtQkFBbUIsRUFBRSxLQUFLLGtCQUMxQixRQUFRLEVBQUUsZ2lCQWVULGtCQUNELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLGtCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTSxjQUNoRDs7Ozs7Ozs7Ozs7Nk5BQ0k7QUFBQztBQUFtRCxZQWhDdkQsaUJBQWlCO0FBQ2xCO0FBQUc7QUFHTywwQkErQlIsS0FBSztBQUFLLG9CQUNWLEtBQUs7QUFBSyx1QkFDVixLQUFLO0FBQUssMkJBRVYsTUFBTTtBQUFLLHlCQUNYLE1BQU07QUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbbnotdHJhbnNmZXItc2VhcmNoXScsXG4gIGV4cG9ydEFzOiAnbnpUcmFuc2ZlclNlYXJjaCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxpbnB1dFxuICAgICAgWyhuZ01vZGVsKV09XCJ2YWx1ZVwiXG4gICAgICAobmdNb2RlbENoYW5nZSk9XCJfaGFuZGxlKClcIlxuICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXG4gICAgICBjbGFzcz1cImFudC1pbnB1dCBhbnQtdHJhbnNmZXItbGlzdC1zZWFyY2hcIlxuICAgICAgW25nQ2xhc3NdPVwieyAnYW50LWlucHV0LWRpc2FibGVkJzogZGlzYWJsZWQgfVwiXG4gICAgLz5cbiAgICA8YSAqbmdJZj1cInZhbHVlICYmIHZhbHVlLmxlbmd0aCA+IDA7IGVsc2UgZGVmXCIgY2xhc3M9XCJhbnQtdHJhbnNmZXItbGlzdC1zZWFyY2gtYWN0aW9uXCIgKGNsaWNrKT1cIl9jbGVhcigpXCI+XG4gICAgICA8aSBuei1pY29uIG56VHlwZT1cImNsb3NlLWNpcmNsZVwiPjwvaT5cbiAgICA8L2E+XG4gICAgPG5nLXRlbXBsYXRlICNkZWY+XG4gICAgICA8c3BhbiBjbGFzcz1cImFudC10cmFuc2Zlci1saXN0LXNlYXJjaC1hY3Rpb25cIj48aSBuei1pY29uIG56VHlwZT1cInNlYXJjaFwiPjwvaT48L3NwYW4+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTnpUcmFuc2ZlclNlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIC8vIHJlZ2lvbjogZmllbGRzXG5cbiAgQElucHV0KCkgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHZhbHVlPzogc3RyaW5nO1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKSByZWFkb25seSB2YWx1ZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHZhbHVlQ2xlYXIgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgLy8gZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIF9oYW5kbGUoKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZUNoYW5nZWQuZW1pdCh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIF9jbGVhcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnZhbHVlID0gJyc7XG4gICAgdGhpcy52YWx1ZUNsZWFyLmVtaXQoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxufVxuIl19