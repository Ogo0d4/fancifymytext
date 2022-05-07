function changeSize() {
    document.getElementById("text_id").style.fontSize = "2em";
    alert("It's time to maximize!!")
}
function changeText(){
    if(document.getElementById('Fancy_radio_button').checked == true){
        document.getElementById("text_id").style.fontWeight="bold";
        document.getElementById("text_id").style.color="blue";
        document.getElementById("text_id").style.textDecoration="underline";
        alert("fancy time!!");

    }else{
        document.getElementById("text_id").style.fontWeight="normal";
        document.getElementById("text_id").style.color="black";
        document.getElementById("text_id").style.textDecoration="none";
        alert("Booo boring");
    }
}
function moo(){
    var text=document.getElementById("text_id").value;
    var split_text=text.value.toUpperCase().split(".");
    suffixed_text=split_text.join("_Moo");
}