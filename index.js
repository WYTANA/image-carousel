//Import necessary modules
import DoubleLinkedList from './dll.js'
import images from './images.js'
// import './style.css'

// Create instance of DLL
const list = new DoubleLinkedList();

const viewer = document.getElementById('viewer');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

// Load your images from the array.
images.forEach((image) => list.push(image));
list.insertAtIndex(
    1,
    'https://www.pcclean.io/wp-content/gallery/aurora-hd-wallpapers/750237.jpg'
);

//Set the initial image in the gallery.
let idx = 0;
const counter = document.getElementById('counter');
counter.innerHTML = idx;

// Add an event listener to handle when the next button
// is clicked to increment the image gallery.
next.addEventListener('click', function () {
    // Implement the 'next' functionality here.
    if (idx >= list.length - 1) {
        idx = 0;
        counter.innerHTML = idx;
        viewer.src = list.getNodeAtIndex(idx).value;
    } else {
        idx++;
        counter.innerHTML = idx;
        //change picture
        viewer.src = list.getNodeAtIndex(idx).value;
    }
});

// Add an event listener to handle when the previous button
// is clicked to decrement the image gallery.
prev.addEventListener('click', function () {
    // Impliment the previous functionality here.
    if (idx === 0) {
        idx = list.length - 1;
        counter.innerHTML = idx;
        viewer.src = list.getNodeAtIndex(idx).value;
    } else {
        idx--;
        counter.innerHTML = idx;
        viewer.src = list.getNodeAtIndex(idx).value;
    }
});