// COLORS
const COLOR_YELLOW = "#ecf542";
const COLOR_WHITE = "#ffffff";
const COLOR_BLUE = "#46cafa";
const COLOR_GREEN = "#37fa25";
const COLOR_GREY = "#969696";
const COLOR_PINK = "#f945d8";

// TYPES
const TYPE_HUMAN = "Human";
const TYPE_AI = "AI";

const MIDDLE_HOUSES = [1, 4, 7, 9, 10, 11, 12, 13, 14, 16, 19, 22];

function createSpots(){

  var spots = [];

  spots.push(new Spot(0, 100, 100));
  spots.push(new Spot(1, 400, 100));
  spots.push(new Spot(2, 700, 100));

  spots.push(new Spot(3, 200, 200));
  spots.push(new Spot(4, 400, 200));
  spots.push(new Spot(5, 600, 200));

  spots.push(new Spot(6, 300, 300));
  spots.push(new Spot(7, 400, 300));
  spots.push(new Spot(8, 500, 300));

  spots.push(new Spot(9, 100, 400));
  spots.push(new Spot(10, 200, 400));
  spots.push(new Spot(11, 300, 400));

  spots.push(new Spot(12, 500, 400));
  spots.push(new Spot(13, 600, 400));
  spots.push(new Spot(14, 700, 400));

  spots.push(new Spot(15, 300, 500));
  spots.push(new Spot(16, 400, 500));
  spots.push(new Spot(17, 500, 500));

  spots.push(new Spot(18, 200, 600));
  spots.push(new Spot(19, 400, 600));
  spots.push(new Spot(20, 600, 600));

  spots.push(new Spot(21, 100, 700));
  spots.push(new Spot(22, 400, 700));
  spots.push(new Spot(23, 700, 700));

  spots[0].addNeighbor(spots[1]);
  spots[0].addNeighbor(spots[9]);
  spots[0].complements.push([spots[1], spots[2]]);
  spots[0].complements.push([spots[9], spots[21]]);

  spots[1].addNeighbor(spots[0]);
  spots[1].addNeighbor(spots[2]);
  spots[1].addNeighbor(spots[4]);
  spots[1].complements.push([spots[0], spots[2]]);
  spots[1].complements.push([spots[4], spots[7]]);

  spots[2].addNeighbor(spots[1]);
  spots[2].addNeighbor(spots[14]);
  spots[2].complements.push([spots[0], spots[1]]);
  spots[2].complements.push([spots[14], spots[23]]);

  spots[3].addNeighbor(spots[4]);
  spots[3].addNeighbor(spots[10]);
  spots[3].complements.push([spots[4], spots[5]]);
  spots[3].complements.push([spots[10], spots[18]]);

  spots[4].addNeighbor(spots[1]);
  spots[4].addNeighbor(spots[3]);
  spots[4].addNeighbor(spots[5]);
  spots[4].addNeighbor(spots[7]);
  spots[4].complements.push([spots[1], spots[7]]);
  spots[4].complements.push([spots[3], spots[5]]);

  spots[5].addNeighbor(spots[4]);
  spots[5].addNeighbor(spots[13]);
  spots[5].complements.push([spots[3], spots[4]]);
  spots[5].complements.push([spots[13], spots[20]]);

  spots[6].addNeighbor(spots[7]);
  spots[6].addNeighbor(spots[11]);
  spots[6].complements.push([spots[7], spots[8]]);
  spots[6].complements.push([spots[11], spots[15]]);

  spots[7].addNeighbor(spots[4]);
  spots[7].addNeighbor(spots[6]);
  spots[7].addNeighbor(spots[8]);
  spots[7].complements.push([spots[1], spots[4]]);
  spots[7].complements.push([spots[6], spots[8]]);

  spots[8].addNeighbor(spots[7]);
  spots[8].addNeighbor(spots[12]);
  spots[8].complements.push([spots[6], spots[7]]);
  spots[8].complements.push([spots[12], spots[17]]);

  spots[9].addNeighbor(spots[0]);
  spots[9].addNeighbor(spots[10]);
  spots[9].addNeighbor(spots[21]);
  spots[9].complements.push([spots[0], spots[21]]);
  spots[9].complements.push([spots[10], spots[11]]);

  spots[10].addNeighbor(spots[3]);
  spots[10].addNeighbor(spots[9]);
  spots[10].addNeighbor(spots[11]);
  spots[10].addNeighbor(spots[18]);
  spots[10].complements.push([spots[3], spots[18]]);
  spots[10].complements.push([spots[9], spots[11]]);

  spots[11].addNeighbor(spots[6]);
  spots[11].addNeighbor(spots[10]);
  spots[11].addNeighbor(spots[15]);
  spots[11].complements.push([spots[6], spots[15]]);
  spots[11].complements.push([spots[9], spots[10]]);

  spots[12].addNeighbor(spots[8]);
  spots[12].addNeighbor(spots[13]);
  spots[12].addNeighbor(spots[17]);
  spots[12].complements.push([spots[8], spots[17]]);
  spots[12].complements.push([spots[13], spots[14]]);

  spots[13].addNeighbor(spots[5]);
  spots[13].addNeighbor(spots[12]);
  spots[13].addNeighbor(spots[14]);
  spots[13].addNeighbor(spots[20]);
  spots[13].complements.push([spots[12], spots[14]]);
  spots[13].complements.push([spots[5], spots[20]]);

  spots[14].addNeighbor(spots[2]);
  spots[14].addNeighbor(spots[13]);
  spots[14].addNeighbor(spots[23]);
  spots[14].complements.push([spots[2], spots[23]]);
  spots[14].complements.push([spots[12], spots[13]]);

  spots[15].addNeighbor(spots[11]);
  spots[15].addNeighbor(spots[16]);
  spots[15].complements.push([spots[6], spots[11]]);
  spots[15].complements.push([spots[16], spots[17]]);

  spots[16].addNeighbor(spots[15]);
  spots[16].addNeighbor(spots[17]);
  spots[16].addNeighbor(spots[19]);
  spots[16].complements.push([spots[15], spots[17]]);
  spots[16].complements.push([spots[19], spots[22]]);

  spots[17].addNeighbor(spots[12]);
  spots[17].addNeighbor(spots[16]);
  spots[17].complements.push([spots[8], spots[12]]);
  spots[17].complements.push([spots[15], spots[16]]);

  spots[18].addNeighbor(spots[10]);
  spots[18].addNeighbor(spots[19]);
  spots[18].complements.push([spots[3], spots[10]]);
  spots[18].complements.push([spots[19], spots[20]]);

  spots[19].addNeighbor(spots[16]);
  spots[19].addNeighbor(spots[18]);
  spots[19].addNeighbor(spots[20]);
  spots[19].addNeighbor(spots[22]);
  spots[19].complements.push([spots[18], spots[20]]);
  spots[19].complements.push([spots[16], spots[22]]);

  spots[20].addNeighbor(spots[13]);
  spots[20].addNeighbor(spots[19]);
  spots[20].complements.push([spots[18], spots[19]]);
  spots[20].complements.push([spots[5], spots[13]]);

  spots[21].addNeighbor(spots[9]);
  spots[21].addNeighbor(spots[22]);
  spots[21].complements.push([spots[0], spots[9]]);
  spots[21].complements.push([spots[22], spots[23]]);

  spots[22].addNeighbor(spots[19]);
  spots[22].addNeighbor(spots[21]);
  spots[22].addNeighbor(spots[23]);
  spots[22].complements.push([spots[16], spots[19]]);
  spots[22].complements.push([spots[21], spots[23]]);

  spots[23].addNeighbor(spots[14]);
  spots[23].addNeighbor(spots[22]);
  spots[23].complements.push([spots[21], spots[22]]);
  spots[23].complements.push([spots[2], spots[14]]);

  return spots;
}

