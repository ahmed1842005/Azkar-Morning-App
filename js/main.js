const buttons = document.querySelectorAll('.parent input');

buttons.forEach(button => {

  button.addEventListener('click', function () {

    let count = parseInt(this.value);

    if (count > 0) {
      count--;
      this.value = count;
    }

    if (count === 0) {
      this.disabled = true;
      this.style.backgroundColor = "#444";
      this.style.cursor = "not-allowed";
      this.style.opacity = "0.6";
    }

    checkAllFinished();

  });

});

function checkAllFinished() {
  let allDone = true;

  buttons.forEach(btn => {
    if (parseInt(btn.value) > 0) {
      allDone = false;
    }
  });

  if (allDone) {
    document.getElementById("finishMessage").classList.add("active");
  }
}

function closeMessage() {
  document.getElementById("finishMessage").classList.remove("active");
}
