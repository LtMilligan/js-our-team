// Creo un arrey di oggetti

let team = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg'
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg'
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg'
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg'
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg'
    }
]

// Stampo a console le informazioni di ogni membro del team

for (let member in team) {
    console.log(`${team[member].nome} - ${team[member].ruolo} - ${team[member].foto}`)
}

// Stampo le informazioni del console.log dentro il DOM

for (let member in team) {
    document.getElementById('team').innerHTML += `${team[member].nome} - ${team[member].ruolo} - ${team[member].foto} <br/>`
}