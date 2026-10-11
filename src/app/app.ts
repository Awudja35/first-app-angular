import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    @for (an of ANGELS; track an.id) {
      <p>{{ an.name }}</p>
    }
  `,
})
export class App {
  ANGELS = [
    { id: 0, name: `Ella` },
    { id: 1, name: `Daniel` },
    { id: 2, name: `Kenneth` },
    { id: 3, name: `Enock` },
    { id: 4, name: `MSE` },
    { id: 5, name: `Earl` },
    { id: 6, name: `Olive` },
    { id: 7, name: `Anne Cieras` },
  ];
}
