function looper(){
  event.preventDefault();
  //var regno=document.getElementById("regno").value;

    //console.log(UserTable[j]);
master_data.length=0;
super_data.length=0;
  var ids =['13NTR0mkHaD4ZgZKuP9nlI_n4b3ESNEG3wwnNLpOCDVQ','1brDy1GElnhU_v3NLqEIE9Tl3YKPtrdeXCaBIMELG-ZY','1WqPX2eJoewB4w2Q_17tVJ8GjxYGdNVSflk55wIbiuhI','1RpvSwZpXbwa1NX3q9pLvMYUvpYy-QUARr5_0uNc7FQA','1d8oCLTDPYEIDOqCamQdwS3pOXaqSNXdS3Z1ZfHjYJmM','1GzhTDKDRl3jAixRsH-h8T26Q-GdfR0TTKNZYoYgRrv8','17yEMbhfXFi3zJHSN8CxMMfe7MkCnrdwG-jMsWScUSPM','1ij0a0yQFBLyCcKJmriyEPxSRQ2mXLI8foFJ21WUUlIc'];
  ids.map(calls)

  UserTable=document.getElementsByClassName("11-table");
  details=document.getElementsByClassName("details")
  //UserTable=document.getElementsByClassName("11-table");
for(k=0;k<8;k++){
  UserTable[k].innerHTML='';
  details[k].innerHTML=''
  //console.log(UserTable[j]);
  }
    //master_data.map(display); 
    master_data.map(display); 
    super_data.map(details_display);
    cgpa();
    console.log(super_data);
}
var master_data=[]
var super_data=[]
function calls(id){
  var regno=document.getElementById("regno").value;
//var ids =['13NTR0mkHaD4ZgZKuP9nlI_n4b3ESNEG3wwnNLpOCDVQ','1brDy1GElnhU_v3NLqEIE9Tl3YKPtrdeXCaBIMELG-ZY','1WqPX2eJoewB4w2Q_17tVJ8GjxYGdNVSflk55wIbiuhI','1RpvSwZpXbwa1NX3q9pLvMYUvpYy-QUARr5_0uNc7FQA','1d8oCLTDPYEIDOqCamQdwS3pOXaqSNXdS3Z1ZfHjYJmM','1GzhTDKDRl3jAixRsH-h8T26Q-GdfR0TTKNZYoYgRrv8','17yEMbhfXFi3zJHSN8CxMMfe7MkCnrdwG-jMsWScUSPM','1ij0a0yQFBLyCcKJmriyEPxSRQ2mXLI8foFJ21WUUlIc'];
const sheetID = id;
const base = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?`;
const sheetName = 'users';
const query = encodeURIComponent(`Select A,B,C,E,F WHERE A = "${regno.toUpperCase()}"`);
const url = `${base}&sheet=${sheetName}&tq=${query}`;

var data=[]
//console.log(id)
//console.log(url)

var xttp = new XMLHttpRequest()
xttp.onreadystatechange =() =>{
    if (xttp.readyState == 4)
    {
        var headers=[];
       let res=JSON.parse(xttp.responseText.slice(47,-2));
        (res.table.cols).map((val,i) => {
           headers.push(res.table.cols[i].label);
        });

        (res.table.rows).map((val,i) => {
            temp=val.c
          //console.log(temp[1].v);
          temp_obj={}
          headers.map((val,i)=>{
            {temp_obj[val]=temp[i].v}
          })
          data.push(temp_obj);
        }); 
        //console.log(headers)
    }
 
}
xttp.open("GET", url,false)
xttp.send()

filter(data);
//console.log(data);
//console.log(master_data);
}

function display(data,j){
keys=Object.keys(data[0]);
UserTable=document.getElementsByClassName("11-table");

row=document.createElement("tr");

keys.map((val)=>{
  var header=document.createElement("th");
  header.textContent=val;
  row.appendChild(header)
})
UserTable[j].appendChild(row)
for (var i=0;i<data.length;i++){
  row=document.createElement("tr");

var htno_cell=document.createElement("td");
htno_cell.textContent = data[i].HTNO;
row.appendChild(htno_cell);

var subcode_cell=document.createElement("td");
subcode_cell.textContent = data[i].SUBCODE;
row.appendChild(subcode_cell);

var subname_cell=document.createElement("td");
subname_cell.textContent = data[i].SUBNAME;
row.appendChild(subname_cell);

/* var internals_cell=document.createElement("td");
internals_cell.textContent = data[i].INTERNALS;
row.appendChild(internals_cell); */

var grade_cell=document.createElement("td");
grade_cell.textContent = data[i].GRADE;
row.appendChild(grade_cell);

var credits_cell=document.createElement("td");
credits_cell.textContent = data[i].CREDITS;
row.appendChild(credits_cell);

UserTable[j].appendChild(row);
}
}

function filter(data){
  temp_sub=[]
  temp=[]
data.map((val)=>{

//  for(var i=0;i<data.length;i++){
    if (temp_sub.includes(val.SUBCODE)==true){
      if(val.CREDITS !=0 | val.GRADE=="COMPLE"){
/*         console.log(val.SUBCODE);
        console.log(temp_sub.findLastIndex(()=>val.SUBCODE));*/
        temp[temp_sub.indexOf(val.SUBCODE)]=val 
        //console.log(temp_sub.indexOf(val.SUBCODE));
        //temp.push(val);
      }
    }
     else if (temp_sub.includes(val.SUBCODE)==false){
      temp_sub.push(val.SUBCODE);
      temp.push(val);
    } 

//  }
});
/* console.log(temp_sub);
console.log(temp); */
if(data.length>0){
  master_data.push(temp); 
  calculator(temp);
}
}

function calculator(z){
  function lenrec(str){
    var b;
    if (str.length===7){
      b=str+"0";
    }
    else{
      b=str;
    }
    return b
    }
  function sum(arr){
    var ans=0;
    arr.map((val)=>{
      ans+=val;
    })
    return ans;
  }

var gr =[];
var cr=[];
count = 0;
for(j=0;j<z.length;j++){
cr.push(z[j].CREDITS)
  if(z[j].GRADE === "A+"){
 gr.push(10);
} 
if(z[j].GRADE === "A"){
 gr.push(9);
} 
else if(z[j].GRADE === "B"){
 gr.push(8);
} 
else if(z[j].GRADE === "C"){
 gr.push(7);
} 
else if(z[j].GRADE === "D"){
 gr.push(6);
} 
else if(z[j].GRADE === "E"){
 gr.push(5);
} 
else if(z[j].GRADE === "F"){
 gr.push(0);
 count = count+1
} 
else if(z[j].GRADE === "ABSENT"){
 gr.push(0);
 count = count+1
} 
else if(z[j].GRADE === "MP"){
 gr.push(0);
 count = count+1
} 
else if(z[j].GRADE === "AB"){
            gr.push(0);
            count = count+1
         }
else if(z[j].GRADE === "NOT CO"){
          gr.push(0);
          count = count+1
       }
else if(z[j].GRADE === "COMPLE"){
 gr.push(10);
} 
}
var prod=[]
for(var i=0;i<gr.length;i++){
  prod.push(gr[i]*cr[i]);
}
var subna =[]
var CRED =[]
var credits=()=>{

  subna.length=0
  CRED.length=0
  crs={
    11:19.5,
    12:19.5,
    21:21.5,
    22:21.5,
    31:21.5,
    32:21.5,
    41:23,
    42:8
  }
  for(var i=0;i<z.length;i++){
   subna[i]= z[i].SUBNAME;
   CRED[i]= z[i].CREDITS;
  }
  
  if(subna.includes("COMMUNITY SERVICES PROJECT") || CRED.includes(4)){
   if(CRED.includes(4)){return 25.5}
   else{ return 23.5}
  }  
  let k=Number(lenrec(z[0].SUBCODE).slice(3,-3))
  //console.log(crs[k]);
  return crs[k]
  }


k=credits()
sgpa=sum(prod)/credits();
var Super_data={
  sem: lenrec(z[0].SUBCODE).slice(3,-3),
  sgpa:sgpa.toFixed(2),
  percentage : ((sgpa-0.75)*10).toFixed(2),
  ec:sum(CRED),
  tc:k,
  Backlogs:count
}
super_data.push(Super_data)
}

function details_display(data,j){
  var details = document.getElementsByClassName("details");
  //console.log(data.sem);
  details[j].innerHTML=`sem:${data.sem} &nbsp; SGPA:${data.sgpa} &nbsp; Percentage:${data.percentage} &nbsp; Total Credits:${data.tc} &nbsp;  Earned Crrdits :${data.ec} &nbsp; Backlogs:${data.Backlogs}`;
}


function cgpa(){
  function seg(l,k){
    temp=[]
    for(var i=0;i<l.length;i++){
    temp.push(l[i][k]);
    }
    return temp
  }
  sgpa=seg(super_data,'sgpa');
  tcr=seg(super_data,'tc');
  ecr=seg(super_data,'ec');
  let ProdSgpaEcr=0
  let SumTcr=0;
  for(var i=0;i<tcr.length;i++){
    ProdSgpaEcr+=sgpa[i]*tcr[i];
    SumTcr+=tcr[i];
  }
  let Cgpa=ProdSgpaEcr/SumTcr

  document.getElementsByClassName("cgpa")[0].innerHTML=`CGPA:${Cgpa.toFixed(2)}<br>PERCENAGE:${((Cgpa-0.75)*10).toFixed(2)}%`
}
/* const scriptURL = 'https://script.google.com/macros/s/AKfycbyYIvcJBwIvfOSN530tjgyxhGZMC4S789PmSi_Tc_tmWnGndBYHqAqw3DwW6THBF1wVPQ/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
    calce();
}) */
