{\rtf1\ansi\ansicpg1252\cocoartf1561\cocoasubrtf600
{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww10480\viewh13660\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 /*\
Child App with Two Screens \
Intro screen and click into Itial tracing game. Color options with mouse changing, Clear screen to return to Scene 1\
*/\
\
\
//Building Button function until line 37.\
var Button = function(config) \{\
    this.x = config.x || 0;\
    this.y = config.y || 0;\
    this.width = config.width || 150;\
    this.height = config.height || 50;\
    this.label = config.label || "Click";\
    this.onClick = config.onClick || function() \{\};\
\};\
\
Button.prototype.draw = function() \{\
    fill(0, 234, 255);\
    rect(this.x, this.y, this.width, this.height, 5);\
    fill(0, 0, 0);\
    textSize(19);\
    textAlign(LEFT, TOP);\
    text(this.label, this.x+10, this.y+this.height/4);\
\};\
\
Button.prototype.isMouseInside = function() \{\
    return mouseX > this.x &&\
           mouseX < (this.x + this.width) &&\
           mouseY > this.y &&\
           mouseY < (this.y + this.height);\
\};\
\
Button.prototype.handleMouseClick = function() \{\
    if (this.isMouseInside()) \{\
        this.onClick();\
    \}\
\};\
\
//Creating a button1 to turn mouse Red\
var btn1 = new Button(\{\
    x: 25,\
    y: 20,\
    label: "Red",\
    onClick: function() \{\
        fill(255, 0, 43);\
    \}\
\});\
\
\
//Creating button2 to turn mouse Green\
var btn2 = new Button(\{\
    x: 25,\
    y: 80,\
    label: "Green",\
    onClick: function() \{\
        fill(0, 255, 51);\
    \}\
\});\
\
//Creating button3 to turn mouse Blue\
var btn3 = new Button(\{\
    x: 25,\
    y: 140,\
    label: "Blue",\
    onClick: function() \{\
        fill(0, 17, 255);\
    \}\
\});\
\
//Allowing mouse clicked to create a reaction\
mouseClicked = function() \{\
    \
\};\
\
\
//Starting screen\
var currentScene;\
\
\
//Scene 1 has introductions, directions,JayroBitmoji and click screen to cycle to scene 2 until line 120.\
var drawScene1 = function() \{\
    currentScene = 1;\
    background(235, 247, 255);\
    fill(0, 85, 255);\
    textSize(29);\
    text("Author Jayro Catlin", 10, height/2);//My Name\
    textSize(20);\
    text("Click Screen to enter intial tracing app ", 25,300);//Instructions\
    \
    \
    \
    //Building bitmoji until line 123.  \
    var drawHead = function(x,y,girth)\{\
        //background(255,255,255);\
        noStroke();\
        fill(158, 97, 12);  //Skin tone color\
        ellipse(x,y,72,100); //head\
        fill(255, 255, 255);//white \
        \
        arc(x-45,y+35,40,58,0,361);  //left chisle \
        arc(x+45,y+35,40,58,0,361); //right chisle\
        fill(9, 10, 7);//Hair color\
        ellipse(x,y-35,69,35);//My hair\
        ellipse(x-10,y,6,4);//left eye\
        ellipse(x+10,y,6,4);//right eye\
        fill(181, 114, 43);//Nose color\
        bezier(x,y,x+18,y+19,x-9,y+19,x         -2,y+15);//actual nose\
        fill(255,255, 255);//white for         bones\
        arc(x+2,y+25,30,13,1,180               );//mouth\
        \};\
    \
        var drawBody = function(x, y)\{\
    \
        fill(255, 0, 0);//red shirt            color\
        rect(x-38,y+39,79,40,35);//Red         shirt\
        fill(15,14,16);//Font Color\
        text("JC",x-20,y+70);//Text JC\
    \};\
\
var drawBitMoji = function(x,y)\{\
    drawHead(x,y);\
    drawBody(x,y);\
\};\
    \
    //Calling bitMoji XY\
    drawBitMoji(160,60);\
\};\
\
//Building button 4 or clear screen which goes back to scene 1\
var btn4 = new Button(\{\
    x:25,\
    y:200,\
    label: "Clear",\
    onClick: function() \{\
    drawScene1();\
    \}\
\});   \
\
//Drawing scene 2\
var drawScene2 = function() \{\
    currentScene = 2;\
    background(255, 0, 0);\
    fill(189, 38, 38);\
    textSize(500);\
    text("J", 79, 372);\
\
    mouseDragged = function() \{\
    ellipse(mouseX, mouseY, 20, 20);\
\};\
\
//Calling all button inside scene 2\
btn1.draw();\
btn2.draw();\
btn3.draw();\
btn4.draw();\
\
\};\
\
//Mouse clicked function to link scene 1 to draw scene 2\
mouseClicked = function()\{\
    if (currentScene === 1) \{\
        drawScene2();\
    \}\
    else if (currentScene === 2)\{\
    \}\
    btn1.handleMouseClick();\
    btn2.handleMouseClick();\
    btn3.handleMouseClick();\
    btn4.handleMouseClick();\
\};\
    //Drawing scene 2\
    drawScene1();\
\
\
}