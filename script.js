var row = null;
function Submit(){
    var dataEntered = retrieveData();
    var readData = readingDataFromLocalStorage(dataEntered);
   if(dataEntered==false){
    msg.innerHTML="please Enter Data!"
   }
   else{
    if(row==null){
        insert(readData);
        msg.innerHTML="Data inserted";
    }
   
    else{
        update();
        msg.innerHTML="Data Updated";
    }
}
document.getElementById("form").reset();
}
   
    
function retrieveData(){
    var name1 = document.getElementById("name").value;
    var job = document.getElementById("job").value; 
    var exp = document.getElementById("exp").value;
  var arr =[name1,job,exp];
  if(arr.includes("")){
    return false;
  }
  else{
    return arr;
  }
  

}
function readingDataFromLocalStorage(dataEntered){
    var n = localStorage.setItem("Name",dataEntered[0]);
    var j = localStorage.setItem("job",dataEntered[1]);
    var e = localStorage.setItem("Experience",dataEntered[2]);
    
    //getting value from local 
    
    var n1 = localStorage.getItem("Name",n);
    var j1 = localStorage.getItem("job",n);
    var e1 = localStorage.getItem("Experience",n);
    
    var arr = [n1,j1,e1];
    return arr;
    

}
function insert(readData){
    var row = table.insertRow();
    var cel1 = row.insertCell(0);
    var cel2 = row.insertCell(1);
    var cel3 = row.insertCell(2);
   row.insertCell(3).innerHTML = `<button onclick = edit(this)>Edit</button> <button onclick = remove(this)>Delete</button> `;

    cel1.innerHTML = readData[0];
    cel2.innerHTML = readData[1];
    cel3.innerHTML = readData[2];
    
}
function edit(td){
      row = td.parentElement.parentElement;
    document.getElementById("name").value = row.cells[0].innerHTML;
    document.getElementById("job").value = row.cells[1].innerHTML;
    document.getElementById("exp").value = row.cells[2].innerHTML;
}
function update(){
    row.cells[0].innerHTML =  document.getElementById("name").value;
    row.cells[1].innerHTML =  document.getElementById("job").value;
    row.cells[2].innerHTML = document.getElementById("exp").value;
row=null;
}
function remove(td){
   var an = confirm("Are you want to delete this record?");
   if(an == true){
    row = td.parentElement.parentElement;
    document.getElementById("table").deleteRow(row.rowIndex);
   }

}