

function convert_hours(){
    var amnt = Number("8760");
    var text = Number(document.getElementById("user-age").value);
    var leap = Number(text % 4);
    

    document.getElementById("ans").innerHTML = text * amnt + leap + " hours";
}

function mins(){
    var amnt = Number("525600");
    var text = Number(document.getElementById("user-age").value);

    

    document.getElementById("ans").innerHTML = text * amnt + " minutes";
}

function seconds(){
    var amnt = Number("31536000");
    var text = Number(document.getElementById("user-age").value);

    

    document.getElementById("ans").innerHTML = text * amnt + " seconds";
}