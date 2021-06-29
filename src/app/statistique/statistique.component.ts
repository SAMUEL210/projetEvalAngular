import { Component, OnInit } from '@angular/core';
import { Statistique } from 'models/statistique';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {

  public stats = new Statistique(1542, "Démographie en France", "60M", "SUCCESS");
  constructor() { 
  }

  ngOnInit(): void {
    
  }

}
