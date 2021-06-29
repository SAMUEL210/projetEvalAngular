export class Statistique {

    private identifiant: number;
    private titre: string;
    private valeur: string;
    private appreciation: string;

    constructor(identifiant: number, titre: string, valeur:string, appreciation: string) {
        this.identifiant = identifiant;
        this.titre = titre;
        this.valeur = valeur;
        this.appreciation = appreciation;
    }
    
}

