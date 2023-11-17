
function openlink() {
    if(document.getElementById("wordpass").value=="qwe"){
    window.open("https://www.google.com", "newwindow", "status=1,fullscreen=0");
        window.close()
    }else{
        document.getElementById("output").innerHTML="incorrect password"
    }
}