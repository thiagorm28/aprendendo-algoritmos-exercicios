let estadosDefinidos = new Set(["PR", "SP", "MG", "GO", "MS", "SC", "RS", "RJ"])

const estacoes = {}
estacoes["kone"] = new Set(["GO", "MS", "SC"])
estacoes["ktwo"] = new Set(["SP", "GO", "PR"])
estacoes["kthree"] = new Set(["MG", "MS", "RS"])
estacoes["kfour"] = new Set(["MS", "SC"])
estacoes["kfive"] = new Set(["RS", "RJ"])

const estacoesDefinidas = new Set()

while (estadosDefinidos.size) {
  let melhorEstacao = null
  let estadorJaCobertos = new Set()
  for (let estacao in estacoes) {
    const estados = estacoes[estacao]
    const cobertura = new Set([...estadosDefinidos].filter(estado => estados.has(estado)))
    if (cobertura.size > estadorJaCobertos.size) {
      melhorEstacao = estacao
      estadorJaCobertos = cobertura
    }
  }
  estadosDefinidos = new Set([...estadosDefinidos].filter(estado => !estadorJaCobertos.has(estado)))
  estacoesDefinidas.add(melhorEstacao)
}

console.log(estacoesDefinidas) 