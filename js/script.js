
const boxes = document.querySelectorAll(".box");

window.addEventListener('scroll', checkboxs)

function checkboxs(){
    const triggerBottom = window.innerHeight;


    boxes.forEach(box =>{
        const boxTop = box.getBoundingClientRect().top;
        

        if(boxTop < triggerBottom){
            box.classList.add('show');
            
        }
    })
    
}


const navs = document.querySelectorAll('.nav');

navs.forEach(nav =>{
    nav.addEventListener('click', ()=>{
        nav.classList.add('active');
    })
})