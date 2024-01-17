import { Perfil } from "src/app/models/perfis.model";

export class Turma{
    id: number = 0;
    horarioTurma:  Date = new Date(); 
    diaTurma: string = '';
    qtdeAlunos: number = '' as unknown as number;
    vagasTurma: number = '' as unknown as number;
    nome: string = '';
    perfil: Perfil[] = [];
}