class RecintosZoo {
    constructor() {
      this.animaisPermitidos = {
        'LEAO': { tamanho: 3, biomas: ['savana'], carnivoro: true },
        'LEOPARDO': { tamanho: 2, biomas: ['savana'], carnivoro: true },
        'CROCODILO': { tamanho: 3, biomas: ['rio'], carnivoro: true },
        'MACACO': { tamanho: 1, biomas: ['savana', 'floresta'], carnivoro: false },
        'GAZELA': { tamanho: 2, biomas: ['savana'], carnivoro: false },
        'HIPOPOTAMO': { tamanho: 4, biomas: ['savana', 'rio'], carnivoro: false }
      };
  
      this.recintos = [
        { numero: 1, bioma: 'savana', tamanhoTotal: 10, animais: [{ especie: 'MACACO', quantidade: 3 }] },
        { numero: 2, bioma: 'floresta', tamanhoTotal: 5, animais: [] },
        { numero: 3, bioma: 'savana e rio', tamanhoTotal: 7, animais: [{ especie: 'GAZELA', quantidade: 1 }] },
        { numero: 4, bioma: 'rio', tamanhoTotal: 8, animais: [] },
        { numero: 5, bioma: 'savana', tamanhoTotal: 9, animais: [{ especie: 'LEAO', quantidade: 1 }] }
      ];
    }
  
    analisaRecintos(tipoAnimal, quantidade) {
      if (!this.animaisPermitidos[tipoAnimal]) {
        return { erro: "Animal inválido" };
      }
  
      if (typeof quantidade !== 'number' || quantidade <= 0) {
        return { erro: "Quantidade inválida" };
      }
  
      const animal = this.animaisPermitidos[tipoAnimal];
      const espacoNecessario = animal.tamanho * quantidade;
      const recintosViaveis = [];
  
      for (const recinto of this.recintos) {
        let espacoOcupado = 0;
        let diferentesEspecies = false;
        let carnivoroPresente = false;
  
        if (!animal.biomas.includes(recinto.bioma) && !(animal.biomas.includes('savana') && recinto.bioma === 'savana e rio')) {
          continue;
        }
  
        for (const existente of recinto.animais) {
          const existenteInfo = this.animaisPermitidos[existente.especie];
          espacoOcupado += existenteInfo.tamanho * existente.quantidade;
  
          if (existenteInfo.carnivoro && existenteInfo.especie !== tipoAnimal) {
            carnivoroPresente = true;
          }
  
          if (existenteInfo.especie !== tipoAnimal) {
            diferentesEspecies = true;
          }
        }
  
        if (animal.carnivoro && diferentesEspecies) {
          continue;
        }
  
        let espacoAdicional = 0;
        if (recinto.animais.length > 0 && diferentesEspecies) {
          espacoAdicional = 1;
        }
  
        const espacoTotal = recinto.tamanhoTotal;
        const espacoLivre = espacoTotal - espacoOcupado;
  
        // Corrigido: Apenas adicionar o espaço adicional se há mais de uma espécie
        if (recinto.animais.length > 0 && diferentesEspecies) {
          espacoLivre -= espacoAdicional;
        }
  
        if (espacoLivre >= espacoNecessario) {
          recintosViaveis.push(`Recinto ${recinto.numero} (espaço livre: ${espacoLivre - espacoNecessario} total: ${espacoTotal})`);
        }
      }
  
      if (recintosViaveis.length === 0) {
        return { erro: "Não há recinto viável" };
      }
  
      return { recintosViaveis: recintosViaveis.sort() };
    }
  }
  
  module.exports = { RecintosZoo };
  
  