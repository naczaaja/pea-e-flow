import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() navToggle = new EventEmitter();
  @Output() sayhi = new EventEmitter<String>();

  notiBadge = 4;

  constructor() { }

  ngOnInit(): void {
  }

  onClickNavToggle(){
    this.navToggle.emit()
    this.sayhi.emit()
  }

}