function empty(spot){
  spot.color = COLOR_WHITE;
  spot.available = true;
  spot.owner = null;
  spot.isSelected = false;
}

function own(spot, player) {
  spot.owner = player;
  spot.color = player.color;
  spot.available = false;
}

class Spot {

    constructor(id, x, y ) {
        this.id = id;
        this.available = true;
        this.owner = null;
        this.x = x;
        this.y = y;
        this.radius = 35;
        this.color = COLOR_WHITE;
        this.strokeColor = COLOR_GREY;
        this.strokeW = 3;
        this.neighbors = [];
        this.complements = [];
        this.isSelected = false;
    }

    drawCircles = () => {
        fill(220);
        strokeWeight(0);
        circle(this.x, this.y, this.radius+10);
    }

    addNeighbor = (neighbor) => {
        this.neighbors.push(neighbor);
    }

    show = () => {
        strokeWeight(this.strokeW);
        stroke(this.strokeColor);
        if(this.isSelected){
            fill(COLOR_YELLOW);
        }
        else{
            fill(this.color);
        } 
        circle(this.x, this.y, this.radius);

        // DEBUG :: Writing position id's of the boards on them for developing phase
        // fill(0);
        // text(this.id, this.x - 5, this.y + 5)
    }

}

class Player {

    constructor(id, color, type){
        this.id = id;
        this.color = color;
        this.type = type;
        this.piecesOnBoard = 0;
        this.piecesOnHand = 9;
    }
}

