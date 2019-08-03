//var counter=0; &nbsp
cardused=[];
var countsec=countmin=persec=0;
voucher=[];
var card; var amount=0; 
var pulse=false; var xtraxpensive=false; var xtravalue=false; var xtracool=false;var betatalk=false;
var sound1 = new Audio();
sound1.src = "media/one.aac";
var sound2 = new Audio();
sound2.src = "media/two.aac";
var tariff='Pulse';
var voucherBr="";
var redIdbr;


function generate()
{
	alert("This device is a prototype that has: 1.Ability to call 2.Voucher Generator 3.Ability to rechearge card 4.Identify Invalid card 5.Identify used card 6.*123# exploration 7.Ability to switch tarrifs 8.Acc balance check 9.Card exhaust notification 10.TIme displaying and lots more"
		);	
	retrieved0 = JSON.parse(localStorage.getItem("amountStore"));
	retrieved1 = JSON.parse(localStorage.getItem("voucherStore"));
	retrieved2 = JSON.parse(localStorage.getItem("cardusedStorage"));
	retrieved3 = JSON.parse(localStorage.getItem("tariffStore1"));
	retrieved4 = JSON.parse(localStorage.getItem("tariffStore2"));
	retrieved5 = JSON.parse(localStorage.getItem("tariffStore3"));
	retrieved6 = JSON.parse(localStorage.getItem("tariffStore4"));
	retrieved7 = JSON.parse(localStorage.getItem("tariffStore5"));

	if (retrieved0!=undefined) {amount=retrieved0}
	if (retrieved1!=undefined)
	 {
	 	voucher=retrieved1;
	 	voucherCheck = JSON.stringify(voucher);
	 	for (var i = 0; i < voucher.length; i++) {
	 		voucherBr=voucher[i] +"<br>";
			vouchers.innerHTML += voucherBr;
		}
	 }
	 if (retrieved2!=undefined)
	 	{
	 		cardused = retrieved2;
	 		cardusedString=JSON.stringify(cardused);
	 	}
	 if (retrieved3)
	 	{
	 		//retrieved4=retrieved5=false;
	 		betatalk = retrieved3;pulse = retrieved4;xtraxpensive = retrieved5;xtracool = retrieved6;xtravalue = retrieved7;
	 		tariff="Beta Talk";
	 	}
	  if (retrieved4)
	 	{
	 		//retrieved3=retrieved5=false;
	 		betatalk = retrieved3;pulse = retrieved4;xtraxpensive = retrieved5;xtracool = retrieved6;xtravalue = retrieved7;
	 		tariff="Pulse";
	 	}
	  if (retrieved5)
	 	{
	 		//retrieved3=retrieved5=false;
	 		betatalk = retrieved3;pulse = retrieved4;xtraxpensive = retrieved5;xtracool = retrieved6;xtravalue = retrieved7;
	 		tariff="XtraExpensive";
	 	}
	  if (retrieved6)
	 	{
	 		//retrieved3=retrieved5=false;
	 		betatalk = retrieved3;pulse = retrieved4;xtraxpensive = retrieved5;xtracool = retrieved6;xtravalue = retrieved7;
	 		tariff="XtraCool";
	 	}
	  if (retrieved7)
	 	{
	 		//retrieved3=retrieved5=false;
	 		betatalk = retrieved3;pulse = retrieved4;xtraxpensive = retrieved5;xtracool = retrieved6;xtravalue = retrieved7;
	 		tariff="XtraValue";
	 	}
}

setInterval(dateshow)
function dateshow()
{
	showdate.innerHTML = new Date().getHours() + ":" + new Date().getMinutes();
}

function pressHash()
{
	scrn.innerHTML+='#';
	screenhide.value+='#';
}
function press(x)
{
	document.getElementById('scrn').style.background="white";
	screenhide2.value=valuechecker.value+=x;
	scrn.innerHTML+=x;
	screenhide.value+=x;
}

function del()
{
	screenhide.value = screenhide.value.slice (0,-1);
	scrn.innerHTML=screenhide.value;
	screenhide2.value=screenhide2.value.slice (0,-1);
	valuechecker.value=valuechecker.value.slice (0,-1);
}

function abort()
{
	//screenhide.value = screenhide.value.slice (0,0);	
	//document.getElementById('scrn').style.background='grey';
	screenhide2.value=valuechecker.value="";
	screenhide.value="";
	scrn.innerHTML="Progress Aborted";
	setTimeout(screenEmpty,1000);
	function screenEmpty()
	{
		scrn.innerHTML="";
	}
	if (calling!=undefined)
	{
		clearInterval(calling);
	}

}

