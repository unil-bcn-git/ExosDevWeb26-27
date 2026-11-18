card_number = ["6", "7", "8", "9", "10", "11", "12", "13", "14"]
card_color = ['♠', '♥', '♦', '♣']

class card_pack {

    constructor() {
        const method_name = "display_constructor";
        this.class_name = "card_pack";
        console.log(`Enter ${this.class_name}::${method_name}`);        
        this.class_name = "card_pack";
        this.card_name = [];
        this.mains = [
                        [],
                        [],
                        [],                                                
                        []                        
                     ];
        this.selected = [];
        for (let j = 0; j< card_color.length; j++){
            for (let i = 0; i < card_number.length; i++){
                this.card_name[j*9 + i] = `./cartes/${card_number[i]}${card_color[j]}.gif`;
                this.selected[j*9 + i] = true;
                console.log(`${i} - ${j}  ${this.card_name[j*9+i]}`);                
            }
       }
    console.log(`Exit ${this.class_name}::${method_name}`);        
    }

    display_cards(){
        const method_name = "display_cards";
        console.log(`Enter ${this.class_name}::${method_name}`);
        let card_location = document.getElementById("card_id");
        let img = "";
        for (let i = 0; i < this.card_name.length; i++){
            img=document.createElement("img");
            img.src = this.card_name[i];
            console.log(`${i}  ${this.card_name[i]}`);     
            card_location.append(img);
        }
        console.log(`Exit ${this.class_name}::${method_name}`);       
    }

   assign_main(main_number){
        const method_name = "assign_main";
        console.log(`Enter ${this.class_name}::${method_name}; main_number = ${main_number}`);
        let selected_card = 0;
        let random_card = 0;
        let random_color = 0;
        for (let i = 0; i < 9; i++){
           do {
                selected_card = Math.floor(Math.random()*36);
           }
           while(this.selected[selected_card] == false);
           this.mains[main_number][i] = this.card_name[selected_card];
           this.selected[selected_card] = false;
           console.log(`${i}:: ${random_card} ${random_color} ${selected_card} : ${this.mains[main_number][i]}`);
        }        
        console.log(`Exit ${this.class_name}::${method_name}`);    
   
   } 
   
    display_cards_in_main(main_number){
        const method_name = "display_cards_in_main";
        console.log(`Enter ${this.class_name}::${method_name} ; main_number = ${main_number}`);
        let card_location = document.getElementById(`main_${main_number}`);
        card_location.innerHTML = "";
        console.log(`id = main_${main_number}`);    
        let img = "";
        for (let i = 0; i < 9; i++){
            img = document.createElement("img");
            img.src = this.mains[main_number][i];
            card_location.append(img);
        }
        console.log(`Exit ${this.class_name}::${method_name}`);                
    }

    hide_cards_in_main(main_number){
        const method_name = "display_cards_in_main";
        console.log(`Enter ${this.class_name}::${method_name} ; main_number = ${main_number}`);
        let card_location = document.getElementById(`main_${main_number}`);
        card_location.innerHTML = "";
        console.log(`id = main_${main_number}`);    
        let img = "";
        for (let i = 0; i < 9; i++){
            img = document.createElement("img");
            img.src = "./cartes/dos_carte.gif";
            card_location.append(img);
        }
        console.log(`Exit ${this.class_name}::${method_name}`);                
    }

    get_main_location (main_number){
        const method_name = "display_cards_in_main";
        console.log(`Enter ${this.class_name}::${method_name} ; main_number = ${main_number}`);     
        let exit_value = `main_${main_number}`
        console.log(`Exit ${this.class_name}::${method_name}`);       
        return exit_value;
    }

    reset_cards_in_main(main_number){
        const method_name = "display_cards_in_main";
        console.log(`Enter ${this.class_name}::${method_name} ; main_number = ${main_number}`);

        let card_location = document.getElementById(`main_${main_number}`);
        card_location.innerHTML = "";
        console.log(`Exit ${this.class_name}::${method_name}`);                
    }    



/*
   display_random_card(){
        const method_name = "display_random_card";
        console.log(`Enter ${this.class_name}::${method_name}`;    
        let card_location = document.getElementById("card_id");
        let img = "";
        let random_card = Math.floor(Math.random()*9)+1;
        let random_color = Math.floor(Math.random()*3)+1;
        img=document.createElement("img");
        img.src = this.card_name[random_card + 4 * random_color];
        card_location.append(img);
        console.log(random_card);
        console.log(`Exit ${this.class_name}::${method_name}`);           
    } */
    
}



cards = new card_pack();
 // cards.display_cards();
// cards.display_random_card()

for (let i = 0; i< 4; i++){
    cards.assign_main(i);
}

for (let i = 0; i< 4; i++){
 //  cards.display_cards_in_main(i);
}

for (let i = 0; i< 4; i++){
   cards.hide_cards_in_main(i);
}

card_1_location = document.getElementById(cards.get_main_location(1));
card_2_location = document.getElementById(cards.get_main_location(2));
card_3_location = document.getElementById(cards.get_main_location(3));
card_4_location = document.getElementById(cards.get_main_location(4));

button_0 = document.getElementById("btn0_id");

button_0.addEventListener("click", function(e){
     cards.reset_cards_in_main(0)
     cards.hide_cards_in_main(1);
     cards.hide_cards_in_main(2);
     cards.hide_cards_in_main(3);
     cards.display_cards_in_main(0);     
})

button_1 = document.getElementById("btn1_id");

button_1.addEventListener("click", function(e){
    cards.reset_cards_in_main(1)
     cards.hide_cards_in_main(0);
     cards.hide_cards_in_main(2);
     cards.hide_cards_in_main(3);
     cards.display_cards_in_main(1);     
})

button_2 = document.getElementById("btn2_id");

button_2.addEventListener("click", function(e){
    cards.reset_cards_in_main(2)
     cards.hide_cards_in_main(0);
     cards.hide_cards_in_main(1);
     cards.hide_cards_in_main(3);
     cards.display_cards_in_main(2);     
})

button_3 = document.getElementById("btn3_id");

button_3.addEventListener("click", function(e){
    cards.reset_cards_in_main(3)
     cards.hide_cards_in_main(0);
     cards.hide_cards_in_main(1);
     cards.hide_cards_in_main(2);
     cards.display_cards_in_main(3);     
})

button_10 = document.getElementById("btn_id");

button_10.addEventListener("click", function(e){
    for (let i = 0; i< 4; i++){
    cards.display_cards_in_main(i);
    }   
})