"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeputadoEstadual = void 0;
const Politico_1 = require("./Politico");
class DeputadoEstadual extends Politico_1.Politico {
    constructor(nome, partido, estado, comissoes, localTrabalho, endereco, remuneracao, projetos) {
        if (comissoes.length < 1) {
            throw new Error("O deputado deve participar de pelo menos uma comissão.");
        }
        super(nome, partido, "Estadual", "Legislativo", localTrabalho, endereco, remuneracao, projetos);
        this.estado = estado;
        this.comissoes = comissoes;
    }
    exercerMandato() {
        return "O Deputado Estadual legisla sobre assuntos de interesse do Estado e fiscaliza o Governador.";
    }
    votarPPA() {
        return "Votar o PPA do Estado.";
    }
    votarLOA() {
        return "Votar a LOA do Estado.";
    }
    votarLDO() {
        return "Votar a LDO do Estado.";
    }
    proporEmendaConstituicao() {
        return "Propor emendas à Constituição Estadual.";
    }
    criarCPI() {
        return "Criar uma CPI estadual.";
    }
}
exports.DeputadoEstadual = DeputadoEstadual;
