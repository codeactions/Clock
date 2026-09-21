window.addEventListener("DOMContentLoaded", () => {
  loadData();
});
function loadData() {
  let request;
  if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
  } else {
    request = ActiveXObject("Microsoft.XMLHTTP");
  }
  request.open("get", "/list.json", true);
  request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
      let list = JSON.parse(request.responseText);
      const area = document.getElementById("content");
      list.forEach((el) => {
        let p = document.createElement("p");
        p.innerHTML = `${el.id} - ${el.name} - ${el.family} - ${el.age}`;
        area.appendChild(p);
      });
    }
  };
  request.send();
}