function madeMill(spot){
    for( i=0 ; i<2 ;i++ ) {
      var lines = spot.complements[i];
      var mill = true;
      for( j = 0 ; j < 2 ; j++ ) {
        var node = lines[j];
        if(node.owner == null ||  node.owner.id != spot.owner.id ){
          mill = false;
          break;
        }
      }
      if(mill){
        return true;
      }
    }
    return false;
  }
  

function areNeighbors(spot1, spot2){
  var areneighbors = false;
  spot1.neighbors.forEach( (neighbor) => {
    if(spot2.id == neighbor.id){
      areneighbors = true;
    }
  })
  return areneighbors;
}

function hasMills(board, player){
  for(var i = 0 ; i < 12 ; i++ ){
    if(board.spots[MIDDLE_HOUSES[i]].owner != null && board.spots[MIDDLE_HOUSES[i]].owner.id === player.id){
      var first = board.spots[MIDDLE_HOUSES[i]].complements[0];
      var second = board.spots[MIDDLE_HOUSES[i]].complements[1];

      if(first[0].owner != null && first[0].owner.id == player.id && first[1].owner != null && first[1].owner.id == player.id){
        return true;
      }
      else if(second[0].owner != null && second[0].owner.id == player.id && second[1].owner != null && second[1].owner.id == player.id){
        return true;
      }
    }
  }
  return false;
}

function countMills(board, player){
  var count = 0;
  for(var i = 0 ; i < 12 ; i++ ){
    var id = board.spots[MIDDLE_HOUSES[i]].id;
    var owner = board.spots[MIDDLE_HOUSES[i]].owner;

    if( owner != null && owner.id === player.id){
      var first = board.spots[MIDDLE_HOUSES[i]].complements[0];
      var second = board.spots[MIDDLE_HOUSES[i]].complements[1];

      if( (id == 1 || id == 9 || id == 14 || id == 11 || id == 16 || id == 12  || id == 4 || id == 10 || id == 13 || id == 19) &&
        first[0].owner != null && first[0].owner.id == player.id && first[1].owner != null && first[1].owner.id == player.id){
        count++;
      }
      else if( (id == 7 || id == 22 || id == 4 || id == 10 || id == 13 || id == 19) &&
        second[0].owner != null && second[0].owner.id == player.id && second[1].owner != null && second[1].owner.id == player.id){
        count++;
      }
    }
  }
  return count;
}

