const tracker = document.querySelector(".tracker");
document.body.addEventListener("mousemove", e => {
  tracker.style.left = `${e.clientX}px`;
  tracker.style.top = `${e.clientY}px`;  });

  const github = document.querySelector(".github");
  document.body.addEventListener("mousedown", e => {
    location.href = "https://github.com/henriquemoraescod"
  });

  const linkedin = document.querySelector(".linkedin");
  document.body.addEventListener("mousedown", e => {
    location.href = "https://www.linkedin.com/in/henrique-moraes-farias-b752a1247/"
  });