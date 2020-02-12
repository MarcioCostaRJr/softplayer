import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.css']
})
export class EditPersonComponent implements OnInit {
  _ID = 0;
  personForm: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getPerson(this.route.snapshot.params.id);
    this.personForm = this.formBuilder.group({
      name : [null, Validators.required],
      gender : [null, null],
      email : [null, null],
      dateBorn : [null, null],
      naturalness : [null, null],
      nationality : [null, null],
      cpf : [null, null]
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

  updatePerson(form: NgForm) {
    this.api.editPerson(this._ID, form)
      .subscribe(res => {
        this.router.navigate(['/person-detail', res.id]);
      }, err => {
        console.log(err);
      });
  }
}
