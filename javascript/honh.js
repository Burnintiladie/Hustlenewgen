function honhdrop()
{
    // document.getElementById("email-drop").style.display = "flex"; 

    var mydrop = document.getElementById("honh-drop");
    var myDropDisp = mydrop.style.display;

    var btn = document.getElementById("honh-btn");
    
    if(myDropDisp == 'none')
    {
        document.getElementById("honh-drop").style.display = "flex";
        btn.style.backgroundColor = 'white';
        btn.style.color = '#0B193A';
    }
    else
    {
        document.getElementById("honh-drop").style.display = "none";
        btn.style.backgroundColor = '#0B193A';
        btn.style.color = 'white';
    }
}