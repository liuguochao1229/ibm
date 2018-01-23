var ibm=document.querySelector('.ibm');
ibm.onmouseover=function(){
	ibm.style.height='35px';
	ibm.style.borderBottom='2px solid black';
}
ibm.onmouseout=function(){
	ibm.style.height='36px';
	ibm.style.borderBottom='none';
}
var sup=document.querySelector('.sup');
sup.onmouseover=function(){
	sup.style.height='30px';
	sup.style.borderBottom='2px solid black';
}
sup.onmouseout=function(){
	sup.style.height='36px';
	sup.style.borderBottom='none';
}

var Catalog=document.querySelector('.Catalog');
var deve=document.querySelector('.deve');
var list2=document.querySelector('.list2');

var as2=document.querySelectorAll('.list2 a');
for(var i=0;i<as2.length;i++){
	as2[i].onmouseover=function(){
		this.style.borderBottom='2px solid #0f6dff';
		this.style.color='#0f6dff';
	}
	as2[i].onmouseout=function(){
		this.style.borderBottom='none';
		this.style.color='#323232';
	}
}

deve.onmouseover=function(){
	setTimeout(function(){
		list2.style.top='49px';
	},500);
	this.style.height='29px';
	this.style.borderBottom='2px solid black';
}
deve.onmouseout=function(){
	// list2.onmouseover=function(){
	// list2.style.top='51px';
	// }
	// list2.onmouseout=function(){
		list2.style.top='-550px';
	// }
	this.style.height='36px';
	this.style.borderBottom='none';
}

var aa=document.querySelectorAll('.list1 a');
for(var i=0;i<aa.length;i++){
	aa[i].onmouseover=function(){
		this.style.borderBottom='2px solid #0f6dff';
		this.style.color='#0f6dff';
	}
	aa[i].onmouseout=function(){
		this.style.borderBottom='none';
		this.style.color='#323232';
	}
}
var list1=document.querySelector('.list1');
Catalog.onmouseover=function(){
	setTimeout(function(){
		list1.style.top='49px';
	},500);
	this.style.height='29px';
	this.style.borderBottom='2px solid black';
}

Catalog.onmouseout=function(){
	// list1.onmouseover=function(){
	// list1.style.top='50px';
	// }
	// list1.onmouseout=function(){
		list1.style.top='-550px';
	// }
	this.style.height='36px';
	this.style.borderBottom='none';
}

var search=document.querySelector('.search');
var inp=document.querySelector('input');
var img=document.querySelector('.img');
inp.onmouseover=function(){
	search.style.border='1px solid #0f6dff';
}
inp.onmouseout=function(){
	search.style.border='1px solid white';
	search.style.borderTop='none';
	img.style.borderRight='1px solid #e5e5e5';
}
img.onmouseover=function(){
	img.style.border='1px solid #0f6dff';
}
img.onmouseout=function(){
	img.style.border='1px solid white';
	// img.style.borderRight='1px solid #e5e5e5';
}

var list=document.querySelector('.list');
var mine=document.querySelector('.mine');
var person=document.querySelector('.person');
list.onmouseover=function(){
	// list.style.height='48px';
	list.style.borderBottom='2px solid #323232';
}
list.onmouseout=function(){
	// list.style.height='55px';
	list.style.borderBottom='none';
}
mine.onmouseover=function(){
	// mine.style.height='48px';
	mine.style.borderBottom='2px solid #323232';
	person.style.display='block';
}
mine.onmouseout=function(){
	// mine.style.height='55px';
	mine.style.borderBottom='none';
	person.style.display='none';
}

var Ps=document.querySelectorAll('.person p');
for(var i=0;i<Ps.length;i++){
	Ps[i].onmouseover=function(){
		this.style.background='#0f6dff';
		this.style.color='white';
	}	
	Ps[i].onmouseout=function(){
		this.style.background='white';
		this.style.color='#323232';
	}
}

