import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <button (mouseenter)="showSecretMessage = true" (mouseleave)="showSecretMessage = false">
      Hover over me
    </button>

    @if (showSecretMessage) {
      <p>Hello! You discovered the hidden message!</p>
    }
  `,
})
export class App {
  showSecretMessage = false;
}
