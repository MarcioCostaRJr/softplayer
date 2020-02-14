import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';
import { ErrorBusiness } from '../model/error-business';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {
  _ID = 0;
  personForm: FormGroup;
  errors: ErrorBusiness;

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getPerson(this.route.snapshot.params.id);
    this.personForm = this.formBuilder.group({
      name : [null, Validators.required],
      gender : [null, null],
      email : [null, null],
      dateBorn : new FormControl('', [Validators.required]),
      naturalness : [null, null],
      nationality : [null, null],
      cpf : [null, [Validators.minLength(11), Validators.maxLength(14)]]
    });
  }

  getPerson(id: number) {
    this.api.getPerson(id).subscribe(data => {
      console.log(data);
      this._ID = data.id;
      this.personForm.setValue({
        name : data.name,
        gender : data.gender,
        email : data.email,
        dateBorn : data.dateBorn,
        naturalness : data.naturalness,
        nationality : data.nationality,
        cpf : data.cpf
      });
    }, err => {
      console.log(err);
    });
  }

  updatePerson() {
    this.api.editPerson(this._ID, this.personForm.getRawValue())
      .subscribe(res => {
        this.router.navigate(['/person-detail', res.id]);
      }, err => {
        this.errors = err;
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
}
