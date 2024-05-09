function calculaNivelDoHeroi(heroi) {
    const experiencia = heroi.experiencia
    if (experiencia >= 10001) return "Radiante"
    if (experiencia >= 9001) return "Imortal"
    if (experiencia >= 8001) return "Ascendente"
    if (experiencia >= 7001) return "Platina"
    if (experiencia >= 5001) return "Ouro"
    if (experiencia >= 2001) return "Prata"
    if (experiencia >= 1001) return "Bronze"
    return "Ferro"
}

function classificaHerois(herois) {
    for (const heroi of herois) {
        const nivel = calculaNivelDoHeroi(heroi)
        const nome = heroi.nome

        console.log(`O Herói de nome ${nome} tem ${heroi.experiencia} de experiência e está no nível de ${nivel}!`)
    }
}

const herois = [
    {
        nome:"Herói 1",
        experiencia: parseInt(Math.random() * 10500)
    },
    {
        nome:"Herói 2",
        experiencia: parseInt(Math.random() * 10500)
    },
    {
        nome:"Herói 3",
        experiencia: parseInt(Math.random() * 10500)
    },
    {
        nome:"Herói 4",
        experiencia: parseInt(Math.random() * 10500)
    },
    {
        nome:"Herói 5",
        experiencia: parseInt(Math.random() * 10500)
    },
    {
        nome:"Herói 6",
        experiencia: parseInt(Math.random() * 10500)
    },
    {
        nome:"Herói 7",
        experiencia: parseInt(Math.random() * 10500)
    },
    {
        nome:"Herói 8",
        experiencia: parseInt(Math.random() * 10500)
    },
    {
        nome:"Herói 9",
        experiencia: parseInt(Math.random() * 10500)
    },
    {
        nome:"Herói 10",
        experiencia: parseInt(Math.random() * 10500)
    },
    {
        nome:"Herói 11",
        experiencia: parseInt(Math.random() * 10500)
    },
]

classificaHerois(herois)