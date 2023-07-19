import { NgModule } from "@angular/core";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CommonModule } from "@angular/common";
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
    declarations: [
      NavbarComponent,
      LoaderComponent
  ],
    imports: [
      CommonModule
    ],
    exports: [
        NavbarComponent,
        LoaderComponent
    ],
    bootstrap: []
  })

  export class SharedModule { }