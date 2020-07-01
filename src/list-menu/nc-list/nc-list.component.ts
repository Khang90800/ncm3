import { Component } from '@angular/core';

@Component({
  selector: 'app-nc-list',
  templateUrl: './nc-list.component.html',
  styleUrls: [ './nc-list.component.css' ]
})
export class NcListComponent  {

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
