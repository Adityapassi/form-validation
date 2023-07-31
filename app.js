const uname = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirm_password = document.querySelector("#confirm_password");
let flag = 0;
const validation = (event) => {
  event.preventDefault();
  flag = 0;
  if (uname.value === "") {
    setError(uname, "Enter some value");
    flag = 1;
  } else if (uname.value.length > 30 || uname.value.length < 5) {
    setError(uname, "Name must have 5 to 30 characters ");
    flag = 1;
  }
  if (password.value.length < 4 || password.value.length > 10) {
    setError(password, "Password Must have atleast 4 to 10 characters");
    flag = 1;
  }
  if (confirm_password.value === "") {
    setError(confirm_password, "Enter Password you entered in password field");
    flag = 1;
  } else if (confirm_password.value !== password.value) {
    setError(confirm_password, "Password Does not match");
    flag = 1;
  }
  if (flag === 1) {
    return false;
  }

  alert("Form Sumitted");
};

function setError(input, msg) {
  const parent = input.parentElement;
  const small = parent.querySelector("small");
  small.textContent = msg;
  setTimeout(() => (small.textContent = ""), 3000);
}