function call()
{ 	
	var phonenumber=screenhide.value;
	if(phonenumber.length==11)
		{
			if (amount>20)
				{
					calling=setInterval(dat,1000);
					calling;
					function dat()
						{
							setTimeout(persec++,1000);
							if (persec==1)
								{
									//pulse
									if(pulse && !betatalk && !xtraxpensive && !xtravalue && !xtracool)
										{
											amount-=5;
											localStorage.setItem("amountStore",amount);

										}
									//beta talk
									else if(!pulse && betatalk && !xtraxpensive && !xtravalue && !xtracool)
										{
											amount-=10;
											localStorage.setItem("amountStore",amount);
										}
									//xtraexpensive
									else if(!pulse && !betatalk && xtraxpensive && !xtravalue && !xtracool)
										{
											amount-=20;
											localStorage.setItem("amountStore",amount);
										}
									//xtravalue
									else if(!pulse && !betatalk && !xtraxpensive && xtravalue && !xtracool)
										{
											amount-=10;
											localStorage.setItem("amountStore",amount);
										}
									//xtracool
									else if(!pulse && !betatalk && !xtraxpensive && !xtravalue && xtracool)
										{
											amount-=5;
											localStorage.setItem("amountStore",amount);
										}
									else if(!pulse && !betatalk && !xtraxpensive && !xtravalue && !xtracool)
										{
											amount-=5;
											localStorage.setItem("amountStore",amount);
										}
									
									persec=0;

									if (amount==20)
										{
											call();
										}
									if (amount==100) {sound1.play()}
								}
//clearInterval(dat);
							setTimeout(countsec++,1000);
							if (countsec==60)
								{
									countmin++;
									countsec=0;
								}
							scrn.innerHTML="Calling...<br>"+screenhide.value+"<br>"+countmin+ " : "+countsec;
						}
				}
			else
				{
					sound2.play();
					setTimeout(stopCall,5000);
					function stopCall()
						{	
							sound2.pause();sound1.pause();
							scrn.innerHTML="Progress Aborted";
							setTimeout(screenEmpty,1000);
							function screenEmpty()
								{	
									scrn.innerHTML="";
								}
							clearInterval(calling);
							amount=0;
						}
				}
		}

	else if (screenhide.value== '*123#')
		{	
			valuechecker.value="";//so as nt to show *!23#1 nd likes on
			scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style=width:20%;>20%</div></div>';
			setTimeout(pleaseWait1,500);
			setTimeout(pleaseWait2,1000);
			setTimeout(pleaseWait3,1500);
			setTimeout(pleaseWait4,2000);
			setTimeout(msg,2500);
		}

	else if (screenhide.value=='*123*1#' || screenhide.value=='*123#1')		
		{
			scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style=width:20%;>20%</div></div>';
			setTimeout(pleaseWait1,500);
			setTimeout(pleaseWait2,1000);
			setTimeout(pleaseWait3,1500);
			setTimeout(pleaseWait4,2000);
			setTimeout(msg1,2500);
		}

	else if (screenhide.value=='*123*1*1#' || screenhide.value=='*123#11')
		{
			scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style=width:20%;>20%</div></div>';
			setTimeout(pleaseWait1,500);
			setTimeout(pleaseWait2,1000);
			setTimeout(pleaseWait3,1500);
			setTimeout(pleaseWait4,2000);
			setTimeout(msg11,2500);
		}

	// else if (screenhide.value=='*123*1*2#' || screenhide.value=='*123#12')
	// 	{
	// 		scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style=width:20%;>20%</div></div>';
	// 		setTimeout(pleaseWait1,500);
	// 		setTimeout(pleaseWait2,1000);
	// 		setTimeout(pleaseWait3,1500);
	// 		setTimeout(pleaseWait4,2000);
	// 		setTimeout(msg12,2500);
	// 	}

	else if (screenhide.value=='*123*1*3#' || screenhide.value=='*123#13')
		{
			 scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style=width:20%;>20%</div></div>';
			setTimeout(pleaseWait1,500);
			setTimeout(pleaseWait2,1000);
			setTimeout(pleaseWait3,1500);
			setTimeout(pleaseWait4,2000);
			setTimeout(msg13,2500);
		}
	else if (screenhide.value=='*123*1*4#' || screenhide.value=='*123#14')
		{
			scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style=width:20%;>20%</div></div>';
			setTimeout(pleaseWait1,500);
			setTimeout(pleaseWait2,1000);
			setTimeout(pleaseWait3,1500);
			setTimeout(pleaseWait4,2000);
			setTimeout(msg14,2500);
		}

	else if (screenhide.value=='*123*2#' || screenhide.value=='*123#2' || screenhide.value=='*123*1*2#' || screenhide.value=='*123#12')
		{
			scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style=width:20%;>20%</div></div>';
			setTimeout(pleaseWait1,500);
			setTimeout(pleaseWait2,1000);
			setTimeout(pleaseWait3,1500);
			setTimeout(pleaseWait4,2000);
			setTimeout(msg2,2500);
		}

	else if (screenhide.value=='*123*2*1#' || screenhide.value=='*123#21' || screenhide.value=='*123*1*2*1#' || screenhide.value=='*123#121')
		{
			scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style=width:20%;>20%</div></div>';
			setTimeout(pleaseWait1,500);
			setTimeout(pleaseWait2,1000);
			setTimeout(pleaseWait3,1500);
			setTimeout(pleaseWait4,2000);
			tariff='Beta Talk';
			betatalk=true;
			pulse=false;
			xtraxpensive=false;
			xtravalue=false;
			xtracool=false;
			localStorage.setItem("tariffStore1",betatalk);
			localStorage.setItem("tariffStore2",pulse);
			localStorage.setItem("tariffStore3",xtraxpensive);
			localStorage.setItem("tariffStore4",xtracool);
			localStorage.setItem("tariffStore5",xtravalue);
			setTimeout(tarrifPlan,2500);
		}

	else if (screenhide.value=='*123*2*2#' || screenhide.value=='*123#22' || screenhide.value=='*123#122')
		{
			scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style=width:20%;>20%</div></div>';
			setTimeout(pleaseWait1,500);
			setTimeout(pleaseWait2,1000);
			setTimeout(pleaseWait3,1500);
			setTimeout(pleaseWait4,2000);
			tariff='Pulse';
			pulse=true;
			betatalk=false;
			xtraxpensive=false;
			xtravalue=false;
			xtracool=false;
			localStorage.setItem("tariffStore1",betatalk);
			localStorage.setItem("tariffStore2",pulse);
			localStorage.setItem("tariffStore3",xtraxpensive);
			localStorage.setItem("tariffStore4",xtracool);
			localStorage.setItem("tariffStore5",xtravalue);
			setTimeout(tarrifPlan,2500);
		}
	else if (screenhide.value=='*123*2*3#' || screenhide.value=='*123#23' || screenhide.value=='*123#123')
		{
			scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style=width:20%;>20%</div></div>';
			setTimeout(pleaseWait1,500);
			setTimeout(pleaseWait2,1000);
			setTimeout(pleaseWait3,1500);
			setTimeout(pleaseWait4,2000);
			tariff='XtraExpensive';
			pulse=false;
			betatalk=false;
			xtracool=false;
			xtravalue=false;
			xtraxpensive=true;
			localStorage.setItem("tariffStore1",betatalk);
			localStorage.setItem("tariffStore2",pulse);
			localStorage.setItem("tariffStore3",xtraxpensive);
			localStorage.setItem("tariffStore4",xtracool);
			localStorage.setItem("tariffStore5",xtravalue);
			setTimeout(tarrifPlan,2500);
		}
	else if (screenhide.value=='*123*2*4#' || screenhide.value=='*123#24' || screenhide.value=='*123#124')
		{
			scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style=width:20%;>20%</div></div>';
			setTimeout(pleaseWait1,500);
			setTimeout(pleaseWait2,1000);
			setTimeout(pleaseWait3,1500);
			setTimeout(pleaseWait4,2000);
			tariff='XtraCool';
			pulse=false;
			betatalk=false;
			xtraxpensive=false;
			xtravalue=false;
			xtracool=true;
			localStorage.setItem("tariffStore1",betatalk);
			localStorage.setItem("tariffStore2",pulse);
			localStorage.setItem("tariffStore3",xtraxpensive);
			localStorage.setItem("tariffStore4",xtracool);
			localStorage.setItem("tariffStore5",xtravalue);
			setTimeout(tarrifPlan,2500);
		}
	else if (screenhide.value=='*123*2*5#' || screenhide.value=='*123#25' || screenhide.value=='*123#125')
		{
			scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style=width:20%;>20%</div></div>';
			setTimeout(pleaseWait1,500);
			setTimeout(pleaseWait2,1000);
			setTimeout(pleaseWait3,1500);
			setTimeout(pleaseWait4,2000);
			tariff='XtraValue';
			pulse=false;
			betatalk=false;
			xtraxpensive=false;
			xtracool=false;
			xtravalue=true;
			localStorage.setItem("tariffStore1",betatalk);
			localStorage.setItem("tariffStore2",pulse);
			localStorage.setItem("tariffStore3",xtraxpensive);
			localStorage.setItem("tariffStore4",xtracool);
			localStorage.setItem("tariffStore5",xtravalue);
			setTimeout(tarrifPlan,2500);
		}
	else if (screenhide.value=='*123*3#' || screenhide.value=='*123#3')
		{
			scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style=width:20%;>20%</div></div>';
			setTimeout(pleaseWait1,500);
			setTimeout(pleaseWait2,1000);
			setTimeout(pleaseWait3,1500);
			setTimeout(pleaseWait4,2000);
			setTimeout(msg3,2500);
		}
	else if (screenhide.value=='*123*3*1#' || screenhide.value=='*123#31')
		{
			scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style=width:20%;>20%</div></div>';
			setTimeout(pleaseWait1,500);
			setTimeout(pleaseWait2,1000);
			setTimeout(pleaseWait3,1500);
			setTimeout(pleaseWait4,2000);
			setTimeout(msg31,2500);
		}
	else if (screenhide.value== '*123*3*1*1#' || screenhide.value=='*123#311')
	{
		scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style=width:20%;>20%</div></div>';
			setTimeout(pleaseWait1,500);
			setTimeout(pleaseWait2,1000);
			setTimeout(pleaseWait3,1500);
			setTimeout(pleaseWait4,2000);
		setTimeout(msg311,2500)
	}
	else if (screenhide.value== '*123*3*1*2#' || screenhide.value=='*123#312')
	{
		scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style=width:20%;>20%</div></div>';
			setTimeout(pleaseWait1,500);
			setTimeout(pleaseWait2,1000);
			setTimeout(pleaseWait3,1500);
			setTimeout(pleaseWait4,2000);
		setTimeout(msg312,2500)
	}
	else if (screenhide.value== '*123*3*1*3#' || screenhide.value=='*123#313')
	{
		scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style=width:20%;>20%</div></div>';
			setTimeout(pleaseWait1,500);
			setTimeout(pleaseWait2,1000);
			setTimeout(pleaseWait3,1500);
			setTimeout(pleaseWait4,2000);
		setTimeout(msg313,2500)
	}
	else if (screenhide.value== '*123*3*1*4#' || screenhide.value=='*123#314')
	{
		scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style=width:20%;>20%</div></div>';
			setTimeout(pleaseWait1,500);
			setTimeout(pleaseWait2,1000);
			setTimeout(pleaseWait3,1500);
			setTimeout(pleaseWait4,2000);
		setTimeout(msg314,2500)
	}
	else if (screenhide.value== '*123*3*1*5#' || screenhide.value=='*123#315')
	{
		scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style=width:20%;>20%</div></div>';
			setTimeout(pleaseWait1,500);
			setTimeout(pleaseWait2,1000);
			setTimeout(pleaseWait3,1500);
			setTimeout(pleaseWait4,2000);
		setTimeout(msg315,2500)
	}
	else if (screenhide.value== '*123*3*1*5#' || screenhide.value=='*123#315')
	{
		scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style=width:20%;>20%</div></div>';
			setTimeout(pleaseWait1,500);
			setTimeout(pleaseWait2,1000);
			setTimeout(pleaseWait3,1500);
			setTimeout(pleaseWait4,2000);
		setTimeout(msg315,2500)
	}
	else if (screenhide.value== '*123*3*1*1*1#' || screenhide.value=='*123#3111')
	{
		scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style=width:20%;>20%</div></div>';
			setTimeout(pleaseWait1,500);
			setTimeout(pleaseWait2,1000);
			setTimeout(pleaseWait3,1500);
			setTimeout(pleaseWait4,2000);
		setTimeout(msg3111,2500)
	}
	else if (screenhide.value== '*123*3*1*1*2#' || screenhide.value=='*123#3112')
	{
		scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style=width:20%;>20%</div></div>';
			setTimeout(pleaseWait1,500);
			setTimeout(pleaseWait2,1000);
			setTimeout(pleaseWait3,1500);
			setTimeout(pleaseWait4,2000);
		setTimeout(msg3112,2500)
	}
	else if (screenhide.value== '*123*3*1*2*1#' || screenhide.value=='*123#3121')
	{
		scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style=width:20%;>20%</div></div>';
			setTimeout(pleaseWait1,500);
			setTimeout(pleaseWait2,1000);
			setTimeout(pleaseWait3,1500);
			setTimeout(pleaseWait4,2000);
		setTimeout(msg3121,2500)
	}

	else if (screenhide.value== '*123*3*1*2*2#' || screenhide.value=='*123#3122')
	{
		scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style=width:20%;>20%</div></div>';
			setTimeout(pleaseWait1,500);
			setTimeout(pleaseWait2,1000);
			setTimeout(pleaseWait3,1500);
			setTimeout(pleaseWait4,2000);
		setTimeout(msg3122,2500)
	}
	else if (screenhide.value== '*123*3*1*3*1#' || screenhide.value=='*123#3131')
	{
		scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style=width:20%;>20%</div></div>';
			setTimeout(pleaseWait1,500);
			setTimeout(pleaseWait2,1000);
			setTimeout(pleaseWait3,1500);
			setTimeout(pleaseWait4,2000);
		setTimeout(msg3131,2500)
	}
	else if (screenhide.value=='*123#3132')
	{
		scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style=width:20%;>20%</div></div>';
			setTimeout(pleaseWait1,500);
			setTimeout(pleaseWait2,1000);
			setTimeout(pleaseWait3,1500);
			setTimeout(pleaseWait4,2000);
		setTimeout(msg3132,2500)
	}
	else if (screenhide.value=='*123#3133')
	{
		scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style=width:20%;>20%</div></div>';
			setTimeout(pleaseWait1,500);
			setTimeout(pleaseWait2,1000);
			setTimeout(pleaseWait3,1500);
			setTimeout(pleaseWait4,2000);
		setTimeout(msg315,2500)
	}
	else if (screenhide.value=='*123#3141')
	{
		scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style=width:20%;>20%</div></div>';
			setTimeout(pleaseWait1,500);
			setTimeout(pleaseWait2,1000);
			setTimeout(pleaseWait3,1500);
			setTimeout(pleaseWait4,2000);
		setTimeout(msg3141,2500)
	}
	else if (screenhide.value=='*123#3151')
	{
		scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style=width:20%;>20%</div></div>';
			setTimeout(pleaseWait1,500);
			setTimeout(pleaseWait2,1000);
			setTimeout(pleaseWait3,1500);
			setTimeout(pleaseWait4,2000);
		setTimeout(msg3151,2500)
	}
	else if (screenhide.value=='*123#32')
	{
		scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style=width:20%;>20%</div></div>';
			setTimeout(pleaseWait1,500);
			setTimeout(pleaseWait2,1000);
			setTimeout(pleaseWait3,1500);
			setTimeout(pleaseWait4,2000);
		setTimeout(msg32,2500)
	}
	else if (screenhide.value=='*123#33')
	{
		scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style=width:20%;>20%</div></div>';
			setTimeout(pleaseWait1,500);
			setTimeout(pleaseWait2,1000);
			setTimeout(pleaseWait3,1500);
			setTimeout(pleaseWait4,2000);
		setTimeout(msg33,2500)
	}
	else if (screenhide.value== '*123#4')
	{
		scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style=width:20%;>20%</div></div>';
			setTimeout(pleaseWait1,500);
			setTimeout(pleaseWait2,1000);
			setTimeout(pleaseWait3,1500);
			setTimeout(pleaseWait4,2000);
		setTimeout(msg4,2500)
	}
	else if (screenhide.value== '*123#41')
	{
		scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style=width:20%;>20%</div></div>';
			setTimeout(pleaseWait1,500);
			setTimeout(pleaseWait2,1000);
			setTimeout(pleaseWait3,1500);
			setTimeout(pleaseWait4,2000);
		setTimeout(msg41,2500)
	}
	else if (screenhide.value=='*123#42')
	{
		scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style=width:20%;>20%</div></div>';
			setTimeout(pleaseWait1,500);
			setTimeout(pleaseWait2,1000);
			setTimeout(pleaseWait3,1500);
			setTimeout(pleaseWait4,2000);
		setTimeout(msg42,2500)
	}
	else if (screenhide.value== '*123#421')
	{
		scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style=width:20%;>20%</div></div>';
			setTimeout(pleaseWait1,500);
			setTimeout(pleaseWait2,1000);
			setTimeout(pleaseWait3,1500);
			setTimeout(pleaseWait4,2000);
		setTimeout(msg421,2500)
	}

	else if (screenhide.value== '*123#4211')
	{
		scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style=width:20%;>20%</div></div>';
			setTimeout(pleaseWait1,500);
			setTimeout(pleaseWait2,1000);
			setTimeout(pleaseWait3,1500);
			setTimeout(pleaseWait4,2000);
		setTimeout(msg4211,2500)
	}
	else if (screenhide.value=='*123#4212')
	{
		scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style=width:20%;>20%</div></div>';
			setTimeout(pleaseWait1,500);
			setTimeout(pleaseWait2,1000);
			setTimeout(pleaseWait3,1500);
			setTimeout(pleaseWait4,2000);
		setTimeout(msg4212,2500)
	}
	else if (screenhide.value== '*123#4213')
	{
		scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style=width:20%;>20%</div></div>';
			setTimeout(pleaseWait1,500);
			setTimeout(pleaseWait2,1000);
			setTimeout(pleaseWait3,1500);
			setTimeout(pleaseWait4,2000);
		setTimeout(msg4213,2500)
	}
	else if (screenhide.value== '*123#4214')
	{
		scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style=width:20%;>20%</div></div>';
			setTimeout(pleaseWait1,500);
			setTimeout(pleaseWait2,1000);
			setTimeout(pleaseWait3,1500);
			setTimeout(pleaseWait4,2000);
		setTimeout(msg4214,2500)
	}
	else if (screenhide.value== '*123#422')
	{
		scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style=width:20%;>20%</div></div>';
			setTimeout(pleaseWait1,500);
			setTimeout(pleaseWait2,1000);
			setTimeout(pleaseWait3,1500);
			setTimeout(pleaseWait4,2000);
		setTimeout(msg422,2500)
	}
	else if (screenhide.value== '*123#4221')
	{
		scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style=width:20%;>20%</div></div>';
			setTimeout(pleaseWait1,500);
			setTimeout(pleaseWait2,1000);
			setTimeout(pleaseWait3,1500);
			setTimeout(pleaseWait4,2000);
		setTimeout(msg4221,2500)
	}
	else if (screenhide.value== '*123#4222')
	{
		scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style=width:20%;>20%</div></div>';
			setTimeout(pleaseWait1,500);
			setTimeout(pleaseWait2,1000);
			setTimeout(pleaseWait3,1500);
			setTimeout(pleaseWait4,2000);
		setTimeout(msg4222,2500)
	}
	else if (screenhide.value== '*123#4223')
	{
		scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style=width:20%;>20%</div></div>';
			setTimeout(pleaseWait1,500);
			setTimeout(pleaseWait2,1000);
			setTimeout(pleaseWait3,1500);
			setTimeout(pleaseWait4,2000);
		setTimeout(msg4223,2500)
	}
	else if (screenhide.value== '*123#43')
	{
		scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style=width:20%;>20%</div></div>';
			setTimeout(pleaseWait1,500);
			setTimeout(pleaseWait2,1000);
			setTimeout(pleaseWait3,1500);
			setTimeout(pleaseWait4,2000);
		setTimeout(msg43,2500)
	}
	else if (screenhide.value== '*123#431')
	{
		scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style=width:20%;>20%</div></div>';
			setTimeout(pleaseWait1,500);
			setTimeout(pleaseWait2,1000);
			setTimeout(pleaseWait3,1500);
			setTimeout(pleaseWait4,2000);
		setTimeout(msg431,2500)
	}
	else if (screenhide.value== '*123#4311')
	{
		scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style=width:20%;>20%</div></div>';
			setTimeout(pleaseWait1,500);
			setTimeout(pleaseWait2,1000);
			setTimeout(pleaseWait3,1500);
			setTimeout(pleaseWait4,2000);
		setTimeout(msg4311,2500)
	}
	else if (screenhide.value== '*123#4312')
	{
		scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style=width:20%;>20%</div></div>';
			setTimeout(pleaseWait1,500);
			setTimeout(pleaseWait2,1000);
			setTimeout(pleaseWait3,1500);
			setTimeout(pleaseWait4,2000);
		setTimeout(msg4312,2500)
	}
    else if (screenhide.value== '*123#4313')
	{
		scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style=width:20%;>20%</div></div>';
			setTimeout(pleaseWait1,500);
			setTimeout(pleaseWait2,1000);
			setTimeout(pleaseWait3,1500);
			setTimeout(pleaseWait4,2000);
		setTimeout(msg4313,2500)
	}
	else if (screenhide.value== '*123#4314')
	{
		scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style=width:20%;>20%</div></div>';
			setTimeout(pleaseWait1,500);
			setTimeout(pleaseWait2,1000);
			setTimeout(pleaseWait3,1500);
			setTimeout(pleaseWait4,2000);
		setTimeout(msg4314,2500)
	}
	else if (screenhide.value== '*123#432')
	{
		scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style=width:20%;>20%</div></div>';
			setTimeout(pleaseWait1,500);
			setTimeout(pleaseWait2,1000);
			setTimeout(pleaseWait3,1500);
			setTimeout(pleaseWait4,2000);
		setTimeout(msg432,2500)
	}
	else if (screenhide.value== '*123#4321')
	{
		scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style=width:20%;>20%</div></div>';
			setTimeout(pleaseWait1,500);
			setTimeout(pleaseWait2,1000);
			setTimeout(pleaseWait3,1500);
			setTimeout(pleaseWait4,2000);
		setTimeout(msg4321,2500)
	}
	else if (screenhide.value== '*123#4322')
	{
		scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style=width:20%;>20%</div></div>';
			setTimeout(pleaseWait1,500);
			setTimeout(pleaseWait2,1000);
			setTimeout(pleaseWait3,1500);
			setTimeout(pleaseWait4,2000);
		setTimeout(msg4322,2500)
	}
	else if (screenhide.value== '*123#4323')
	{
		scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style=width:20%;>20%</div></div>';
			setTimeout(pleaseWait1,500);
			setTimeout(pleaseWait2,1000);
			setTimeout(pleaseWait3,1500);
			setTimeout(pleaseWait4,2000);
		setTimeout(msg4323,2500)
	}
	else if (screenhide.value== '*123#5')
	{
		scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style=width:20%;>20%</div></div>';
			setTimeout(pleaseWait1,500);
			setTimeout(pleaseWait2,1000);
			setTimeout(pleaseWait3,1500);
			setTimeout(pleaseWait4,2000);
		setTimeout(msg5,2500)
	}

	else if (screenhide.value=='*556#')
		{
			scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style=width:20%;>20%</div></div>';
			setTimeout(pleaseWait1,500);
			setTimeout(pleaseWait2,1000);
			setTimeout(pleaseWait3,1500);
			setTimeout(pleaseWait4,2000);
			setTimeout(acc,2500);
		}
	else if (phonenumber.length<11)
		{
			scrn.innerHTML="Unknown USSD or Number Invalid"
		}
	/*else if (screenhide.value=='*555*'+card1+"#" || screenhide.value=='*555*'+card2+"#" || screenhide.value=='*555*'+card3+"#")
	{
		scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style=width:20%;>20%</div></div>';
			setTimeout(pleaseWait1,500);
			setTimeout(pleaseWait2,1000);
			setTimeout(pleaseWait3,1500);
			setTimeout(pleaseWait4,2000);
		setTimeout(accMsg,1000);

	}*/

	else if (voucherCheck.search(screenhide2.value)>0 && screenhide.value=='*555*'+screenhide2.value+'#')
		{
			scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style=width:20%;>20%</div></div>';
			setTimeout(pleaseWait1,500);
			setTimeout(pleaseWait2,1000);
			setTimeout(pleaseWait3,1500);
			setTimeout(pleaseWait4,2000);
			(cardused.includes(valuechecker.value))?
			setTimeout(msgUsedCard,2500):setTimeout(accMsg,2500);
		}
	else if (voucherCheck.search(screenhide2.value)<0 && screenhide.value=='*555*'+screenhide2.value+ '#')
		{
			scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style=width:20%;>20%</div></div>';
			setTimeout(pleaseWait1,500);
			setTimeout(pleaseWait2,1000);
			setTimeout(pleaseWait3,1500);
			setTimeout(pleaseWait4,2000);
			setTimeout(accMsgInvalid,2500);
		}

}

