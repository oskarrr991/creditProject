import { Component, OnInit } from '@angular/core';
import { CreditInfoStorageService } from '../../global/services/credit-info-storage.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  tmpProgress = 100;
  get progress() { return this.tmpProgress; }

  public creditAmount = this.CreditInfoStorageService.getcreditAmount();
  public creditTerm = this.CreditInfoStorageService.getcreditTerm();
  public userName = this.CreditInfoStorageService.getUserName();
  public salary = this.CreditInfoStorageService.getSalary();
  public workedTime = this.CreditInfoStorageService.getWorkedTime();

  constructor(private CreditInfoStorageService : CreditInfoStorageService) { }

  ngOnInit() {
  }
}
