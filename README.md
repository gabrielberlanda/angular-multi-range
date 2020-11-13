## Range component

Componente para range de seleção de periodo (valor minímo e máximo)

### Tabela de propriedades

| Prop        | Tipo    | Valor padrão | Descrição                            |  
|-------------|---------|--------------|--------------------------------------|
| min         | number  | 0            | Valor mínimo                         |
| max         | number  | 100          | Valor máximo                         |
| label       | string  | ""           | Rótulo do campo                      |
| disabled    | boolean | false        | Desabilita a interação do componente |
| optional    | boolean | true         | Informa que o componente é opcional  |
| hide-values | boolean | false        | Esconde os valores do componente     |

#### Interface de representação de valor do component

O model deste componente é representado pela seguinte interface:

```typescript
  interface IRangeComponentValue {
      min: number;
      max: number;
  }
```
### Utilização em formulários

Este componente pode ser utilizado em Template Driven e Reactive Forms informando tanto o ngModel ou o formControlName.



Para utilização em template driven (ngModel):
```typescript
import { IRangeComponentValue } from './components/range/range.component';

@Component({
  selector: 'app-root',
  template: `<app-range name="meuModel" [(ngModel)]="meuModel"></app-range>`
})
export class AppComponent {
    meuModel: IRangeComponentValue = {
        min: 10,
        max: 50
    };
}
```

Para utilização com formulários reativos:

```typescript
@Component({
  selector: 'app-root',
  template: `
    <form [formGroup]="form">
      <app-range formControlName="reactive"></app-range>
    </form>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      reactive: {
        min: 0,
        max: 50
      }
    });
  }
}
```
