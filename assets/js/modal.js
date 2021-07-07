let viewButton = document.querySelector(".view-button");
let resumeImage = document.querySelector(".resume-img");
let resumeContainer = document.querySelector(".resume-img-container");

document.onclick = (e) => {
  if (e.target.id !== "view-btn") {
    resumeContainer.style.display = "none";
  }
};
viewButton.onclick = (e) => {
  if ((e.target.id = "view-btn")) {
    resumeContainer.style.display = "flex";
  }
};
