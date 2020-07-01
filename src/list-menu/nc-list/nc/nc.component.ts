import { Component, Input } from "@angular/core";

@Component({
  selector: "app-nc",
  templateUrl: "./nc.component.html",
  styleUrls: ["./nc.component.css"]
})
export class NcComponent {

  @Input() ncId: string;
  @Input() ncLabel: string;
  
  constructor() {}
}