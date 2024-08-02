function looper(){
  event.preventDefault();
  //var regno=document.getElementById("regno").value;
master_data.length=0;
for(k=0;k<8;k++){
  UserTable[k].innerHTML='LOADING......';
  //console.log(UserTable[j]);
  }
  var ids =['13NTR0mkHaD4ZgZKuP9nlI_n4b3ESNEG3wwnNLpOCDVQ','1brDy1GElnhU_v3NLqEIE9Tl3YKPtrdeXCaBIMELG-ZY','1WqPX2eJoewB4w2Q_17tVJ8GjxYGdNVSflk55wIbiuhI','1RpvSwZpXbwa1NX3q9pLvMYUvpYy-QUARr5_0uNc7FQA','1d8oCLTDPYEIDOqCamQdwS3pOXaqSNXdS3Z1ZfHjYJmM','1GzhTDKDRl3jAixRsH-h8T26Q-GdfR0TTKNZYoYgRrv8','17yEMbhfXFi3zJHSN8CxMMfe7MkCnrdwG-jMsWScUSPM','1ij0a0yQFBLyCcKJmriyEPxSRQ2mXLI8foFJ21WUUlIc'];
  ids.map(calls)
  UserTable=document.getElementsByClassName("11-table");
for(k=0;k<8;k++){
  UserTable[k].innerHTML='';
  //console.log(UserTable[j]);
  }
    master_data.map(display);   
 
}
var master_data=[]
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
      if(val.CREDITS !=0){
/*         console.log(val.SUBCODE);
        console.log(temp_sub.findLastIndex(()=>val.SUBCODE));*/
        temp[temp_sub.indexOf(val.SUBCODE)]=val 
        console.log(temp_sub.indexOf(val.SUBCODE));
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
}
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
