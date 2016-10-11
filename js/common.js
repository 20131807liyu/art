// 画廊艺馆界面
function initTab(){
		var tab=document.getElementsByClassName('store_nav')[0];
		var oul=tab.getElementsByTagName('ul')[0];
		var lis=Array.prototype.slice.call(oul.getElementsByTagName('li'),0);
		var content=document.getElementsByClassName('store_content')[0];
		var contents=Array.prototype.slice.call(content.getElementsByClassName('scontent'),0);
		content.style.height=contents[0].offsetHeight+"px";
		for(var i=0;i<lis.length;i++){
			(function(j){
				lis[j].onclick=function(){
					if(this.className=="on") return;
					for(var x=0;x<lis.length;x++){
						if(lis[x].className=="on")
							contents[x].className="scontent out";
						lis[x].className="";

					}
					this.className="on";
					contents[j].className="scontent in";
					content.style.height=contents[j].offsetHeight+"px";
				}
			})(i);
		}
	}
	// 回到顶部
function toTop(){
	var btn =document.getElementsByClassName('totop')[0];
	var timer = null;
	var isTop = true;
	//获取页面可视区高度
	var clientHeight = document.documentElement.clientHeight;
	//滚动条滚动时触发
	window.onscroll = function() {
		//显示回到顶部按钮
		var osTop = document.documentElement.scrollTop || document.body.scrollTop;
		if (osTop >= clientHeight) {
				btn.style.display = "block";
			} else {
				btn.style.display = "none";
		};
		//回到顶部过程中用户滚动滚动条，停止定时器
		if (!isTop) {
			  clearInterval(timer);
			};
			isTop = false;
	};
	btn.onclick = function(){
	//设置定时器
		time = setInterval(function(){
		// 获取滚动条的距离顶部高度
		var osTop=document.documentElement.scrollTop || document.body.scrollTop;

		var ispeed=Math.floor(-osTop/5);
		document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
			isTop = true;
			console.log(osTop -ispeed);
			if(osTop==0){
			clearInterval(time);
			}
		},30);
		return false;
	}
}
// 新闻资讯页面
function strech(){
		var right=document.getElementsByClassName('small_right')[0];
		var spans=right.getElementsByTagName('span');
		var divs=right.getElementsByTagName('div');
		var more=document.getElementsByClassName('left_more')[0];
		var omore=document.getElementsByClassName('moleft')[0]
		// 展览展讯--更多
		more.onclick=function(){
		if(more.innerHTML=="更多"){
			omore.style.height=400+"px";
			more.innerHTML="收起";
			return;
		}
		if(more.innerHTML=="收起"){
			omore.style.height=0+"px";
			more.innerHTML="更多";
			return;
		}
		}
		// 闲聊一刻--二级导航条
		for(var i=0;i<spans.length;i++){
			(function(j){
				spans[j].onclick=function(){
					if(this.className=="sactive"){
						spans[j].className="";
						divs[j].className="scontent";
						return;
					}
					for(var x=0;x<spans.length;x++){
						spans[x].className="";
						divs[x].className="scontent"
					}
					this.className="sactive";
					divs[j].className="scontent appear";
				}
			})(i);
		}
	}
// 名家推荐页面
var parts=null;
var current=1;
var picPaths=[
		'url(images/b1.jpg)',
		'url(images/b2.jpg)',
		'url(images/b3.jpg)',
		'url(images/b4.jpg)'
	];
function initParts(){
		var div=document.getElementById('main');
		var childs=div.getElementsByTagName('div');
		parts=Array.prototype.slice.call(childs,0);
	}
function zhuan(flag){
		//先让container做好准备显示下一张要显示的图片
		if(flag)
			current=current+1>picPaths.length?1:current+1;
		else
			current=current-1<1?picPaths.length:current-1;
		document.getElementById('main').style.backgroundImage=picPaths[current-1];
		document.getElementById('main').style.animationName='main';
		//让4个part执行动画
		for(var i=0;i<parts.length;i++){
			parts[i].style.animationName=
				'part'+(i+1)+(flag?'-up':'-down');
			parts[i].style.animationDelay=i*0.2+"s";
		}
		//动画结束,让4个part显示当前图片
		setTimeout(function(){
			document.getElementById('main').style.animationName='none';
			for(var i=0;i<parts.length;i++){
				parts[i].style.backgroundImage=picPaths[current-1];
				parts[i].style.animationName='none';
			}
		},1000);
	}
// 1F书画中国||2F油画与当代艺术
function tab(){
	var tab=document.getElementsByClassName('tab');
	var sright=document.getElementsByClassName('sright');
	for(var i=0;i<tab.length;i++){
		(function(j){
			var oul=tab[i].getElementsByTagName('ul')[0];
			var lis=oul.getElementsByTagName('li');
			var tab_show=sright[i].getElementsByClassName('tab_show');
			for(var z=0;z<lis.length;z++){
				lis[z].index=z;
				lis[z].onclick=function(){
					for(var x=0;x<lis.length;x++){
						if(lis[x].className=='outer')
							tab_show[x].className="tab_show scale";
						lis[x].className="";
					}
					this.className="outer";
					tab_show[this.index].className="tab_show bscale";
				}
			}
		})(i);
	}
}
// 表单页面
// 判断用户名
function test_yhm(){
		var yhm=document.getElementById("yhm").value;
		var yhmts=document.getElementById("yhmts");
		if(!(/^[a-zA-Z]\w{5,17}$/.test(yhm))){
			 yhmts.style.opacity=1;
		 yhmts.innerHTML="<font size='-1'>长度在6-18之间";
		 }else{
		 	yhmts.style.opacity=0;
		 }
	}