function countPiecesOnBoard(board){
  return board.player1.piecesOnBoard + board.player2.piecesOnBoard;
}

function hasMoves(board, player){
  for(var i = 0 ; i < 24 ; i++){
    if(board.spots[i].owner != null && board.spots[i].owner.id === player.id ){
      for(var j = 0 ; j < board.spots[i].neighbors.length; j++){
        if(board.spots[i].neighbors[j].available){
          return true;
        }
      }
    }
  }
  return false;
}
  
function evaluate(board){
  if (board.player1.piecesOnHand < 1 &&!hasMoves(board, board.player1)) {
    return -150;
  }
  else if (board.player2.piecesOnHand < 1 && !hasMoves(board, board.player2)) {
    return 150;
  }
  else if(board.player1.piecesOnHand < 1 && board.player1.piecesOnBoard < 3){
    return -100;
  }
  else if(board.player2.piecesOnHand < 1 && board.player2.piecesOnBoard < 3){
    return +100;
  }
  else if( hasMills(board, board.player1) || hasMills(board, board.player2) ){
    return 30 * (countMills(board, board.player1) - countMills(board, board.player2) );
  }
  else{
    return (board.player1.piecesOnBoard - board.player2.piecesOnBoard);
  }
}

function checkWinner(board){
  if(board.player1.piecesOnHand < 1 && board.player1.piecesOnBoard < 3){
    return true;
  }
  else if(board.player2.piecesOnHand < 1 && board.player2.piecesOnBoard < 3){
    return true;
  }
  else if (board.player1.piecesOnHand < 1 && !hasMoves(board, board.player1)) {
    return true;
  }
  else if (board.player2.piecesOnHand < 1 && !hasMoves(board, board.player2)) {
    return true;
  }
  return false;
}

function getWinner(board){
  if(board.player1.piecesOnHand < 1 && board.player1.piecesOnBoard < 3){
    return board.player2;
  }
  else if(board.player2.piecesOnHand < 1 && board.player2.piecesOnBoard < 3){
    return board.player1;
  }
  else if (board.player1.piecesOnHand < 1 && !hasMoves(board, board.player1)) {
    return board.player2;
  }
  else if (board.player2.piecesOnHand < 1 && !hasMoves(board, board.player2)) {
    return board.player1;
  }

  return null; 
}

