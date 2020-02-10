import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Person } from 'src/app/model/person';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  displayedColumns: string[] = [ 'name', 'email', 'cpf', 'naturalness', 'action'];
  dataSource: Person[];

  // tslint:disable-next-line: variable-name
  constructor(private _api: ApiService) { }

  ngOnInit(): void {
    this._api.getPersons()
      .subscribe(res => {
        this.dataSource = res;
        console.log(this.dataSource);
      }, err => {
        console.log(err);
      });
  }

}
