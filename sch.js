let crrentindex = 0;
const testimonials = 
document.querySelectorAll(".testimonial");
constnextBtn = document.querySelector(".next");
constprevBtn = document.querySelector(".prev");

function showTestimonial(index){
    testimonials.forEach((t,i)=>{
        t.classList.remove("active");
        if(i===index)t.classList.add("active");
    });
}
function nextTestimonial(){
    currentIndex = (currentIndex + 1)%
 testimonials.length;
    showTestimonial(currentindex);
}
function prevTestimonial(){
    currentIndex = (currentIndex - 1 + testimonials.length)% testimonials.length;
    showTestimonial(currentIndex);
}

nextBtn.addEventlistener("click",nextTestimonial);
prevBtn.addEventlistener("click",prevTestimonial);

setlnterval(nextTestimonial,6000);