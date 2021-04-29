function setup()
{
    video = createCapture(VIDEO);
    video.size(500, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet is initialized!');
}

function draw()
{
    background('#32a8a2');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}


