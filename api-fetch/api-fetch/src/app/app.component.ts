import { Component } from '@angular/core';
import { ItemsComponent } from './items/items.component';

@Component({
  selector: 'app-root',
  standalone: true,   // ✅ MUST
  imports: [ItemsComponent],   // ✅ MUST
  template: `<app-items></app-items>`
})
export class AppComponent {}