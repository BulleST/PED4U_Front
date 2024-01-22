import { ApostilaAbaco } from "./abaco.model";

export class Aulas{
    id: number = 0;
    nome: string = '';
    apostila?: ApostilaAbaco = new ApostilaAbaco();
    pagina: number = 0;
    falta: boolean = true;
    reposicao: boolean = true;
}