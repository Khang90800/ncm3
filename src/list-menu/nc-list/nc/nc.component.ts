import { Component, Input, Injectable } from "@angular/core";
import { NcService } from '../../../app/services/nc.service';

@Component({
  selector: "app-nc",
  templateUrl: "./nc.component.html",
  styleUrls: ["./nc.component.css"]
})

@Injectable()
export class NcComponent {

  @Input() ncId: number;
  @Input() ncLabel: string;

  constructor(private ncService: NcService) {}

}