const btnOne = document.querySelector('.btn-one');
const panelOne = document.querySelector('.panel-one');
const arrowOne = document.querySelector('.arrow-one');

const btnTwo = document.querySelector('.btn-two');
const panelTwo = document.querySelector('.panel-two');
const arrowTwo = document.querySelector('.arrow-two');

const btnThree = document.querySelector('.btn-three');
const panelThree = document.querySelector('.panel-three');
const arrowThree = document.querySelector('.arrow-three');

let panelOneIsOpen = false;
let panelTwoIsOpen = false;
let panelThreeIsOpen = false;

btnOne.addEventListener('click', () =>{

    if(!panelOneIsOpen){
        panelOneIsOpen = true;
        panelOne.style.display = 'block';
        arrowOne.classList.toggle('arrow-rotate');
        btnOne.style.color = '#03a9f4';

        if(panelTwo.style.display === 'block'){
            panelTwo.style.display = 'none';
            arrowTwo.classList.toggle('arrow-rotate');
            btnTwo.style.color = 'black';
            panelTwoIsOpen = false;
        }
        
        if(panelThree.style.display == 'block'){
            panelThree.style.display = 'none';
            arrowThree.classList.toggle('arrow-rotate');
            btnThree.style.color = 'black';
            panelThreeIsOpen = false;
        }
        
    }else{        
        panelOne.style.display = 'none';
        arrowOne.classList.toggle('arrow-rotate');
        btnOne.style.color = 'black';
        panelOneIsOpen = false;
    }

});

btnTwo.addEventListener('click', () =>{
    
    if(!panelTwoIsOpen){

        panelTwoIsOpen = true;
        panelTwo.style.display = 'block';
        arrowTwo.classList.toggle('arrow-rotate');
        btnTwo.style.color = '#03a9f4';

        if(panelOne.style.display === 'block'){
            panelOne.style.display = 'none';
            arrowOne.classList.toggle('arrow-rotate');
            btnOne.style.color = 'black';
            panelOneIsOpen = false;
        }
        
        if(panelThree.style.display == 'block'){
            panelThree.style.display = 'none';
            arrowThree.classList.toggle('arrow-rotate');
            btnThree.style.color = 'black';
            panelThreeIsOpen = false;
        }

    }else{
        panelTwo.style.display = 'none';
        arrowTwo.classList.toggle('arrow-rotate');
        btnTwo.style.color = 'black';
        panelTwoIsOpen = false;
    }

});

btnThree.addEventListener('click', () =>{
    
    if(!panelThreeIsOpen){
        panelThreeIsOpen = true;
        panelThree.style.display = 'block';
        arrowThree.classList.toggle('arrow-rotate');
        btnThree.style.color = '#03a9f4';

        if(panelOne.style.display === 'block'){
            panelOne.style.display = 'none';
            arrowOne.classList.toggle('arrow-rotate');
            btnOne.style.color = 'black';
            panelOneIsOpen = false;
        }

        if(panelTwo.style.display === 'block'){
            panelTwo.style.display = 'none';
            arrowTwo.classList.toggle('arrow-rotate');
            btnTwo.style.color = 'black';
            panelTwoIsOpen = false;
        }

    }else{
        panelThree.style.display = 'none';
        arrowThree.classList.toggle('arrow-rotate');
        btnThree.style.color = 'black';
        panelThreeIsOpen = false;
    }

});