function pleaseWait1()
{
	scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style=width:40%;>40%</div></div>';
	
}
function pleaseWait2()
{	
	scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style = width:60%>60%</div></div>';
}
function pleaseWait3()
{	
	scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style = width:80%>80%</div></div>';
}
function pleaseWait4()
{	
	scrn.innerHTML='<div class=progress style=width:95%><div class=progress-bar role=progressbar style = width:100%>100%</div></div>';
}
function msg()
{	
	scrn.innerHTML="";
	scrn.innerHTML="<ol><li>Account Information</li><li>Tarrif Plan Migration</li><li>Data Services</li><li>Hello World Roaming</li><li>International Offers</li></ol>";
	scrn.innerHTML+='Enter 1,2,3...5 to proceedand del to go back.<br>';
}
function msg1()
{
	scrn.innerHTML="";
	scrn.innerHTML="My Tools<ol><li>My Number</li><li>My Tarrif Plan</li><li>My Account Balance</li><li>My Data Balance</li>";
	scrn.innerHTML+='Enter 1,2,3, 4 to proceedand del to go back.<br>';
}

function msg11()
{
	scrn.innerHTML="";
	scrn.innerHTML="Your Mobile Number is 08132722019"
}

/*function msg12()
{
	scrn.innerHTML="";
	scrn.innerHTML="You are on MTN"+ tarrif;
}*/

