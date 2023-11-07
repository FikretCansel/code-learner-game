import { SokobanGame } from './games/sokoban/game';

window.onload = () => {
  let SokobanGameValue = new SokobanGame();
  document.getElementById("codeRunButton").addEventListener("click", ()=>{
    SokobanGameValue.destroy(true,false);
    SokobanGameValue = new SokobanGame();
  });
};
