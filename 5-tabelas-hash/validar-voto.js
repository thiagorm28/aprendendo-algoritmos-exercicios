const votou = {}

function validar_voto(nome) {
  if (votou[nome]) {
    console.log("Já votou!")
  } else {
    votou[nome] = true
    console.log("Deixa votar!")
  }
}

validar_voto("Thiago")
validar_voto("Thiago")
