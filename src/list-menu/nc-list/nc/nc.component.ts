import { Component, Input } from "@angular/core";

@Component({
  selector: "app-nc",
  templateUrl: "./nc.component.html",
  styleUrls: ["./nc.component.css"]
})
export class NcComponent {

  @Input() ncId: string;
  @Input() ncLabel: string;


  ncProperties = [
    {
      id: '22',
      label: 'hozoei'
    },
    {
      id: '23',
      label: 'ojze'
    },
    {
      id: '24',
      label: 'cnklncs'
    },
  ];

  constructor() {}
}
