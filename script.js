const gameArea= document.querySelector('#gamearea')

let szamDoboz;
for (let i = 0; i<12; i++) {
    szamDoboz = document.createElement('div')
    szamDoboz.innerHTML='A'
    gameArea.appendChild(szamDoboz)
}

console.log(szamDoboz)
