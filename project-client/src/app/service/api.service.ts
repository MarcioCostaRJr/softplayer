import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Person } from 'src/app/model/person';
import { ErrorBusiness } from 'src/app/model/error-business';

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
          console.error(errorMessage);
          return of(result as T);
      } else if (error.status === 400 && error.error != null) {
          const errorB: ErrorBusiness = new ErrorBusiness();
          errorB.statusCode = error.status;
          errorB.description = error.error;
          return throwError(errorB);
      }
    };
  }
}
