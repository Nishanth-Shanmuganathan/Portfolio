import { UIService } from './../../services/ui.service';
import { Component, OnInit, ViewChild, TemplateRef, ViewContainerRef, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() isMobile: boolean;
  @Input() showNavDialog: boolean;
  @Output() toggleEvent = new EventEmitter<boolean>();
  constructor(
  ) { }

  ngOnInit(): void {
  }

  toggleNav() {
    this.showNavDialog = !this.showNavDialog;
    this.toggleEvent.emit(this.showNavDialog);
  }

}