// 提示用户输入密码
function test_mm(){ 
	 var mm=document.getElementById("mm").value;
	 if(mm==""){
	 	document.getElementById("mmts").style.opacity=1;
		document.getElementById("mmts").innerHTML="<font size='-1'>您的密码不能为空!";
	 }else if(!(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/.test(mm))){
	 	document.getElementById("mmts").style.opacity=1;
		document.getElementById("mmts").innerHTML="<font size='-1'>长度在6-18之间";
	 }else{
	 	document.getElementById("mmts").style.opacity=0;
	 }
}
// 提示用户再次输入密码
function test_ce(){ 
	 var ce=document.getElementById("ce").value;
	 if(ce==""){
	 	document.getElementById("ces").style.opacity=1;
		document.getElementById("ces").innerHTML="<font size='-1'>请您再次输入密码!";
	 }else if(ce!=document.getElementById('mm').value){
	 	document.getElementById("ces").style.opacity=1;
	 	document.getElementById("ces").innerHTML="<font size='-1'>您输入的密码不正确!";
	 }else{
	 	document.getElementById("ces").style.opacity=0;
	 }
}
// 提示用户输入手机号
 function test_dh(){ 
	 var phone=document.getElementById("dh").value;
		if(!(/^1[3|4|5|7|8]\d{9}$/.test(phone))){
			document.getElementById("dhts").style.opacity=1;
		document.getElementById("dhts").innerHTML="<font size='-1'>请输入11位手机号码";
	 	}else{
	 		document.getElementById("dhts").style.opacity=0;
	 	}
}
// 提示用户输入正确的邮箱
function test_email(){ 
	 var email=document.getElementById("email").value;
		if(
		!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email))){
			document.getElementById("yjts").style.opacity=1;
		document.getElementById("yjts").innerHTML="<font size='-1'>请输入正确的电子邮箱";
	 	}else{
	 		document.getElementById("yjts").style.opacity=0;
	 	}
}
// 无缝轮播
var num=0;
function graduShows(){
	var graduShow=document.getElementsByClassName('graduShow')[0];
	var pic=document.getElementsByClassName('pic')[0];
	var imgs=Array.prototype.slice.call(pic.getElementsByTagName('img'),0);
	num=num+1>2?0:num+1;
	if(num==2){
		pic.className='pic';
		pic.style.left='0px';
		setTimeout(function(){
			num=1
			pic.style.left=(-1*num)*graduShow.offsetWidth+'px';
			pic.className+=' slow';
		},20)
	}
	else
		pic.style.left=(-1*num)*graduShow.offsetWidth+'px';
}
// 作品展示页面
var loopPlayerInit=(function(){
	var $butleft=null,$butright=null,$butplay=null,$imglist=null;
	//定义中心点
	origin=['150px','600px'],
	//旋转图片的中心点设置
	imgorigin=['150px','800px'],imgAll=createImg([['images/paint01.jpg','images/paint02.jpg','images/paint03.jpg','images/r1.jpg'],
				['images/p1.jpg','images/p2.jpg','images/p3.jpg','images/p4.jpg'],
				['images/p8.jpg','images/p6.jpg','images/p5.jpg','images/p7.jpg']]);
	imgAllIndex=0,imgAng=45,imgTime=300,rotating=false,autoTime=null,autointerval=3000;
	function init(){
		$butleft=$(".butleft"),$butright=$(".butright"),$butplay=$(".butplay"),$imglist=$(".main-box ul li");
		configer();
		setEvent();
	}
	function configer(){
		var ang=6,aint=-6;
		$imglist.transform({origin:origin});
		$imglist.each(function(i){
			var $this=$(this);
			$this.transform({rotate:aint+(i*ang)+"deg"});
		})
	}
	//添加点击事件
	function setEvent(){
		$butleft.bind("click",function(){
			anigo(-1);
			return false;
		})
		$butright.bind("click",function(){
			anigo(1);
			return false;
		})
		$butplay.bind("click",function(){
			var play="play",
				push="push",
				$but=$(this);
			if($but.text()=="play"){
				$but.text(push);
				autoGo();
				}else{
					$but.text(play);
					autoStop();
				}
			return false;
		})
	}
	//增加图片的函数
	function createImg(arr){
		var imgArr=[];
		for(var i in arr){
			imgArr[i]=[];
			for(var x in arr[i]){
				imgArr[i][x]=new Image();
				imgArr[i][x].src=arr[i][x];
			}
		}
		return imgArr;
	} 
	//设置图片的旋转
	function anigo(d){
		if(rotating)return false;
		rotating=true;
		imgAllIndex+=d;

		if(imgAllIndex>imgAll.length-1){
			imgAllIndex=0;
		}else if(imgAllIndex<0){
			imgAllIndex=imgAll.length-1;
		}
		$imglist.each(function(i){
			var $thisItme=$(this);
			var $thisimg=$thisItme.children("img");
			var $targetImg=$(imgAll[imgAllIndex][i]);
			var thisTime=(d===1)?imgTime*i:imgTime*($imglist.length-1-i);
			$thisItme.append($targetImg);
			$thisimg.transform({origin:origin});
			$targetImg.transform({origin:imgorigin,rotate:(0-d)*imgAng+"deg"});
			setTimeout(function(){
				$thisimg.animate({rotate:imgAng*d+"deg"});
			$targetImg.animate({rotate:"0deg"},500,function(){
				$thisimg.remove();
				if(thisTime==(($imglist.length-1)*imgTime)){
					rotating=false;
				}
			});
			},thisTime);
			
		})

	}
	//图片自动播放的函数
	function autoGo(){
		clearInterval(autoTime);
		anigo(1);
		autoTime=setInterval(function(){
			anigo(1);
		},autointerval);
	}
	//图片停止播放的函数
	function autoStop(){
		clearInterval(autoTime);
	}
	return init;
})();