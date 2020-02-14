import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { ErrorBusiness } from '../model/error-business';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

  errors: ErrorBusiness;
  personForm: FormGroup;
  isLoadingResults = false;
  constructor(private router: Router, private api: ApiService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.personForm = this.formBuilder.group({
      name : [null, Validators.required],
      sexo : [null, null],
      email : [null, null],
      dateBorn : new FormControl('', [Validators.required]),
      naturalness : [null, null],
      nationality : [null, null],
      cpf : [null, [Validators.minLength(11), Validators.maxLength(14)]],
    });
  }

  formatCpf() {
    let cpf: string = this.personForm.controls['cpf'].value;
    if ( cpf != null && cpf.length > 10 && cpf.length < 14 
        && !(cpf.includes('.') || cpf.includes('-'))){
      cpf = cpf.substring(0,3) + '.' + cpf.substring(3,6) 
            + '.' + cpf.substring(6,9) + '-' + cpf.substring(9);
    }
    this.personForm.controls['cpf'].setValue(cpf);
  }

  addPerson() {
    this.api.addPerson(this.personForm.getRawValue())
      .subscribe(res => {
          const id = res.id;
          this.router.navigate(['/person-detail', id]);
        }, (err) => {
          this.errors = err;
        });
  }
}
