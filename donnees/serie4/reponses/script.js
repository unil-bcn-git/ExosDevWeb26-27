
    console.log("start1")

let dices = [];
let dices_template = "./images_des/D";
let dices_extension = ".jpg";

function read_dice(dice_number){
    console.log("enter read_dice");
    let dice_name = dices_template + dice_number;
    dice_name = dice_name += dices_extension;
    console.log(dice_name)
    console.log("exit read_dice");
    return (dice_name)
}

function read_all_dices(){
    let dices = [];
    for(i = 1; i <= 6; i++){
        dices [i] = read_dice(i); 
    }
    return(dices);
}

function throw_dice()
{
    console.log("enter throw_dice");
    jet = Math.floor(Math.random()*5)+1;
    console.log(`jet = ${jet}`);
    imge = dices_images[jet];
    image_string = `<img src=${imge}>`
    console.log(image_string)
    document.write(image_string);
    console.log("exit throw_dice");
}

let dices_images = []

dices_images = read_all_dices()

/*
var imge1 = document.createElement("img"); 
for (i = 1; i <= 6 ; i++){
    console.log("enter i loop");
    console.log(dices_images[i])
    image_name = "toto"+i;
    console.log(`image_name = ${image_name}`)
    imge = document.getElementById(image_name)
    imge.src = dices_images[i];
    image_string = `<img src=${imge.src}>`
    console.log(image_string)
    document.write(image_string);
    console.log("enter i loop");
} 
*/

throw_dice();

for (i=1;i<200;i++){
    throw_dice();   
}