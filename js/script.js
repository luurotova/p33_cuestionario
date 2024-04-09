//capturo los elementos que necesito
const numElements = document.querySelector('input');
const btn = document.querySelector('.comprobar');
const result = document.querySelector('.result');

//evento
btn.addEventListener('click', function (){ 
    
    if (document.getElementById('r1').checked == true) {
        result.innerHTML = 'Enhorabuena, de aquí a avatar'
        result.style.border = '2px solid green';
    
    } else {
        result.innerHTML = 'Lo sentimos, no es la respuesta correcta';
        result.style.border = '2px solid red';
     }
    
    })