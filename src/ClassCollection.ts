export class classCollection{
  classes: string[]

  constructor(classes: string[]){
    this.classes = classes
  }

  public add(classe: string) {
    this.classes.push(classe)
  }

  public remove(classe: string) {

  }

  public toString() {

  }
}
