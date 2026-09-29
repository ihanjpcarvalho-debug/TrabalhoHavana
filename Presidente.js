"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Presidente = void 0;
const Politico_1 = require("./Politico");
class Presidente extends Politico_1.Politico {
    constructor(nome, partido, quantidadeMinistros, localTrabalho, endereco, remuneracao, projetos) {
        super(nome, partido, "Federal", "Executivo", localTrabalho, endereco, remuneracao, projetos);
        this.quantidadeMinistros = quantidadeMinistros;
    }
    exercerMandato() {
        return "O Presidente propõe, sanciona e veta leis e edita medidas provisórias.";
    }
    nomearMinistros() {
        return "Nomear Ministros de Estado.";
    }
    exonerarMinistros() {
        return "Exonerar Ministros de Estado.";
    }
    comandarForcasArmadas() {
        return "Comandar as Forças Armadas.";
    }
    representarPais() {
        return "Representar o país em eventos internacionais.";
    }
    elaborarPPA() {
        return "Elaborar e enviar ao Congresso o Plano Plurianual nacional.";
    }
    elaborarLDO() {
        return "Elaborar e enviar ao Congresso a Lei de Diretrizes Orçamentárias nacional.";
    }
    elaborarLOA() {
        return "Elaborar e enviar ao Congresso a proposta de Lei Orçamentária Anual nacional.";
    }
}
exports.Presidente = Presidente;
