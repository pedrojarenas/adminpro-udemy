import { Component, OnInit } from '@angular/core';

declare function init_plugins();

@Component({
  selector: 'app-dashbouard',
  templateUrl: './dashbouard.component.html',
  styles: []
})
export class DashbouardComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    init_plugins();
  }

}
