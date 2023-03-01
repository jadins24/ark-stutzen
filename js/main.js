var i=1;
		function fun(){
			i++;
			if(i%2==0){
				document.querySelector(".nav").style="display:flex";
				document.querySelector(".menu-bar").style="background-color:#black;padding: 20px;";
			}
			if(i%2!=0){
				document.querySelector(".nav").style="display:none";
				document.querySelector(".menu-bar").style="background-color:none;padding: 0px;";				
			}
		}
