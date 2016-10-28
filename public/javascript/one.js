var data = [20,52,83,23,10,78,14,97,33,40];

var loadChart = function() {
	var chart = d3.select(".chart")
		.selectAll("div")
		.data(data,function(d){return d});

	chart.enter().append("div")
		.style("width", function(d) {return d*10})
		.text(function(d) {return d})

	chart.exit().remove();
}

var updateChart = function() {
	data.shift();
	data.push(Math.floor(Math.random()*100));
	loadChart()
}

setInterval(updateChart,500);

window.onload = loadChart;