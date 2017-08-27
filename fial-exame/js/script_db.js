

	var	myDataL =[
		{
			id:1,
			src:["img/desktop/1.jpg","img/tablet/1.jpg","img/mobile/1.jpg"],
			title:"Morbi velit risus",
			text:"Nulla venenatis tempor dui in molestie. Nulla quis dictum purus, sit amet porttitor est."
		},
		{
			id:2,
			src:["img/desktop/2.jpg","img/tablet/2.jpg","img/mobile/2.jpg"],
			title:"Morbi velit risus",
			text:"Nulla venenatis tempor dui in molestie. Nulla quis dictum purus, sit amet porttitor est."
		},
		{
			id:3,
			src:["img/desktop/3.jpg","img/tablet/3.jpg","img/mobile/3.jpg"],
			title:"Sed leo enim, condimentum",
			text:"Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis."
		}
];
	var	myDataC =[
		{
			id:1,
			src:["img/desktop/4.jpg","img/tablet/4.jpg","img/mobile/4.jpg"],
			title:"Morbi velit risus",
			text:"Nulla venenatis tempor dui in molestie. Nulla quis dictum purus, sit amet porttitor est."
		},
		{
			id:2,
			src:["img/desktop/5.jpg","img/tablet/5.jpg","img/mobile/5.jpg"],
			title:"Morbi velit risus",
			text:"Nulla venenatis tempor dui in molestie. Nulla quis dictum purus, sit amet porttitor est."
		},
		{
			id:3,
			src:["img/desktop/6.jpg","img/tablet/6.jpg","img/mobile/6.jpg"],
			title:"Sed leo enim, condimentum",
			text:"Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis."
		}
	];
	var	myDataR =[
		{
			id:1,
			src:["img/desktop/7.jpg","img/tablet/7.jpg","img/mobile/7.jpg"],
			title:"Morbi velit risus",
			text:"Nulla venenatis tempor dui in molestie. Nulla quis dictum purus, sit amet porttitor est."
		},
		{
			id:2,
			src:["img/desktop/8.jpg","img/tablet/8.jpg","img/mobile/8.jpg"],
			title:"Morbi velit risus",
			text:"Nulla venenatis tempor dui in molestie. Nulla quis dictum purus, sit amet porttitor est."
		},
		{
			id:3,
			src:["img/desktop/9.jpg","img/tablet/9.jpg","img/mobile/9.jpg"],
			title:"Sed leo enim, condimentum",
			text:"Quisque libero libero, dictum non turpis in, luctus semper lorem. Donec rhoncus a leo sit amet facilisis."
		}

	];
	
 	var	myDataTest = {
			id:1,
			src:["img/desktop/7.jpg","img/tablet/7.jpg","img/mobile/7.jpg"],
			title:"Morbi velit risus",
			text:"Nulla venenatis tempor dui in molestie. Nulla quis dictum purus, sit amet porttitor est."
		};
	

	// Slider left
var containerleft = document.getElementById('template-Slider-ulL');
var html_left = document.getElementById('template-Slider-L').textContent,
 template = _.template(html_left, {data: myDataL});
   containerleft.innerHTML += template( myDataL);

   // Slider center
var container_center = document.getElementById('template-Slider-ulC');
var html_centr = document.getElementById('template-Slider-C').textContent,
 template = _.template(html_centr, {data: myDataC});
   container_center.innerHTML += template( myDataC);
   
   // Slider right
var container_right = document.getElementById('template-Slider-ulR');
var html_right = document.getElementById('template-Slider-R').textContent,
 template = _.template(html_right, {data: myDataR});
   container_right.innerHTML += template( myDataR);   
   
   
   
   
var swidth = screen.width;
   
if (swidth >= 320 || swidth <= 479) {
	console.log(3);
} else if (swidth >= 480 || swidth <= 720){
	console.log(2);
	
} else if (screen.width >= 1279){
	console.log(1);
	
}	

console.log(swidth);
//console.log(screen.width);
 