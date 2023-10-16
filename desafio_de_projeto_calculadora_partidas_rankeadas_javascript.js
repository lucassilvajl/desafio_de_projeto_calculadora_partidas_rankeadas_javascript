let vitorias = 200
let derrotas = 143
let patente = ""

let nivelDeExperiencia = saldoVitorias(vitorias,derrotas)


function saldoVitorias(vitorias , derrotas){
    let somatoria = vitorias - derrotas

    return somatoria

}

if (nivelDeExperiencia <= 10){
    patente += "Ferro"
    console.log(`O Herói tem um saldo de ${nivelDeExperiencia} vitórias e está no elo ${patente}`)
}
else if (nivelDeExperiencia <= 20){
    patente += "Bronze"
    console.log(`O Herói tem um saldo de ${nivelDeExperiencia} vitórias e está no elo ${patente}`)
}
else if (nivelDeExperiencia <= 50){
    patente += "Prata"
    console.log(`O Herói tem um saldo de ${nivelDeExperiencia} vitórias e está no elo ${patente}`)
}
else if (nivelDeExperiencia <= 80){
    patente += "Ouro"
    console.log(`O Herói tem saldo de ${nivelDeExperiencia} vitórias e está no elo ${patente}`)
}
else if (nivelDeExperiencia <= 90){
    patente += "Diamante"
    console.log(`O Herói tem saldo de ${nivelDeExperiencia} vitórias e está no elo ${patente}`)
}
else if (nivelDeExperiencia <= 100){
    patente += "Lendário"
    console.log(`O Herói tem saldo de ${nivelDeExperiencia} vitórias e está no elo ${patente}`)
}
else if (nivelDeExperiencia >= 101){
    patente += "Imortal"
    console.log(`O Herói tem saldo de ${nivelDeExperiencia} vitórias e está no elo ${patente}`)
}