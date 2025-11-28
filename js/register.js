document.getElementById("registerForm").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;

    // Validation
    if(!name || !email || !password || !confirm){
        alert("All fields are required!");
        return;
    }

    if(password !== confirm){
        alert("Passwords do not match!");
        return;
    }

    if(password.length < 6){
        alert("Password must be at least 6 characters");
        return;
    }

    // Get users from LocalStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email exists
    let exists = users.some(u => u.email === email);

    if(exists){
        alert("Email already registered!");
        return;
    }

    // Add new user
    users.push({
        id: Date.now(),
        name,
        email,
        password
    });

    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful!");

    // Redirect to login page
    window.location.href = "login.html";
});
