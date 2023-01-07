var last_position_of_x, last_position_of_y;
color = "black";
width_of_line = 2;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

// 1. Coloca el nombre a la variable como width:
var width = screen.width;

//2. Completa el nombre de las variables new_width y new_height que harán que el canvas se ajuste a la pnatalla:
    new_width    =  screen.width - 70; 
    new_height   = screen.height - 300;

// 3. Completa la condición IF para verificar si el ancho de la pantalla es menor a 992 px
if(width< 992) {

    //4. Agrega new_width y new_height para que el tamaño de canvas pueda ajustarse a la pantalla:
	document.getElementById("myCanvas").width = new_width       ;
    document.getElementById("myCanvas").height = new_height     ;
    document.body.style.overflow = "hidden";
} 

// 5. Agrega addEventListener para el evento "touchstart" que llamará a la función my_touchstart
canvas.addEventListener( "touchstart"     , my_touchstart    );

function my_touchstart(e) {
	console.log("my_touchstart");
    //6. Agrega el color que el usuario indique en el input del documento HTML con document.getElementById("color").value;:
    color = document.getElementById("color").value;

    //7. Agrega el ancho para el pincel que el usuario indique en el input del documento HTML:
    width_of_line = document.getElementById("width_of_line").value;
  
         
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}

// 8. Agrega addEventListener para el evento "touchmove" que llamará a la función my_touchmove
canvas.addEventListener("touchmove"      , my_touchmove   );


function my_touchmove(e) {

	console.log("my_touchMove");
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

    // Este es el mismo código que la clase pasada:
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("Current position of x and y coordinates = ");
    console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();

    last_position_of_x = current_position_of_touch_x; 
    last_position_of_y = current_position_of_touch_y;
    
    
}

  
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
    
