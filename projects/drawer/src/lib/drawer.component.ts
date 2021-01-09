import { Component, Input, OnInit } from '@angular/core';
import { Button } from './button';
import { MetDrawerService } from './drawer.service';


@Component({
  selector: 'met-drawer',
  styleUrls: ['drawer.scss'],
  template: `
  <div class="met-drawer {{isActive == true ? 'active' : ''}} ">
    <div>
        <form action="">
            <div class="drawer-heading">
                <i (click)="hideDrawer()" class="toggle-right">
                  <svg id="Layer" enable-background="new 0 0 64 64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="m37.379 12.552c-.799-.761-2.066-.731-2.827.069-.762.8-.73 2.066.069 2.828l15.342 14.551h-39.963c-1.104 0-2 .896-2 2s.896 2 2 2h39.899l-15.278 14.552c-.8.762-.831 2.028-.069 2.828.393.412.92.62 1.448.62.496 0 .992-.183 1.379-.552l17.449-16.62c.756-.755 1.172-1.759 1.172-2.828s-.416-2.073-1.207-2.862z"/></svg>
                </i>
                <span class="drawer-title">{{title}}</span>
                <div *ngFor="let button of buttons">
                    <button class="{{ button.class }}" (click)="button.callFunction()">{{ button.text }}</button>
                </div>
            </div>
            <div class="field-container">
                <ng-content>
                </ng-content>
            </div>
        </form>
    </div>
</div>
<div class="drawer-mask" *ngIf="isActive" (click)="hideDrawer()"></div>
`
})

export class METDrawerComponent {
  @Input() isActive = false;
  @Input() title: string;
  @Input() buttons = new Array<Button>();
  constructor(private drawerService: MetDrawerService) {
    this.drawerService.drawerVisibilityChange.subscribe(value => {
      this.isActive = value
    });
}
hideDrawer() {
  this.drawerService.drawerVisibilityChange.next(false);
}
}
