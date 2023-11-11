
const clearButton = document.querySelector("#clear-btn");
const copyButton = document.querySelector("#copy-btn");
const inputField=document.querySelector('#input-field')


/* Clipboard functions */

const clipboard = new ClipboardJS("#copy-btn");

clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);

    e.clearSelection();
});



/* Clear fields */
const clearFields = () => {
    console.log('hii input field')
    inputField.value = '';
  
}

clearButton.addEventListener("click", (event) => {
    
//   event.preventDefault();cls

  console.log('hiii kya hua')
//   input.value=''
  clearFields();
})


