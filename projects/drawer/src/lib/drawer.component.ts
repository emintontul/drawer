import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Button } from './button';


@Component({
  selector: 'met-drawer',
  styleUrls: ['drawer.scss'],
  template: `
  <div class="met-drawer {{isActive == true ? 'active' : ''}} ">
    <div class="met-drawer-body">
        <form action="">
            <div class="drawer-heading">
                <i (click)="isActive = false;" class="la la-arrow-right"></i>
                <div *ngFor="let button of buttons">
                    <button type="{{ button.type }}" class="{{ button.class }}" (click)="button.callFunction">{{
                        button.text }}</button>
                </div>
            </div>
            <div class="field-container">
                <ng-content>
                </ng-content>
            </div>
        </form>
    </div>
</div>
<div class="drawer-mask" *ngIf="isActive" (click)="isActive = false;"></div>
`
})

export class METDrawerComponent implements OnInit {
  @Input() isActive = false;
  @Input() buttons = new Array<Button>();

  ngOnInit() {
    // set page if items array isn't empty
  }

  public showDrawer() {
    this.isActive = true;
  }
  public hideDrawer() {
    this.isActive = false;
  }
}
