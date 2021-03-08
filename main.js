nameofthestudentarray=[]
function sumbit(){
var displaystudentarray=[]
for (var j=1;j <=4;j++) {
   var name_of_student=document.getElementById("student"+j).value
console.log(name_of_student) 
nameofthestudentarray.push(name_of_student)   
}
console.log(nameofthestudentarray) 
var lenghtofarray=nameofthestudentarray.length
console.log(lenghtofarray)
for (var k=0;k <=lenghtofarray;k++) {
 displaystudentarray.push("<h4>name-"+nameofthestudentarray[k]+"</h4>")
 console.log(displaystudentarray)
 }
 console.log(displaystudentarray)
 document.getElementById("display_name_with_commas").innerHTML=displaystudentarray
 var remove_commas=displaystudentarray.join("")
 console.log(remove_commas)
document.getElementById("display_name_without_commas").innerHTML=remove_commas
document.getElementById("sumbit1").style.display="none"
document.getElementById("sort1").style.display="inline-block"
}
function sorting(){
nameofthestudentarray.sort()
console.log(nameofthestudentarray)
var display_student_sort=[]
var lenghtofarray=nameofthestudentarray.length
console.log(lenghtofarray)
for (var k=0;k <=lenghtofarray;k++) {
    display_student_sort.push("<h4>name-"+nameofthestudentarray[k]+"</h4>")
    console.log(display_student_sort)
    }
    var remove_commas=displaystudentarray.join("")
 console.log(remove_commas)
document.getdocElementById("display_name_without_commas").innerHTML=remove_commas
document.getElementById("sort1").style.display="none"
document.getElementById("sumbit1").style.display="inline-block"

}
