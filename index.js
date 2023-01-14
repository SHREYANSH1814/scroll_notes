console.log('hello');
const head=document.querySelector('header');
const title=document.querySelector('.title')
const links=document.querySelectorAll('.link');
 const headsize=head.getBoundingClientRect().height;
 const titlesize=title.getBoundingClientRect().height;

function removehighlighted(){
    links.forEach(
        function remove(link){
            link.classList.remove('highlighted')
        }
    )

}








window.addEventListener('scroll',function headfixed(e){
    const headsize=head.getBoundingClientRect().height;
    var len=window.pageYOffset;
    if(len>=headsize){
        head.classList.add('fixed');
    }
    else{
        head.classList.remove('fixed'); 
    }
})



 links.forEach(
    function join(link) {

        link.addEventListener("click",function move(e){
        //    default prevent action
        
            e.preventDefault();
            const element=e.target.getAttribute('href').slice(1);
            console.log(element);
            const topic=document.getElementById(`${element}`);
            removehighlighted();
            // e.classList.add('highlighted');
            console.log(topic);
            var position=topic.offsetTop-headsize-titlesize;
            window.scrollTo({
                top:position,
                left:0,
            })
            e.target.classList.add('highlighted');
        }
        
        )
    
    }
)