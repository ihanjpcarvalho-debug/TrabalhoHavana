"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Senador = void 0;
const Politico_1 = require("./Politico");
class Senador extends Politico_1.Politico {
    constructor(nome, partido, estado, anoEleicao, localTrabalho, endereco, remuneracao, projetos) {
        super(nome, partido, "Federal", "Legislativo", localTrabalho, endereco, remuneracao, projetos);
        this.estado = estado;
        this.anoEleicao = anoEleicao;
    }
    exercerMandato() {
        return "O Senador sabatina e aprova autoridades, legisla sobre leis federais e autoriza operações financeiras externas.";
    }
    aprovarAutoridades() {
        return "Aprovar autoridades de alto escalão.";
    }
    julgarCrimesResponsabilidade() {
        return "Julgar crimes de responsabilidade.";
    }
    representarEstado() {
        return "Representar os interesses do Estado.";
    }
}
exports.Senador = Senador;
