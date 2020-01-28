import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreditInfoStorageService } from '../../global/services/credit-info-storage.service';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent implements OnInit {

  creditForm: FormGroup;
  submitted = false;
  tmpProgress = 0;
  tmpMinTerm = 6;
  tmpMaxTerm = 36;
  tmpMincredit = 1000;
  tmpMaxcredit = 20000;
  tmpTerm = [
      {
        term: this.tmpMinTerm,
        name: '6 m.'
      },
      {
        term: 12,
        name: '12 m.'
      },
      {
        term: 24,
        name: '24 m.'
      },
      {
        term: this.tmpMaxTerm,
        name: '36 m.'
      }
  ];
  private ifSliced = false;
  private tmpTermArr: any;

  get progress() { return this.tmpProgress; }
  get fields() { return this.creditForm.controls; }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private CreditInfoStorageService: CreditInfoStorageService
    ) { }

  checkcreditAmount($event) {
    if ($event > (this.tmpMincredit * 5) && !this.ifSliced ) {
      this.tmpTermArr = this.tmpTerm[0];
      this.tmpTerm.splice(0, 1);
      this.ifSliced = true;
    }

    if ($event < (this.tmpMincredit * 5) && this.ifSliced && this.tmpTermArr) {
       this.tmpTerm.unshift(this.tmpTermArr);
       this.ifSliced = false;
    }
  }

   createForm() {
    this.creditForm = this.fb.group({
      creditAmount: ['', [Validators.required, Validators.min(this.tmpMincredit), Validators.max(this.tmpMaxcredit)] ],
      creditTerm: ['', [Validators.required, Validators.min(6), Validators.max(this.tmpMaxTerm)]]
    });
  }

onSubmit() {
   this.submitted = true;
   if (this.creditForm.invalid) { return; }

   this.CreditInfoStorageService.creditAmountChange(this.creditForm.value.creditAmount);
   this.CreditInfoStorageService.creditTermChange(this.creditForm.value.creditTerm);
   this.router.navigate(['/userinfo']);
}

ngOnInit() {
   this.createForm();
}
}