function minimax(board, depth, isMaximizer, alpha, beta){

   if( depth === 0 || checkWinner(board) ){
     return evaluate(board);
   }

  if(isMaximizer){

    var maxScore = -Infinity;

    for( var i = 0 ; i < 24 ; i++){
      var flag = 0;
      var currentlyselected = board.selected;
      if(board.millMove && board.spots[i].owner != null && board.spots[i].owner.id == board.waiting.id ){
        empty(board.spots[i]);
        board.millMove = false;
        board.waiting.piecesOnBoard--;
        changeTurn(board);
        flag = 1;
      }
      else if(!board.millMove && board.turn.piecesOnHand > 0 && board.spots[i].available){
        own(board.spots[i], board.turn);
        board.turn.piecesOnBoard++;
        board.turn.piecesOnHand--;
        if(madeMill(board.spots[i])){
          board.millMove = true;
          flag = 3;
        }
        else{
          changeTurn(board);
          flag = 2;
        }
      }
      else if(!board.millMove && board.turn.piecesOnHand <= 0 && board.selected != null && board.spots[i].available && areNeighbors(board.selected, board.spots[i]) ){
        board.selected.isSelected = false;
        empty(board.selected);
        own(board.spots[i], board.turn);
        board.selected = null;
        if(madeMill(board.spots[i])){
          board.millMove = true;
          flag = 5;
        }
        else{
          changeTurn(board);
          flag = 4;
        }
      }
      else if(!board.millMove && board.turn.piecesOnHand < 1 && board.selected == null && board.spots[i].owner != null && board.spots[i].owner.id == board.turn.id ){
        board.selected = board.spots[i];
        board.selected.isSelected = true;
        flag = 6;
      }
  
      if(flag != 0){
        var maximizer = false;
        if(flag === 3 || flag === 5 || flag === 6){
          maximizer = true;
        }
        var evaluation = minimax(board, depth - 1, maximizer, alpha, beta);
        maxScore = Math.max(evaluation, maxScore);


        switch(flag){
          case 1:
            changeTurn(board);
            board.waiting.piecesOnBoard++;
            board.millMove = true;
            own(board.spots[i], board.waiting);
            break;
          case 2:
            changeTurn(board);
            board.turn.piecesOnBoard--;
            board.turn.piecesOnHand++;
            empty(board.spots[i]);
            break;
          case 3:
            board.turn.piecesOnBoard--;
            board.turn.piecesOnHand++;
            empty(board.spots[i]);
            board.millMove = false;
            break;
          case 4:
            changeTurn(board);
            board.selected = currentlyselected;
            empty(board.spots[i]);
            own(board.selected, board.turn);
            board.selected.isSelected = true;
            break;
          case 5:
            board.selected = currentlyselected;
            empty(board.spots[i]);
            own(board.selected, board.turn);
            board.selected.isSelected = true;
            board.millMove = false;
            break;
          case 6:
            board.selected.isSelected = false;
            board.selected = null;
            break;
        }

        alpha = Math.max( alpha, maxScore );
        if(beta <= alpha){
          break;
        }
      }
  
    }
    return  maxScore;
  }
  else{
    var minScore = +Infinity;

    for( var i = 0 ; i < 24 ; i++){
      var flag = 0;
      var currentlyselected = board.selected;
      if(board.millMove && board.spots[i].owner != null && board.spots[i].owner.id == board.waiting.id ){
        empty(board.spots[i]);
        board.millMove = false;
        board.waiting.piecesOnBoard--;
        changeTurn(board);
        flag = 1;
      }
      else if(!board.millMove && board.turn.piecesOnHand > 0 && board.spots[i].available){
        own(board.spots[i], board.turn);
        board.turn.piecesOnBoard++;
        board.turn.piecesOnHand--;
        if(madeMill(board.spots[i])){
          board.millMove = true;
          flag = 3;
        }
        else{
          changeTurn(board);
          flag = 2;
        }
      }
      else if(!board.millMove && board.turn.piecesOnHand <= 0 && board.selected != null && board.spots[i].available && areNeighbors(board.selected, board.spots[i]) ){
        board.selected.isSelected = false;
        empty(board.selected);
        own(board.spots[i], board.turn);
        board.selected = null;
        if(madeMill(board.spots[i])){
          board.millMove = true;
          flag = 5;
        }
        else{
          changeTurn(board);
          flag = 4;
        }
      }
      else if(!board.millMove && board.turn.piecesOnHand < 1 && board.selected == null && board.spots[i].owner != null && board.spots[i].owner.id == board.turn.id ){
        board.selected = board.spots[i];
        board.selected.isSelected = true;
        flag = 6;
      }
  
      if(flag != 0){
        var minimizer = true;
        if(flag === 3 || flag === 5 || flag === 6){
          minimizer = false;
        }
        var evaluation = minimax(board, depth - 1, minimizer);
        minScore = Math.min(evaluation, minScore);

        switch(flag){
          case 1:
            changeTurn(board);
            board.waiting.piecesOnBoard++;
            board.millMove = true;
            own(board.spots[i], board.waiting);
            break;
          case 2:
            changeTurn(board);
            board.turn.piecesOnBoard--;
            board.turn.piecesOnHand++;
            empty(board.spots[i]);
            break;
          case 3:
            board.turn.piecesOnBoard--;
            board.turn.piecesOnHand++;
            empty(board.spots[i]);
            board.millMove = false;
            break;
          case 4:
            changeTurn(board);
            board.selected = currentlyselected;
            empty(board.spots[i]);
            own(board.selected, board.turn);
            board.selected.isSelected = true;
            break;
          case 5:
            board.selected = currentlyselected;
            empty(board.spots[i]);
            own(board.selected, board.turn);
            board.selected.isSelected = true;
            board.millMove = false;
            break;
          case 6:
            board.selected.isSelected = false;
            board.selected = null;
            break;
        }
        beta = Math.min(beta, minScore);
        if(beta <= alpha){
          break;
        }
      }
  
    }
    return minScore;
  }
}


