var focusedStudentIndex=-1;
function enlargePeers(focusedStudent,radius){
 focusedStudentNumber = studentId[focusedStudent];

	svg.selectAll(".dot")
      .transition().duration(500)
      .style("fill", function(d,i) { 

			//console.log(peerPool[focusedStudentNumber].indexOf(Number.parseInt(this.getAttribute("id"))));
		   	 if (peerPool[focusedStudentNumber].indexOf(Number.parseInt(this.getAttribute("id")))!=-1) 
      		{
				
				presentnode = studentId.indexOf(Number.parseInt(this.getAttribute("id")));
				//console.log("presentnode:"+presentnode);
				if(rank_avg[presentnode] > rank_avg[focusedStudent])
					return '#e34a33';
				else
					{if(rank_avg[presentnode] < rank_avg[focusedStudent])
						return "#2ca25f";
					else
						return "blue";
					}
			}
      	else {
				 if (i == focusedStudent) {
					 return 'black';
				 }
			 }
        })
        

        
      //   .attrTween("r",function(d,i){
      //        var i = d3.interpolate(0, radius*(d3.max(v)-v[i]+1));
      // return function(t) { return d.radius = i(t); };
      //
  		// 	})
      .style("fill-opacity",function(d,i){ if (peerPool[focusedStudentNumber].indexOf(Number.parseInt(this.getAttribute("id")))!=-1 || focusedStudent==i) return 1.0; else return 0.2;})




}