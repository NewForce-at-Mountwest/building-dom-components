// // --------------------Review printing to the DOM ---------------------//

// // document.querySelector("#container").innerHTML = "<h1>Jordan Castelloe</h1>";
// // const header = "<h1>Jordan Castelloe</h1>"
// // const image = `<img src="https://avatars0.githubusercontent.com/u/19379122?s=460&v=4" alt="picture of doge meme">`
// // const paragraph = "<p>Isn't it fantastic that you can change your mind and create all these happy things? You can't have light without dark. You can't know happiness unless you've known sorrow. If it's not what you want - stop and change it. Don't just keep going and expect it will get better.</p>"

// // // use string interpolation to combine all this stuff into one long html string and put it in the DOM

// // // const htmlString = 
// // // console.log(htmlString);
// // document.querySelector("#container").innerHTML =`${header}${image}${paragraph}`;
// // document.querySelector("#container").innerHTML = image;


// //------------ FUNCTIONS THAT RETURN DOM COMPONENTS ------------------//

// // What if we want to build the same HTML components multiple times? Example: print the same info for everyone in the class. The students have a slightly different component structure than the instructors, but they have the same basic elements. 

// // Rather than building the whole thing at once, our code will be more flexible if we break it down into smaller functions that build one HTML element at a time. Then we can combine them any way we want!

// // Let's write a function to build the following HTML:
// //<h2 class="xx-large">Jordan Castelloe</h2>
// // Let's refactor it to take one parameter of the content we want to put between the HTML tags
// // AAAAnd let's refactor it again to accept a parameter of class- now we should be passing in two parameters



// // const thingThatGetsReturned = header();

// // Now call the function and set the innerHTML of #container to the returned HTML component

// // document.querySelector("#container").innerHTML = header("Josh", "xx-large");


// //-------------------- LIGHTNING EXERCISE ONE --------------------//

// //1.

// // - Write a function called buildSection that accepts two arguments: `text` and `style`
// // function buildSection(text, style){
// //     return `<section class=${style}>${text}</section>`
// // }

// // const buildSection = function(text, style){
// //     return `<section class=${style}>${text}</section>`
// // }



// // - The function should return an HTML component of a section element with whatever text and class (`style`) you pass in. 
// // - Go ahead and add some CSS rules to whatever style you pass in so you can see if it worked or not.
// // - Call the function and insert your section into the DOM
// // document.querySelector("#container").innerHTML = buildSection("Blah blah blah blah blah", "blue-background");



// // And a function that returns an image component. It should accept parameters of src and alt

// // const image = (srcParam, altParam) => `<img src=${srcParam} alt=${altParam}>`


// // document.querySelector("#container").innerHTML = image("https://avatars0.githubusercontent.com/u/19379122?s=460&v=4", "picture of doge");


// // 
// // Now let's define a function called buildInstructorComponent that calls our h1 function, our image function, and our section function from the lightning exercise. Set the innerHTML of the container to be the WHOLE student component

// function header(anyName, className){
//     return `<h2 class=${className}>${anyName}</h2>`
// }

// const buildSection = (text, style) => `<section class=${style}>${text}</section>`

// function image(srcParam, altParam){
//     return `<img src="${srcParam}" alt=${altParam}>`
// }

// function buildStudentComponent(headerName, headerClass, sectionText, sectionClass, imageSrc, imageAlt){
//     const finishedHeader = header(headerName, headerClass);
//     const finishedSection = buildSection(sectionText, sectionClass);
//     const finishedImage = image(imageSrc, imageAlt);
//     return `${finishedHeader} ${finishedSection} ${finishedImage}`;
// }

// document.querySelector("#container").innerHTML = buildStudentComponent("Josh", "xx-large", "Super cool guy", "blue-background", "https://avatars0.githubusercontent.com/u/19379122?s=460&v=4", "dog meme");

// // --------------- LIGHTNING EXERCISE TWO ------------------------//

// // Demo use of debugger and break points with this ul loop



// // 2.
// // - Copy and paste the following code into your javascript file

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


const buildInstructorComponent = (h3Text, sectionText, listArray) => {
    const h3Element = h3(h3Text);
    const sectionElement = section(sectionText);
    const listElement = unorderedList(listArray);
    return `${h3Element} ${sectionElement} ${listElement}`;
}

// console.log(kimHTMLString);

// document.querySelector("#container").innerHTML = buildInstructorComponent("Kim", "Kim is great", ["HTML", "CSS", "JavaScript", "PHP"]);

// document.querySelector("#container").innerHTML = buildInstructorComponent("Kim", "Kim is great", ["HTML", "CSS", "JavaScript", "PHP"]);


const instructors = [
    {
        name: "Kim", 
        sectionText: "Kim is great",
        skills: ["things", "more things"]
    },
    {
        name: "Kim", 
        sectionText: "Kim is great",
        skills: ["things", "more things"]
    }
]


let instructorHTMLString = "";
for(let i = 0; i < instructors.length; i++){
    instructorHTMLString = instructorHTMLString + buildInstructorComponent(instructors[i].name, instructors[i].sectionText, instructors[i].skills);
}

document.querySelector("#container").innerHTML = instructorHTMLString;



// - Your job is to build a function called buildInstructorComponent. The instructor component should include an h3 element, a section element, and a bulleted list of technologies that they know (just make some up)

// - The buildInstructor function should call the three functions you just copied and pasted in your file

// - Bear in mind that the unorderedList function is expecting an array as a parameter- make sure you're passing in an array! 

// - The buildInstructorComponent function should RETURN the full HTML string of all the elements put together

// - Print the returned HTML string to the DOM

