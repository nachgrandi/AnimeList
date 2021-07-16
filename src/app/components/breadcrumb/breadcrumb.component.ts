import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  @Input() titleParam : string ='';
  public title : string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
