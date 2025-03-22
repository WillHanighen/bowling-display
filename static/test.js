console.log("test");

function test() {
  console.log("test");

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "http://127.0.0.1:8000/api/test", true);

  let input = document.getElementById("test").value;
  const data = new FormData();
  data.append("test", JSON.stringify({"test":input}));

  xhr.send(data);

}
