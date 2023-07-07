window.addEventListener("load",function(){
	let n=0
	let gnb=this.document.getElementById("gnb")
	let gnbLi=gnb.firstElementChild.children
	let slider=this.document.getElementById("slider")
	let [moving, direction, controll]=slider.children
	let movingLi=moving.firstElementChild.children
	let [directionLeft, directionRight]=direction.children
	let controllLi=controll.firstElementChild.children

	function sliderActive(){
		for(let j=0; j<movingLi.length; j++){
			if(j == n){
				movingLi[j].classList.add("active")
				controllLi[j].classList.add("active")
			}
			else{
				movingLi[j].classList.remove("active")
				controllLi[j].classList.remove("active")
			}
		}
	}

	sliderActive()

	this.setInterval(function(){
		if(n<3){
			n++
		}
		else
		{
			n=0
		}
		
		sliderActive()
	},3000)

	for(let i=0; i<gnbLi.length; i++){
		gnbLi[i].addEventListener("mouseenter",function(){
			gnb.classList.add("active")
		})
		gnbLi[i].addEventListener("mouseleave",function(){
			gnb.classList.remove("active")
		})
	}

	for(let i=0; i<movingLi.length; i++){
		controllLi[i].addEventListener("click",function(e){
			e.preventDefault()
			n=i

			sliderActive()
		})
	}

	directionLeft.addEventListener("click",function(e){
		e.preventDefault()

		if(n>0){
			n--

			sliderActive()
		}
	})

	directionRight.addEventListener("click",function(e){
		e.preventDefault()

		if(n<3){
			n++

			sliderActive()
		}
	})
})