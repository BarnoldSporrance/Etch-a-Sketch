let container  = document.getElementById("container");
let dynamicDiv = document.createElement('div');
let clearButton = document.getElementById('clearButton');

function createFirstGrid() {
  for (i=0; i<256; i++){
  let dynamicDiv = document.createElement('div');
  container.appendChild(dynamicDiv);
  dynamicDiv.classList.add("dynamicDiv");
  }
}

function createSubsequentGrid(sketchSpec) {

    // delete previous grid
    console.log("dynamicDiv in createSubsequentGrid before deleting:" + dynamicDiv);
    container.innerHTML = '';

    //console.log("sketchSpec in createFirstGrid: " + sketchSpec);
    for (i=0; i<sketchSpec; i++){
      let dynamicDiv = document.createElement('div');
      container.appendChild(dynamicDiv);
      dynamicDiv.classList.add("dynamicDiv");
    }
} // end function create subsequent grid

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

    sketchSpecStart = prompt("How many squares per side do you want to make the new grid?");
    document.documentElement.style.setProperty('--grid-temp-dimensions', "repeat(" + sketchSpecStart + ", 1fr)");

    sketchSpec = sketchSpecStart * sketchSpecStart;
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