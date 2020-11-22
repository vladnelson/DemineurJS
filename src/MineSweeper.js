const SIZE_LENGTH = 10;
const SIZE_HEIGHT = 10;
const NUMBER_MINE = 10;

class StateBtn  {
  constructor(b) {
    this.isMine = b; 
    this.flag = 0;
  }    
}



(() => {
  let count = 0;
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }

  function initGround(){
    let groundPositions = new Array(SIZE_LENGTH)
    for(var i = 0; i < SIZE_HEIGHT; i++){
      groundPositions[i] = new Array(2);
    }
    return groundPositions;
  }

  function askReplay(){
    var r = confirm("Replay ?");
    if (r == true) {
     document.location.reload();
    } 
  }

  window.MineSweeper = {
    groundPositions: initGround(),

    initGroundPosition: () => {
      MineSweeper.createGround();
      MineSweeper.putMines();
    },

    createGround: () => {
      for(let i = 0; i< SIZE_LENGTH; i++){
        for(let j = 0; j< SIZE_HEIGHT; j++){
          MineSweeper.groundPositions[i][j] = new StateBtn(false);
        }
      }
    },

    putMines: () => {
      for(let i = 0; i < NUMBER_MINE;i ++ ){
        let a = getRandomInt(0,SIZE_LENGTH);
        let b = getRandomInt(0,SIZE_HEIGHT);
        if(MineSweeper.groundPositions[a][b].isMine === true)i--;
        else {
          MineSweeper.groundPositions[a][b].isMine = true;
          MineSweeper.setFlags(a,b);
        }
      } 
    },

    onCaseClick: (i,j) => {
      count ++
      if(MineSweeper.isMine(i,j)){
        console.log("PERDU");
        askReplay();
        return "*";
      }
      else{
        if(count === SIZE_HEIGHT*SIZE_LENGTH-NUMBER_MINE){
          alert("BRAVO")
          askReplay();
        }
        return MineSweeper.revealFlag(i,j);
      }


    },

    isMine: (i,j) => {
      return MineSweeper.groundPositions[i][j].isMine;
    },

    isReal: (i,j) => {
      return i>-1 && i < SIZE_LENGTH && !(MineSweeper.groundPositions[i][j] === undefined);
    },

    setFlags: (a, b) => {
      for(let i = a-1; i < (a+2); i++){
        for(let j = b-1 ; j < (b+2); j++){
          if(MineSweeper.isReal(i,j)){
            MineSweeper.groundPositions[i][j].flag++;
          }
        }
      }
    },
    revealFlag: (i,j) => {
      return MineSweeper.groundPositions[i][j].flag === 0?" ":MineSweeper.groundPositions[i][j].flag.toString();
    }



  }
  


  })();
