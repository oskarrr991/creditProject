import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CreditInfoStorageService } from '../../global/services/credit-info-storage.service';

@Component({
  selector: 'app-working-time',
  templateUrl: './working-time.component.html',
  styleUrls: ['./working-time.component.css']
})
export class WorkingTimeComponent implements OnInit {

workingForm: FormGroup;
  submitted = false;
  tmpProgress = 75;
   private tmpWTime = 3;
   private currentSalary: number;
   private currentAmount: number;
   private currentSalaryMin = 500;
   private currentAmountMin = 10000;
   public SalaryToLow = false;

  get progress() { return this.tmpProgress; }
  get fields() { return this.workingForm.controls; }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private CreditInfoStorageService: CreditInfoStorageService
  ) { }

   createForm() {
    this.workingForm = this.fb.group({
      wTime: ['', [Validators.required, Validators.min(this.tmpWTime)]]
    });
  }

  onSubmit() {
   this.submitted = true;
   if (this.workingForm.invalid) { return; }

   this.CreditInfoStorageService.WorkedTimeChange(this.workingForm.value.wTime);
   this.router.navigate(['/summary']);
  }

  ngOnInit() {
   this.currentSalary = this.CreditInfoStorageService.getSalary();
   this.currentAmount = this.CreditInfoStorageService.getcreditAmount();

   // if atlyginimas < 500 && paskola > 10000
   if (this.currentSalary <= this.currentSalaryMin && this.currentAmount >= this.currentAmountMin) {
     this.SalaryToLow = true;
     } else {
       this.createForm();
      }
  }
}
