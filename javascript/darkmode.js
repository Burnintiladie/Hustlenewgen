document.addEventListener('DOMContentLoaded', function() 
{
    const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) 
    {
        document.documentElement.setAttribute('data-theme', currentTheme);

        if (currentTheme === 'dark') 
        {
            toggleSwitch.checked = true;
        }
    }

    var light = document.getElementById("light");
    var dark = document.getElementById("dark");

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
