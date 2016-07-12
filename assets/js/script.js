d3.select("#chart")
//adding the svg
        .append("svg")
            .attr("width",400)
            .attr("height",200)
            .style("background", "#708284")
//adding a rectangle to the svg
        .append("rect")
            .attr("x", 100)
            .attr("y", 50)
            .attr("width", 200)
            .attr("height", 100)
            .style("background", "#D11C24")
//adding a circle inside the the rectangle
d3.select("svg")
            .append("circle")
            .attr("cx", 200)
            .attr("cy", 100)
            .attr("r", 50)
            .style("fill", "#C61C6F")
            //.attr("opacity", 0)
//mouse events on the circle
.on("mouseover", function() { d3.select(this).attr("opacity", 0.3); })
.on("mouseout", function() { d3.select(this).attr("opacity", 1); })

//creating barchart
var barData=[20, 30, 40, 50, 60, 50, 40, 30,20, 50, 10, 80, 90, 60, 50, 40, 30,20, 50, 10, 80, 40];

var width=1000,
    height=380,
    barWidth=50,
    barOffset=5;
 
//fits the height(max) of the barcharts to the height of the svg
var yScale = d3.scale.linear()
        .domain([0, d3.max(barData)])
        .range([0, height])
    
d3.select("#bChart").append("svg")
        .attr("width", width)
        .attr("height", height)
        .style("background", "#259286")
        .selectAll("rect").data(barData)
        .enter().append("rect")
        .attr("width", barWidth)
        .attr("height", function(d){
            return yScale(d);
        })
        .attr("x", function(d,i){
           return i * (barOffset + barWidth);
        })
        .attr("y", function(d){
           return height-yScale(d);
        })
         .style("fill", "#C61C6F")