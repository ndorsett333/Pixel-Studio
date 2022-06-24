
let color = "#000";


let isClicked = false;


function clearGrid(){
  $("#pixel_canvas tr").remove();
}

function createGrid() {
  let height = $("#input_height").val();
  let width = $("#input_width").val();
  let table = $("#pixel_canvas");
  

  for(let i = 0; i < height; i++){
    table.append("<tr></tr>");
  }

  var trs = $("#pixel_canvas tr");

  for(let a = 0; a < width; a++){
    trs.append("<td></td>");
  }
}


function createPixel(el){
  let element = $(el.target);
  element.css("background", color);
}


$("#submit").on("click", function(){
  clearGrid(); 
  createGrid();
  $("#settings").toggleClass("open");
});


$("#pixel_canvas").on("click", "td", function(e){
  createPixel(e);
  isClicked = false;
})
.on("dblclick", "td", function(e){
  $(e.target).css('background-color', '#FFFFFF');
})
.on("mousedown", function(e){ 
  e.preventDefault();
  isClicked = true;
})
.on("mouseover", "td", function(e){ 
  
  if(isClicked){
    createPixel(e);
  }
});


$(document).on('mouseup', function(){
  isClicked = false;
});

$("#colorPicker").change(function(){
  color = $(this).val();
  $("body").css("background-color",color);
});

$("#close").on("click", function(){
  $("#settings").toggleClass("open");
});



$("#refresh").on("click", function(){
  clearGrid(); 
  createGrid();
});


createGrid();