function msg13()
{
	scrn.innerHTML="";
	scrn.innerHTML="Your Account Balance is #"+ amount;
}
function msg14()
{
	scrn.innerHTML="";
	scrn.innerHTML="Your Data Balance is 20MB";
}

function msg2()
{
	scrn.innerHTML="";
	scrn.innerHTML="<ol><li>Beta Talk</li><li>Pulse</li><li>XtraExpensive</li><li>XtraCool</li><li>Xtra Value</li>";
	scrn.innerHTML+='Enter 1,2,3,4 or 5 to proceed and del to go back.and del to go back.<br>';
}

/*function msg21()
{
	scrn.innerHTML="";
	scrn.innerHTML="You are on MTN Beta Talk"
}*/

function tarrifPlan()
{
	scrn.innerHTML="";
	scrn.innerHTML="You are on MTN" +tariff;
}

function msg3()
{
	scrn.innerHTML="";
	scrn.innerHTML="<ol><li>Buy Data Plans</li><li>Buy Xtra Value</li><li>Buy GoodyBags</li>";
	scrn.innerHTML+='Enter 1,2,3 or 4 to proceedand del to go back.<br>';
}
function msg31()
{
	scrn.innerHTML="";
	scrn.innerHTML="<ol>BUY DATA PLANSand del to go back.<br><li>Daily Plans</li><li>Weekly Plans</li><li>Monthly Plans</li><li>2-Months Plans</li><li>3-Months Plans</li>";
	scrn.innerHTML+='Enter 1,2,3,4 or 5 to proceedand del to go back.<br>';
}
function msg311()
{
	scrn.innerHTML="";
	scrn.innerHTML="<ol>DAILY PLANSand del to go back.<br><li>50MB+25MB Bonus Daily Plan:Cost 100 NGN</li><li>150MB+75MB Bonus Daily Plan:Cost 200 NGN</li>";
	scrn.innerHTML+='Enter 1 or 2 to proceedand del to go back.<br>';
}
function msg312()
{
	scrn.innerHTML="";
	scrn.innerHTML="<ol>WEEKLY PLANSand del to go back.<br><li>150MB Weekly Plan:Cost 300 NGN</li><li>500MB+250MB bonus(1am-7am) Weekly Plan:Cost 500 NGN</li>";
	scrn.innerHTML+='Enter 1 or 2 to proceedand del to go back.<br>';
}
function msg313()
{
	scrn.innerHTML="";
	scrn.innerHTML="<ol>MONTHLY PLANSand del to go back.<br><li>1GB+500MB Bonus(1am-7am):Cost 500 NGN</li><li>1.5GB Monthly Plan:Cost 1200 NGN</li><li>2.5GB+1GB bonus(1am-7am):Cost 1000 NGN";
	scrn.innerHTML+='Enter 1,2 or 3 to proceedand del to go back.<br>';
}
function msg314()
{
	scrn.innerHTML="";
	scrn.innerHTML="<ol>2-MONTHS PLANSand del to go back.<br><li>50GB 2-Months Plan:Cost 10000 NGN</li>";
	scrn.innerHTML+='Enter 1 to proceedand del to go back.<br>';
}
function msg315()
{
	scrn.innerHTML="";
	scrn.innerHTML="<ol>3-MONTHS PLANSand del to go back.<br><li>85GB 3-Months Plan:Cost 25000 NGN</li>";
	scrn.innerHTML+='Enter 1 to proceedand del to go back.<br>';
}
function msg3111()
{
	scrn.innerHTML="";
	scrn.innerHTML="Thank You. Your data balance is now 75MB.";
}
function msg3112()
{
	scrn.innerHTML="";
	scrn.innerHTML="Thank You. Your data balance is now 225MB."	
}
function msg3121()
{
	scrn.innerHTML="";
	scrn.innerHTML="Thank You. Your data balance is now 150MB";
}
function msg3122()
{
	scrn.innerHTML="";
	scrn.innerHTML="Thank You. Your data balance is now 750MB";
}
function msg3131()
{
	scrn.innerHTML="";
	scrn.innerHTML="Thank You. Your data balance is now 1500MB";
}
function msg3132()
{
	scrn.innerHTML="";
	scrn.innerHTML="Thank You. Your data balance is now 1.5GB";
}
function msg3133()
{
	scrn.innerHTML="";
	scrn.innerHTML="Thank You. Your data balance is now 3.5GB";
}
function msg3141()
{
	scrn.innerHTML="";
	scrn.innerHTML="Thank You. Your data balance is now 50GB";
}
function msg3151()
{
	scrn.innerHTML="";
	scrn.innerHTML="Thank You. Your data balance is now 85GB";
}

