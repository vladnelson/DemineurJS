(() => {
  const SIZE_LENGTH = 20;
  const SIZE_HEIGHT = 20;
  const NUMBER_MINE = 5;

  groundPositions = [SIZE_LENGTH][SIZE_HEIGHT];

  window.stateBtn = {
    constructor(a,b) {
      isClicked = a 
      isMine = b; 
    }    
  }

  function initGround(){
    createGround();
    putMines();
  }


  function createGround() {
    for(let i = 0; i< SIZE_LENGTH; i++){
      for(let j = 0; j< SIZE_HEIGHT; j++){
       groundPositions[i][j] = new StateBtn(false,false);
      }
    }
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }

  function putMines(){
    for(let i = 0; i < NUMBER_MINE;i ++ ){
      let a = getRandomInt(0,SIZE_LENGTH);
      let b = getRandomInt(0,SIZE_HEIGHT);
      if(groundPositions[a][b].isMine === true)i--;
      else groundPositions[a][b].isMine = true;
    } 
  }
  
  
    window.MineSweeper = {
       States :  { 
         
        InitGame :  () =>{
          const me  = {};
          
          me.click = (x,y) => {
            arrayA[x,y] = true;
          }
          me.setNextOp = _ => me;
        },
        OnGame :  () =>{
          const me  = {};
          

        },
        EndGame :  () =>{
          const me  = {};
          
        }
      }


    }
  })();
