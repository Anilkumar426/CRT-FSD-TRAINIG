document.getElementById("studentForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;
  const course = document.getElementById("course").value;
  const address = document.getElementById("address").value;

  if (!name || !email || !age || !gender || !course || !address) {
    alert("Please fill in all fields!");
    return;
  }

  document.getElementById("message").style.display = "block";
  this.reset();
});