function msg32()
{
	scrn.innerHTML="";
	scrn.innerHTML="You are not eligible to buy extra value, please call 180";
}

function msg33()
{
	scrn.innerHTML="";
	scrn.innerHTML="Goodybag is no more available on this platform";
}
function msg4()
{
	scrn.innerHTML="";
	scrn.innerHTML="<ol><li>UAE BUNDLE</li><li>Global Roaming Discount</li><li>Global Roaming Bundles";
	scrn.innerHTML+='Enter 1,2,3 to proceedand del to go back.<br>';
}
function msg41()
{
	scrn.innerHTML="";
	scrn.innerHTML="You are now eligible for UAE Bundle. You now have #6000 valid for 14days";
}
function msg42()
{
	scrn.innerHTML="";
	scrn.innerHTML="<ol><li>Eligible destination</li><li>Subscribe to HelloWorld Global Roaming Discount</li></ol>";
	scrn.innerHTML+='Enter 1,2 to proceedand del to go back.<br>';
}
function msg421()
{
	scrn.innerHTML="";
	scrn.innerHTML="<ol><li>United Kingdom</li><li>United States</li><li>France</li><li>Germany</li></ol>";
	scrn.innerHTML+='Enter 1,2,3,4 to proceedand del to go back.<br>';
}
function msg4211()
{
	scrn.innerHTML="";
	scrn.innerHTML="<ol><li>You are Eligible</li></ol>";
}
function msg4212()
{
	scrn.innerHTML="";
	scrn.innerHTML="<ol><li>You are Eligible</li></ol>";
}
function msg4213()
{
	scrn.innerHTML="";
	scrn.innerHTML="<ol><li>You are Eligible</li></ol>";
}
function msg4214()
{
	scrn.innerHTML="";
	scrn.innerHTML="<ol><li>You are Eligible</li></ol>";
}
function msg422()
{
	scrn.innerHTML="";
	scrn.innerHTML="<ol><li>Daily @ #300</li><li>Weekly @ #1,500</li><li>Monthly @ #2500</li></ol>";
	scrn.innerHTML+='Enter 1,2,3 to proceedand del to go back.<br>';
}
function msg4221()
{
	scrn.innerHTML="";
	scrn.innerHTML="<ol><li>You are Eligible for HelloWorld Global Roaming Discount</li>"
}
function msg4222()
{
	scrn.innerHTML="";
	scrn.innerHTML="You are Eligible for HelloWorld Global Roaming Discount"
}
function msg4223()
{
	scrn.innerHTML="";
	scrn.innerHTML="You are Eligible for HelloWorld Global Roaming Discount"
}

