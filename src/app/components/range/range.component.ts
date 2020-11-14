import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { convertToBoolean } from 'src/app/utils/util';
import { IRangeComponentValue } from './range.value.interface';

const valueDefault: IRangeComponentValue = { min: 0, max: 0 };

/**
 * @description
 * 
 * Componente para range de seleção de periodo (valor minímo e máximo)
 * 
 * @example
 * 
 * <example name="sample-range-basic" title="Exemplo básico">
 *  <file name="sample-range-basic/sample-range-basic.component.html"> </file>
 *  <file name="sample-range-basic/sample-range-basic.component.ts"> </file>
 *  <file name="sample-range-basic/sample-range-basic.component.spect.ts"> </file>
 *  <file name="sample-range-basic/sample-range-basic.component.scss"> </file>
 * </example>
 * 
 * <example name="sample-range-template-driven" title="Exemplo de uso com template driven">
 *  <file name="sample-range-template-driven/sample-range-template-driven.component.html"> </file>
 *  <file name="sample-range-template-driven/sample-range-template-driven.component.ts"> </file>
 *  <file name="sample-range-template-driven/sample-range-template-driven.component.spect.ts"> </file>
 *  <file name="sample-range-template-driven/sample-range-template-driven.component.scss"> </file>
 * </example>
 * 
 * <example name="sample-range-reactive-form" title="Exemplo de uso com reactive form">
 *  <file name="sample-range-reactive-forms/sample-range-reactive-forms.component.html"> </file>
 *  <file name="sample-range-reactive-forms/sample-range-reactive-forms.component.ts"> </file>
 *  <file name="sample-range-reactive-forms/sample-range-reactive-forms.component.spect.ts"> </file>
 *  <file name="sample-range-reactive-forms/sample-range-reactive-forms.component.scss"> </file>
 * </example>
 * 
 */
@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styleUrls: ['./range.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RangeComponent),
      multi: true
    }
  ]
})
export class RangeComponent implements ControlValueAccessor {
  
  private _min?: number = 0;
  private _max?: number = 100;
  private _hideValues?: boolean = false;
  private _optional?: boolean = false;
  private _disabled?: boolean = false;
  private _label?: string = '';
  private _value?: IRangeComponentValue = { ...valueDefault };
  private onChangePropagate: any = null;
  private onTouched: any = null;

  /**
   * @optional 
   * 
   * @description
   * 
   * Define a propriedade de valor mínimo para seleção
   * 
   * @default `0`
   */
  @Input() set min(val: number) {
    if(!isNaN(val)) {
      this._min = parseInt(<any>val, 10);
    } else {
      this._min = 0;
    }
  }

  get min() {
    return this._min;
  }

  /**
   * @optional 
   * 
   * @description 
   * 
   * Define a propriedade de valor máximo para seleção
   * 
   * @default `100`
   */
  @Input() set max(val: number) {
    if(!isNaN(val)) {
      this._max = parseInt(<any>val, 10);
    } else {
      this._max = 100;
    }
  }

  get max() {
    return this._max;
  }

  /**
   * @optional
   * 
   * @description
   * 
   * Se verdadeiro, oculta os labels de valor da seleção
   * 
   * @default `false`
   */
  @Input('hide-values') set hideValues(val: boolean) {
    this._hideValues = convertToBoolean(val);
  }

  get hideValues() {
    return this._hideValues;
  }
  
  /**
   * @optional
   * 
   * @description
   * 
   * Se verdadeiro, torna o campo de seleção opcional e exibe um label informativo
   * 
   * @default `false`
   */
  @Input() set optional(val: boolean) {
    this._optional = convertToBoolean(val);
  }
  
  get optional() {
    return this._optional;
  }

  /**
   * @optional
   * 
   * @description 
   * 
   * Se verdadeiro, desabilita a interação com o component
   * 
   * @default `false`
   */

  @Input() set disabled(val: boolean) {
    this._disabled = convertToBoolean(val);
  }

  get disabled() {
    return this._disabled;
  }

  /**
   * @optional
   * 
   * @description
   * 
   * Rótulo do campo
   * 
   * @default `''`
   */
  @Input() set label(val: string) {
    this._label = val || "";
  }

  get label() {
    return this._label;
  }

  /**
   * @optional
   * 
   * @description
   * 
   * Valor de seleção do component
   * 
   * @default  `min: 0, max: 0`
   */
  set value(val: IRangeComponentValue) {
    this._value = val;
    if(this.onChangePropagate) {
      this.onChangePropagate(this._value);
    }
  }

  get value() {
    return this._value;
  }

  /**
   * @description
   * 
   * Getter utilizado para representar sempre o menor valor selecionado
   * Utilizado para melhor usabilidade, pois pode conter delay de estilo e 
   * exibição quando o valor mínimo ultrapassar durante a seleção dos valores
   */
  get minValue() {
    if(this._value.min <= this._value.max) return this._value.min;
    return this._value.max;
  }

  /**
   * @description
   * 
   * Getter utilizado para representar sempre o maior valor selecionado
   * Utilizado para melhor usabilidade, pois pode conter delay de estilo e 
   * exibição quando o valor mínimo ultrapassar durante a seleção dos valores
   */
  get maxValue() {
    if(this._value.max >= this._value.min) return this._value.max;
    return this._value.min;
  }

  /**
   * @description
   * 
   * Getter utilizado para gerar o estilo de gradiente que será utilizado para 
   * preencher o gap de seleção dos valores dos inputs de range
   */
  get fillSelectRangeStyle() {
    var startval = (this.minValue - this.min) / (this.max - this.min);
    var endval = (this.maxValue - this.min) / (this.max - this.min);

    const fillColor = !this.disabled ? '#2F9ABE' : '#B6BDBF';
    
    const background: string = `-webkit-gradient(
      linear, 
      left top, 
      right top, 
      color-stop(${startval}, #ECEEEE), 
      color-stop(${startval}, ${fillColor}), 
      color-stop(${endval}, ${fillColor}), 
      color-stop(${endval}, #ECEEEE)
    )`;

    const backgroundImage = `-ms-linear-gradient(
      left,
      #ECEEEE 0,
      #ECEEEE ${startval}, 
      ${fillColor} ${startval}, 
      ${fillColor} ${endval}, 
      #ECEEEE ${endval}, 
      #ECEEEE 1
    )`;
    
    return {
      "background": background,
      "background-image": backgroundImage
    };
  }

  constructor() { }

  // Função implementada do ControlValueAccessor
  writeValue(value: IRangeComponentValue): void {
    if (value !== undefined) {
      this.value = value;
    } else {
      this.value = { ...valueDefault };
    }
  }

  // Função implementada do ControlValueAccessor
  // Usada para interceptar as mudanças e não atualizar automaticamente o Model
  registerOnChange(fn: any): void {
    this.onChangePropagate = fn;
  }

  // Função implementada do ControlValueAccessor
  // Usada para interceptar as mudanças e não atualizar automaticamente o Model
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  /**
   * @description
   * 
   * Função implementada para corrigir o valor mínimo/máximo caso os ranges ultrapassem uns aos outros
   */
  onValueChange() {
    if(this.value.min > this.value.max) {
      this.value = {
        min: this.value.max,
        max: this.value.min
      }
    }
  }

}
