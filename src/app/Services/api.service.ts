import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Eleve } from '../Models/eleve';
import { ConfigurationService } from './configuration.service';

/**
 * Service API pour interagir avec les données des élèves.
 * 
 * @remarks
 * Ce service utilise HttpClient pour effectuer des requêtes HTTP vers une API REST.
 * 
 * @example
 * ```typescript
 * constructor(private apiService: ApiService) {}
 * 
 * this.apiService.getData().subscribe(data => {
 *   console.log(data);
 * });
 * ```
 */
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  /**
   * URL de base de l'API.
   */
  private apiUrl = ConfigurationService.apiUrl; 
  
  /**
   * Constructeur du service API.
   * 
   * @param http - Instance de HttpClient pour effectuer des requêtes HTTP.
   */
  constructor(private http: HttpClient) { }

  /**
   * Récupère la liste des élèves.
   * 
   * @returns Un Observable contenant un tableau d'objets Eleve.
   */
  getData(): Observable<Eleve[]> {
    return this.http.get<Eleve[]>(`${this.apiUrl}/eleve`);
  }

  /**
   * Récupère les données d'un élève par son identifiant.
   * 
   * @param id - Identifiant de l'élève.
   * @returns Un Observable contenant l'objet Eleve correspondant.
   */
  getDataById(id: number): Observable<Eleve> {
    return this.http.get<Eleve>(`${this.apiUrl}/eleve/${id}`);
  }

}
