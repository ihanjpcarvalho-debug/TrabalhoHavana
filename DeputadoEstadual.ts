import { Politico } from "./Politico";

export class DeputadoEstadual extends Politico {

    private estado: string;
    private comissoes: string[];

    constructor(
        nome: string,
        partido: string,
        estado: string,
        comissoes: string[],
        localTrabalho: string,
        endereco: string,
        remuneracao: number,
        projetos: string[]
    ) {

        if (comissoes.length < 1) {
            throw new Error("O deputado deve participar de pelo menos uma comissão.");
        }

        super(
            nome,
            partido,
            "Estadual",
            "Legislativo",
            localTrabalho,
            endereco,
            remuneracao,
            projetos
        );

        this.estado = estado;
        this.comissoes = comissoes;
    }

    public exercerMandato(): string {
        return "O Deputado Estadual legisla sobre assuntos de interesse do Estado e fiscaliza o Governador.";
    }

    public votarPPA(): string {
        return "Votar o PPA do Estado.";
    }

    public votarLOA(): string {
        return "Votar a LOA do Estado.";
    }

    public votarLDO(): string {
        return "Votar a LDO do Estado.";
    }

    public proporEmendaConstituicao(): string {
        return "Propor emendas à Constituição Estadual.";
    }

    public criarCPI(): string {
        return "Criar uma CPI estadual.";
    }
}