document.addEventListener('DOMContentLoaded', function() 
{
    //towchnii toggle iig udirdah listener
    const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');
    const currentTheme = localStorage.getItem('theme');
//odoogiin theme iig shalgaj dark mode eswel light mode esehiig shiidne
    if (currentTheme) 
    {
        document.documentElement.setAttribute('data-theme', currentTheme);

        if (currentTheme === 'dark') 
        {
            toggleSwitch.checked = true;
        }
    }
    //tus burd n huwisagchaar light eswel dark mode iig todorhoilno
    var light = document.getElementById("light");
    var dark = document.getElementById("dark");
    //dark mode iig idewhjuuleh variable uuda solij baigaa heseg
    function switchTheme(e) 
    {
        if (e.target.checked) 
        {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            dark.style.display = 'none';
            light.style.display = 'flex';
        }
        else 
        {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            dark.style.display = 'flex';
            light.style.display = 'none';
        }
    }

    toggleSwitch.addEventListener('change', switchTheme, false);
});
