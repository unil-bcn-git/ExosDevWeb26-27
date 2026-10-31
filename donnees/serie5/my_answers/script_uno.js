class abstract_inventaire {

    constructor (an_inventaire){
        this.inventaire = an_inventaire;
    }

    display_inventaire (){
        var text = document.getElementById("demo").innerHTML + "<h3>Display inventaire</h3>";
        text += '<pre class="tab1">';
        Object.entries(this.inventaire).forEach(([key, value]) => {
             text += `${key}\t${value}` + "<br>";
            }
        );
       text += "</pre>"
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

const liste_lettres = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ]; 

const alien_article = {
  article_name: "",
  article_price: 0,
};



class abstract_alien_inventaire {

    constructor (max_articles){
        this.max_articles = max_articles;
        this.inventaire = new Array(this.max_articles);
        for (let i = 0; i< this.max_articles; i++){
            this.inventaire[i] = Object.create(alien_article);
            const article_name_length = Math.floor(Math.random()*9) + 4;
            let rnd_letter = "";
            let name_temp = ""
            for(let j=0; j < article_name_length; j++){
                const rnd_index =  Math.floor(Math.random()*25)+1;
                rnd_letter = liste_lettres[rnd_index];
                name_temp += rnd_letter;
//               console.log (i, article_name_length, rnd_index, name_temp);
            }
            this.inventaire[i].article_name = name_temp;
            this.inventaire[i].article_price = Math.floor(Math.floor(Math.random()*200)/2)+1;
//            console.log (">> ", i, article_name_length, this.inventaire[i].article_name, this.inventaire[i].article_price);
        }
    }

    display_inventaire (){
        var text = document.getElementById("demo").innerHTML + "<h3>Display alien inventaire</h3>";
        text += `Number of articles: ${this.max_articles} <br><br>`;
        text += '<pre class="tab1">';
        let espace = " ";
        for (let i = 0;i < this.max_articles; i++){
            if (i > 8){
                espace = "";
            }
            text += `${i+1} ${espace} ${this.inventaire[i].article_name} \t ${this.inventaire[i].article_price} <br>`
        }
        text += "</pre>"

        document.getElementById("demo").innerHTML = text + "<br>";
    };
     
    set_courses(courses){
        var total_cost = 0;
        var text = document.getElementById("demo").innerHTML + "<h3>Liste de courses</h3>";
        Object.entries(courses).forEach(([key, value]) => {
            Object.entries(this.inventaire).forEach(([key2, value2]) =>{
                if(courses[key] == key2){
                    total_cost += value2;
                }
            });
        });

        document.getElementById("demo").innerHTML = text + "<br>";
        document.getElementById("demo").innerHTML = text + `Coût total = ${total_cost}`;

    }
}
 
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


const nb_articles = 30;

const an_inventaire = new abstract_inventaire(inventaire);

an_inventaire.display_inventaire();

an_inventaire.set_courses(ma_liste);


const an_inventaire2 = new abstract_alien_inventaire(nb_articles);

an_inventaire2.display_inventaire();



