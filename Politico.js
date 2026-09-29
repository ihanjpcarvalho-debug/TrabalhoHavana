"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Politico = void 0;
class Politico {
    constructor(nome, partido, esfera, poder, localTrabalho, endereco, remuneracao, projetos) {
        this.nome = nome;
        this.partido = partido;
        this.esfera = esfera;
        this.poder = poder;
        this.localTrabalho = localTrabalho;
        this.endereco = endereco;
        this.remuneracao = remuneracao;
        this.projetos = projetos;
    }
    getNome() {
        return this.nome;
    }
    getPartido() {
        return this.partido;
    }
    getEsfera() {
        return this.esfera;
    }
    getPoder() {
        return this.poder;
    }
    getLocalTrabalho() {
        return this.localTrabalho;
    }
    getEndereco() {
        return this.endereco;
    }
    getRemuneracao() {
        return this.remuneracao;
    }
    getProjetos() {
        return this.projetos;
    }
    adicionarProjeto(projeto) {
        this.projetos.push(projeto);
    }
}
exports.Politico = Politico;
