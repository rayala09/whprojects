import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers', // element selector

  // selector: '[app-servers]', // attribute selector

  selector: '.app-servers', // class selector
  // templateUrl: './servers.component.html',  // ExternalFile
  template: `
    <app-server></app-server
    ><app-server></app-server>
  `, // InternalTemplate
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

}
