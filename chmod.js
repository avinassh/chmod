function check()
  {
  	un_set('userTable');
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
	//document.getElementById('user').value=value;
	document.getElementById('chmodTable').getElementsByTagName('td')[0].getElementsByTagName('input')[0].value=value;
 }


function set_ur(tableName){
	document.getElementById(tableName).getElementsByTagName('td')[0].innerHTML='r';
	//document.getElementById('ur').innerHTML='r';
}

function set_uw(tableName){
	document.getElementById(tableName).getElementsByTagName('td')[1].innerHTML='w';
	//document.getElementById('uw').innerHTML='w';
}

function set_ue(tableName){
	document.getElementById(tableName).getElementsByTagName('td')[2].innerHTML='x';
	//document.getElementById('ue').innerHTML='x';
}

function un_set(tableName){
	var tableData = document.getElementById(tableName).getElementsByTagName('td');
	for (var i = tableData.length - 1; i >= 0; i--) {
		tableData[i].innerHTML='-';
	};
}

function check2 (tableName) {
 	var user_val = document.getElementById('chmodTable').getElementsByTagName('td')[0].getElementsByTagName('input')[0].value;//document.getElementById('user').value;
 	un_set(tableName);
 	//var tableName = 'userTable';
 	if (user_val==1)
 		{
 			set_ue(tableName);
 		}
 	if (user_val==2)
 		{
 			set_uw(tableName);
 		}
 	if (user_val==3)
 		{ 
 			set_uw(tableName); set_ue(tableName);
 		}
 	if (user_val==4)
 		{
 			set_ur(tableName);
 		}
 	if (user_val==5)
 		{
 			set_ur(tableName); set_ue(tableName);
 		}
 	if (user_val==6)
 		{
 			set_ur(tableName);set_uw(tableName);
 		}
 	if (user_val==7)
 		{
 			set_ur(tableName);set_uw(tableName);set_ue(tableName);
 		}
 }

 function check3() {
 	alert(document.getElementById('userw').value);
 }