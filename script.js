/**
  Exercicio 02
 */
let students = [
  {
    name: 'Justino',
    firstNote: 5.5,
    secondNote: 9
  },
  {
    name: 'Maria',
    firstNote: 4,
    secondNote: 5.5
  },
  {
    name: 'João',
    firstNote: 7.6,
    secondNote: 8
  },
  {
    name: 'Leticia',
    firstNote: 5.8,
    secondNote: 6
  },
  {
    name: 'Augusto',
    firstNote: 8.3,
    secondNote: 9.7
  },
  
]

for (const student of students) {
  let averageNote = average(student.firstNote, student.secondNote)
  if(averageNote >= 7) {
    alert(`A média do(a) aluno(a) ${student.name} é: ${averageNote}
            Parabéns, ${student.name}! Voçê foi aprovado(a) no concurso!`)
  } else {
    alert(`A média do(a) aluno(a) ${student.name} é: ${averageNote}
            Não foi dessa vez, ${student.name}! Tente novamente!`)
  }
}
function average(firstNote, secondNote) {
  return (firstNote + secondNote) / 2
}