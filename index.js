function getData(url, cb) {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status === 200) {
      return cb(JSON.parse(xhr.responseText));
    }
  };
  xhr.open("GET", url);
  xhr.send();
}
const data = getData("https://jsonplaceholder.typicode.com/users", function (
  data
) {
  let text =
    "<table class='table table-dark table-hover'> <thead>  <tr>" +
    "<th>#</th>" +
    "<th>Name</th>" +
    "<th>Username</th>" +
    "<th>Email</th>" +
    "<th>Phone</th>" +
    "<th>Website</th>" +
    "</tr> </thead>";
  data.forEach((item) => {
    text +=
      "<tbody><tr><td>" +
      item.id +
      "</td><td>" +
      item.name +
      "</td><td>" +
      item.username +
      "</td><td>" +
      item.email +
      "</td><td>" +
      item.phone +
      "</td><td>" +
      item.website +
      "</td></tr></tbody>";
  });
  text += "</table>";
  document.getElementById("app").innerHTML = text;
});
