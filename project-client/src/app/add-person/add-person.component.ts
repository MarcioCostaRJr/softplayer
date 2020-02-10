import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, NgForm, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

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
      cpf : [null, null]
    });
  }

  addPerson(form: NgForm) {
    this.isLoadingResults = true;
    this.api.addPerson(form)
      .subscribe(res => {
          const id = res.id;
          this.isLoadingResults = false;
          this.router.navigate(['/person-detail', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }
}
