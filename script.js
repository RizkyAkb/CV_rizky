// ----Active-Link----
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.header a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.header a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// ----Toogle-Menu----
function myFunction() {
  var x = document.getElementById("nav-bar");
  if (x.style.top === "-100%") {
    x.style.top = "50px";
  } else {
    x.style.top = "-100%";
  }
}