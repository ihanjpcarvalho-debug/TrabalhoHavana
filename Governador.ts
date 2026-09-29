import { Politico } from "./Politico";

export class Governador extends Politico {

    private quantidadeSecretarios: number;
    private estado: string;

    constructor(
        nome: string,
        partido: string,
        estado: string,
        quantidadeSecretarios: number,
        localTrabalho: string,
        endereco: string,
        remuneracao: number,
        projetos: string[]
    ) {
        super(
            nome,
            partido,
            "Estadual",
            "Executivo",
            localTrabalho,
            endereco,
            remuneracao,
            projetos
        );

        this.estado = estado;
        this.quantidadeSecretarios = quantidadeSecretarios;
    }

    public exercerMandato(): string {
        return "O Governador sanciona e veta leis estaduais, decreta estado de calamidade e envia PEC à Assembleia Legislativa.";
    }

    public gerirPoliciaMilitar(): string {
        return "Gerir a Polícia Militar do Estado.";
    }

    public administrarRodovias(): string {
        return "Administrar as rodovias estaduais.";
    }

    public coordenarEducacaoSaude(): string {
        return "Coordenar a educação e a saúde do Estado.";
    }

    public elaborarPPA(): string {
        return "Elaborar e enviar à Assembleia Legislativa o PPA estadual.";
    }

    public elaborarLDO(): string {
        return "Elaborar e enviar à Assembleia Legislativa a LDO estadual.";
    }

    public elaborarLOA(): string {
        return "Elaborar e enviar à Assembleia Legislativa a LOA estadual.";
    }
}