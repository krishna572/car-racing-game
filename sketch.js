var hypnoticBall;
var hypnoticBallPosition,database,position;

function setup(){
    database = firebase.database();

    createCanvas(500,500);
    hypnoticBall = createSprite(250,250,10,10);
    hypnoticBall.shapeColor = "red";
    hypnoticBallPosition = database.ref('ball/position');
    hypnoticBallPosition.on("value",readPosition,showError);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
        writePosition(0,1);
    }
    drawSprites();
}

function changePosition(x,y){
    hypnoticBall.x = hypnoticBall.x + x;
    hypnoticBall.y = hypnoticBall.y + y;
}


function readPosition(data){
    position = data.val();
    console.log(position);
    hypnoticBall.x = position.x;
    hypnoticBall.y = position.y;
}
function showError(){
    console.log("Error !");
}

function writePosition(x,y){
    database.ref('ball/position').set({
        'x': position.x + x,
        'y': position.y + y
    })
}