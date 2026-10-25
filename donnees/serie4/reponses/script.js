
// DEBUG TOOLS
const debug = true;

function log_enter (name){
    if(debug){
        console.log(`Enter ${name}`);
    }
}

function log_exit (name){
    if(debug){
        console.log(`Exit ${name}`);
    }
}

function log_text (name, texte1, texte){
    if(debug){
        console.log(`>>>> ${name}: ${texte1} ${texte}`);
    }
}

// CONST
const dices_template = "./images_des/D";
const dices_extension = ".jpg";


class abstract_dice {
    
    constructor (){
        const function_name = "abstract_dice";
        log_enter(function_name);
        this.dices = [];
        var dice_name = "";
        for(let i = 1; i <= 6; i++){
            dice_name = dices_template + i;
            log_text (function_name, "dice_name = ", `${dice_name}`);
            this.dices [i] = dice_name += dices_extension;; 
        }
        log_exit (function_name);
    }  
    
    jet_dice_normal(){
        const function_name = "throw_dice";
        log_enter(function_name);
        var rnd_dice = Math.floor(Math.random()*6)+1;
        log_text (function_name, "rnd_dice = ", `${rnd_dice}`);
        log_exit (function_name); 
        return rnd_dice;
    }

     jet_dice_impair(){
        const function_name = "throw_dice";
        log_enter(function_name);
        var rnd_dice = Math.floor(Math.random()*3)*2+1;
        log_text (function_name, "rnd_dice = ", `${rnd_dice}`);
        log_exit (function_name); 
        return rnd_dice;
    }


    display_dice(number){
        const function_name = "display_dice";
        log_enter(function_name);
        document.write(`<img src=${this.dices[number]}>`)
        log_text (function_name, "this.dices[number] = ", `${this.dices[number]}`);
        log_exit (function_name);
        return number;
    }
    display_dice(number){
        const function_name = "display_dice";
        log_enter(function_name);
        document.write(`<img id="D${number}" src=${this.dices[number]}>`)
        log_text (function_name, "this.dices[number] = ", `${this.dices[number]}`);
        log_exit (function_name);
        return number;
    }


}

const function_name = "MAIN";
log_enter(function_name);

const my_dice = new abstract_dice();
let throw_value = 0;
let tt = 0;

const max_number_of_throws = 500;
const throws =[]
for (i=1;i<=max_number_of_throws;i++){
    throw_value = my_dice.jet_dice_normal();
    throws.push(throw_value);
    my_dice.display_dice(throw_value);
}
let sum_throws = 0;
let mean_throws = 0;
for (i=0;i<max_number_of_throws;i++){
    log_text (function_name, "throws = ", `${i}, ${throws[i]}`);
    sum_throws += throws[i];
}
mean_throws = sum_throws / max_number_of_throws;
log_text (function_name, "sum_throws, mean_throws = ", `${sum_throws}, ${mean_throws}`);

log_exit (function_name); 
