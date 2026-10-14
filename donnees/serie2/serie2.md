# Série 2
## Exercice 1
Vous sont donnés ce qui est entré dans la console et ce qui en ressort. Complétez le code afin que l'instruction soit valide.

1.1.

_Entrée_ : En changeant le contenu de la variable

      let a = 13;

      **-- a;**

_Sortie_ :

      12

1.2. Sans changer le contenu de la variable

_Entrée_ : 

      let a = 8;
      
      *a --* 
    
_Sortie_ : 

      9

1.3. 

_Entrée_ : 

      let a = "William";
      
      let b = "Ritter";
     
      *a+b*  

_Sortie_ : 

      "WilliamRitter"

1.4.

_Entrée_ : 

      let a = "William";
      
      let b = "Ritter";
     
      *a + " " + b;* 

_Sortie_ : 

      "William Ritter"

1.5.

_Entrée_ : 

      let a = 3; 
      
      let b = a; 
      
      let c = "chantre" ;
      
      *c+a+a:*

_Sortie_ : 

      "chantre33"

1.6. 

_Entrée_ : 

      let a = 3; 
      
      let b = a; 
      
      let c = "chantre" ;

      *À compléter*

_Sortie_ : 

      "c+a*2"

1.7.

_Entrée_:

      let lst_cours_ISH = ["Dev_web", "Mod_rec", "Meth_quanti"]

      *lst_cours_ISH[0]*

_Sortie_:
      
      "Dev_web"

1.8.

_Entrée_:

      let cles_moodle = {Mod_rec:"AucuneIdee26", Meth_quanti: "AucuneIdee26", Dev_web:"DEVWEB26"}

      *cles_moodle.Dev_web

_Sortie_:
      
      "DEVWEB25"

1.9.

_Entrée_:

      let cours_ISH = [
            {
                  nom_cours: "Développement Web",
                  cle_moodle: "DEVWEB26",
                  etudiantes: ["Linus Torvalds", "Margaret Hamilton", "Christine Peterson"]
            },
            {
                  nom_cours: "Méthodes quantitatives",
                  cle_moodle: "AucuneIdee26",
                  etudiantes: ["Ada Lovelace", "Aaron Swartz", "Linus Torvalds", "Margaret Hamilton"]
            },
            {
                  nom_cours: "Modèles et Récits",
                  cle_moodle: "AucuneIdee26",
                  etudiantes: ["Linus Torvalds", "Margaret Hamilton"]
            }
      ]

      *cours_ISH[0].etudiantes[2]*
      *cours_ISH.[1].etudiantes[1]*

_Sortie_:
      
      "Christine Peterson"
      "Aaron Swartz"


## Exercice 2
Modélisez 5 individus d'une catégorie de votre choix en un `Object` JavaScript (par exemples 5 livres, jeux, films ou personnes)

      let planetes_visibles = [
            {
                  nom_planete:      "Mercure",
                  rayon_equatorial: 2439.7,
                  demi_grand_axe:   57909050,
                  satellites:       []
            },
            {
                  nom_planete:      "Vénus",
                  rayon_equatorial: 6051.8,
                  demi_grand_axe:   108209500,
                  satellites:       []
            },
            {
                  nom_planete:      "Terre",
                  rayon_equatorial: 3396.2,
                  demi_grand_axe:   149597887.5,
                  satellites:       ["Lune"]
            },
            {
                  nom_planete:      "Mars",
                  rayon_equatorial: 6051.8,
                  demi_grand_axe:   227944000,
                  satellites:       ["Phobos", "Déimos"]
            },
            {
                  nom_planete:      "Jupiter",
                  rayon_equatorial: 71488,
                  demi_grand_axe:   778340000,
                  satellites:  ["Adrastée", "Aédé", "Aitné", "Amalthée", "Ananké", "Arché", "Autonoé", "Calé", "Callichore", "Callirrhoé", "Callisto", "Calycé", "Carmé", "Carpo", "Chaldéné", "Coré", "Cyllène", "Dia", "Eiréné", "Élara", "Érinomé", "Ersa", "Euanthé", "Eukéladé", "Euphémé", "Euporie", "Europe", "Eurydomé", "Ganymède", "Harpalycé", "Hégémone", "Hélicé", "Hermippé", "Hersé", "Himalia", "Io", "Isonoé", "Jocaste", "Jupiter LI", "Jupiter LII", "Jupiter LIV", "Jupiter LIX", "Jupiter LV", "Jupiter LVI", "Jupiter LXI", "Jupiter LXIII", "Jupiter LXIV", "Jupiter LXIX", "Jupiter LXVI", "Jupiter LXVII", "Jupiter LXVIII", "Jupiter LXX", "Jupiter LXXII", "Léda", "Lysithée", "Mégaclité", "Métis", "Mnémé", "Orthosie", "Pandia", "Pasiphaé", "Pasithée", "Philophrosyne", "Praxidiké", "S/2003 J 2", "S/2003 J 4", "S/2003 J 9", "S/2003 J 10", "S/2003 J 12", "S/2003 J 16", "S/2003 J 23", "S/2003 J 24", "S/2011 J 3", "S/2016 J 3", "S/2016 J 4", "S/2018 J 2", "S/2018 J 3", "S/2018 J 4", "S/2021 J 1", "S/2021 J 2", "S/2021 J 3", "S/2021 J 4", "S/2021 J 5", "S/2021 J 6", "Sinopé", "Spondé", "Taygète", "Thébé", "Thelxinoé", "Thémisto", "Thyoné", "Valétudo"]
            }
            
      ];