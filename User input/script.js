function processData() {

  let name = document.getElementById("nameInput").value;
  let age = document.getElementById("ageInput").value;

  let result = "";

  // if-else
  if (age >= 18) {
    result += "Adult<br>";
  } else {
    result += "Minor<br>";
  }

  // switch
  switch (name.toLowerCase()) {
    case "sumit":
      result += "Hello Sumit!";
      break;
    case "admin":
      result += "Welcome Admin!";
      break;
    default:
      result += "Hello User!";
  }

  document.getElementById("result").innerHTML = result;
}