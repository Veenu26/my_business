const btn1 = document.getElementById("btn1");
const con1 = document.getElementById("con1");


btn1.addEventListener("click" , () => {
    btn1.style.display = "none";
    

    con1.innerHTML = `
    <button type="button" id="btn2" class="text-white font-bold h-8.5 w-4 rounded">-</button>
    <p class="text-white inline-block font-bold h-8.5 w-4">1</p>
    <button type="button" id="btn3" class="text-white font-bold h-8.5 w-4 rounded">+</button>
    
    `
    ;
    con1.style.display = "block";

    const btn2 = document.getElementById("btn2");

    btn2.addEventListener("click" , () => {
        
        con1.style.display = "none";
        btn1.style.display = "block";
    });

    const btn3 = document.getElementById("btn3");

    btn3.addEventListener("click" , () => {
        
        con1.style.display = "none";
        btn1.style.display = "block";
    });

});


btn4.addEventListener("click" , () => {
    btn4.style.display = "none";
    

    con2.innerHTML = `
    <button type="button" id="btn5" class="text-white font-bold h-8.5 w-4 rounded">-</button>
    <p class="text-white inline-block font-bold h-8.5 w-4">1</p>
    <button type="button" id="btn6" class="text-white font-bold h-8.5 w-4 rounded">+</button>
    
    `
    ;
    con2.style.display = "block";

    const btn5 = document.getElementById("btn5");

    btn5.addEventListener("click" , () => {
        
        con2.style.display = "none";
        btn4.style.display = "block";
    });

    const btn6 = document.getElementById("btn6");
    
    btn6.addEventListener("click" , () => {
        
        con2.style.display = "none";
        btn4.style.display = "block";
    });

});