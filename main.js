

  function setup() {
  video = createCapture(VIDEO);
  video.size(550, 500);
  video.position(800,150)

  canvas = createCanvas(550, 550);
  canvas.position(100,150);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized!');
}


function gotPoses(results)
{
 
}

function draw() {
background('#969A97');


}