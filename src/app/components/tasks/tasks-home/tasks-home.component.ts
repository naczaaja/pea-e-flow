import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
    this.feedData();
  }

  feedData() {
    const dummy: Task[] = [
      {
        name: 'Naczaaja',
        date: '05/10/2565',
        status: 'A1',
        image: 'https://www.art-tech.co.th/wp-content/uploads/2019/04/606bannerhome.png'
      },
      {
        name: 'Naczaaja',
        date: '05/10/2565',
        status: 'A1',
        image: 'https://www.art-tech.co.th/wp-content/uploads/2019/04/606bannerhome.png'
      },
      {
        name: 'Naczaaja',
        date: '05/10/2565',
        status: 'A1',
        image: 'https://www.art-tech.co.th/wp-content/uploads/2019/04/606bannerhome.png'
      },
      {
        name: 'Naczaaja',
        date: '05/10/2565',
        status: 'A1',
        image: 'https://www.art-tech.co.th/wp-content/uploads/2019/04/606bannerhome.png'
      },
      {
        name: 'Naczaaja',
        date: '05/10/2565',
        status: 'A1',
        image: 'https://www.art-tech.co.th/wp-content/uploads/2019/04/606bannerhome.png'
      }
    ]
    this.dataSource.data = dummy
  }
}
