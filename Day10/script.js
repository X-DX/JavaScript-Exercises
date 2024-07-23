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

// Task 4

element.addEventListener('mouseout', function(){
    element.style.backgroundColor = "red";
});


// Task 5

document.getElementById('myInput').addEventListener('keydown', function(){
    console.log('Key Presssed:', event.key);
});

// Task 6

document.getElementById('myInputId').addEventListener('keyup', function(){
    const eventVal = event.key;
    const pId = document.getElementById('keyupid');

    pId.textContent = eventVal;
})

// Taks 7
document.getElementById('myForm').addEventListener('submit', function(){
    event.preventDefault();


    const formData = new FormData(event.target);
    const formObject = {};

    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    console.log("Form Data", formObject);
})


// Task 8
document.getElementById('mySelect').addEventListener('change', function(){
    const selectedValue = this.value;
    document.getElementById('displaySelected').innerText = 'Selected value: ' + selectedValue;
})

// Task 9
document.getElementById('myList').addEventListener('click', function(){
    if(event.target && event.target.nodeName === "LI"){
        console.log('Clicked item text:', event.target.textContent);
    }
})

// Task 10
const parent = document.getElementById('parent');
const addChildButton = document.getElementById('addChild');
const childList = document.getElementById('childList');

parent.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('dynamic-item')) {
        console.log('Clicked item text:', event.target.textContent);
    }
});

addChildButton.addEventListener('click', function() {
    const newItem = document.createElement('li');
    newItem.textContent = 'Dynamic Item ' + (childList.children.length + 1);
    newItem.classList.add('dynamic-item'); // Add class to identify dynamic items
    childList.appendChild(newItem);
});