// Importation des modules et des décorateurs nécessaires depuis Angular
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Eleve } from '../../Models/eleve'; // Importation du modèle Eleve

// Définition du composant Angular avec son sélecteur, ses imports, son template et ses styles
@Component({
  selector: 'app-eleve', // Le sélecteur utilisé pour insérer ce composant dans un template HTML
  standalone: true, // Indique que ce composant est autonome et n'a pas besoin d'un module parent
  imports: [CommonModule], // Importation des modules nécessaires pour ce composant
  templateUrl: './eleve.component.html', // Chemin vers le template HTML spécifique à ce composant
  styleUrls: ['./eleve.component.scss'] // Chemin vers les styles spécifiques à ce composant
})
export class EleveComponent {
  @Input() eleves!: Eleve; // Propriété d'entrée pour recevoir les données de l'élève depuis un composant parent



}