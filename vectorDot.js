var but = document.getElementById("clear");
var svg = document.getElementById("svg");

var begun = false;
var lastx;
var lasty;

var dot = function(e) {

    console.log(svg);
    var x = e.offsetX;
    var y = e.offsetY;
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("fill", "red");
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", "20");
    svg.appendChild(circle);

    if (begun) {
	var line = document.createElementNS("http://www.w3.org/2000/svg","line");
	line.setAttribute("x1",lastx);
	line.setAttribute("y1",lasty);
	line.setAttribute("x2",x);
	line.setAttribute("y2",y);
	line.setAttribute("stroke","black");
	svg.append(line);
    }
    else {
	begun = true;
    }

    lastx = x;
    lasty = y;

};

var clear = function(e) {
    while (svg.lastChild) {
	svg.removeChild(svg.lastChild);
    }
    begun = false;
};

svg.addEventListener("click", dot);

but.addEventListener("click", clear);