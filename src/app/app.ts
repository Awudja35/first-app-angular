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
    @if (isLoggedIn) {
      <p><app-user /> is logged in</p>
    } @else {
      <p>check password or username!!!</p>
    }
  `,
  imports: [User],
})
export class App {
  isLoggedIn = false;
}
