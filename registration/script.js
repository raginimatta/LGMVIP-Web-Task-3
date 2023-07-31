document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var output = document.getElementById("output");
    output.innerHTML = "<h3>Registration Successful!</h3>" +
      "<p>Name: " + name + "</p>" +
      "<p>Email: " + email + "</p>" +
      "<p>Password: " + password + "</p>";
});