const submit = document.querySelector('#btn-add-gamer');
const inputUser = document.querySelector('#gamer-name');

submit.addEventListener('click', function(e) {
    e.preventDefault();
    
    const gamer = new Players(inputUser.value);
    players.push(gamer);

    writeTable();

    inputUser.value = '';
});

var players = [];

function Players(user) {
    this.nome = user;
    this.vitorias = 0;
    this.empate = 0;
    this.derrotas = 0;
    this.pontos = 0;
};

const table = document.querySelector('#tbody-table');

function writeTable() {
    table.innerHTML = '';

    for(let i = 0; i < players.length; i++) {
        table.innerHTML += 
            `
                <th>${players[i].nome}</th>
                <th>${players[i].vitorias}</th>
                <th>${players[i].empate}</th>
                <th>${players[i].derrotas}</th>
                <th>${players[i].pontos}</th>
                <th><button onClick="addVictory(${i})" id="action">Vitory</button></th>
                <th><button onClick="addTie(${i})" id="action">Tie</button></th>
                <th><button onClick="addDefeat(${i})" id="action">Defeat</button></th>
                `
            }
}

const inputPoints = document.querySelector('#add-points');

function addPoints(i) {
    const cantPontos = Number(inputPoints.value);

    players[i].pontos = players[i].pontos + cantPontos;
}

function addVictory(i) {
    players[i].vitorias++;

    addPoints(i);
    writeTable();
}

function addTie(i) {
    players[i].empate++;

    writeTable();
}

function addDefeat(i) {
    players[i].derrotas++;

    addPoints(i);
    writeTable();
}