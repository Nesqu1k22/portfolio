(function (){
    const sliders = [...document.querySelectorAll('.proyect__frame')];
    const sliders1 = [...document.querySelectorAll('.proyect__frame1')];
    const sliders2 = [...document.querySelectorAll('.proyect__frame2')];
    const buttonNext = document.querySelector('#next0');
    const buttonBefore = document.querySelector('#before0');
    const buttonNext1 = document.querySelector('#next1');
    const buttonBefore1 = document.querySelector('#before1');
    const buttonNext2 = document.querySelector('#next2');
    const buttonBefore2 = document.querySelector('#before2');
    let value;
    
    buttonNext.addEventListener('click', ()=>{
            changePosition(1,sliders,0);
    });
    
    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1,sliders,0);
    });


    buttonNext1.addEventListener('click', ()=>{
            changePosition(1,sliders1,1);
    });
    
    buttonBefore1.addEventListener('click', ()=>{
        changePosition(-1,sliders1,1);
    });


    buttonNext2.addEventListener('click', ()=>{
            changePosition(1,sliders2,2);
    });
    
    buttonBefore2.addEventListener('click', ()=>{
        changePosition(-1,sliders2,2);
    });
    
    const changePosition = (add,slider,frameNum)=>{
        const currentproyect = document.querySelector(`.proyect__frame${frameNum}--show`).dataset.id
        value = Number(currentproyect);
        value+= add;
        
        slider[Number(currentproyect)-1].classList.remove(`proyect__frame${frameNum}--show`);
        if (value === slider.length+1 || value === 0){
            value = value === 0 ? slider.length  : 1;
        }
        slider[value-1].classList.add(`proyect__frame${frameNum}--show`);
    }

})();