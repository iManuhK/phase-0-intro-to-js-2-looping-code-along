//Code your solutions in this file
for (let age = 30;age < 40;age ++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}
const gifts = ["teddy bear", "drone", "doll"];
function wrapGifts(gifts){
    for (let i=0;i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}
wrapGifts(gifts);
let messageOutput = [];

function writeCards(cardnames, event){
    for (let i=0;i < cardnames.length; i++) {
       // messageOutput.push(`Thank you, ${cardnames[i]}, for the wonderful ${event} gift!`)
        messageOutput[i]= (`Thank you, ${cardnames[i]}, for the wonderful ${event} gift!`)
    }
    return messageOutput;
}
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");
console.log(messageOutput);

function countDown () {
    let i = 10;
    while(i >= 0){
        console.log(i--);
    }
    return i;
}


