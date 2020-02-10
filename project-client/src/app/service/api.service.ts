import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Person } from 'src/app/model/person';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'
})
};
const apiUrl = 'http://localhost:8080/persons';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(apiUrl)
      .pipe(tap(() => console.log('List all persons')),
            catchError(this.handleError('getPersons', [])));
  }

  getPerson(id: number): Observable<Person> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<Person>(url).pipe(
      tap(_ => console.log(`read a person id=${id}`)),
      catchError(this.handleError<Person>(`getPerson id=${id}`))
    );
  }

  addPerson(person): Observable<Person> {
    return this.http.post<Person>(apiUrl, person, httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((person: Person) => console.log(`add person with w/ id=${person.id}`)),
      catchError(this.handleError<Person>('addPerson'))
    );
  }

  editPerson(id: number, person: any): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, person, httpOptions).pipe(
      tap(_ => console.log(`update person with id=${id}`)),
      catchError(this.handleError<any>('editPerson'))
    );
  }

  deletePerson(id: number): Observable<Person> {
    const url = `${apiUrl}/${id}`;

    return this.http.delete<Person>(url, httpOptions).pipe(
      tap(_ => console.log(`remove a person with id=${id}`)),
      catchError(this.handleError<Person>('deletePerson'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      let errorMessage = '';
      if (error instanceof ErrorEvent) {

          errorMessage = `An error occurred: ${error.message}`;
      } else {

          errorMessage = `Server returned code: ${error.status}, error message is: ${error.message}`;
      }
      console.error(errorMessage);

      return of(result as T);
    };
  }
}


/**
 * https://www.devglan.com/angular/angular-7-crud-example
 *
 *
 * https://medium.com/@andrewchanm/criando-um-app-angular-7-e-consumindo-uma-api-rest-1-de-3-7169d90ed8c1
 * https://medium.com/@andrewchanm/criando-um-app-angular-7-e-consumindo-uma-api-rest-2-de-3-5747972ef56e
 * https://medium.com/@andrewchanm/criando-um-app-angular-7-e-consumindo-uma-api-rest-3-de-3-7d3b22aa09a6
 *
 * 
 * https://www.javaguides.net/2019/08/angular-8-spring-boot-basic-authentication-example.html
 */