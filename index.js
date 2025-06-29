// Add your code here
function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email
      })
    })
      .then(response => response.json())
      .then(data => {
        // Adding the new id to the DOM
        const idDisplay = document.createElement("div");
        idDisplay.textContent = data.id;
        document.body.appendChild(idDisplay);
      })
      .catch(error => {
        // Adding the error message to the DOM
        const errorDisplay = document.createElement("div");
        errorDisplay.textContent = error.message;
        document.body.appendChild(errorDisplay);
      });
  }
  