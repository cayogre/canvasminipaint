var mouseEvent = "empaty"
var last_position_of_x, last_position_of_y;
var width_of_line = 1
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d"); 
color="blue";
canvas.addEventListener("mouseDown",myMouseDown);
function myMouseDown(e){
    mouseEvent = "mousedown"
    console.log(mouseEvent)
}
canvas.addEventListener("mouseUp",myMouseUp);
function myMouseUp(e){
    mouseEvent = "mouseup"
    console.log(mouseEvent)
}
canvas.addEventListener("mouseLeave",myMouseLeave);
function myMouseLeave(e){
    mouseEvent = "mouseleave"
    console.log(mouseEvent)
}
canvas.addEventListener("mouseMove",myMouseMove);
function myMouseMove(e){
    var atual_posicao_do_mouse_x = e.clientX - canvas.offsetLeft
    var atual_posicao_do_mouse_y = e.clientY - canvas.offsetTop
    if (mouseEvent == "mousedown"){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.linewidth = width_of_line
    ctx.moveTo(last_position_of_x, last_position_of_y)
    ctx.lineTo(atual_posicao_do_mouse_x, atual_posicao_do_mouse_y)
    ctx.stroke()
    }
    last_position_of_x = atual_posicao_do_mouse_x;
    last_position_of_y = atual_posicao_do_mouse_y;
    console.log(mouseEvent)
}