function bestMove(board, depth, firstMaximizer){

  var bestScore = +Infinity;
  if(firstMaximizer){
    bestScore = -Infinity;
  }
  var bestMove;

  var bestflag;

  for( var i = 0 ; i < 24 ; i++){
    var flag = 0;
    var currentlyselected = board.selected;

    if(board.millMove && board.spots[i].owner != null && board.spots[i].owner.id == board.waiting.id ){
      empty(board.spots[i]);
      board.millMove = false;
      board.waiting.piecesOnBoard--;
      changeTurn(board);
      flag = 1;
    }
    else if(!board.millMove && board.turn.piecesOnHand > 0 && board.spots[i].available){
      own(board.spots[i], board.turn);
      board.turn.piecesOnBoard++;
      board.turn.piecesOnHand--;
      if(madeMill(board.spots[i])){
        board.millMove = true;
        flag = 3;
      }
      else{
        changeTurn(board);
        flag = 2;
      }
    }
    else if(!board.millMove && board.turn.piecesOnHand <= 0 && board.selected != null && board.spots[i].available && areNeighbors(board.selected, board.spots[i]) ){
      board.selected.isSelected = false;
      empty(board.selected);
      own(board.spots[i], board.turn);
      board.selected = null;
      if(madeMill(board.spots[i])){
        board.millMove = true;
        flag = 5;
      }
      else{
        changeTurn(board);
        flag = 4;
      }
    }
    else if(!board.millMove && board.turn.piecesOnHand < 1 && board.selected == null && board.spots[i].owner != null && board.spots[i].owner.id == board.turn.id ){
      board.selected = board.spots[i];
      board.selected.isSelected = true;
      flag = 6;
    }

    if(flag != 0){


      if(firstMaximizer){
        var maximizing = true;

        if(board.turn.id === board.player2.id){
          maximizing = false;
        }
        
        var evaluation = minimax(board, depth, maximizing, -Infinity, +Infinity);
        if(evaluation > bestScore){
          bestScore = evaluation;
          bestMove = i;
          bestflag = flag;
        }
      }
      else{
        var maximizing = false;

        if(board.turn.id === board.player1.id){
          maximizing = true;
        }
        
        var evaluation = minimax(board, depth, maximizing, -Infinity, +Infinity);
        if(evaluation < bestScore){
          bestScore = evaluation;
          bestMove = i;
          bestflag = flag;
        }
      }
      switch(flag){
        case 1:
          changeTurn(board);
          board.waiting.piecesOnBoard++;
          board.millMove = true;
          own(board.spots[i], board.waiting);
          break;
        case 2:
          changeTurn(board);
          board.turn.piecesOnBoard--;
          board.turn.piecesOnHand++;
          empty(board.spots[i]);
          break;
        case 3:
          board.turn.piecesOnBoard--;
          board.turn.piecesOnHand++;
          empty(board.spots[i]);
          board.millMove = false;
          break;
        case 4:
          changeTurn(board);
          board.selected = currentlyselected;
          empty(board.spots[i]);
          own(board.selected, board.turn);
          board.selected.isSelected = true;
          break;
        case 5:
          board.selected = currentlyselected;
          empty(board.spots[i]);
          own(board.selected, board.turn);
          board.selected.isSelected = true;
          board.millMove = false;
          break;
        case 6:
          board.selected.isSelected = false;
          board.selected = null;
          break;
      }
    }

  }
  return [bestMove, bestflag];
}

