const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const input = document.getElementById("link-input");
const linkForm = document.getElementById("link-form");
const errMsg = document.getElementById("err-msg");
const successMsg = document.getElementById("suc-msg");

const validURL = (str) => {
  let pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
      "((\\d{1,3}\\.){3}\\d{1,3}))" +
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
      "(\\?[;&a-z\\d%_.~+=-]*)?" +
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );
  return !!pattern.test(str);
};

const formSubmit = (e) => {
  e.preventDefault();
  successMsg.innerHTML = "";
  errMsg.innerHTML = "";
  if (input.classList.contains("border-rose-500")) {
    input.classList.remove("border-rose-500");
  }
  if (input.classList.contains("border-green-500")) {
    input.classList.remove("border-green-500");
  }
  if (input.value === "") {
    errMsg.innerHTML = "Please enter something";
    input.classList.add("border-rose-500");
  } else if (!validURL(input.value)) {
    errMsg.innerHTML = "Please enter a valid URL";
    input.classList.add("border-rose-500");
  } else {
    successMsg.innerHTML = "Success";
    input.classList.add("border-green-500");
  }
};

const navToggle = () => {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
};

linkForm.addEventListener("submit", formSubmit);

btn.addEventListener("click", navToggle);
