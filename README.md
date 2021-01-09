# Drawer

This is a basic drawer component for angular.

## Installation

```bash
npm i @emintontul/drawer
```

## Usage
You'll need to add `MetDrawerModule` to your application module.
```typescript
import { MetDrawerModule } from '@emintontul/drawer';
...

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    DragScrollModule,
    ...
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}

```
Add the `drag-scroll` attribute to a scrollable element:
```typescript
@Component({
  selector: 'sample',
  template:`
  <met-drawer [isActive]="isDrawerActive" [buttons]="buttonArray">
    HTML or something goes here...
  </met-drawer>
  `
})
class SampleDrawer {
  isDrawerActive: boolean;
  buttonArray: Button[] = new Array<Button>();
}
```
That's it! Now you can use drawer.
