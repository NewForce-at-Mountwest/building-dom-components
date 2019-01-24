//1.
// - Create three new files: an `index.html`, a JavaScript file, and a CSS file
// - Copy and paste the following code into your `index.html` file:
// <article id="container"></article>
// 
// - Write a function called buildSection that accepts two arguments: `text` and `style`
// - The function should return an HTML component of a section element with whatever text and class (`style`) you pass in. 
// - Go ahead and add some CSS rules to whatever style you pass in so you can see if it worked or not.
// - Call the function and insert your section into the DOM

// 2.
// - Copy and paste the following code into your javascript file

const section = function(textParameter) {
    return `<section class="bordered dashed">${textParameter}</section>`
}

const h3 = function(textParameter) {
    return `<h3>${textParameter}</h3>`
}

const unorderedList = function(arrayParameter) {
    let list = "";
    for(let i = 0; i < arrayParameter.length; i++){
        list += `<li>${arrayParameter[i]}</li>`
    }
    return `<ul>${list}</ul>`
}

// - Your job is to build a function called buildInstructorComponent. The instructor component should include an h3 element, a section element, and a bulleted list of technologies that they know (just make some up)

// - The buildInstructor function should call the three functions you just copied and pasted in your file

// - Bear in mind that the unorderedList function is expecting an array as a parameter- make sure you're passing in an array! 

// - The buildInstructorComponent function should RETURN the full HTML string of all the elements put together

// - Print the returned HTML string to the DOM

