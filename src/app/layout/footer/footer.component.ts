import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  tmpDate = new Date();

  get currentDate() {
    return this.tmpDate;
  }

  constructor(private router: Router ) { }

  ngOnInit() {
  }
}
