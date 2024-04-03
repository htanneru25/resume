function toggleMenu() {
     var sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open'); 
    var content = document.querySelector('.content');

    if (sidebar.style.width === '250px') {
        sidebar.style.width = '0';
        content.style.marginLeft = '0';
    } else {
        sidebar.style.width = '250px';
        content.style.marginLeft = '250px';
    }
}