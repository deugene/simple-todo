import { Component } from '@angular/core';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private authService: AuthService) { }
  private title = 'Another 1500 Todo App';

  private pages = [
    { name: 'todos', active: true },
    { name: 'about', active: false },
  ];

  private navSwitch(target: string): void {
    for (let page of this.pages) {
      if (page.name == target) page.active = true;
      else page.active = false;
    }
  }
  private activePage(): { name: string, active: boolean } {
    return this.pages.find(page => page.active);
  }
  private isActive(pageName: string): boolean {
    return this.pages.find(page => page.name === pageName).active;
  }
}
