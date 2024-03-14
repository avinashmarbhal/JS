// immediately invoked function expression (IIFE)

(function chai(){ // this is an named IIFE
    console.log(`DB CONNECTED`);
})();  // in case of IIFE function we always have to give semicolan ' ; '
        //One of the primary uses for an IIFE is to create private scope to helps minimize pollution of the global environment


( (name) => { // unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )("Avinash");


(() => {
     console.log("hellow");
})();



