import { Component, Input } from "@angular/core";
import { Example } from "../../dto/Example"

@Component({
  selector: "h21-mat-component-example-viewer",
  templateUrl: "./h21-mat-component-example-viewer.component.html",
  styleUrls: [ "./h21-mat-component-example-viewer.component.css" ]
})

export class H21MatComponentExampleViewerComponent {

  @Input() example : Example;

}

