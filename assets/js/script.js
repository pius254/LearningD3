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
var barData=[];
for (var i=0; i<100; i++){
    barData.push(Math.round(Math.random()*30) + 20)
}

var colors = d3.scale.linear()
        .domain([0, barData.length*.33, barData.length*.66, barData.length])
        .range(["green", "salmon", "orange", "cyan"])

var width=1000,
    height=380,
    barWidth=50,
    barOffset=5;
    
var tempColor;

barData.sort(function compareNumber(a, b){
    return a-b;
})
 
//fitting the height(max) of the barcharts to the height of the svg
var yScale = d3.scale.linear()
        .domain([0, d3.max(barData)])
        .range([0, height])

//fitting the barcharts horizontally to avoid the overflow
var xScale = d3.scale.ordinal()
        .domain(d3.range(0, barData.length))
        .rangeBands([0, width])

//adding tooltip to the bars
var tooltip = d3.select("body").append("div")
        .style("position", "absolute")
        .style("padding", "0 10px")
        .style("background", "white")
        .style("opacity", 0)

var myChart = d3.select("#bChart").append("svg")
        .attr("width", width)
        .attr("height", height)
        //.style("background", "#259286")
        .append("g")
        .selectAll("rect").data(barData)
        .enter().append("rect")
        .attr("width", xScale.rangeBand())
        .attr("height", 0)
        .attr("x", function(d,i){
           return xScale(i);
        })
        .attr("y", height)
        .style("fill", function(d, i){
            return colors(i);
        })
        
//adding mouseover and mouseout events that affects the opacity and the color of the bars    
        .on("mouseover", function(d){
            
        tooltip.transition()
            .style("opacity", .9)
    
        tooltip.html(d)
             .style("left", (d3.event.pageX - 35) + "px")
             .style("top", (d3.event.pageY- 30) + "px")
            
            tempColor = this.style.fill;
            d3.select(this)
            .style("opacity", .5)
            .style("fill", "yellow")
        })
        .on("mouseout", function(d){
            d3.select(this)
            .style("opacity", 1)
            .style("fill", tempColor)
        })
        
//adding a transition to the chart
        myChart.transition()
            .attr("height", function(d){
            return yScale(d);
        })
            .attr("y", function(d){
           return height-yScale(d);
        })
            .delay(function(d, i){
                    return i * 20;
        })
            .duration(1000)
            .ease("elastic")