let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active')
}

windows.onscroll = () =>{
    navbar.classList.remove('active')
}