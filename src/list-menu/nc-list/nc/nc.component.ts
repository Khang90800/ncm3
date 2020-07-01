import { Component, Input } from "@angular/core";
import { NcService } from '../../../app/services/nc.service';

@Component({
  selector: "app-nc",
  templateUrl: "./nc.component.html",
  styleUrls: ["./nc.component.css"]
})
export class NcComponent {

  @Input() ncId: string;
  @Input() ncLabel: string;

  constructor(private ncService: NcService) {}
}