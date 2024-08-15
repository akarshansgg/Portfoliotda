document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // You can add your code here to handle form submission, like sending data to a server or displaying a thank you message.
    // For demonstration purpose, let's just log the form data to the console.
    const formData = new FormData(this);
    const formObject = {};
    formData.forEach(function(value, key){
        formObject[key] = value;
    });
    console.log(formObject);
});


