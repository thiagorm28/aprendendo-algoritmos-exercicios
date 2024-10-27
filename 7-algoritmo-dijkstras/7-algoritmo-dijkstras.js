const grafo = {}
grafo["inicio"] = {}
grafo["inicio"]["parque"] = 7
grafo["inicio"]["farmacia"] = 4

grafo["parque"] = {}
grafo["parque"]["fim"] = 3

grafo["farmacia"] = {}
grafo["farmacia"]["parque"] = 3
grafo["farmacia"]["fim"] = 5

grafo["fim"] = {}

const distancias = {}
distancias["parque"] = 7
distancias["farmacia"] = 4
distancias["fim"] = Infinity

const parents = {}
parents["parque"] = "inicio"
parents["farmacia"] = "inicio"
parents["fim"] = null

let avaliado = []

function acharPontoComMenorDistancia(distancias) {
  let menorDistancia = Infinity
  let pontoComMenorDistancia = null

  for (let ponto in distancias) {
    const distancia = distancias[ponto]
    // If it's the lowest cost so far and hasn't been processed yet...
    if (distancia < menorDistancia && avaliado.indexOf(ponto) === -1) {
        menorDistancia = distancia
        pontoComMenorDistancia = ponto
    }
  }
  return pontoComMenorDistancia
}

let ponto = acharPontoComMenorDistancia(distancias)

while (ponto !== null) {
  const distancia = distancias[ponto]
  const pontosProximos = grafo[ponto]
  Object.keys(pontosProximos).forEach(function (n) {
    const novaDistancia = distancia + pontosProximos[n]
    if (distancias[n] > novaDistancia) {
      distancias[n] = novaDistancia
      parents[n] = ponto
    }
  })

  avaliado = avaliado.concat(ponto)

  ponto = acharPontoComMenorDistancia(distancias)
}

console.log("Cost from the inicio to each node:")
console.log(distancias) // { a: 5, b: 2, fim: 6 }