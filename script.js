$('input#inp1').on('input',function()
{
$(this).val($(this).val().replace(/\,/g,'.'));
$(this).val($(this).val().replace(/(?=(\d+\.\d{4})).+|(\.(?=\.))|([^\.\d])|(^\D)/gi,'$1'));
$(this).val($(this).val().replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1 '));
})
$('input#inp2').on('input',function()
{
$(this).val($(this).val().replace(/\,/g,'.'));
$(this).val($(this).val().replace(/(?=(\d+\.\d{4})).+|(\.(?=\.))|([^\.\d])|(^\D)/gi,'$1'));
$(this).val($(this).val().replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1 '));
})
let lbox=0;
let rbox=1;

let input=document.querySelectorAll('input');
input.forEach((item) => {item.value=0;});
input[0].addEventListener('keyup',(event) => {
if(event.target.value.length==0)
{
event.target.value=0;
}
let lboxval="";
let rboxval="";
switch(lbox)
{
case 0:{lboxval="UAH";break;}
case 1:{lboxval="USD";break;}
case 2:{lboxval="AZN";break;}
case 3:{lboxval="GBP";break;}
}
switch(rbox)
{
case 0:{rboxval="UAH";break;}
case 1:{rboxval="USD";break;}
case 2:{rboxval="AZN";break;}
case 3:{rboxval="GBP";break;}
}
fetch(`https://api.exchangerate.host/latest?base=${lboxval}&symbols=${rboxval}`)
.then((response) =>  response.json())
.then((data) =>{ 
let val="";
switch(rbox)
{
case 0:{val=parseFloat(data.rates.UAH*event.target.value.replaceAll(' ',''));;break;}
case 1:{val=parseFloat(data.rates.USD*event.target.value.replaceAll(' ',''));;break;}
case 2:{val=parseFloat(data.rates.AZN*event.target.value.replaceAll(' ',''));;break;}
case 3:{val=parseFloat(data.rates.GBP*event.target.value.replaceAll(' ',''));;break;}
}
let input0=document.querySelectorAll('input')[0].value;
let input1=document.querySelectorAll('input')[1].value; 
if(String(val).split('.').length>1)
{
if(String(val).split('.')[1].length>4)
val=String(val).split('.')[0]+'.'+String(val).split('.')[1].substring(0,4);
val=parseFloat(String(val));
}
document.querySelectorAll('input')[1].value=value;
$(document.querySelectorAll('input')[1]).val($(document.querySelectorAll('input')[1]).val().replace(/\,/g,'.'));
$(document.querySelectorAll('input')[1]).val($(document.querySelectorAll('input')[1]).val().replace(/(?=(\d+\.\d{4})).+|(\.(?=\.))|([^\.\d])|(^\D)/gi,'$1'));
$(document.querySelectorAll('input')[1]).val($(document.querySelectorAll('input')[1]).val().replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1'));
if(input1.split('.').length>1)
input1=input1.split('.')[0]+"."+input1.split('.')[1].replaceAll(" ","");
if(input0.split('.').length>1)
input0=input0.split('.')[0]+"."+input0.split('.')[1].replaceAll(" ","");
})});


input[1].addEventListener('keyup',(event) => {
if(event.target.value.length==0)
{
event.target.value=0;
}
let lboxval="";
let rboxval="";
switch(lbox)
{
case 0:{lboxval="UAH";break;}
case 1:{lboxval="USD";break;}
case 2:{lboxval="AZN";break;}
case 3:{lboxval="GBP";break;}
}
switch(rbox)
{
case 0:{rboxval="UAH";break;}
case 1:{rboxval="USD";break;}
case 2:{rboxval="AZN";break;}
case 3:{rboxval="GBP";break;}
}
fetch(`https://api.exchangerate.host/latest?base=${rboxval}&symbols=${lboxval}`)
.then((response) =>  response.json())
.then((data) =>{ 
let val="";
switch(lbox)
{
case 0:{val=parseFloat(data.rates.UAH*event.target.value.replaceAll(' ',''));;break;}
case 1:{val=parseFloat(data.rates.USD*event.target.value.replaceAll(' ',''));;break;}
case 2:{val=parseFloat(data.rates.AZN*event.target.value.replaceAll(' ',''));;break;}
case 3:{val=parseFloat(data.rates.GBP*event.target.value.replaceAll(' ',''));;break;}
}
let input0=document.querySelectorAll('input')[0].value;
let input1=document.querySelectorAll('input')[1].value; 
if(String(val).split('.').length>1)
{ 
if(String(val).split('.')[1].length>4)
val=String(val).split('.')[0]+'.'+String(val).split('.')[1].substring(0,4);
val=parseFloat(String(val));
}
$(document.querySelectorAll('input')[0]).val($(document.querySelectorAll('input')[0]).val().replace(/\,/g,'.'));
$(document.querySelectorAll('input')[0]).val($(document.querySelectorAll('input')[0]).val().replace(/(?=(\d+\.\d{4})).+|(\.(?=\.))|([^\.\d])|(^\D)/gi,'$1'));
$(document.querySelectorAll('input')[0]).val($(document.querySelectorAll('input')[0]).val().replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1 '));
if(input1.split('.').length>1)
input1=input1.split('.')[0]+"."+input1.split('.')[1].replaceAll(" ","");
if(input0.split('.').length>1)
input0=input0.split('.')[0]+"."+input0.split('.')[1].replaceAll(" ","");
})});


input.forEach((item) =>{item.addEventListener('keydown',(event) => {
if(event.target.value ==="0")
{           
event.target.value="";
if(event.key=="."||event.key==",")
event.target.value="0.";
}
if(event.target.value.split(".").length>1 && (event.key=="."||event.key==","))
event.preventDefault();
});})

document.querySelectorAll('.znac1').forEach((item,index) =>{
item.addEventListener('click',(event) =>{
lbox=index;
document.querySelectorAll('.znac1').forEach((item) =>{
item.style.backgroundColor='White';
item.style.color='#E5E5E5'
})
event.target.style.backgroundColor='#833AE0';
event.target.style.color='#FFFFFF';
let lboxval="";
let rboxval="";
switch(lbox)
{
case 0:{lboxval="UAH";break;}
case 1:{lboxval="USD";break;}
case 2:{lboxval="AZN";break;}
case 3:{lboxval="GBP";break;}
}
switch(rbox)
{
case 0:{rboxval="UAH";break;}
case 1:{rboxval="USD";break;}
case 2:{rboxval="AZN";break;}
case 3:{rboxval="GBP";break;}
}
fetch(`https://api.exchangerate.host/latest?base=${rboxval}&symbols=${lboxval}`)
.then((response) => response.json())
.then((data) =>{ 
let val="";
let valofa="";
switch(lbox)
{
case 0:{val=parseFloat(data.rates.UAH*input[1].value.replaceAll(' ',''));valofa=data.rates.UAH;break;}
case 1:{val=parseFloat(data.rates.USD*input[1].value.replaceAll(' ',''));valofa=data.rates.USD;break;}
case 2:{val=parseFloat(data.rates.AZN*input[1].value.replaceAll(' ',''));valofa=data.rates.AZN;break;}
case 3:{val=parseFloat(data.rates.GBP*input[1].value.replaceAll(' ',''));valofa=data.rates.GBP;break;}
}
let a1=document.querySelectorAll(".a");
let a2="";   
fetch(`https://api.exchangerate.host/latest?base=${rboxval}&symbols=${lboxval}`)
.then((response) =>  response.json())
.then((data) =>{       
switch(lbox)
{
case 0:{a2=parseFloat(data.rates.UAH);break;}
case 1:{a2=parseFloat(data.rates.USD);break;}
case 2:{a2=parseFloat(data.rates.AZN);break;}
case 3:{a2=parseFloat(data.rates.GBP);break;}
}
if(String(a2).split(".").length>1)
{
if(String(a2).split(".")[1].length>4)
a2=String(a2).split(".")[0]+"." + String(a2).split(".")[1].substring(0,4);      
a2=parseFloat(String(a2));
}
a1[1].textContent= "1 " + rboxval + " = " + a2 + " " + lboxval;  
})
if(String(valofa).split(".").length > 1)
{
if(String(valofa).split(".")[1].length > 4)
valofa=String(valofa).split(".")[0]+ "." + String(valofa).split(".")[1].substring(0,4);          
valofa=parseFloat(String(valofa));
}
a1[0].textContent="1 " + lboxval + " = " + valofa + " " + rboxval;
let input0=document.querySelectorAll('input')[0].value;
let input1=document.querySelectorAll('input')[1].value; 
if(String(val).split(".").length>1)
{
if(String(val).split(".")[1].length>4)
val=String(val).split(".")[0]+ "." + String(val).split(".")[1].substring(0,4);   
val=parseFloat(String(val));
}
document.querySelectorAll('input')[0].value=val;
$(document.querySelectorAll('input')[0]).val($(document.querySelectorAll('input')[0]).val().replace(/\,/g,'.'));
$(document.querySelectorAll('input')[0]).val($(document.querySelectorAll('input')[0]).val().replace(/(?=(\d+\.\d{4})).+|(\.(?=\.))|([^\.\d])|(^\D)/gi,'$1'));
$(document.querySelectorAll('input')[0]).val($(document.querySelectorAll('input')[0]).val().replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1 '));
if(input1.split('.').length > 1)
input1=input1.split('.')[0]+ "." + input1.split('.')[1].replaceAll(" ","");
if(input0.split('.').length > 1)
input0=input0.split('.')[0]+ "." + input0.split('.')[1].replaceAll(" ","");
})}); 
})


document.querySelectorAll('.znac2').forEach((item,index) =>{
item.addEventListener('click',(event) =>{
rbox=index;
document.querySelectorAll('.znac2').forEach((item) =>{
item.style.backgroundColor='White';
item.style.color='#E5E5E5'
})
event.target.style.backgroundColor='#833AE0';
event.target.style.color='#FFFFFF';
let lboxval="";
let rboxval="";
switch(lbox)
{
case 0:{lboxval="UAH";break;}
case 1:{lboxval="USD";break;}
case 2:{lboxval="AZN";break;}
case 3:{lboxval="GBP";break;}
}
switch(rbox)
{
case 0:{rboxval="UAH";break;}
case 1:{rboxval="USD";break;}
case 2:{rboxval="AZN";break;}
case 3:{rboxval="GBP";break;}
}               
fetch(`https://api.exchangerate.host/latest?base=${lboxval}&symbols=${rboxval}`)
.then((response) =>  response.json())
.then((data) =>{ 
let val="";
let valofa="";
switch(rbox)
{
case 0:{val=parseFloat(data.rates.UAH*input[0].value.replaceAll(' ',''));valofa=data.rates.UAH;break;}
case 1:{val=parseFloat(data.rates.USD*input[0].value.replaceAll(' ',''));valofa=data.rates.USD;break;}
case 2:{val=parseFloat(data.rates.AZN*input[0].value.replaceAll(' ',''));valofa=data.rates.AZN;break;}
case 3:{val=parseFloat(data.rates.GBP*input[0].value.replaceAll(' ',''));valofa=data.rates.GBP;break;}
}
let a1=document.querySelectorAll(".a");
let a2="";  
fetch(`https://api.exchangerate.host/latest?base=${lboxval}&symbols=${rboxval}`)
.then((response) =>  response.json())
.then((data) =>{                     
switch(rbox)
{
case 0:{a2=parseFloat(data.rates.UAH);break;}
case 1:{a2=parseFloat(data.rates.USD);break;}
case 2:{a2=parseFloat(data.rates.AZN);break;}
case 3:{a2=parseFloat(data.rates.GBP);break;}
}
if(String(a2).split(".").length > 1)
{
if(String(a2).split(".")[1].length>4)
a2=String(a2).split(".")[0]+ "." + String(a2).split('.')[1].substring(0,4);
a2=parseFloat(String(a2));
}
a1[0].textContent="1 " + lboxval + " = " + a2 + " " + rboxval;
})
if(valofa.toString().split(".").length > 1)
{
if(String(valofa).split(".")[1].length > 4)
valofa=String(valofa).split(".")[0]+'.'+String(valofa).split(".")[1].substring(0,4);
valofa=parseFloat(String(valofa));
}
a1[1].textContent="1 " + rboxval + " = " + valofa + " " + lboxval;
let input0=document.querySelectorAll('input')[0].value;
let input1=document.querySelectorAll('input')[1].value; 
if(String(val).split(".").length > 1)
{
if(String(val).split(".")[1].length > 4)
val=String(val).split(".")[0] + "." + String(val).split(".")[1].substring(0,4);  
value=parseFloat(String(val));
}
document.querySelectorAll('input')[1].value=value;
$(document.querySelectorAll('input')[1]).val($(document.querySelectorAll('input')[1]).val().replace(/\,/g,'.'));
$(document.querySelectorAll('input')[1]).val($(document.querySelectorAll('input')[1]).val().replace(/(?=(\d+\.\d{4})).+|(\.(?=\.))|([^\.\d])|(^\D)/gi,'$1'));
$(document.querySelectorAll('input')[1]).val($(document.querySelectorAll('input')[1]).val().replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1 '));
if(input1.split('.').length > 1)
input1=input1.split('.')[0] + "." + input1.split('.')[1].replaceAll(" ","");
if(input0.split('.').length > 1)
input0=input0.split('.')[0] + "." + input0.split('.')[1].replaceAll(" ","");   
})});})
document.querySelectorAll('.znac1')[0].click();
document.querySelectorAll('.znac2')[1].click();

