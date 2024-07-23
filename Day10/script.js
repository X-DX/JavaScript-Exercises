// Task 1

document.getElementById('event1').addEventListener('click', function() {
    document.getElementById('paraele').innerText = "This is Paragrah";
});

// Task 2

document.getElementById('myImage').addEventListener('dblclick', function(){
    const img = document.getElementById('myImage');
    if(img.style.display === 'none'){
        img.style.display = 'block';
    }else{
        img.style.display = 'none';
    }
});

// Task 3

const element = document.getElementById('myElement');
element.addEventListener('mouseover', function(){
    element.style.backgroundColor = "blue";
});

element.addEventListener('mouseout', function(){
    element.style.backgroundColor = "red";
});

// Task 4

