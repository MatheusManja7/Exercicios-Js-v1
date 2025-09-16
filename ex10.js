const prompt = require('prompt-sync')();

for(cont1 = 1; cont1 <= 10; cont1++){
    console.log()
    console.log(`Tabuada do ${cont1}`);
    for(cont2 = 1; cont2 <= 10; cont2++){
        console.log(`${cont1} X ${cont2} = ${cont1 * cont2}`);
    }
}