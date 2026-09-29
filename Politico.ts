export abstract class Politico {

    private nome: string;
    private partido: string;
    private esfera: string;
    private poder: string;
    private localTrabalho: string;
    private endereco: string;
    private remuneracao: number;
    private projetos: string[];

    constructor(
        nome: string,
        partido: string,
        esfera: string,
        poder: string,
        localTrabalho: string,
        endereco: string,
        remuneracao: number,
        projetos: string[]
    ) {
        this.nome = nome;
        this.partido = partido;
        this.esfera = esfera;
        this.poder = poder;
        this.localTrabalho = localTrabalho;
        this.endereco = endereco;
        this.remuneracao = remuneracao;
        this.projetos = projetos;
    }

    public getNome(): string {
        return this.nome;
    }

    public getPartido(): string {
        return this.partido;
    }

    public getEsfera(): string {
        return this.esfera;
    }

    public getPoder(): string {
        return this.poder;
    }

    public getLocalTrabalho(): string {
        return this.localTrabalho;
    }

    public getEndereco(): string {
        return this.endereco;
    }

    public getRemuneracao(): number {
        return this.remuneracao;
    }

    public getProjetos(): string[] {
        return this.projetos;
    }

    public adicionarProjeto(projeto: string): void {
        this.projetos.push(projeto);
    }

    public abstract exercerMandato(): string;
}