function msg43()
{
	scrn.innerHTML="";
	scrn.innerHTML="<ol><li>Eligible destination</li><li>Subscribe to HelloWorld Global Roaming Bundles</li>";
	scrn.innerHTML+='Enter 1,2 to proceedand del to go back.<br>'
}
function msg431()
{
	scrn.innerHTML="";
	scrn.innerHTML="<ol><li>United Kingdom</li><li>United States</li><li>France</li><li>Germany</li>";
	scrn.innerHTML+='Enter 1,2,3,4 to proceedand del to go back.<br>'
}
function msg4311()
{
	scrn.innerHTML="";
	scrn.innerHTML="You are Eligible";
}
function msg4312()
{
	scrn.innerHTML="";
	scrn.innerHTML="You are Eligible";
}
function msg4313()
{
	scrn.innerHTML="";
	scrn.innerHTML="You are Eligible";
}
function msg4314()
{
	scrn.innerHTML="";
	scrn.innerHTML="You are Eligible";
}

function msg432()
{
	scrn.innerHTML="";
	scrn.innerHTML="<ol><li>Daily @ #300</li><li>Weekly @ #1,500</li><li>Monthly @ #2500</li></ol>";
	scrn.innerHTML+='Enter 1,2,3 to proceedand del to go back.<br>';
}

