import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of} from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  //Consulta para obtener la información del pais por codigo.
  searchCountryByAlphaCode(code:string): Observable<Country[]>{
    const url=`${this.apiUrl}/alpha/${code}`
    return this.http.get<Country[]>(url)
    .pipe(
      catchError( error => of([]))
    );
  }

  //Consulta por nombre de la capital del país
  searchCapital(term: string): Observable<Country []>{
    const url=`${this.apiUrl}/capital/${term}`
    return this.http.get<Country[]>(url)
    .pipe(
      catchError( error => of([]))
    );
  }

  //Consulta por el nombre common del país
  searchCountry(term: string):Observable<Country[]>{
    return this.http.get<Country[]>(`${this.apiUrl}/name/${term}`)
    .pipe(
      catchError(()=> of([]))
    )
  }

  //Consulta por el continente
  searchRegion(term: string):Observable<Country[]>{
    return this.http.get<Country[]>(`${this.apiUrl}/region/${term}`)
    .pipe(
      catchError(()=> of([]))
    )
  }
}
