import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UIService {
  isMobileSub = new BehaviorSubject<boolean>(screen.width <= 700);
  constructor() { }

  getIsMobileView() {
    this.isMobileSub.next(screen.width <= 700);
  }

}
