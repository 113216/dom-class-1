// var label=createlabels("label","for","First Name","First Name");
// var br1=createlinebreak("br");
// var input=createinput("input","type","First Name","id","First Name");
// var br2=createlinebreak("br");

// var label1=createlabels("label","for","Last Name","Last Name");
// var br3=createlinebreak("br");
// var input1=createinput("input","type","Last Name","id","Last Name");
// var br4=createlinebreak("br");

// var label2=createlabels("label","for","Middle Name","Middle Name");
// var br5=createlinebreak("br");
// var input2=createinput("input","type","Middle Name","id","Middle Name");
// var br6=createlinebreak("br");

// var label3=createlabels("label","for","Phone Number","Number");
// var br7=createlinebreak("br");
// var input3=createinput("input","type"," number","id","Phone Number");
// var br8=createlinebreak("br");





// document.body.append(label,br1,input,br2,label1,br3,input1,br4,label2,br5,input2,br6,label3,br7,input3,br8,);
// // label1,br3,input1,br4,label2,br5,input2,br6,label3,br1,input3,br2

// function createlabels(tagname,attrname,attrvalue,content){
// var ele=document.createElement(tagname);
// ele.setAttribute(attrname,attrvalue);
// ele.innerHTML=content;
// return ele;
// }
// //it is returning an HTML element
// //<label for="email">Mail</label>

// function createinput(tagname,attrname,attrvalue,attrname1,attrvalue1){
//     var ele=document.createElement(tagname);
//     ele.setAttribute(attrname,attrvalue);
//     ele.setAttribute(attrname1,attrvalue1);
//     return ele;
// }
// function createlinebreak(tagname){
// var ele=document.createElement(tagname);
// return ele;
// }

function foo(){
    var res = document.getElementById("main").value
    
    var res1 = document.getElementById("main1").value
   
    var res2 = document.getElementById("main2").value
   
    var res3 = document.getElementById("main3").value
    
    var res4 = document.getElementById("main4").value
   
    var res5 = document.getElementById("main5").value
    console.log(res,res1,res2,res3,res4,res5)
    
}