import { Politico } from "./Politico";

export class Senador extends Politico {

    private estado: string;
    private anoEleicao: number;

    constructor(
        nome: string,
        partido: string,
        estado: string,
        anoEleicao: number,
        localTrabalho: string,
        endereco: string,
        remuneracao: number,
        projetos: string[]
    ) {
        super(
            nome,
            partido,
            "Federal",
            "Legislativo",
            localTrabalho,
            endereco,
            remuneracao,
            projetos
        );

        this.estado = estado;
        this.anoEleicao = anoEleicao;
    }

    public exercerMandato(): string {
        return "O Senador sabatina e aprova autoridades, legisla sobre leis federais e autoriza operações financeiras externas.";
    }

    public aprovarAutoridades(): string {
        return "Aprovar autoridades de alto escalão.";
    }

    public julgarCrimesResponsabilidade(): string {
        return "Julgar crimes de responsabilidade.";
    }

    public representarEstado(): string {
        return "Representar os interesses do Estado.";
    }
}