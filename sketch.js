var rat,before1,after1;
var cat,before2,after2;
function preload() {
    //load the images here
    before1=loadImage("images/mouse2.png")
before2=loadImage("images/cat2.png")
after1=loadImage("images/mouse4.png")
after2=loadImage("images/r1.png")
death=loadSound("African Coffin Dance Astronomia(PaglaSongs).mp3")
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    //create tom and jerry sprites here
    cat = createSprite(windowWidth/2-100,windowHeight/2-100,200,200);
    cat.addImage(before2);
    cat.scale=0.25;
    rat = createSprite(windowWidth/2+100,windowHeight/2+100,200,200);
    rat.addImage(before1);
    rat.scale=0.125;
    
rat.x=Math.round(random(0,windowWidth/2));
rat.y=Math.round(random(0,windowHeight/2));
}

function draw() {
cat.x=mouseX;
cat.y=mouseY;

cat.addImage(before2);
    cat.scale=0.25;
    background(255);

    rat.addImage(before1);
    rat.scale=0.125;
    
    //Write condition here to evalute if tom and jerry collide
    if((rat.x-cat.x<rat.width/2+cat.width/2)&&(cat.y-rat.y<rat.height/2+cat.height/2)&&(cat.x-rat.x<cat.width/2+rat.width/2)&&(rat.y-cat.y<cat.height/2+rat.height/2)){
       
        cat.addImage(after2);
        rat.addImage(after1);
    }
    drawSprites();
}
//&&(cat.x-rat.x<rat.width/2+cat.width/2)
//&&(rat.y-cat.y<rat.height/2+cat.height/2)

function keyPressed(){

  //For moving and changing animation write code here


}
