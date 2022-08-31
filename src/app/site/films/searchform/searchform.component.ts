import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Formvalidators } from '../formvalidators';
import { SearchmovieService } from '../services/searchmovie.service';

@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.css']
})
export class SearchformComponent implements OnInit {

  private titlePattern = `[ a-zA-Z0-9,\.]+`;
  private yearPattern = `[0-9]{4}`;
  private StartOfYears: number = 1900;
  private thisYear: number = 2022;
  searchForm!: FormGroup;
  results: any;
  errors!: string;

  titre!: FormControl;
  annee!: FormControl;

  constructor(private formBuilder: FormBuilder, private srvSearch: SearchmovieService) { }
  ngOnInit() {
    // on créer le validator du titre et de l'année
    this.titre = this.formBuilder.control(
      '', [Validators.required, Validators.maxLength(30), Validators.pattern(this.titlePattern)]
    );
    this.annee = this.formBuilder.control(
      `2019`, [Validators.pattern(this.yearPattern), Formvalidators.intergerBetween(this.StartOfYears, this.thisYear)]
    );
    this.searchForm = this.formBuilder.group(
      {
        titre: this.titre,
        annee: this.annee
      }
    );
  }
  /**
   * appelé lors de la validation du formulaire de recherche
   */
  startSearch() {
    // il serait tentant de ne pas passer par des variables intermédiaire
    // mai je préfére la clartée du code à un éventuel gain de performance
    // on fait du front, pas un hardware
    let titre = this.titre.valid ? this.titre.value : null;
    let annee = this.annee.valid ? this.annee.value : null;
    let that = this;
    /* référence vers l'objet courant : à cause de la portée des variables dans
          les Arrow fucntions et les fin de bloc {} (closures)
    */
    let action = (data: any) => {
      if (data['Error']) {
        that.errors = data['Error'];
        that.results = '';
      }
      else {
        that.errors = '';
        that.results = data;
      }
      //console.log(data);

    };
    if (titre)
      this.srvSearch.search(action, titre, annee);
    else
      this.errors = "Titre Obligatoire !";

  }

}
