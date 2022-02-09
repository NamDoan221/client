/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CdkTreeNodePadding } from '@angular/cdk/tree';
import { Directive, Input } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export class NzTreeNodePaddingDirective extends CdkTreeNodePadding {
    constructor() {
        super(...arguments);
        this._indent = 24;
    }
    get level() {
        return this._level;
    }
    set level(value) {
        this._setLevelInput(value);
    }
    get indent() {
        return this._indent;
    }
    set indent(indent) {
        this._setIndentInput(indent);
    }
}
NzTreeNodePaddingDirective.ɵfac = function NzTreeNodePaddingDirective_Factory(t) { return ɵNzTreeNodePaddingDirective_BaseFactory(t || NzTreeNodePaddingDirective); };
NzTreeNodePaddingDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: NzTreeNodePaddingDirective, selectors: [["", "nzTreeNodePadding", ""]], inputs: { level: ["nzTreeNodePadding", "level"], indent: ["nzTreeNodePaddingIndent", "indent"] }, features: [ɵngcc0.ɵɵProvidersFeature([{ provide: CdkTreeNodePadding, useExisting: NzTreeNodePaddingDirective }]), ɵngcc0.ɵɵInheritDefinitionFeature] });
NzTreeNodePaddingDirective.propDecorators = {
    level: [{ type: Input, args: ['nzTreeNodePadding',] }],
    indent: [{ type: Input, args: ['nzTreeNodePaddingIndent',] }]
};
const ɵNzTreeNodePaddingDirective_BaseFactory = /*@__PURE__*/ ɵngcc0.ɵɵgetInheritedFactory(NzTreeNodePaddingDirective);
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzTreeNodePaddingDirective, [{
        type: Directive,
        args: [{
                selector: '[nzTreeNodePadding]',
                providers: [{ provide: CdkTreeNodePadding, useExisting: NzTreeNodePaddingDirective }]
            }]
    }], null, { level: [{
            type: Input,
            args: ['nzTreeNodePadding']
        }], indent: [{
            type: Input,
            args: ['nzTreeNodePaddingIndent']
        }] }); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFkZGluZy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY29tcG9uZW50cy90cmVlLXZpZXcvcGFkZGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBRUgsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDdkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTWpELE1BQU0sT0FBTywwQkFBOEIsU0FBUSxrQkFBcUI7QUFDeEUsSUFMQTtBQUNHO0FBQTZCLFFBSTlCLFlBQU8sR0FBRyxFQUFFLENBQUM7QUFDZixJQWdCQSxDQUFDO0FBQ0QsSUFoQkUsSUFDSSxLQUFLO0FBQUssUUFDWixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7QUFDdkIsSUFBRSxDQUFDO0FBQ0gsSUFBRSxJQUFJLEtBQUssQ0FBQyxLQUFhO0FBQ3pCLFFBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMvQixJQUFFLENBQUM7QUFDSCxJQUNFLElBQ0ksTUFBTTtBQUFLLFFBQ2IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0FBQ3hCLElBQUUsQ0FBQztBQUNILElBQUUsSUFBSSxNQUFNLENBQUMsTUFBdUI7QUFDcEMsUUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ2pDLElBQUUsQ0FBQztBQUNIO3NEQXRCQyxTQUFTLFNBQUMsa0JBQ1QsUUFBUSxFQUFFLHFCQUFxQixrQkFDL0IsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUU7YUFBa0IsRUFBRSxXQUFXLEVBQUUsMEJBQTBCLEVBQUUsQ0FBQyxjQUN0Riw4VEFDSTtBQUFDO0FBQThDLG9CQUdqRCxLQUFLLFNBQUMsbUJBQW1CO0FBQ3ZCLHFCQU9GLEtBQUssU0FBQyx5QkFBeUI7QUFDOUI7Ozs7Ozs7Ozs7Ozs7O29CQUFFO0FBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBDZGtUcmVlTm9kZVBhZGRpbmcgfSBmcm9tICdAYW5ndWxhci9jZGsvdHJlZSc7XG5pbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuelRyZWVOb2RlUGFkZGluZ10nLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IENka1RyZWVOb2RlUGFkZGluZywgdXNlRXhpc3Rpbmc6IE56VHJlZU5vZGVQYWRkaW5nRGlyZWN0aXZlIH1dXG59KVxuZXhwb3J0IGNsYXNzIE56VHJlZU5vZGVQYWRkaW5nRGlyZWN0aXZlPFQ+IGV4dGVuZHMgQ2RrVHJlZU5vZGVQYWRkaW5nPFQ+IHtcbiAgX2luZGVudCA9IDI0O1xuXG4gIEBJbnB1dCgnbnpUcmVlTm9kZVBhZGRpbmcnKVxuICBnZXQgbGV2ZWwoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fbGV2ZWw7XG4gIH1cbiAgc2V0IGxldmVsKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9zZXRMZXZlbElucHV0KHZhbHVlKTtcbiAgfVxuXG4gIEBJbnB1dCgnbnpUcmVlTm9kZVBhZGRpbmdJbmRlbnQnKVxuICBnZXQgaW5kZW50KCk6IG51bWJlciB8IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2luZGVudDtcbiAgfVxuICBzZXQgaW5kZW50KGluZGVudDogbnVtYmVyIHwgc3RyaW5nKSB7XG4gICAgdGhpcy5fc2V0SW5kZW50SW5wdXQoaW5kZW50KTtcbiAgfVxufVxuIl19