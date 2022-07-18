
const boxes = document.querySelectorAll(".box");

window.addEventListener('scroll', checkboxs)

function checkboxs(){
    const triggerBottom = window.innerHeight/2;


    boxes.forEach(box =>{
        const boxTop = box.getBoundingClientRect().top;
        

        if(boxTop < triggerBottom){
            box.classList.add('show');
            
        }
    })
    
}