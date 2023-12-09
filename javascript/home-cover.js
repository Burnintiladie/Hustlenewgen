let slideIndex = 0;
showSlides();

function showSlides() 
{
    let i;
    let slides = document.getElementsByClassName("slide");
    let mini = document.getElementsByClassName("m-one");

    for (i = 0; i < slides.length; i++) 
    {
        slides[i].style.display = "none";  
    }
    slideIndex++;

    if (slideIndex > slides.length) 
       {slideIndex = 1}    

    for (i = 0; i < mini.length; i++) 
    {
        mini[i].className = mini[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";  
    mini[slideIndex-1].className += " active";
    setTimeout(showSlides, 6000); 
}