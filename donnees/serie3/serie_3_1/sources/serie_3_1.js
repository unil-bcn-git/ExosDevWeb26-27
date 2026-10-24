/* Exercice 1
Vous êtes en train de coder votre nouveau jeu révolutionnaire à mi-chemin entre un _roguelite_ et un jeu de quilles et vous voulez que la barre de vie des quilles change de couleur en fonction du pourcentage de vie restant. Soit :
Écrivez les conditions pour qu'en fonction du pourcentage de vie restant (*prc_vie*) le programme réagisse comme suit :
- Si *prc_vie* est égal ou plus haut que 50% : afficher "Barre de vie verte" dans la console
- Si *prc_vie* est entre 25% (compris) et 50% (non-compris) : afficher "Barre de vie orange" dans la console
- Si *prc_vie* est strictement plus bas que 25% : afficher "Barre de vie rouge" dans la console
```*/


let vie_totale_quille = 150
let vie_restante_quille1 = 100 //n'hésitez pas à faire varier cette valeur pour tester vos conditions

class quille {
    constructor(vie_init) {
        this.vie_restante = vie_init;
    }
    display_vie(){
        console.log(`Vie restante, ${vie_init}!`)
    }
}