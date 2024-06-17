// Variable global para tecla
let colorGlobal;

// teclas a colores
const colorMap = {
    'a': 'pink',
    's': 'orange',
    'd': 'skyblue'
};

// teclas para cambiar el color del div extra
const newDivColorMap = {
    'q': 'purple',
    'w': 'grey',
    'e': 'brown'
};

// Cambiar el color del div con id "key" y del div con id "extra"
document.addEventListener('keydown', function(event) {
    if (colorMap[event.key]) {
        colorGlobal = colorMap[event.key];
        document.getElementById('key').style.backgroundColor = colorGlobal;
    } else if (newDivColorMap[event.key]) {
        document.getElementById('extra').style.backgroundColor = newDivColorMap[event.key];
    }
});

// Cambiar el color de los divs existentes a negro al hacer clic
document.querySelectorAll('.color-box').forEach(div => {
    div.addEventListener('click', function() {
        div.style.backgroundColor = 'black';
    });
});
