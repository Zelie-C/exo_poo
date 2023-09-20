import { classCollection } from "./ClassCollection";

export class ElementSimplon {
  nomBalise: string;
  innerText: string;
  classList: classCollection;
  style: Object;


  constructor(nomBalise: string, innerText: string, classList : classCollection, style: Object){
    this.nomBalise = nomBalise;
    this.innerText = innerText;
    this.classList = classList;
    this.style = Object;
  }

  public ajouterClasse(classe: string) {
    return this.classList.add(classe)
  }

  public supprimerClasse(classe: string) {
    return this.classList.remove(classe)
  }

  // public ajouterContenu(contenu: string) {
  //   .innerText = this.innerText;
  // }

  // public supprimerContenu() {

  // }

  // public stringToHTML() {

  // }
}
