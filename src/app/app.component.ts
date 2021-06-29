import { Component } from '@angular/core';
import { Statistique } from 'models/statistique';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  private title = 'projetEvaluationAngular';
  private statistique1 = new Statistique(1542, "Démographie en France", "60M", "SUCCESS");
  private statistique2 = new Statistique(42, "Orage en France", "150", "DANGER");
  public listStat = [this.statistique1, this.statistique2, new Statistique(42, " Enfant en France", "35", "SUCESS")];

  
}
