function getPara1(){
    var input=[];
    for (var i=1; i<=5; i++){
        input.push(document.getElementById("input_box_"+i).value);

    }
        document.getElementById("showPara1").innerHTML=input.join(".");
document.getElementById("input_box_1").value="";
document.getElementById("input_box_2").value="";
document.getElementById("input_box_3").value="";
document.getElementById("input_box_4").value="";
document.getElementById("input_box_5").value="";
    }
function getPara2(){
    var input=[];
    for (var i=6;  i<=10; i++){
        input.push(document.getElementById("input_box_"+i).value);

    }
        document.getElementById("showPara2").innerHTML=input.join(".");
        document.getElementById("input_box_6").value="";
        document.getElementById("input_box_7").value="";
        document.getElementById("input_box_8").value="";
        document.getElementById("input_box_9").value="";
        document.getElementById("input_box_10").value="";   
    }