function emaildrop()
{
    // document.getElementById("email-drop").style.display = "flex"; 

    var mydrop = document.getElementById("email-drop");
    var myDropDisp = mydrop.style.display;

    var btn = document.getElementById("notbtn");
    
    if(myDropDisp == 'none')
    {
        document.getElementById("email-drop").style.display = "flex";
        btn.style.backgroundColor = 'white';
        btn.style.color = '#0B193A';
    }
    else
    {
        document.getElementById("email-drop").style.display = "none";
        btn.style.backgroundColor = '#0B193A';
        btn.style.color = 'white';
    }
}