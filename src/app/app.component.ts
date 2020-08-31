import { Component, OnInit } from '@angular/core';
import { UIService } from './services/ui.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isMobile: boolean;
  showNavDialog = false;
  constructor(
    private uiService: UIService,
  ) { }

  ngOnInit(): void {
    this.uiService.isMobileSub.subscribe(res => {
      this.isMobile = res;
    });
  }

  resized() {
    this.uiService.getIsMobileView();
  }
  openNav() {
    this.showNavDialog = !this.showNavDialog;
  }
}