function optimizer(board){

  var depth;

  var numOfPieces = countPiecesOnBoard(board);

  if(numOfPieces > 17){
    depth = 8; 
  }
  else if(numOfPieces > 14){
    depth = 7; 
  }
  else if(numOfPieces > 11){
    depth = 6; 
  }
  else if(numOfPieces > 8){
    depth = 5; 
  }
  else{
    depth = 4;
  }

  if(board.turn.id === board.player1.id){
    return bestMove(board, depth, true);
  }
  else {
    return bestMove(board, depth, false);
  }

}

function Done(board) {

  if(checkWinner(board)){
    var winner = getWinner(board);
    window.alert("Player " + winner.id + " Won !");
    board = new Board();
  }

  if(board.turn.type === TYPE_AI){
    var move = optimizer(board);
    var bestindex = move[0];
    var flag = move[1];
    switch(flag){
      case 1:
        empty(board.spots[bestindex]);
        board.millMove = false;
        board.waiting.piecesOnBoard--;
        changeTurn(board);
        Done(board);
        break;
      case 2:
      case 3:
        own(board.spots[bestindex], board.turn);
        board.turn.piecesOnBoard++;
        board.turn.piecesOnHand--;
        if(madeMill(board.spots[bestindex])){
          board.millMove = true;
        }
        else{
          changeTurn(board);
        }
        Done(board);
        break;
      case 4:
      case 5:
        empty(board.selected);
        own(board.spots[bestindex], board.turn);
        board.selected.isSelected = false;
        board.selected = null;
        if( madeMill(board.spots[bestindex])){
          board.millMove = true;
        }
        else{
          changeTurn(board);
        }
        Done(board);
        break;
      case 6:
        board.selected = board.spots[bestindex];
        board.selected.isSelected = true;
        Done(board);
        break;
    }



  }
}
 
function clicked(board) {
  if( board.turn.type === TYPE_HUMAN){
    for(var i = 0 ; i < 24 ; i++) {
      if ( dist(mouseX, mouseY, board.spots[i].x, board.spots[i].y) < board.spots[i].radius / 2 ){
        if(board.millMove && board.spots[i].owner != null && board.spots[i].owner.id == board.waiting.id ){
          empty(board.spots[i]);
          board.millMove = false;
          board.waiting.piecesOnBoard--;
          changeTurn(board);
          Done(board);
        }
        else if(!board.millMove && board.turn.piecesOnHand > 0 && board.spots[i].available){
          own(board.spots[i], board.turn);
          board.turn.piecesOnBoard++;
          board.turn.piecesOnHand--;
          if(madeMill(board.spots[i])){
            board.millMove = true;
          }
          else{
            changeTurn(board);
            Done(board);
          }
        }
        else if(!board.millMove && board.turn.piecesOnHand < 1 && board.selected != null && board.spots[i].available && areNeighbors(board.selected, board.spots[i]) ){
          board.selected.isSelected = false;
          empty(board.selected);
          board.selected = null;
          own(board.spots[i], board.turn);
          if(madeMill(board.spots[i])){
            board.millMove = true;
          }
          else{
            changeTurn(board);
            Done(board);
          }
        }
        else if(!board.millMove && board.turn.piecesOnHand < 1 && board.spots[i].owner != null && board.spots[i].owner.id == board.turn.id ){
          if(board.selected != null){
            board.selected.isSelected = false;
          }
          board.selected = board.spots[i];
          board.selected.isSelected = true;
        }
      }
    }
  }
}

function changeTurn(board){
    var temp = board.turn;
    board.turn = board.waiting;
    board.waiting = temp;
}

class Board {

    constructor(){
        this.spots = createSpots();
        this.player1 = new Player(1, COLOR_BLUE, TYPE_HUMAN);
        this.player2 = new Player(2, COLOR_GREEN, TYPE_AI);
        this.turn = this.player1;
        this.waiting = this.player2;
        this.millMove = false;
        this.selected = null;
    }

}


