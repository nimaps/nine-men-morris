var BOARD;
function createPage(){

  noFill()
  stroke(220);
  strokeWeight(10);
  square(100,100,600,10);
  square(200,200,400,10);
  square(300,300,200,10);

 
  line(400, 100, 400, 300);
  line(400, 500, 400, 700);
  line (100, 400, 300 ,400);
  line (500, 400, 700, 400);

  stroke(150);
  strokeWeight(3);
  square(100,100,600,10);
  square(200,200,400,10);
  square(300,300,200,10);
  line(400, 100, 400, 300);
  line(400, 500, 400, 700);
  line (100, 400, 300 ,400);
  line (500, 400, 700, 400);

  BOARD.spots.forEach( s => {
    s.show();
  })
}


function updateBoard(){

  BOARD.spots.forEach( (spot) => {
    spot.drawCircles();
  })

  strokeWeight(10);
  noFill()
  stroke(220);

  square(100,100,600,10);
  square(200,200,400,10);
  square(300,300,200,10);

  line(400, 100, 400, 300);
  line(400, 500, 400, 700);
  line (100, 400, 300 ,400);
  line (500, 400, 700, 400);

  stroke(150);
  strokeWeight(3);
  square(100,100,600,10);
  square(200,200,400,10);
  square(300,300,200,10);
  line(400, 100, 400, 300);
  line(400, 500, 400, 700);
  line (100, 400, 300 ,400);
  line (500, 400, 700, 400);


}

function setup() {
  var canvas = createCanvas(800, 800);
  canvas.id('canvas');
  BOARD = new Board();
  createPage();
}

function draw() {
  background(50);
  updateBoard();
  BOARD.spots.forEach( (spot) => {
    spot.show();
  })
}

function keyPressed(){
  /* Nothing */
}


function mouseClicked(){
  clicked(BOARD);
}
