let input = document.getElementById('favchap');
let button = document.querySelector('button');
let list = document.querySelector('ul');
let delButton;

        
button.addEventListener('click', function () {
    
    // The trim() method of String values removes whitespace from both ends of this string
    // and returns a new string, without modifying the original string.
    

    if (input.value.trim() !== '') {

        
        // create li element
        let li = document.createElement('li');

        // //create delete button
        let delButton = document.createElement('button');

        // Populate the button textContent 
        delButton.textContent = '❌';

        delButton.ariaLabel = "close";
        delButton.id = "close-button";

        // add the input value to the li text content
        // textContent is preferred over innerHTML because it is more secure.
        // However, if you need to include HTML tags, then you would use innerHTML. 
        li.textContent = input.value;

        // Append the li element variable with the delete button. 
        li.append(delButton);

        // Append the li element variable to the unordered list in your HTML. 
        list.append(li);

        // clear the input field
        input.value = '';
          
    }
    
});

delButton = document.getElementById("close-button");

// console.log(deleteBtn);
        
delButton.addEventListener('click', function () {
    //remove li from the ul element
    list.removeChild(li);
    input.focus();

    // clear the input field
    input.value = '';
})