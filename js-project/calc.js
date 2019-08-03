var fvalue,svalue; var add,subt,div,mul,myScreen,key=cs=csh=sn=snh=tn=tnh=xp=false;var zeros=zero=1;
		function switcher()
		{
			if (!key)
			{
				if (new Date().getHours()>=0)
				{
					scrn.value="Good Morning Boss!";
				}
				if (new Date().getHours()>=12)
				{
					scrn.value="Good Afternoon Boss!";
				}
				if (new Date().getHours()>=17)
				{
					scrn.value="Good Evening Boss!";
				}
				key=true;
				switchKey.innerHTML="OFF";
				setTimeout(function()
				{
				 	scrn.value="";
				 	scrn.focus();
					myScreen=true;
				 },2000);
				
			}
			else if (key)
			{
				if (new Date().getHours()>=0)
				{
					scrn.value="Have a wonderful day ahead Boss!";
				}
				if (new Date().getHours()>=12)
				{
					scrn.value="Enjoy the rest of the day Boss!";
				}
				if (new Date().getHours()>=18)
				{
					scrn.value="Have a splendid night rest Boss!";
				}
				
				myScreen=false;
					switchKey.innerHTML="ON";
					key=false;
				setTimeout(function()
				{
					scrn.value=fvalue=svalue=operand.innerHTML="";
				},3050);
			}
		}
		
		function init()
		{
			scrn.value=fvalue=svalue=operand.innerHTML="";
			scrn.focus()
		}
		function del()
		{
			scrn.value=scrn.value.slice(0,-1);
			
		}
		function dig(x)
		{
			if (myScreen==true) 
			{
				scrn.value+=x;
			}
		}
		function pie()
		{
			if (myScreen==true) 
			{
				fvalue=scrn.value;
				scrn.value="";
				scrn.value+=fvalue*Math.PI;
			}
		}
		function cos()
		{
			if (myScreen==true) 
				{
					fvalue=scrn.value;
					scrn.value="";
					scrn.value="cos " + fvalue;
					cs=true;tnh=csh=snh=xp=sn=tn=add=mul=subt=div=false;
				}	
		}
		function sin()
		{
			if (myScreen==true) 
				{
					fvalue=scrn.value;
					scrn.value="";
					scrn.value="sin " + fvalue;
					sn=true;tnh=csh=snh=xp=tn=cs=add=mul=subt=div=false;
				}	
		}
		function tan()
		{
			if (myScreen==true) 
				{
					fvalue=scrn.value;
					scrn.value="";
					scrn.value="tan " + fvalue;
					tn=true;tnh=csh=snh=xp=sn=cs=add=mul=subt=div=false;
				}	
		}
		function tanh()
		{
			if (myScreen==true) 
				{
					fvalue=scrn.value;
					scrn.value="";
					scrn.value="tanh " + fvalue;
					tnh=true;xp=snh=csh=tn=sn=cs=add=mul=subt=div=false;
				}	
		}
		function cosh()
		{
			if (myScreen==true) 
				{
					fvalue=scrn.value;
					scrn.value="";
					scrn.value="cosh " + fvalue;
					csh=true;xp=snh=tnh=tn=sn=cs=add=mul=subt=div=false;
				}	
		}
		function sinh()
		{
			if (myScreen==true) 
				{
					fvalue=scrn.value;
					scrn.value="";
					scrn.value="sinh " + fvalue;
					snh=true;xp=tnh=csh=tn=sn=cs=add=mul=subt=div=false;
				}	
		}
		function plus()
		{
			if (myScreen==true) 
			{
				fvalue=scrn.value;
				scrn.value="";
				operand.innerHTML="+";
				add=true;xp=tnh=csh=tn=sn=cs=snh=mul=subt=div=false;
			}
		}
		function minus()
		{
			if (myScreen==true) 
			{
				fvalue=scrn.value;
				scrn.value="";
				operand.innerHTML="-";
				subt=true;xp=tnh=csh=tn=sn=cs=add=mul=snh=div=false
			}
		}
		function division()
		{
			if (myScreen==true) 
			{
				fvalue=scrn.value;
				scrn.value="";
				operand.innerHTML="/";
				div=true; xp=tnh=csh=tn=sn=cs=add=mul=subt=div=false;
			}
		}
		function multiply()
		{	if (myScreen==true) 
			{
				fvalue=scrn.value;
				scrn.value="";
				operand.innerHTML="*";
				mul=true; xp=tnh=csh=tn=sn=cs=add=snh=subt=div=false;
			}
		}
		store=[0];
		function ms()//storage
		{	if (myScreen==true) 
			{
				store.push(scrn.value);
				scrn.value="Saved!"
				setTimeout(function()
				{
					scrn.value="";
					scrn.focus()
				},1500)
			}
		}
		function mr()//retrieve
		{	if (myScreen==true) 
			{
				fvalue=scrn.value;
				scrn.value=store[fvalue];
				scrn.focus()
			}
		}
		function mc()
		{	if (myScreen==true) 
			{
				store="";
				scrn.value="Storage Cleared successfully Boss!";
				setTimeout(function()
				{
					fvalue=scrn.value="";
					scrn.focus();
				},1500)
			}
		}
		function eular()
		{	if (myScreen==true) 
			{
				scrn.value=Math.E
			}
		}
		function exp()
		{	if (myScreen==true) 
			{
				fvalue=scrn.value;
				operand.innerHTML='exp';
				scrn.value="";
				xp=true; mul=tnh=csh=tn=sn=cs=add=snh=subt=div=false;

			}
		}
		function sqr2()
		{	if (myScreen==true) 
			{
				fvalue=scrn.value;
				operand.innerHTML='sqr';
				scrn.value=fvalue*fvalue
			}
		}
		function percent()
		{	if (myScreen==true) 
			{	
				fvalue=scrn.value;
				operand.innerHTML='%';
				scrn.value=fvalue*100
			}
		}
		function raiseTox()
		{	if (myScreen==true) 
			{
				operand.innerHTML='10^x';
				scrn.value="";
				raiseTox=true; xp=mul=tnh=csh=tn=sn=cs=add=snh=subt=div=false;
			}
		}
		function onedivx()
		{	if (myScreen==true) 
			{
				fvalue=scrn.value;
				operand.innerHTML='1/x';
				scrn.value="";
				scrn.value=1/fvalue
			}
		}
		

		function eql()
		{
			if (myScreen==true) 
			{
				svalue=scrn.value;
				scrn.value="";
				operand.innerHTML="=";
				if (add)
				{
					scrn.value=parseFloat(fvalue)+parseFloat(svalue);
				}
				else if (subt)
				{
					scrn.value=parseFloat(fvalue)-parseFloat(svalue);
				}
				else if (div)
				{
					scrn.value=parseFloat(fvalue)/parseFloat(svalue);
				}
				else if (mul)
				{
					scrn.value=parseFloat(fvalue)*parseFloat(svalue);
				}
				else if (cs)
				{
					scrn.value=Math.cos(fvalue/57.2958).toFixed(9);
				}
				else if (sn)
				{
					scrn.value=Math.sin(fvalue/57.2958).toFixed(9);
				}
				else if (tn)
				{
					scrn.value=Math.tan(fvalue/57.2958).toFixed(9);
				}
				else if (csh)
				{
					scrn.value=Math.cosh(fvalue);
				}
				else if (tnh)
				{
					scrn.value=Math.tanh(fvalue);
				}
				else if (snh)
				{
					scrn.value=Math.sinh(fvalue);
				}
				else if (xp)
				{
					for (i=1; i<=svalue; i++)
					{
						zeros+='0';
					}
					scrn.value=fvalue*zeros
				}
				else if (raiseTox)
				{
					for (i=1; i<=svalue; i++)
					{
						zero+='0';
					}
					scrn.value=zero
				}
				
			}
		}
	