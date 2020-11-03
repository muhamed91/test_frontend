import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {


  effizoLogo = 'assets/img/logo.svg';
  effizoCover = 'assets/img/cover.png';

  public showUnderList:boolean;

  constructor() { 
    this.showUnderList = true;
  }

  ngOnInit(): void {
  }

}
