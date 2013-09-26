function check(tableNameId,boxId)
  {
  	un_set(tableNameId);
  	var value=0;
  	tableData = document.getElementById(tableNameId).getElementsByTagName('td');
  	checkBox = document.getElementById(boxId).getElementsByTagName('input');
	if (checkBox[0].checked == true)
		{
			value+=4;
			tableData[0].innerHTML='r';
		}	
	if (checkBox[1].checked == true)
		{
			value+=2;
			tableData[1].innerHTML='w';
		}
	if (checkBox[2].checked == true)
		{
			value+=1;
			tableData[2].innerHTML='x';
		}
	document.getElementById(tableNameId+'Chmod').value=value;	
 }


function setReadBit(tableNameId){
	document.getElementById(tableNameId).getElementsByTagName('td')[0].innerHTML='r';
}

function setWriteBit(tableNameId){
	document.getElementById(tableNameId).getElementsByTagName('td')[1].innerHTML='w';
}

function setExecBit(tableNameId){
	document.getElementById(tableNameId).getElementsByTagName('td')[2].innerHTML='x';
}

function un_set(tableNameId){
	var tableData = document.getElementById(tableNameId).getElementsByTagName('td');
	for (var i = tableData.length - 1; i >= 0; i--) {
		tableData[i].innerHTML='-';
	};
}

function setChmodBits (tableNameId) {
 	var chmodValue = document.getElementById(tableNameId+'Chmod').value;
 	un_set(tableNameId);
 	if (chmodValue==1)
 		{
 			setExecBit(tableNameId);
 		}
 	if (chmodValue==2)
 		{
 			setWriteBit(tableNameId);
 		}
 	if (chmodValue==3)
 		{ 
 			setWriteBit(tableNameId); setExecBit(tableNameId);
 		}
 	if (chmodValue==4)
 		{
 			setReadBit(tableNameId);
 		}
 	if (chmodValue==5)
 		{
 			setReadBit(tableNameId); setExecBit(tableNameId);
 		}
 	if (chmodValue==6)
 		{
 			setReadBit(tableNameId);setWriteBit(tableNameId);
 		}
 	if (chmodValue==7)
 		{
 			setReadBit(tableNameId);setWriteBit(tableNameId);setExecBit(tableNameId);
 		}
 }