"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Presidente_1 = require("./Presidente");
const Governador_1 = require("./Governador");
const DeputadoFederal_1 = require("./DeputadoFederal");
const DeputadoEstadual_1 = require("./DeputadoEstadual");
const Senador_1 = require("./Senador");
const remuneracaoFederal = 46366.19;
// ==========================================
// PRESIDENTE
// ==========================================
const presidente = new Presidente_1.Presidente("Luiz Inácio Lula da Silva", "PT", 38, "Palácio do Planalto", "Praça dos Três Poderes, Brasília - DF", remuneracaoFederal, [
    "Projetos do Governo Federal"
]);
// ==========================================
// GOVERNADORES
// ==========================================
const governadorPE = new Governador_1.Governador("Raquel Teixeira Lyra Lucena", "PSD", "Pernambuco", 27, "Palácio do Campo das Princesas", "Praça da República, Santo Antônio, Recife - PE", 0, [
    "Projetos do Governo de Pernambuco"
]);
const governadorSP = new Governador_1.Governador("Tarcísio de Freitas", "Republicanos", "São Paulo", 25, "Palácio dos Bandeirantes", "Av. Morumbi, 4500, Morumbi, São Paulo - SP", 0, [
    "Projetos do Governo de São Paulo"
]);
// ==========================================
// DEPUTADOS FEDERAIS DE PERNAMBUCO
// ==========================================
const deputadoFederalPE1 = new DeputadoFederal_1.DeputadoFederal("Túlio Gadêlha", "PSD", "Bancada do PSD", "Câmara dos Deputados", "Palácio do Congresso Nacional, Brasília - DF", remuneracaoFederal, ["Projetos legislativos"]);
const deputadoFederalPE2 = new DeputadoFederal_1.DeputadoFederal("Carlos Veras", "PT", "Federação PT-PCdoB-PV", "Câmara dos Deputados", "Palácio do Congresso Nacional, Brasília - DF", remuneracaoFederal, ["Projetos legislativos"]);
const deputadoFederalPE3 = new DeputadoFederal_1.DeputadoFederal("Silvio Costa Filho", "Republicanos", "Bloco partidário", "Câmara dos Deputados", "Palácio do Congresso Nacional, Brasília - DF", remuneracaoFederal, ["Projetos legislativos"]);
// ==========================================
// DEPUTADOS FEDERAIS DE SÃO PAULO
// ==========================================
const deputadoFederalSP1 = new DeputadoFederal_1.DeputadoFederal("Fábio Teruel", "MDB", "Bancada do MDB", "Câmara dos Deputados", "Palácio do Congresso Nacional, Brasília - DF", remuneracaoFederal, ["Projetos legislativos"]);
const deputadoFederalSP2 = new DeputadoFederal_1.DeputadoFederal("Mauricio Neves", "PP", "Bancada do PP", "Câmara dos Deputados", "Palácio do Congresso Nacional, Brasília - DF", remuneracaoFederal, ["Projetos legislativos"]);
// ==========================================
// DEPUTADOS ESTADUAIS DE PERNAMBUCO
// ==========================================
const deputadoEstadualPE1 = new DeputadoEstadual_1.DeputadoEstadual("Álvaro Porto", "PSDB", "Pernambuco", ["Comissão de Constituição, Legislação e Justiça"], "Assembleia Legislativa de Pernambuco", "Rua da União, 439, Boa Vista, Recife - PE", 0, ["Projetos estaduais"]);
const deputadoEstadualPE2 = new DeputadoEstadual_1.DeputadoEstadual("Francismar Pontes", "PSB", "Pernambuco", ["Comissão de Constituição, Legislação e Justiça"], "Assembleia Legislativa de Pernambuco", "Rua da União, 439, Boa Vista, Recife - PE", 0, ["Projetos estaduais"]);
const deputadoEstadualPE3 = new DeputadoEstadual_1.DeputadoEstadual("Doriel Barros", "PT", "Pernambuco", ["Comissão de Agricultura, Pecuária e Desenvolvimento Rural"], "Assembleia Legislativa de Pernambuco", "Rua da União, 439, Boa Vista, Recife - PE", 0, ["Projetos estaduais"]);
// ==========================================
// DEPUTADOS ESTADUAIS DE SÃO PAULO
// ==========================================
const deputadoEstadualSP1 = new DeputadoEstadual_1.DeputadoEstadual("Eduardo Suplicy", "PT", "São Paulo", ["Comissão de Direitos Humanos"], "Assembleia Legislativa de São Paulo", "Av. Pedro Álvares Cabral, 201, São Paulo - SP", 0, ["Projetos estaduais"]);
const deputadoEstadualSP2 = new DeputadoEstadual_1.DeputadoEstadual("Carlos Giannazi", "PSOL", "São Paulo", ["Comissão de Educação e Cultura"], "Assembleia Legislativa de São Paulo", "Av. Pedro Álvares Cabral, 201, São Paulo - SP", 0, ["Projetos estaduais"]);
// ==========================================
// SENADORES DE PERNAMBUCO
// ==========================================
const senadorPE1 = new Senador_1.Senador("Fernando Dueire", "PSD", "Pernambuco", 2018, "Senado Federal", "Praça dos Três Poderes, Brasília - DF", remuneracaoFederal, ["Projetos legislativos"]);
const senadorPE2 = new Senador_1.Senador("Humberto Costa", "PT", "Pernambuco", 2018, "Senado Federal", "Praça dos Três Poderes, Brasília - DF", remuneracaoFederal, ["Projetos legislativos"]);
// ==========================================
// SENADOR DE SÃO PAULO
// ==========================================
const senadorSP = new Senador_1.Senador("Astronauta Marcos Pontes", "PL", "São Paulo", 2022, "Senado Federal", "Praça dos Três Poderes, Brasília - DF", remuneracaoFederal, ["Projetos legislativos"]);
// ==========================================
// TESTANDO POLIMORFISMO
// ==========================================
const politicos = [
    presidente,
    governadorPE,
    governadorSP,
    deputadoFederalPE1,
    deputadoFederalPE2,
    deputadoFederalPE3,
    deputadoFederalSP1,
    deputadoFederalSP2,
    deputadoEstadualPE1,
    deputadoEstadualPE2,
    deputadoEstadualPE3,
    deputadoEstadualSP1,
    deputadoEstadualSP2,
    senadorPE1,
    senadorPE2,
    senadorSP
];
for (const politico of politicos) {
    console.log("--------------------------------");
    console.log("Nome:", politico.getNome());
    console.log("Partido:", politico.getPartido());
    console.log("Esfera:", politico.getEsfera());
    console.log("Poder:", politico.getPoder());
    // POLIMORFISMO
    console.log("Mandato:", politico.exercerMandato());
}
