let count = 0;
const btn = document.getElementById("actionBtn");
const statusDiv = document.getElementById("status");

btn.onclick = () => {
  performAction();
};

btn.onmouseover = () => {
  this.style.backgroundColor = "#e0e0e0";
};

btn.onmouseout = () => {
  this.style.backgroundColor = "";
};

function performAction() {
  count++;
  btn.style.transform = "scale(0.95)";

  setTimeout(() => (btn.style.transform = ""), 100);

  if (count > 3) {
    btn.disabled = true;
    btn.style.opacity = "0.5";
    statusDiv.innerHTML = '<span style="color: red;">⚠️ Limit reached!</span>';
  } else {
    statusDiv.innerHTML = `✅ Processed ${count} time${count > 1 ? "s" : ""}`;
  }
}