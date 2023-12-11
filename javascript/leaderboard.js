function leaderboard()
{
    var boxHead = document.getElementById("unalt-sec");
    var dropStyle = boxHead.style.display;

    var btn = document.getElementById("head");

    if(dropStyle == 'none')
    {
        document.getElementById("unalt-sec").style.display = "block";
        btn.style.backgroundColor = "white";
        btn.style.color = "#1F325C";
    }
    else
    {
        document.getElementById("unalt-sec").style.display = "none";
        btn.style.backgroundColor = "#1F325C";
        btn.style.color = "white";
    }
}