function msg4321()
{
	scrn.innerHTML="";
	scrn.innerHTML="You are Eligible";
}
function msg4322()
{
	scrn.innerHTML="";
	scrn.innerHTML="You are Eligible";
}
function msg4323()
{
	scrn.innerHTML="";
	scrn.innerHTML="You are Eligible";
}
function msg5()
{
	scrn.innerHTML="";
	scrn.innerHTML="Your Sim does not support internation access, please contact our customer care line";
}
function acc()
{
	scrn.innerHTML="";
	scrn.innerHTML="Your MTN " + tariff +" Main balance:#"+ amount +".00; Get 2.5GB & #2,500 talktime @ #1000 on XtraValue. Dial *131*311#, Val/30days";
}
function accMsg()
{	
	scrn.innerHTML="";
	amount+=200;
	scrn.innerHTML="Account Recharge of #200 was Succesful. Your "+tariff + "&nbsp; Main balance:#" + amount +".00 NGN; Get 2.5GB & #2,500 talktime @ #1000 on XtraValue. Dial *131*311#, Val/30days";
	localStorage.setItem("amountStore",amount);
	
	for (var x = no.value-1; x < no.value; x++)
		{
			cardused[x]=screenhide2.value;
			cardused.push(screenhide2.value);
		}
		// redIdbr+=cardused[x] + "<br>";
		// redId.innerHTML=redIdbr;
		cardusedString=JSON.stringify(cardused);
		localStorage.setItem("cardusedStorage",cardusedString)
}
function accMsgInvalid()
{
	scrn.innerHTML="";
	scrn.innerHTML="Invalid Recharge Card"
}
function msgUsedCard()
{
	scrn.innerHTML="";
	scrn.innerHTML="This Recharge Card has already been used by you.";
}



//voucherGenerator

function voucherGenerator()
{	
	for (i = 0; i < no.value; i++)
	{	
		voucher[i] =Math.floor(Math.random()*100000000000000);
		voucherBr += voucher[i] + "<br>";
		
		
		//voucherString.search(screenhide2.value);
	}
	vouchers.innerHTML = voucherBr;
	document.getElementById('vouchers').style.color='green';
	voucherBr = "";
	voucherCheck = JSON.stringify(voucher);
	localStorage.setItem("voucherStore",voucherCheck);
	/*for ( v = 1; v < voucher.length; v++)
	{	
		card1=voucher[1];
		card2=voucher[2];
		card3=voucher[3];
	}*/
}



