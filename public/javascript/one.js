var data = [20,52,83,23,10,78,14,97,33,40];

var colors = {
	"maths":"#3A5FCD",
	"english":"#FF8C00",
	"kannada":"#2ca02c",
	"science":"#DC143C",
	"social studies":"#9467bd",
	"bengali":"#8c564b",
	"tamil":"#FF69B4",
	"sports":"#7f7f7f"
};

var subjects = ["maths","english","kannada","science","social studies","bengali","tamil","sports"]
var sort_options = ["Name", "Subject", "Score"]

var students = [
	{name:'ramesh',subject:'maths',score:87},
	{name:'suresh',subject:'maths',score:45},
	{name:'pokemon',subject:'english',score:65},
	{name:'mary',subject:'kannada',score:44},
	{name:'riya',subject:'science',score:72},
	{name:'katie',subject:'social studies',score:82},
	{name:'katie',subject:'maths',score:98},
	{name:'ramesh',subject:'bengali',score:25},
	{name:'suresh',subject:'science',score:55},
	{name:'riya',subject:'tamil',score:75},
	{name:'pokemon',subject:'sports',score:95},
	{name:'pokemon',subject:'social studies',score:32}
];

var loadChart = function() {
	var chart = d3.select(".chart")
		.selectAll("div")
		.data(students,function(d){return d.name+"_"+d.subject});

	chart.enter().append("div")
		.style("width", function(d) {return d.score*10})
		.text(function(d) {return d.name+" "+d.score})
		.style("background-color", function(d){return colors[d.subject]})

	chart.exit().remove();
	displaySubjects();
	displaySortOptions();
};

var displaySubjects = function() {
	var container = d3.select(".subjects");
	container.append("div").text("Subjects: ").style("color","black");
	for (var i = 0; i < subjects.length; i++) {
		container.append("div").text(subjects[i]).style("background-color",colors[subjects[i]]);
	};
};


var displaySortOptions = function() {
	var container = d3.select(".sort_options")
	container.append("div").text("Sort by:").style("color","black").style("background-color","white");
	for (var i = 0; i < sort_options.length; i++) {
		container.append("div").text(sort_options[i])
	};
	console.log(container)
};

window.onload = loadChart;
