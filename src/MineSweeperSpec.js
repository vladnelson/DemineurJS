describe('MineSweeper', () => {

    describe('initGroundPosition', () => {
        it(`ground should have SIZE_LENGTH times SIZE_HEIGHT StateBtn`, () => {
            MineSweeper.initGroundPosition();
            const tabPosition = MineSweeper.groundPositions;
            counterbtn = 0;
            for(let i = 0;  i <tabPosition.length; i++ ){
                for(let j = 0; j <tabPosition[i].length; j++ ){
                    if(tabPosition[i][j] instanceof StateBtn)counterbtn++;
                }
            }
            
            expect(SIZE_LENGTH * SIZE_HEIGHT).toEqual(counterbtn);

          });
        it(`ground should have the exact amount of Mines`, () => {
            MineSweeper.initGroundPosition();
            const tabPosition = MineSweeper.groundPositions;

            counterMine = 0 ;

            for(let i = 0;  i <tabPosition.length; i++ ){
                for(let j = 0; j <tabPosition[i].length; j++ ){
                    if(tabPosition[i][j].isMine)counterMine++;
                }
            }
            
            expect(NUMBER_MINE).toEqual(counterMine);

          });

          it(`a flag of a bomb neighbour can't be 0`, () => {
            MineSweeper.initGroundPosition();
            const tabPosition = MineSweeper.groundPositions;
            
            counterMine = 0 ;
            let neighbours;
            for(let i = 0;  i <tabPosition.length; i++ ){
                for(let j = 0; j <tabPosition[i].length; j++ ){
                    if(tabPosition[i][j].isMine){
                      if(MineSweeper.isReal(i,j-1)){
                          neighbours =  tabPosition[i][j-1];
                          break;
                        }
                    }
                }
            }

            
            
            expect(neighbours.flag).not.toBe(0);

          })
    })
})
  
  
    

    

    

    

    

    
