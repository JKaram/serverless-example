document.getElementById("form").addEventListener("submit", function (event) {
  const status = document.getElementById("status");
  status.innerHTML = "Fetching Answer";
  const numOne = parseInt(document.getElementById("num-one").value);
  const numTwo = parseInt(document.getElementById("num-two").value);

  const data = {
    numOne,
    numTwo,
  };

  fetch("https://calm-sea-7686.jkaram.workers.dev", {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => (status.innerHTML = data.total));

  event.preventDefault();
});
