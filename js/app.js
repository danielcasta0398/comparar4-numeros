const resetValue = () => {
  document.getElementById("numero1").value = undefined;
  document.getElementById("numero2").value = undefined;
};

const comparar = (event) => {
  event.preventDefault();
  //Obtenemos los valores y los almacenamos
  const numero1 = parseFloat(document.getElementById("numero1").value);
  const numero2 = parseFloat(document.getElementById("numero2").value);

  console.log(numero2);
  if (isNaN(numero1) || isNaN(numero2)) {
    const p = document.createElement("p");
    p.innerHTML = `Los campos estan vacios o no estas ingresando un valor numerico`;
    p.setAttribute('id', 'error')

    document.querySelector("#resultado").insertAdjacentElement("afterend", p);
    console.log("No puede estar vacio");

    setTimeout( () =>{
        p.remove();
    }, 5 * 1000 )
    
  }

    if (numero1 > numero2) {
         const p = document.createElement("p");
    p.innerHTML= `Al comparar <strong>${numero1}</strong> entre <strong>${numero2}</strong> El numero mayor es <strong>${numero1}</strong>`;
    document.querySelector("#resultado").insertAdjacentElement("afterend", p);
    setTimeout( () =>{
        location.reload();
    }, 10 * 1000 )
    

    resetValue();
  } else {
    const p = document.createElement("p");
    p.innerHTML= `Al comparar <strong>${numero1}</strong> entre <strong>${numero2}</strong> El numero mayor es <strong>${numero2}</strong>`;
    document.querySelector("#resultado").insertAdjacentElement("afterend", p);
    resetValue();

    setTimeout( () =>{
        location.reload();
    }, 10 * 1000 )
  }
  //Aquí tu código
};

const comparar4 = (event) => {
    event.preventDefault();
    //Obtenemos los valores y los almacenamos
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);
    const numero3 = parseFloat(document.getElementById("numero3").value);
    const numero4 = parseFloat(document.getElementById("numero4").value);
    
    //El numero mayor es el 1 y el menor el 4
    if (numero1>numero2 && numero1>numero3 && numero1>numero4) {
        if (numero2>numero3 && numero2>numero4) {            
            if(numero3>numero4){
                console.log(`El numero mayor es ${numero1} y el menor es ${numero4}`);
            }
        } 

        if (numero2>numero3 && numero2>numero4) {            
            if(numero4>numero3){
                console.log(`El numero mayor es ${numero1} y el menor es ${numero3}`);
            }
        } 
     
     
        if (numero3>numero2 && numero3>numero4) {            
            if(numero2>numero4){
                console.log(`El numero mayor es ${numero1} y el menor es ${numero4}`);
        }
        
        }
    } 

    //El numero mayor es el 2 y el menor el 4

    if (numero2>numero1 && numero2>numero3 && numero2>numero4) {
        if (numero1>numero3 && numero1>numero4) {            
            if(numero3>numero4){
                console.log(`El numero mayor es ${numero2} y el menor es ${numero4}`);
            }
        } 

        if (numero3>numero1 && numero3>numero4) {            
            if(numero4>numero1){
                console.log(`El numero mayor es ${numero2} y el menor es ${numero1}`);
        }
        
        }
     
        if (numero3>numero1 && numero3>numero4) {            
            if(numero1>numero4){
                console.log(`El numero mayor es ${numero2} y el menor es ${numero4}`);
        }
        
        }
    } 

    //El numero mayor es el 3 y el menor el 4

    if (numero3>numero1 && numero3>numero2 && numero3>numero4) {
        if (numero1>numero2 && numero1>numero4) {            
            if(numero2>numero4){
                console.log(`El numero mayor es ${numero3} y el menor es ${numero4}`);
            }
        } 

        if (numero1>numero2 && numero1>numero4) {            
            if(numero4>numero2){
                console.log(`El numero mayor es ${numero3} y el menor es ${numero2}`);
            }
        } 
     
        if (numero2>numero1 && numero2>numero4) {            
            if(numero2>numero4){
                console.log(`El numero mayor es ${numero3} y el menor es ${numero4}`);
        }
        
        }
    } 

    //El numero mayor es el 4 y el menor el 1

    if (numero4>numero1 && numero4>numero2 && numero4>numero3) {
        if (numero2>numero1 && numero2>numero3) {            
            if(numero3>numero1){
                console.log(`El numero mayor es ${numero4} y el menor es ${numero1}`);
            }
        } 

        if (numero1>numero2 && numero1>numero3) {            
            if(numero2>numero3){
                console.log(`El numero mayor es ${numero4} y el menor es ${numero3}`);
            }
        } 

        if (numero3>numero1 && numero3>numero2) {            
            if(numero1>numero2){
                console.log(`El numero mayor es ${numero4} y el menor es ${numero2}`);
            }
        } 
     
        if (numero3>numero1 && numero3>numero2) {            
            if(numero3>numero1){
                console.log(`El numero mayor es ${numero4} y el menor es ${numero1}`);
        }
        
        }
    } 
  
  
  
  
  
    //Aquí tu código
  };
  