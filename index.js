var scrollpos = window.scrollY; // window scroll position
var wh = window.innerHeight-100; // as soon as element touches bottom with offset event starts
var element = document.querySelector(".about-me"); //element
var element2=document.querySelector(".skill-page");
var element3=document.querySelector(".certs-cont");
window.addEventListener('scroll', function(){ 
	var scrollpos = window.scrollY; 
	console.log(scrollpos);
    if(scrollpos > (element.offsetTop - wh)){
    	//console.log(element.offsetTop - wh);
        document.getElementsByClassName('n')[0].classList.add("test");
        document.getElementsByClassName('n')[1].classList.add("test");
    }
     if(scrollpos > (element2.offsetTop - wh)){
    	document.getElementsByClassName('measure')[0].classList.add("animate1");
        document.getElementsByClassName('measure')[1].classList.add("animate1");
        document.getElementsByClassName('measure')[2].classList.add("animate1");
        document.getElementsByClassName('measure2')[0].classList.add("animate2");
        document.getElementsByClassName('measure2')[1].classList.add("animate2");
        document.getElementsByClassName('measure2')[2].classList.add("animate2");
        document.getElementsByClassName('measure2')[3].classList.add("animate2");
    }
    if(scrollpos>(element3.offsetTop-wh)){
    	document.getElementsByClassName("cert-card")[0].classList.add("animate3");
    	document.getElementsByClassName("cert-card")[1].classList.add("animate3");
    }
});


