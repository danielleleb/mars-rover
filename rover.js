//GRID
var grid = [
  [0,1,2,3,4,5,6,7,8,9], //x-0 coordinate
  [0,1,2,3,4,5,6,7,8,9] //y-1 coordinate
];



//ROVER
var myRover = {
  position: [0,0],
  direction: 'N'
};


//CHANGE DIRECTION

function turnRight(rover) {
  switch(rover.direction){
    case 'N':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'N';
      break;
  }

//  console.log("New rover direction: " + myRover.direction);
}
function turnLeft(rover) {
  switch(rover.direction){
    case 'N':
      rover.direction = 'W';
      break;
    case 'E':
      rover.direction = 'N';
      break;
    case 'S':
      rover.direction = 'E';
      break;
    case 'W':
      rover.direction = 'S';
      break;
  }
//  console.log("New rover direction: " + myRover.direction);
}

//MOVEMENT

function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++;
      break;
    case 'E':
      rover.position[1]++;
      break;
    case 'S':
      rover.position[0]--;
      break;
    case 'W':
      rover.position[1]--;
      break;
  }
  if (rover.position[0] > 9) {
   rover.position[0] = 0;
 }
   else if (rover.position[0] < 0) {
     rover.position[0] = 9;
}
 else if (rover.position[1] > 9) {
   rover.position[1] = 0;
 }
 else if (rover.position[1] < 0) {
   rover.position = 9;
 }

//  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}

function goBack(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]--;
      break;
    case 'E':
      rover.position[1]--;
      break;
    case 'S':
      rover.position[0]++;
      break;
    case 'W':
      rover.position[1]++;
      break;
  }
   if (rover.position[0] > 9) {
    rover.position[0] = 0;
  }
    else if (rover.position[0] < 0) {
      rover.position[0] = 9;
}
  else if (rover.position[1] > 9) {
    rover.position[1] = 0;
  }
  else if (rover.position[1] < 0) {
    rover.position = 9;
  }
  //console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}

function missionControl(rover) {
  var command = prompt("Enter f, b, r, l to move the rover.");
  var movement = command.split("");
for (j = 0; j <= movement.length; j++){
  switch(movement[j]) {
    case 'f':
      goForward(rover);
      break;
    case 'b':
      goBack(rover);
      break;
    case 'r':
      turnRight(rover);
      break;
    case 'l':
      turnLeft(rover);
      break;
    }
  }
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");

}
missionControl(myRover);
