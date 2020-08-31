import { Component, OnInit, ViewChild, TemplateRef, ViewContainerRef, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() isMobile: boolean;
  @Input() showNavDialog: boolean;
  hideLogo: boolean;
  @Output() toggleEvent = new EventEmitter<boolean>();
  constructor(
    private route: Router
  ) { }

  ngOnInit(): void {
    this.route.events.subscribe(res => {
      if (res instanceof NavigationEnd) {
        if (res.url === '/') {
          this.hideLogo = true;
        } else {
          this.hideLogo = false;
        }
      }
    });
  }

  toggleNav() {
    this.showNavDialog = !this.showNavDialog;
    this.toggleEvent.emit(this.showNavDialog);
  }

}
