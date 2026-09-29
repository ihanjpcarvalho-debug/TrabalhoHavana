"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Governador = void 0;
const Politico_1 = require("./Politico");
class Governador extends Politico_1.Politico {
    constructor(nome, partido, estado, quantidadeSecretarios, localTrabalho, endereco, remuneracao, projetos) {
        super(nome, partido, "Estadual", "Executivo", localTrabalho, endereco, remuneracao, projetos);
        this.estado = estado;
        this.quantidadeSecretarios = quantidadeSecretarios;
    }
    exercerMandato() {
        return "O Governador sanciona e veta leis estaduais, decreta estado de calamidade e envia PEC à Assembleia Legislativa.";
    }
    gerirPoliciaMilitar() {
        return "Gerir a Polícia Militar do Estado.";
    }
    administrarRodovias() {
        return "Administrar as rodovias estaduais.";
    }
    coordenarEducacaoSaude() {
        return "Coordenar a educação e a saúde do Estado.";
    }
    elaborarPPA() {
        return "Elaborar e enviar à Assembleia Legislativa o PPA estadual.";
    }
    elaborarLDO() {
        return "Elaborar e enviar à Assembleia Legislativa a LDO estadual.";
    }
    elaborarLOA() {
        return "Elaborar e enviar à Assembleia Legislativa a LOA estadual.";
    }
}
exports.Governador = Governador;
