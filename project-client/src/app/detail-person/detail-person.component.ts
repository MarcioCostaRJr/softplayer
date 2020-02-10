import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { Person } from '../model/person';

@Component({
  selector: 'app-detail-person',
  templateUrl: './detail-person.component.html',
  styleUrls: ['./detail-person.component.css']
})
export class DetailPersonComponent implements OnInit {
  person: Person = new Person();
  isLoadingResults = true;
  constructor(private router: Router, private route: ActivatedRoute,
              private api: ApiService) { }

  ngOnInit(): void {
    this.getPerson(this.route.snapshot.params.id);
  }

  getPerson(id: number) {
    this.api.getPerson(id)
      .subscribe(data => {
        this.person = data;
        this.isLoadingResults = false;
      });
  }

  deletePerson(id: number) {
    this.api.deletePerson(id)
      .subscribe(res => {
        this.isLoadingResults = false;
        this.router.navigate(['/']);
      }, err => {
        this.isLoadingResults = false;
        console.log(err);
      });
  }
}
