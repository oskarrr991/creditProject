import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

@Input()
  progress: number;

  get progresVal() {
    if (this.progress) {
      return this.progress;
    }
    return 0;
  }

  constructor() { }

  ngOnInit() {
  }
}
