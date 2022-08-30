import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validator } from '@angular/forms';

@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.css']
})
export class SearchformComponent implements OnInit {
  searchForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group(
      {
        titre: '',
        annee: ''
      }
    );
  }

  ngOnInit() {
    this.searchForm = this.formBuilder.group(
      {
        titre: '',
        annee: ''
      }
    );
  }
  startSearch() {
    console.log(
      `
    Recherche lancée 
      `
    );

  }

}
