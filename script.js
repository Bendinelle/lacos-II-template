// --------------- PRÁTICA GUIADA ---------------

// const bimestre1 = [10, 10, 10, 10]
// const bimestre2 = [8, 5, 7.5, 3]
// const bimestre3 = [6, 7, 8.5, 10]
// const bimestre4 = [3, 5, 2, 0]

// const notasDoAno = [bimestre1, bimestre2, bimestre3, bimestre4]

// for(let i = 0; i < notasDoAno.length; i++){
    
//     const bimestre = notasDoAno[i]

//     let soma = 0
//     let media = 0

//     for(let j = 0; j < bimestre.length; j++) {
      
//       soma = soma + bimestre[j]

//     }

//       media = soma / bimestre1.length
// //       console.log(`Soma`, soma)
// //       console.log(`Media`, media)
// }


// const bimestre1 = [10, 10, 10, 10]
// const bimestre2 = [8, 5, 7.5, 3]
// const bimestre3 = [6, 7, 8.5, 10]
// const bimestre4 = [3, 5, 2, 0]

// const notasDoAno = [bimestre1, bimestre2, bimestre3, bimestre4]


// for (let index in notasDoAno) {
//     index = number[index]

//   let soma = 0
//   let media = 0

//   for (let elemento of notasDoAno[index]) {
//     soma = soma + elemento
//   }
  
//   media = soma / notasDoAno[index].length

//   console.log(`A soma é:${soma} \nA média é:${media}`)

// }


// for (let indice in notasDoAno) {
//   indice = Number(indice)

//   let soma = 0
//   let media = 0

//   for (let elemento of notasDoAno[indice]) {
//     soma = soma + elemento
//   }
//   media = soma / notasDoAno[indice].length

//   console.log(`A soma das notas do bimestre ${indice + 1} é ${soma} \nA média das notas do bimestre ${indice + 1} é ${media}`)
// }


// --------------- EXERCÍCIO DE FIXAÇÃO ---------------
const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
]

// escreva seu código abaixo 👇🏻

for (let indice in filmes) {
  const filme = filmes[indice]
  const titulo = filme.titulo
  const ano = filme.ano
  const diretor = filme.diretor
  const elenco = filme.elenco

  const frase = `${titulo}, de ${ano}, dirigido por ${diretor}.`
  console.log(frase)

  for (let artista of elenco) {
    const indiceArtista = elenco.indexOf(artista)

    const fraseElenco = `Atriz/Ator ${indiceArtista + 1}: ${artista}`

    console.log(fraseElenco)
  }
}

