import { Politico } from "./Politico";

export class Presidente extends Politico {

    private quantidadeMinistros: number;

    constructor(
        nome: string,
        partido: string,
        quantidadeMinistros: number,
        localTrabalho: string,
        endereco: string,
        remuneracao: number,
        projetos: string[]
    ) {
        super(
            nome,
            partido,
            "Federal",
            "Executivo",
            localTrabalho,
            endereco,
            remuneracao,
            projetos
        );

        this.quantidadeMinistros = quantidadeMinistros;
    }

    public exercerMandato(): string {
        return "O Presidente propõe, sanciona e veta leis e edita medidas provisórias.";
    }

    public nomearMinistros(): string {
        return "Nomear Ministros de Estado.";
    }

    public exonerarMinistros(): string {
        return "Exonerar Ministros de Estado.";
    }

    public comandarForcasArmadas(): string {
        return "Comandar as Forças Armadas.";
    }

    public representarPais(): string {
        return "Representar o país em eventos internacionais.";
    }

    public elaborarPPA(): string {
        return "Elaborar e enviar ao Congresso o Plano Plurianual nacional.";
    }

    public elaborarLDO(): string {
        return "Elaborar e enviar ao Congresso a Lei de Diretrizes Orçamentárias nacional.";
    }

    public elaborarLOA(): string {
        return "Elaborar e enviar ao Congresso a proposta de Lei Orçamentária Anual nacional.";
    }
}