let searchbtn = document.getElementById("searchbtn");
let clearbtn = document.getElementById("clearbtn");

const clearsearch = () => {
  document.getElementById("searchinput").value = "";
  console.log("Clearing");
};

clearbtn.addEventListener("click", clearsearch);
