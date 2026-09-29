"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeputadoFederal = void 0;
const Politico_1 = require("./Politico");
class DeputadoFederal extends Politico_1.Politico {
    constructor(nome, partido, bancada, localTrabalho, endereco, remuneracao, projetos) {
        super(nome, partido, "Federal", "Legislativo", localTrabalho, endereco, remuneracao, projetos);
        this.bancada = bancada;
    }
    exercerMandato() {
        return "O Deputado Federal legisla sobre o Código Penal, Código Tributário e leis trabalhistas e fiscaliza o Presidente da República.";
    }
    votarPEC() {
        return "Votar PECs federais.";
    }
    criarCPI() {
        return "Criar uma CPI nacional.";
    }
    votarPPA() {
        return "Votar o PPA nacional.";
    }
    votarLDO() {
        return "Votar a LDO nacional.";
    }
    votarLOA() {
        return "Votar a LOA nacional.";
    }
    proporLeiComplementar() {
        return "Propor leis complementares.";
    }
}
exports.DeputadoFederal = DeputadoFederal;
