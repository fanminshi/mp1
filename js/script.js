/*var divs = document.getElementsByTagName('div');
for(var i=0; i<divs.length; i++) {
  divs[i].addEventListener("click", highlightThis);
  /*
  divs[i].addEventListener("click", highlightThis, true);
  divs[i].addEventListener("click", highlightThis, false);
}

function highlightThis(event) {
    //event.stopPropagation();
  
    var backgroundColor = this.style.backgroundColor;
    this.style.backgroundColor='yellow';
    alert(this.className);
    this.style.backgroundColor=backgroundColor;
}*/

$(function(){
	console.log("hi");
	var height = $("section").height();
	var active_menu = 0;
	var target_offset1 = $('#intro').offset();
	console.log(target_offset1);
	var target_offset2 = $('#experiences').offset();
	console.log(target_offset2);
	var target_offset3 = $('#projects').offset();
	console.log(target_offset3);
	var target_offset4 = $('#activities').offset();
	console.log(target_offset3);

	$(window).scroll(function(e){
    	var pos= $(window).scrollTop();
    	console.log(pos);
    	var index = 0;
    	if(pos >= target_offset4.top){
    		console.log("index 3");
    		index = 3;
    	}else if(pos >= target_offset3.top){
    		console.log("index 2");
    		index = 2;
    	}else if (pos >= target_offset2.top) {
    		console.log("index 1");
    		index = 1;
    	}else if (pos >= target_offset1.top) {
    		console.log("index 0");
    		index = 0;
    	}
    	
		console.log(index);
    	if(pos>.5*height) {
    		$("#header").css("font-size","1.25em");
    	}
    	else {
			$("#header").css("font-size","1em");
    	}

    	
    	if(index!=active_menu) {
    		$("#active_section").attr("id","");
    		$($(".menu_item")[index]).attr("id","active_section");
			active_menu = index;
    	}
	});

	$(".menu_item").click(function(){


		var index = $(this).index();
		switch(index) {

			case 0: 
				 target_top = target_offset1.top;
				$('body').animate({scrollTop:target_top},1000);
				break;

			case 1:
				target_top = target_offset2.top;
				$('body').animate({scrollTop:target_top},1000);
				break;

			case 2:
				target_top = target_offset3.top;
				$('body').animate({scrollTop:target_top},1000);
				break;

			case 3:
				target_top = target_offset4.top;
				$('body').animate({scrollTop:target_top},1000);
				break;



		}
		
	});

	$(".button").click(function() {
		var container = $(this).siblings(".container");
		var curr = parseInt(container.css("left"));
		var width = $(".image").width();
		if($(this).hasClass("right")) {
			curr-=width;
			var hifanmin=-1*container.width()+width;
			curr = curr<hifanmin?hifanmin:curr;
		}
		else {
			curr+=width;
			curr = curr>0?0:curr;
		}

		container.animate({
			left:curr+"px"
		},500);
	});
});