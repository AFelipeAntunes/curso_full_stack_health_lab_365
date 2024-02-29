import dados from './receitas.json' assert {type: 'json'};

const divPrincipal = document.getElementById('principal');

const receita = dados.receitas[0];

const h2 = document.createElement('h2');
h2.textContent = receita.nome

const tituloIngredientes = document.createElement("p");
tituloIngredientes.innerText = "Ingredientes";

const listaIngredientes = document.createElement("ul");
receita.listaIngredientes.map(item => {
    const li = document.createElement("li");
    li.innerText = item;

    listaIngredientes.appendChild(li);
});

divPrincipal.appendChild(h2)
divPrincipal.appendChild(tituloIngredientes)
divPrincipal.appendChild(listaIngredientes)
