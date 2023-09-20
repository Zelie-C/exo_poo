import { classCollection } from "./ClassCollection";
import { ElementSimplon } from "./ElementSimplon";

const classe = new classCollection(['container'])

const div = new ElementSimplon('div', 'Hello World', classe, Object)

div.ajouterClasse('blabla')
console.log(div.classList)
