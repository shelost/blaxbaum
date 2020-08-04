let STRING =

`
<div class = 'head'>

<div class = 'mast'>
    <a href = '../../index.html'>
        <img src = '../../Assets/bxb-logo-text.png' alt = 'BlaxBaum Logo'>
    </a>
</div>

<div id = 'navbar'>

        <a href = '../../index.html'>
            <div class = 'navbtn'>
                <h1 class = 'direct'> Home </h1>
            </div>
        </a>

        <a href = '../about/team.html'>
            <div class = 'navbtn'>
                <h1 class = 'direct'> About </h1>
            </div>
        </a>

        <div class = 'navbtn'>
            <h1> Services </h1>
            <div class = 'dropdown'>
                <a href = '../../@/services/resume.html'>
                    <div class = 'dropbtn'>
                        <h1> Resume Review </h1>
                    </div>
                </a>
                <a href = '../../@/services/interview.html'>
                    <div class = 'dropbtn'>
                        <h1> Interview Prep </h1>
                    </div>
                </a>
                <a href = '../../@/services/online.html'>
                    <div class = 'dropbtn'>
                        <h1> Online Presence </h1>
                    </div>
                </a>
                <a href = '../../@/services/letter.html'>
                    <div class = 'dropbtn'>
                        <h1> Letter Writing </h1>
                    </div>
                </a>
                <a href = '../../@/services/research.html'>
                    <div class = 'dropbtn'>
                        <h1> Company Research </h1>
                    </div>
                </a>
            </div>
        </div>

        <a href = '../../@/contact.html'>
        <div class = 'navbtn'>
            <h1 class = 'direct'> Contact </h1>
        </div>
    </a>



</div>

</div>

<div id = 'dark'>
</div>

<div id = 'navfab'>
    <div> </div>
    <div> </div>
    <div> </div>
</div>

`

let FOOTER =
`
<div class = 'footer'>

<div class = 'hull'>
    <img src = '../../Assets/bxb-logo-text.png' alt = 'BlaxBaum Logo'>
</div>
<div class = 'social'>
    <a href = 'https://www.linkedin.com/company/blaxbaumassociates/?viewAsMember=true'>
        <img src = '../../Assets/social-linkedin.png' alt = 'Social Media Logo'>
    </a>
    <a href = 'https://www.google.com/maps/place/Philadelphia,+PA/@40.0026767,-75.2581132,11z/data=!3m1!4b1!4m5!3m4!1s0x89c6b7d8d4b54beb:0x89f514d88c3e58c1!8m2!3d39.9525839!4d-75.1652215'>
        <img src = '../../Assets/social-google.png' alt = 'Social Media Logo'>
    </a>
    <a href = 'https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=gavblaxberg@gmail.com,bkestenbaum01@gmail.com,hsr205@aol.com'>
        <img src = '../../Assets/social-email.png' alt = 'Social Media Logo'>
    </a>
</div>
<p> ⓒ 2020 BlaxBaum Consulting Group </p>

</div>

`

Tag('body')[0].innerHTML = STRING + Tag('body')[0].innerHTML + FOOTER

const PageLoop = () => {

    if (window.innerWidth < 800){

        for (let i=0; i<Class('right').length; i++){
            let sec = Class('right')[i]
            let expo = sec.firstElementChild
            let icon = sec.lastElementChild

            icon.style.transform = `translateY(-${expo.getBoundingClientRect().height+20}px)`
            expo.style.transform = `translateY(${icon.getBoundingClientRect().height}px)`
        }

    }else{

        for (let i=0; i<Class('right').length; i++){
            let sec = Class('right')[i]
            let expo = sec.firstElementChild
            let icon = sec.lastElementChild

            icon.style.transform = ''
            expo.style.transform = ''
        }

    }

}

setInterval(PageLoop, 1000/60)

