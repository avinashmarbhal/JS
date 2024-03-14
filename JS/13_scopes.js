let c = 300
// c=300 // this is alo var

if(true){   //this is control code block inside it the scope is block scope
    let a = 10 //and outside is globle scope
    const b = 20
    // let c =30
   // console.log("inner: ",c);
}

//whatever we write in globle space is accesible in block space **
//whatever we write in block space is accesible in globle space **

//console.log(a);
//console.log(b);
// console.log(c); 
 
function one(){
    const username = "Avinash"

    function two(){
        const website ="youtube"
        console.log(username);
    }
    //console.log(website);
    two()
}

// one()

if(true){
    const username = "Avinash"
    if(username === "Avinash"){
        const website = " youtube"
       // console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);



// +++++++++++++++++++++ Intresting ++++++++++++++++++++


addone(5);//we can call function of this type before its defination

function addone(num) {

    return num+1;
    
}




addTwo(5)//we can't call function of this type before its defination 
        //because it's  varable type function

const addTwo = function(num){
    return num + 2
}


