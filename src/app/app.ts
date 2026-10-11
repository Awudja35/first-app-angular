import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user',
  template: `{{ username }}`,
})
export class User {
  username = 'Kelvin';
}

@Component({
  selector: 'app-root',
  template: `
    @if (isServerRunning) {
      <p>Server is running</p>
    } @else {
      <p>Server is not running</p>
    }
  `,
})
export class App {
  isServerRunning = false;
}
