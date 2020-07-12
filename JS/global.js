const NAVFAB = Id('navfab')
const NAVBAR = Id('navbar')
const DARK = Id("dark")

function Toggle(){
    NAVBAR.classList.toggle('active')
    DARK.classList.toggle('active')
    NAVFAB.classList.toggle('active')
}

NAVFAB.onclick = Toggle
DARK.onclick = Toggle
NAVBAR.onclick = Toggle