    let inventaire = {
        'tomate': 3,
        'chocolat' : 5,
        'toast':2,
        'houmous':4,
        'serpillère':25,
        'el tony':2,
        'aubergine':1,
        'chips':6,
        'sandwich':10,
        'livre':18,
        'sandales': 46,
        'tasse': 14,
        'jeu': 39,
    }

    class abstract_inventaire {
        constructor (an_inventaire){
            this.inventaire = an_inventaire;
        }

        display_inventaire (){
            document.getElementById("demo").innerHTML = "<p>inventaire</p>";
        }
    }

    let a_div = document.createElement("div");
    a_div.innerHTML = "<h1>TEST</h1>";
    a_div.setAttribute("id", "demo");
    document.body.appendChild(a_div);

    const an_inventaire = new abstract_inventaire(inventaire);
    an_inventaire.display_inventaire();
