var data = [2,5,8,2,10,7,1,9,3,4];

var loadChart = function() {
	d3.select(".chart")
		.selectAll("div")
		.data(data)
		.enter().append("div")
		.style("width", function(d) {return d*100})
		.text(function(d) {return d})
}

window.onload = loadChart;