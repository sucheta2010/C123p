function preload() {
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
}

function draw(){
  image(video, 0, 0, 300, 300);  
}
poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

function modelLoaded() {
  console.log('PoseNet Is Initialized');  
}


function take_snapshot() {
    save('sucheta.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}

function create(){
    circle(30, 30, 20);
describe('white circle with black outline in mid of gray canvas');
    ellipse(56, 46, 55, 55);
describe('white ellipse with black outline in middle of a gray canvas');
}