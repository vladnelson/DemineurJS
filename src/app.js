(()=>{

  let app = document.getElementById('app');

  let mineSweeper = MineSweeper.initGroundPosition();

  let tableE = document.createElement('table');

    for(let i = 0; i < SIZE_LENGTH; i++){
      let trE = document.createElement('tr');
      tableE.appendChild(trE);
      for(let j = 0; j < SIZE_HEIGHT; j++){
        let tdE = document.createElement('td');
        tdE.style.width = "100px";
        tdE.style.backgroundColor = "#000"; 
        trE.appendChild(tdE);
        let button = document.createElement('button');
        button.style.height = "50px";
        button.style.width = "50px";
        button.addEventListener('click', () => {
          button.textContent = MineSweeper.onCaseClick(i,j);
          button.style.background = "#dc3545";
          button.style.color = "#fff";
          button.style.fontSize="14px";
          button.setAttribute("disabled","true");
        });
        tdE.appendChild(button)
      }
  }
  app.appendChild(tableE);
  
  tableE.style.backgroundColor = "#000"; 
  tableE.style.border = "thick solid #fff";
  tableE.style.width = "500px";
  


})();

