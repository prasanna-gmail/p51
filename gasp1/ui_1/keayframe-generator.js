function genHtml(parEle){

    // Cteare Style
    var cssStyles = `
        #dragHandleCon {
          position: absolute;
          z-index: 9;
          background-color: #f1f1f1;
          text-align: center;
          border: 1px solid #d3d3d3;
          transform: translateX(45%);
        
        }
        #dragHandle {    
          background-color: red;
          width: 20px;
          height: 20px;
          display: inline-block;
          position: absolute;
          left:0;
          top: 0;
          border-radius:50%
        }
        #displayDragValue{
          position: absolute;
          bottom: 5px;
          right: 5px;
          padding: 10px;
          background-color: #ffffff5c;
        }
      `;
    // Step 2: Create a <style> element
    var styleElement = document.createElement('style');
    // Step 3: Set the CSS styles
    styleElement.textContent = cssStyles;
    document.head.appendChild(styleElement);

    // Create HTML

    const dragHandleCon = document.createElement('div')
    dragHandleCon.id = "dragHandleCon";

    const dragHandle = document.createElement('div')
    dragHandle.id = 'dragHandle'
  

    const displayDragValue = document.createElement('div')
    displayDragValue.id = 'displayDragValue'

    document.body.appendChild(displayDragValue)

    dragHandleCon.appendChild(dragHandle)
    mainCon.insertAdjacentElement('beforeend', dragHandleCon)
    dragElement(dragHandleCon, displayDragValue);
}


function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  let animationData = {}
  let animationDataArr = []
  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    let y =(elmnt.offsetTop - pos2);
    let x =(elmnt.offsetLeft - pos1);
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    
    displayDragValue.innerHTML = `transform: translateY(${elmnt.style.top}) translateX(${elmnt.style.left});`
    animationData = {x: x, y: y}
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
    animationDataArr.push(animationData)
    console.log('Animation Keyframes', animationDataArr)
  }
  
}

// init DragGenerator
genHtml(mainCon)
