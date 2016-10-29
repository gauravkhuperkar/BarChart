var data = [20,52,83,23,10,78,14,97,33,40];

var colors = {
	"maths":"#3A5FCD",
	"english":"#FF8C00",
	"kannada":"#3CB371",
	"science":"#DC143C",
	"social studies":"#6A5ACD",
	"bengali":"#6F4242",
	"tamil":"#FF69B4",
	"sports":"#808080"
};

var subjects = ["maths","english","kannada","science","social studies","bengali","tamil","sports"]

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
	displaySubjects()
	displaySortOptions()
};

var displaySubjects = function() {
	var container = d3.select(".subjects")
	container.append("div").text("Subjects: ")
	for (var i = 0; i < subjects.length; i++) {
		container.append("div").text(subjects[i]).style("background-color",colors[subjects[i]])
	};
}

var displaySortOptions = function() {
	var container = d3.select(".sort_options")
	console.log(container)
}

window.onload = loadChart;