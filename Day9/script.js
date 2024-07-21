document.addEventListener('DOMContentLoaded', function() {
    // Task 1
    const heading = document.getElementById('heading');
    heading.textContent = "JavaScript";

    // Task 2
    const classOne = document.querySelector('.classone');
    classOne.style.backgroundColor = "gray";

    // Task 3
    const newDiv = document.createElement('div');
    newDiv.textContent = "Software Developer";
    newDiv.style.backgroundColor = 'lightblue';

    const container = document.getElementById('container')
    container.appendChild(newDiv);

    // Task 4
    const newLi = document.createElement('li');
    newLi.textContent = "By India";
    const list = document.getElementById('mylist');
    list.appendChild(newLi);

    // Task 5
    const remElem = document.getElementById('classid');
    remElem.remove();

    // Task 6
    const lastElem =  document.getElementById('mylist');
    const lastChild = lastElem.lastElementChild;
    lastChild.remove();

    // Task 7
    const imgage = document.getElementById('myImage');
    imgage.setAttribute('alt', "New Image");
    imgage.setAttribute('src', "https://plus.unsplash.com/premium_photo-1687382111414-7b87afa5da34?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

    // Task 8
    const element = document.getElementById('myElement');
    // Add 'highlight' class
    document.getElementById('addClassButton').addEventListener('click', function() {
        element.classList.add('highlight');
    });

    // Remove 'highlight' class
    document.getElementById('removeClassButton').addEventListener('click', function() {
        element.classList.remove('highlight');
    });

    // Task 9
    const bodyElm = document.getElementById('container');
    document.querySelector('#bgbtn').addEventListener('click', function(){
        bodyElm.style.backgroundColor = "orange";
    })

    // Task 10
    const box = document.getElementById('myBox');
    box.addEventListener('mouseover', function() {
        box.style.borderColor = 'yellow'; 
    });

    box.addEventListener('mouseout', function() {
        box.style.borderColor = 'blue';
    });
});