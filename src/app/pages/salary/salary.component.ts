import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CreditInfoStorageService } from '../../global/services/credit-info-storage.service';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent implements OnInit {

  salaryForm: FormGroup;
  submitted = false;
  tmpProgress = 50;
  private tmpMinSalary = 100;

  get progress() { return this.tmpProgress; }
  get fields() { return this.salaryForm.controls; }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private CreditInfoStorageService : CreditInfoStorageService
  ) { }

   createForm() {
    this.salaryForm = this.fb.group({
      salary: ['', [Validators.required, Validators.min(this.tmpMinSalary) ]]
    });
  }

  onSubmit() {
   this.submitted = true;
   if (this.salaryForm.invalid) { return; }

   this.CreditInfoStorageService.SalaryChange(this.salaryForm.value.salary);
   this.router.navigate(['/working-time']);
  }

  ngOnInit() {
   this.createForm();
  }
}
