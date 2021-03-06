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