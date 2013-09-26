function check()
  {
  	var value=0;
	if (document.getElementById("uread").checked == true)
		{
			value+=4;
			document.getElementById('ur').innerHTML='r'
		}	
	if (document.getElementById("uwrite").checked == true)
		{
			value+=2;
			document.getElementById('uw').innerHTML='w'
		}
	if (document.getElementById("uexec").checked == true)
		{
			value+=1;
			document.getElementById('ue').innerHTML='x'
		}
	document.getElementById('user').value=value;
 }

function set_ue(){
	document.getElementById('ue').innerHTML='x';
}

function set_uw(){
	document.getElementById('uw').innerHTML='w';
}

function set_ur(){
	document.getElementById('ur').innerHTML='r';
}

function un_set(){
	document.getElementById('ue').innerHTML='-';
	document.getElementById('uw').innerHTML='-';
	document.getElementById('ur').innerHTML='-';
}

function check2 () {
 	user_val = document.getElementById('user').value;
 	if (user_val==1)
 		{
 			un_set();set_ue();
 		}
 	if (user_val==2)
 		{
 			un_set();set_uw();
 		}
 	if (user_val==3)
 		{ 
 			un_set();set_uw(); set_ue();
 		}
 	if (user_val==4)
 		{
 			un_set();set_ur();
 		}
 	if (user_val==5)
 		{
 			un_set();set_ur(); set_ue();
 		}
 	if (user_val==6)
 		{
 			un_set();set_ur();set_uw();
 		}
 	if (user_val==7)
 		{
 			set_ur();set_uw();set_ue();
 		}
 }

 function check3() {
 	alert(document.getElementById('userw').value);
 }