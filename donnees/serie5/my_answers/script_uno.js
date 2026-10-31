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

let ma_liste = ['sandwich', 'houmous', 'houmous', 'houmous'];

class abstract_inventaire {

    constructor (an_inventaire){
        this.inventaire = an_inventaire;
    }

    display_inventaire (){
        var text = document.getElementById("demo").innerHTML + "<h3>Display inventaire</h3>";
        Object.entries(this.inventaire).forEach(([key, value]) => {
             text += `${key}: ${value}` + "<br>";
            }
        );
        document.getElementById("demo").innerHTML = text + "<br>";
    }
     
    set_courses(courses){
        var total_cost = 0;
        var text = document.getElementById("demo").innerHTML + "<h3>Liste de courses</h3>";
        Object.entries(courses).forEach(([key, value]) => {
            text += `${courses[key]}` + "<br>";
            Object.entries(this.inventaire).forEach(([key2, value2]) =>{
                if(courses[key] == key2){
                    total_cost += value2;
                }
            });
            text += "<br>";
        });

        document.getElementById("demo").innerHTML = text + "<br>";
        document.getElementById("demo").innerHTML = text + `Coût total = ${total_cost}`;
    }
}

let liste_lettres = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ]; 

class abstract_alien_inventaire {


    constructor (){
        this.inventaire = an_inventaire;
    }

    display_inventaire (){
        var text = document.getElementById("demo").innerHTML + "<h3>Display inventaire</h3>";
        Object.entries(this.inventaire).forEach(([key, value]) => {
             text += `${key}: ${value}` + "<br>";
            }
        );
        document.getElementById("demo").innerHTML = text + "<br>";
    }
     
    set_courses(courses){
        var total_cost = 0;
        var text = document.getElementById("demo").innerHTML + "<h3>Liste de courses</h3>";
        Object.entries(courses).forEach(([key, value]) => {
            text += `${courses[key]}` + "<br>";
            Object.entries(this.inventaire).forEach(([key2, value2]) =>{
                if(courses[key] == key2){
                    total_cost += value2;
                }
            });
            text += "<br>";
        });

        document.getElementById("demo").innerHTML = text + "<br>";
        document.getElementById("demo").innerHTML = text + `Coût total = ${total_cost}`;
    }
}
 
const an_inventaire = new abstract_inventaire(inventaire);

an_inventaire.display_inventaire();

an_inventaire.set_courses(ma_liste);



  
