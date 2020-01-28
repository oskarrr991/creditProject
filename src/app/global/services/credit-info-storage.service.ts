import { Injectable } from '@angular/core';

@Injectable()
export class CreditInfoStorageService {

  creditAmount: number;
  creditTerm: number;
  userName: string;
  salary: number;
  workedTime: number;

  constructor() { }

  creditAmountChange(data: number) {
    this.creditAmount = data;
  }
  creditTermChange(data: number) {
    this.creditTerm = data;
  }
  userNameChange(data: string) {
    this.userName = data;
  }
  SalaryChange(data: number) {
    this.salary = data;
  }
  WorkedTimeChange(data: number) {
    this.workedTime = data;
  }
  getSalary() {
    return this.salary;
  }
  getcreditAmount() {
    return this.creditAmount;
  }
  getcreditTerm() {
    return this.creditTerm;
  }
  getUserName() {
    return this.userName;
  }
  getWorkedTime() {
    return this.workedTime;
  }
}
