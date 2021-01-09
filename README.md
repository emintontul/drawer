# Drawer

This is a basic drawer component for angular.

## Installation

```bash
npm i @emintontul/drawer
```

## Usage
You'll need to add `MetDrawerModule` to your application module.
```typescript
import { MetDrawerModule, MetDrawerService } from '@emintontul/drawer';
...

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MetDrawerModule,
    ...
  ],
  providers: [
      MetDrawerService,
      ...
    ],
  bootstrap: [AppComponent]
})

export class AppModule {
}

```
Add the `met-drawer` attribute:
```typescript
import { Button, MetDrawerService } from '@emintontul/drawer';
@Component({
  selector: 'sample',
  template:`
  <met-drawer [isActive]="isDrawerActive" [buttons]="buttonArray" [title]="'Drawer Title'">
    HTML or something goes here...
  </met-drawer>
  `
})
class SampleDrawer {
  isDrawerActive: boolean = false;
  buttonArray: Button[] = new Array<Button>();
  constructor(private drawerService: MetDrawerService){
    this.buttonArray.push({text: "Save", class: "btn btn-primary", callFunction: this.someFunction});
  }
  showDrawer(){
      this.drawer.showDrawer();
  }
  someFunction(){
      ...
  }
}
```
That's it! Now you can use drawer.
