function check()
  {
  	un_set();
  	var value=0;
  	tableData = document.getElementById('userTable').getElementsByTagName('td');
	if (document.getElementById("uread").checked == true)
		{
			value+=4;
			//document.getElementById('ur').innerHTML='r'
			tableData[0].innerHTML='r';
		}	
	if (document.getElementById("uwrite").checked == true)
		{
			value+=2;
			//document.getElementById('uw').innerHTML='w';
			tableData[1].innerHTML='w';
		}
	if (document.getElementById("uexec").checked == true)
		{
			value+=1;
			//document.getElementById('ue').innerHTML='x'
			tableData[2].innerHTML='x';
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
	tableData = document.getElementById('userTable').getElementsByTagName('td');
	//document.getElementById('ue').innerHTML='-';
	//document.getElementById('uw').innerHTML='-';
	//document.getElementById('ur').innerHTML='-';
}

function check2 () {
 	user_val = document.getElementById('user').value;
 	un_set();
 	if (user_val==1)
 		{
 			set_ue();
 		}
 	if (user_val==2)
 		{
 			set_uw();
 		}
 	if (user_val==3)
 		{ 
 			set_uw(); set_ue();
 		}
 	if (user_val==4)
 		{
 			set_ur();
 		}
 	if (user_val==5)
 		{
 			set_ur(); set_ue();
 		}
 	if (user_val==6)
 		{
 			set_ur();set_uw();
 		}
 	if (user_val==7)
 		{
 			set_ur();set_uw();set_ue();
 		}
 }

 function check3() {
 	alert(document.getElementById('userw').value);
 }