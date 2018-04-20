import { Component, Input } from "@angular/core"
import { BreadCrumb } from "../../dto/BreadCrumb";

@Component({
  selector: 'h21-mat-breadcrumb',
  templateUrl: './h21-mat-breadcrumb.component.html',
  styleUrls: ['./h21-mat-breadcrumb.component.css']
})

export class H21MatBreadCrumbComponent {

  @Input() lastIsLink: boolean = false;
  @Input() showHomeLink: boolean = true;

  breadCrumbs: Array<BreadCrumb> = [
    {label: "test 1", url: "#"},
    {label: "test 2", url: "#"},
    {label: "test 3", url: "#"},
    {label: "test 4", url: "#"}
  ];
}
