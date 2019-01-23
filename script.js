// --------------------Review printing to the DOM ---------------------//

// document.querySelector("#container").innerHTML = "<h1>Jordan Castelloe</h1>";


// const header = "<h1>Jordan Castelloe</h1>"
// const image = `<img src="https://avatars0.githubusercontent.com/u/19379122?s=460&v=4" alt="picture of doge meme">`
// const paragraph = "<p>Isn't it fantastic that you can change your mind and create all these happy things? You can't have light without dark. You can't know happiness unless you've known sorrow. If it's not what you want - stop and change it. Don't just keep going and expect it will get better.</p>"

// use string interpolation to combine all this stuff into one long html string and put it in the DOM

//------------ FUNCTIONS THAT RETURN DOM COMPONENTS ------------------//

// What if we want to build the same HTML components multiple times? Example: print the same info for everyone in the class. The students have a slightly different component structure than the instructors, but they have the same basic elements. 

// Rather than building the whole thing at once, our code will be more flexible if we break it down into smaller functions that build one HTML element at a time. Then we can combine them any way we want!

// Let's write a function to build the following HTML:
//<h2 class="xx-large">Jordan Castelloe</h2>

// Let's refactor it to take one parameter of the content we want to put between the HTML tags

// AAAAnd let's refactor it again to accept a parameter of class- now we should be passing in two parameters

// Now call the function and set the innerHTML of #container to the returned HTML component

//LIGHTNING EXERCISE ONE

// And a function that returns an image component. It should accept parameters of src and alt

// Now let's define a function called buildInstructorComponent that calls our h1 function, our image function, and our section function from the lightning exercise. Set the innerHTML of the container to be the WHOLE student component




