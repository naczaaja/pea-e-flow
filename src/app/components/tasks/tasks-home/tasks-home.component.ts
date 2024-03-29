import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Task } from 'src/app/models/product.model';

@Component({
  selector: 'app-tasks-home',
  templateUrl: './tasks-home.component.html',
  styleUrls: ['./tasks-home.component.css']
})
export class TasksHomeComponent implements OnInit {

  displayedColumns = ['image', 'name', 'date', 'status', 'action']

  dataSource = new MatTableDataSource<Task>();

  textSearch?: string;

  @ViewChild(MatSort, { static: true }) sort!: MatSort
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator

    constructor() { }

  ngOnInit(): void {
    this.dataSource.sort = this.sort
    this.dataSource.paginator = this.paginator
    this.feedData();
  }

  feedData() {
    const dummy: Task[] = [
      {
        name: 'นายวณัฐ เกิดศุภชัย',
        date: '05/19/2022',
        status: 'A0',
        image: 'https://www.art-tech.co.th/wp-content/uploads/2019/04/606bannerhome.png'
      },
      {
        name: 'นายบุญช่วย บัวผุด',
        date: '04/29/2022',
        status: 'A1',
        image: 'https://www.art-tech.co.th/wp-content/uploads/2019/04/606bannerhome.png'
      },
      {
        name: 'อบต.กระแสบน(สายเขาผักกูด-เขาวงเวียน)',
        date: '05/10/2022',
        status: 'A1',
        image: 'https://www.art-tech.co.th/wp-content/uploads/2019/04/606bannerhome.png'
      },
      {
        name: 'นายประเวศ มงคลคำ',
        date: '03/10/2022',
        status: 'A2',
        image: 'https://www.art-tech.co.th/wp-content/uploads/2019/04/606bannerhome.png'
      },
      {
        name: 'อบต.ทุ่งควายกิน(ซอยขวัญเมือง)',
        date: '05/05/2022',
        status: 'B1',
        image: 'https://www.art-tech.co.th/wp-content/uploads/2019/04/606bannerhome.png'
      },
      {
        name: 'นายวณัฐ เกิดศุภชัย',
        date: '05/19/2022',
        status: 'A0',
        image: 'https://www.art-tech.co.th/wp-content/uploads/2019/04/606bannerhome.png'
      },
      {
        name: 'นายบุญช่วย บัวผุด',
        date: '04/29/2022',
        status: 'A1',
        image: 'https://www.art-tech.co.th/wp-content/uploads/2019/04/606bannerhome.png'
      },
      {
        name: 'อบต.กระแสบน(สายเขาผักกูด-เขาวงเวียน)',
        date: '05/10/2022',
        status: 'A1',
        image: 'https://www.art-tech.co.th/wp-content/uploads/2019/04/606bannerhome.png'
      },
      {
        name: 'นายประเวศ มงคลคำ',
        date: '03/10/2022',
        status: 'A2',
        image: 'https://www.art-tech.co.th/wp-content/uploads/2019/04/606bannerhome.png'
      },
      {
        name: 'อบต.ทุ่งควายกิน(ซอยขวัญเมือง)',
        date: '05/05/2022',
        status: 'B1',
        image: 'https://www.art-tech.co.th/wp-content/uploads/2019/04/606bannerhome.png'
      }
    ]
    this.dataSource.data = dummy
  }

  search(event: Event | null) {
    let fliterValue = '';
    if (event) {
      fliterValue = (event.target as HTMLInputElement).value;
    }
    this.dataSource.filter = fliterValue.trim().toLowerCase();
  }

  clearSearch() {
    this.textSearch = '';
    this.search(null)
  }
}
