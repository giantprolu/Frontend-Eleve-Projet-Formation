import { Component, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EleveComponent } from '../eleve/eleve.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { Eleve } from '../../Models/eleve';
import { Router } from '@angular/router'; 
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../Services/api.service';
import { ActivatedRoute } from '@angular/router';

// Déclaration du composant Angular avec ses métadonnées
@Component({
    selector: 'app-home', // Sélecteur du composant
    standalone: true, // Indique que le composant est autonome
    imports: [
        CommonModule, // Importation du module commun d'Angular
        FormsModule, // Importation du module de formulaires d'Angular
        EleveComponent, // Importation du composant Eleve
    ],
    templateUrl: './home.component.html', // Chemin vers le template HTML du composant
    styleUrls: ['./home.component.scss'] // Chemin vers les styles SCSS du composant
})
export class HomeComponent implements OnInit {
  data: any; // Variable pour stocker les données reçues
  eleves: Eleve[] = []; // Tableau pour stocker la liste des élèves
  searchText: string = ''; // Texte de recherche


  // Constructeur avec injection des services nécessaires
  constructor(private apiService: ApiService, private router: Router, private http: HttpClient, private route: ActivatedRoute) { } 

  // Méthode appelée à l'initialisation du composant
  ngOnInit() {
    this.loadEleves();
  }

  // Méthode pour charger les élèves
  loadEleves() {
    this.apiService.getData().subscribe({
      next: (response) => {
        this.eleves = response; // Stockage des données reçues
        console.log('Données reçues :', this.eleves);
        // Abonnement aux paramètres de la route
        this.route.queryParams.subscribe(params => {
          const nom = params['nom'];
        });
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des données :', err);
      }
    });
  }
  
  // Méthode pour naviguer vers la page de recherche
  navigateToSearch() {
    this.router.navigate(['/search']);
  }


  // Méthode pour rafraîchir la liste des élèves
  refreshEleves() {
    this.apiService.getData().subscribe({
      next: (response) => {
        this.eleves = response; // Mise à jour de la liste des élèves
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des données :', err);
      }
    });
  }

  
}