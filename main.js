song = "";
LeftwristX = 0;
LeftwristY = 0;
RightwristX = 0;
RightwristY = 0;
ScoreLeftWrist = 0;
ScoreRightWrist = 0;

function setup(){
canvas = createCanvas(600,500);
canvas.center();
video = createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video,modelLoaded);

poseNet.on('pose',gotposes);

}
function modelLoaded(){
    console.log("poseNet is initialized");
}
function draw(){
    image(video,0,0,600,500);
    circle(RightwristX,RightwristY,20);
    fill('#FF0000');
    stroke('FF0000');

    if(RightwristY>0 && RightwristY<=100){
document.getElementById("speed").innerHTM = "speed = 0.5x";
song.rate(0.5);

    }
    else if(RightwristY>100 && RightwristY<=200){
        document.getElementById("speed").innerHTM = "speed = 1x";
        song.rate(1);
        
            }
            else if(RightwristY>200 && RightwristY<=300){
                document.getElementById("speed").innerHTM = "speed = 1.5x";
                song.rate(1.5);
                
                    }
                    else if(RightwristY>300 && RightwristY<=400){
                        document.getElementById("speed").innerHTM = "speed = 2x";
                        song.rate(2);
                        
                            }   
                            else if(RightwristY>400 && RightwristY<=500){
                                document.getElementById("speed").innerHTM = "speed = 2x";
                                song.rate(2);
                                
                                    }
        if(ScoreLeftWrist>0.2){
             circle(LeftwristX,LeftwristY,20);
    fill('#FF0000');
    stroke('FF0000');
    numberleftwristy = Number (LeftwristY);
    removedecimal = floor(numberleftwristy);
    volume = removedecimal/500;
    document.getElementById("volume").innerHTML = "volume ="+volume;
    song.setVolume(volume);
    }
}
function preload(){
    song = loadSound("music.mp3");
}
function play(){
    song.play();
    song.volume(1);
    song.rate(1)
}
function gotposes(results){
    if(results.length > 0){
console.log(results);
ScoreLeftWrist = results[0].pose.keypoints[9].score;
console.log("scoreleftwrist = "+ScoreLeftWrist);
ScoreRightWrist = results[0].pose.keypoints[10].score
console.log("scorerightwrist = "+ScoreRightWrist);
LeftwristX = results[0].pose.leftWrist.x;
LeftwristY = results[0].pose.leftWrist.y;
console.log("left wrist X = "+LeftwristX+" left wrist Y = "+LeftwristY);

RightwristX = results[0].pose.rightWrist.x;
RightwristY = results[0].pose.rightWrist.y;
console.log("right wrist X = "+RightwristX+"right wrist Y = "+LeftwristY);
    }
}

