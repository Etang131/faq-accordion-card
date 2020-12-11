let accordions = document.getElementsByClassName("accordion");

for (let i = 0; i < accordions.length; i++) {
  accordions[i].onclick = function () {
    let content = this.nextElementSibling;

    if (content.style.maxHeight) {
      // accordion is open, we need to close it
      content.style.maxHeight = null;
      content.style.padding = "0 0";
    } else {
      //accordion is closed
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.padding = "15px 0";
      buttonText.style.fontWeight = "bold";
    }
  };
}
