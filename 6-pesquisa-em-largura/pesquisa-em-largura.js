const grafo = {}
grafo["vc"] = ["João", "Maria", "Pedro"]
grafo["Maria"] = ["Renan", "Gustavo"]
grafo["João"] = ["Gustavo"]
grafo["Pedro"] = ["Ronam", "Bruno"]
grafo["Renan"] = []
grafo["Gustavo"] = []
grafo["Ronam"] = []
grafo["Bruno"] = []

function vendeManga(nome) {
    console.log(nome)
  return nome[nome.length - 1] === "m"
}

function busca(nome) {
  let array_de_busca = []
  array_de_busca = array_de_busca.concat(grafo[nome])
  const ja_buscados = []
  while (array_de_busca.length) {
    let amigo = array_de_busca.shift()
    if (ja_buscados.indexOf(amigo) === -1) {
      if (vendeManga(amigo)) {
        console.log(amigo + " venda mangas! \u{1F96D}")
        return true
      }

      array_de_busca = array_de_busca.concat(grafo[amigo])
      ja_buscados.push(amigo)
    }
  }
  return false
}

busca("vc")