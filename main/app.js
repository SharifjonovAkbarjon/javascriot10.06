// son - parametr - malumot qabul qilish

// function daraja(son){
//     return son * son
// }



// function greeting(ism){
//     return  ism
// }

// console.log( greeting("laylo") );  
// console.log( greeting("Akbarjon") );


// function add(a, b){
//     return a+b

// }

// console.log( add(5, 6) );
// console.log( add(8, 1) );


// function kaa(name, date){
//     let age = 2024 - date
//     // return  name 

// }

//     console.log( kaa("john, 1990") );
//     console.log( kaa("selena, 2001") );

//     function bar (a){
        
//     }


{
    // masala 1
    function perimetr (a) {
        return 4 * a;
    }
    
    console.log(perimetr(7));
}


{
    // masala 2
    function yuza(a) {
        return a * a;   
    }
    
    console.log(yuza(10));
}


{
    // masala 3
    function yuza(a, b) {
        return a * b;
    }
    
    function perimetr(a, b) {
        return 2 * (a + b);
    }

    console.log(yuza(8, 10));
    console.log(perimetr(8, 10));
    
}


{
    // masala 4
    function uzunlik(d) {
        const pi = 3.14;
        return pi * d;
    }
    
    console.log(uzunlik(5));    
}   


{
    // masala 5
    function hajmi(a) {
        return a * a * a;
    }
    
    function sirti(a) {
        return 6 * a * a;
    }
    
    console.log(hajmi(5));
    console.log(sirti(5));    
}

{
    // masala 6
    function hajmi(a, b, c) {
        return a * b * c;
    }
    
    function sirti(a, b, c) {
        return 2 * (a * b + b * c + a * c);
    }
    
    console.log(hajmi(4, 5, 6)); 
    console.log(sirti(4, 5, 6));     
}


{
    // masala 7
    function uzunligi(R) {
        const pi = 3.14;
        return 2 * pi * R;
    }
    
    function yuzasi(R) {
        const pi = 3.14;
        return pi * (R ** 2);
    }   
    
    console.log(uzunligi(10));
    console.log(yuzasi(5));    
}


{
    // masala 8
    function ortaArifmetik(a, b) {
        return (a + b) / 2;
    }
    
    console.log(ortaArifmetik(5, 15));    
}


{
    // masala 9
    function geometrig(a, b) {
        if (a >= 0 & b >= 0) {
            return Math.sqrt(a * b);
        }
       
    }
    
    console.log(geometrig(2, 15));    
}

{
    // masala 10
    function son(a, b) {
        const yigindi = a + b;
        const kopaytma = a * b;
        const kvadrat = a * a;
        const Kvadrat = b * b;
        
        return {    
            yigindi,
            kopaytma,
            kvadrat,
            kvadrat
        };
    }
    
    const natija = son(4, 5);
    console.log(natija);    
}