$('.i-slide').owlCarousel({
    autoplay:true,
    loop:true,
	items:2,
	center:true,
    margin:20,
    responsive:{
		
		600:{
			items:5
		}
		
	}
});
var i=1;
		function fun(){
			i++;
			if(i%2==0){
				document.querySelector(".nav").style="display:flex";
				document.querySelector(".menu-bar").style="background-color:#414252;padding: 20px;";
			}
			if(i%2!=0){
				document.querySelector(".nav").style="display:none";
				document.querySelector(".menu-bar").style="background-color:none;padding: 0px;";				
			}
		}