// var Tech_divs=document.querySelectorAll('.Tech_divs div');
// var Tech_ps=document.querySelectorAll('.Tech_divs p');
// console.log(Tech_ps);
// for(var i=0;i<Tech_divs.length;i++){
// 	Tech_divs[i].style.width='21%';
// 	Tech_divs[i].style.float='left';
// 	Tech_divs[i].style.padding='2%';
// }
// for(var i=0;i<Tech_ps.length;i++){
// 	Tech_ps[i].style.fontSize=i%2==0?'18px':'15px';
// 	Tech_ps[i].style.marginBottom=i%2==0?'20px':'';
// 	Tech_ps[i].style.color=i%2==0?'#323232':'#0064ff';
// 	Tech_ps[i].style.lineHeight=i%2==0?'':'25px';
// }
// 
// 
var final_a=document.querySelectorAll('#final a');
for(var i=0;i<final_a.length;i++){
	final_a[i].onmouseover=function(){
		this.style.color='#3b6caa';
		this.style.borderBottom='1px solid #3b6caa';
	}
	final_a[i].onmouseout=function(){
		this.style.color='#666';
		this.style.borderBottom='none';
	}
}

var col_left_a=document.querySelectorAll('.col_left a');
for(var i=0;i<col_left_a.length;i++){
	col_left_a[i].onmouseover=function(){
		this.style.color='#3b6caa';
		this.style.borderBottom='1px solid #3b6caa';
	}
}
for(var i=0;i<col_left_a.length;i++){
	col_left_a[i].onmouseout=function(){
		this.style.color='#5a5a5a';
		this.style.borderBottom='none';
	}
}

var side=document.querySelector('#side');
var a=document.querySelector('#side .a');
var b=document.querySelector('#side .b');
var c=document.querySelectorAll('#side .c');
var c_group=document.querySelectorAll('#side .c_group');
var zzc=document.querySelector('#zzc');
var num=0;
list.onclick=function(){
	side.style.right='0';
	zzc.style.display='block';
}
a.onclick=function(){
	side.style.right='-570px';
	zzc.style.display='none';
	for(var i=0;i<c_group.length;i++){
		c_group[i].style.display='block';
	}
	
}
b.onmouseover=function(){
	this.style.background='#0f6dff';
	this.style.color='#fff';
}
b.onmouseout=function(){
	this.style.background='none';
	this.style.color='#999';
}
for(var i=0;i<c.length;i++){
	c[i].onmouseover=function(){
		this.style.background='#0f6dff';
		this.style.color='#fff';
	}
	c[i].onmouseout=function(){
		this.style.background='none';
		this.style.color='#323232';
	}
}
for(var i=0;i<c_group.length;i++){
	c_group[i].onmouseover=function(){
		this.style.color='#0f6dff';
		this.style.textDecoration='underline';
	}
	c_group[i].onmouseout=function(){
		this.style.color='#666';
		this.style.textDecoration='none';
	}

}


var c_p=document.querySelectorAll('.c p');

c[0].onclick=function(){
	
	for(var i=0;i<31;i++){
		if(num%2==0){
				c_group[i].style.display='none';
				c_p[0].innerHTML='+';
			}
		else{
				c_group[i].style.display='block';
				c_p[0].innerHTML='-';
			}		
	}
	num++;
}

c[1].onclick=function(){
	
	for(var i=31;i<47;i++){
		if(num%2==0){
				c_group[i].style.display='none';
				c_p[1].innerHTML='+';
			}
		else{
				c_group[i].style.display='block';
				c_p[1].innerHTML='-';
			}		
	}
	num++;
}

var back_top=document.querySelector('#back_top');
var back_top_i=document.querySelector('#back_top i');
back_top.onmouseover=function(){
	back_top.style.background='black';
	back_top_i.style.color='white';
	back_top.style.border='1px solid #ececec';
}
back_top.onmouseout=function(){
	back_top.style.background='#ececec';
	back_top_i.style.color='black';
	back_top.style.border='none';
}

back_top.onclick=function(){
		document.documentElement.scrollTop=document.body.scrollTop=0;
	}

var week=document.querySelector('#week');
var r=week.offsetTop;
console.log(week.offsetTop);
var body=document.querySelector('body');
body.addEventListener("scroll",function(e){
	var t =document.documentElement.scrollTop||document.body.scrollTop;
	if (t>=r) {
		back_top.style.display='block';
	}else{
		back_top.style.display='none';
	}

	
});
