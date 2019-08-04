var sound = new Audio();
		sound.src = "media/tone.mp3";


		setInterval(dateshow);
		function dateshow()
		{
			DisplayDate.innerHTML = new Date().getHours() + ":" + new Date().getMinutes() + ":"+new Date().getSeconds();

			if (new Date().getSeconds()<10 && new Date().getMinutes()<10 && new Date().getHours()<10)
				{
					DisplayDate.innerHTML = "0"+new Date().getHours() + ":" + "0" +new Date().getMinutes() + ":" + "0" + new Date().getSeconds();
				}

			else if(new Date().getSeconds()<10 && new Date().getMinutes()<10)
			{
				DisplayDate.innerHTML = new Date().getHours() + ":" + "0" +new Date().getMinutes() + ":" + "0" + new Date().getSeconds();
			}
			else if(new Date().getSeconds()<10 && new Date().getHours()<10)
			{
				DisplayDate.innerHTML = "0"+new Date().getHours() + ":" + new Date().getMinutes() + ":" + "0" + new Date().getSeconds();
			}
			else if(new Date().getMinutes()<10 && new Date().getHours()<10)
			{
				DisplayDate.innerHTML = "0" + new Date().getHours() + ":" + "0" + new Date().getMinutes() + ":" + new Date().getSeconds();
			}
			else if(new Date().getMinutes()<10)
			{
				DisplayDate.innerHTML = new Date().getHours() + ":" + "0" + new Date().getMinutes() + ":" + new Date().getSeconds();
			}
			else if(new Date().getHours()<10)
			{
				DisplayDate.innerHTML = "0" + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
			}
			else if(new Date().getSeconds()<10)
			{
				DisplayDate.innerHTML = new Date().getHours() + ":" + new Date().getMinutes() + ":" + "0" + new Date().getSeconds();
			}
			
				
			alarm()
		}

		function AlarmSet()
		{
			document.getElementById('calc').style.visibility='hidden';
			document.getElementById('snooze').style.visibility='visible';
			document.getElementById('dropdown').style.visibility='visible';
			document.getElementById('SetAlarm').style.visibility='hidden';

		}

		function alarm()
		{
			 if (hour.value == new Date().getHours()  && minute.value == new Date().getMinutes() && second.value == new Date().getSeconds()) 
				{ 
					sound.play();
					sound.loop=true
				}
		}

		function StopAlarm()
		{
			document.getElementById('calc').style.visibility='visible';
			a=Math.random();
			b=Math.random();
			document.getElementById('demo1').innerHTML=a;
			document.getElementById('demo2').innerHTML=b;
			document.getElementById('dropdown').style.visibility='hidden';
			document.getElementById('SetAlarm').style.visibility='visible';
			document.getElementById('snooze').style.visibility='hidden';
		}
		function solve()
		{
			if (no.value==Math.min(a,b))
				{
					sound.pause();
					a=b=no.value="";
					document.getElementById('calc').style.visibility='hidden';

				}
				else
				{
					sound.play()
				}
		}

		function Snooze()
		{
			sound.pause();
			second.value=parseFloat(second.value)+5;
			alarm();

		}
