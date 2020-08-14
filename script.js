

let container  = document.getElementById("container");
let dynamicDiv = document.createElement('div');
let clearButton = document.getElementById('clearButton');
let turnCounter = 0;


function createFirstGrid() {
console.log("turnCounter at start of createFirstGrid(): " +  turnCounter);
//console.log("sketchSpec in createFirstGrid: " + sketchSpec);
  for (i=0; i<4; i++){
  let dynamicDiv = document.createElement('div');
  container.appendChild(dynamicDiv);
  dynamicDiv.classList.add("dynamicDiv");
  }
}


function createSubsequentGrid(sketchSpec) {
    console.log("turnCounter at start of createSubsequentGrid(): " +  turnCounter);
    console.log("sketchSpec in createSubsequentGrid function:" + sketchSpec);

    // delete previous grid
    console.log("dynamicDiv in createSubsequentGrid before deleting:" + dynamicDiv);
    container.innerHTML = '';


    //console.log("sketchSpec in createFirstGrid: " + sketchSpec);
      for (i=0; i<sketchSpec; i++){
      let dynamicDiv = document.createElement('div');
      container.appendChild(dynamicDiv);
      dynamicDiv.classList.add("dynamicDiv");
      }
    }

function penEffect(){
  const sketchSquare = document.querySelectorAll('.dynamicDiv');
  sketchSquare.forEach((div) =>{
    div.addEventListener('mouseover',()=> {
      div.classList.add('sketched');
    }); // end event listener 'mouseover'
  });  // end 'for each' 

    clearButton.onclick = function(){
    sketchSquare.forEach((div) =>{
    div.classList.remove('sketched');
    }) // end for each

    turnCounter++;
   
    sketchSpecStart = prompt("How many squares per side do you want to make the new grid?");
    
    sketchSpec = sketchSpecStart * sketchSpecStart;
    console.log("sketchSpec just before passing to createSubsequentGrid function: " + sketchSpec);

   
   

    createSubsequentGrid(sketchSpec);
    penEffect();
    
  
  }; // end onclick
  
} // end funciton penEffect


function playfirstGame (){
    createFirstGrid();
    penEffect();
}






playfirstGame();

//newSetup();