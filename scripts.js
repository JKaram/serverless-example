window.onload = function () {
  console.log("Hey");
};

document.getElementById("form").addEventListener("submit", function (event) {
  const numOne = parseInt(document.getElementById("num-one").value);
  const numTwo = parseInt(document.getElementById("num-two").value);

  const data = {
    numOne,
    numTwo,
  };

  fetch("https://calm-sea-7686.jkaram.workers.dev/", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => console.log(response))
    .then((data) => console.log(data));

  event.preventDefault();
});
