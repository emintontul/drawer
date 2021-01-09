import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable()
export class MetDrawerService {

  isActive: boolean = false;
  drawerVisibilityChange: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.drawerVisibilityChange.subscribe((value) => {
      this.isActive = value
    });
  }

  showDrawer() {
    this.drawerVisibilityChange.next(true);
  }
  hideDrawer() {
    this.drawerVisibilityChange.next(false);
  }
  toggleDrawer() {
    this.drawerVisibilityChange.next(!this.isActive);
  }

}