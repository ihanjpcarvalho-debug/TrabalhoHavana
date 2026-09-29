import { Politico } from "./Politico";

export class DeputadoFederal extends Politico {

    private bancada: string;

    constructor(
        nome: string,
        partido: string,
        bancada: string,
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

        this.bancada = bancada;
    }

    public exercerMandato(): string {
        return "O Deputado Federal legisla sobre o Código Penal, Código Tributário e leis trabalhistas e fiscaliza o Presidente da República.";
    }

    public votarPEC(): string {
        return "Votar PECs federais.";
    }

    public criarCPI(): string {
        return "Criar uma CPI nacional.";
    }

    public votarPPA(): string {
        return "Votar o PPA nacional.";
    }

    public votarLDO(): string {
        return "Votar a LDO nacional.";
    }

    public votarLOA(): string {
        return "Votar a LOA nacional.";
    }

    public proporLeiComplementar(): string {
        return "Propor leis complementares.";
    }
}