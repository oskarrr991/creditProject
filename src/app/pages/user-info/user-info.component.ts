import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreditInfoStorageService } from '../../global/services/credit-info-storage.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  userForm: FormGroup;
  submitted = false;
  tmpProgress = 25;
  private userPattern = '^[a-zA-Z ]+$';

  get progress() { return this.tmpProgress; }
  get fields() { return this.userForm.controls; }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private CreditInfoStorageService : CreditInfoStorageService
  ) { }

   createForm() {
    this.userForm = this.fb.group({
      userFullName: ['', [Validators.required, Validators.pattern(this.userPattern) ]]
    });
  }

  onSubmit() {
   this.submitted = true;
   if (this.userForm.invalid) { return; }

   this.CreditInfoStorageService.userNameChange(this.userForm.value.userFullName);
   this.router.navigate(['/salary']);
  }

  ngOnInit() {
   this.createForm();
  }
}
