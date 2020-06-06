import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';

import { Component, OnInit } from '@angular/core';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  customColumn = 'name';
  defaultColumns = [ 'size', 'kind', 'items' ];
  allColumns = [ this.customColumn, ...this.defaultColumns ];

  dataSource: NbTreeGridDataSource<any>;

  sortColumn: string = '';
  sortDirection: NbSortDirection = NbSortDirection.NONE;

  data: any[] = [
      {
        data: { name: 'Projects', size: '1.8 MB', items: 5, kind: 'dir' },
        children: [
          { data: { name: 'project-1.doc', kind: 'doc', size: '240 KB' } },
          { data: { name: 'project-2.doc', kind: 'doc', size: '290 KB' } },
          {
            data: { name: 'project-3', kind: 'dir', size: '466 KB', items: 3 },
            children: [
              { data: { name: 'project-3A.doc', kind: 'doc', size: '200 KB' } },
              { data: { name: 'project-3B.doc', kind: 'doc', size: '266 KB' } },
              { data: { name: 'project-3C.doc', kind: 'doc', size: '0' } },
            ],
          },
          { data: { name: 'project-4.docx', kind: 'docx', size: '900 KB' } },
        ],
      },
      {
        data: { name: 'Reports', kind: 'dir', size: '400 KB', items: 2 },
        children: [
          {
            data: { name: 'Report 1', kind: 'dir', size: '100 KB', items: 1 },
            children: [
              { data: { name: 'report-1.doc', kind: 'doc', size: '100 KB' } },
            ],
          },
          {
            data: { name: 'Report 2', kind: 'dir', size: '300 KB', items: 2 },
            children: [
              { data: { name: 'report-2.doc', kind: 'doc', size: '290 KB' } },
              { data: { name: 'report-2-note.txt', kind: 'txt', size: '10 KB' } },
            ],
          },
        ],
      },
      {
        data: { name: 'Other', kind: 'dir', size: '109 MB', items: 2 },
        children: [
          { data: { name: 'backup.bkp', kind: 'bkp', size: '107 MB' } },
          { data: { name: 'secret-note.txt', kind: 'txt', size: '2 MB' } },
        ],
      },
    ];

  constructor() { }

  ngOnInit() {
  }
}
