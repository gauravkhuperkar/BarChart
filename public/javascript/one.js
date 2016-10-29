var data = [20,52,83,23,10,78,14,97,33,40];
var colors = ["#00004f","#0000ee","#00003f","#000077","#0000dd","#000066","#0000cc","#000088","#000099","#0000aa"]

var loadChart = function() {
	var chart = d3.select(".chart")
		.selectAll("div")
		.data(data,function(d){return d});

	chart.enter().append("div")
		.style("width", function(d) {return d*10})
		.text(function(d) {return d})
		.style("background-color", function(d){return colors[d%9]})

	chart.exit().remove();
}

var updateChart = function() {
	data.shift();
	data.push(Math.floor(Math.random()*100));
	loadChart()
}

setInterval(updateChart,500);

window.onload = loadChart;