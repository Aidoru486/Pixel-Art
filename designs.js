// Select color input
const colorInput = $("#colorPicker");

// Select size input
const inputHeight = $("#input_height");
const inputWidth = $("#input_width");

// Define the canvas
const pixelCanvas = $("#pixel_canvas");

// When size is submitted by the user, call makeGrid()

function init() {
  $("#sizePicker").submit(function(event) {
    event.preventDefault();
    makeGrid();
  });
}

$(document).ready(init);

pixelCanvas.on("click", "td", function() {
  $(this).css("background-color", colorInput.val());
});

function makeGrid() {
  // Clear the canvas before creating a new one
  pixelCanvas.children().remove("tr");

  // removing color with double click
  pixelCanvas.on("dblclick", "td", function() {
    $(this).css("background-color", "");
  });

  // Assigns values to height and width

  let height = inputHeight.val();
  let width = inputWidth.val();

  // Build the canvas

  // Create rows
  for (let maxRows = 0; maxRows < height; maxRows++) {
    $("<tr></tr>").appendTo(pixelCanvas);
  }

  // Create columns
  for (let maxCols = 0; maxCols < width; maxCols++) {
    $("<td></td>").appendTo("tr");
  }
}
