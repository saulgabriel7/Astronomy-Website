document.querySelector("#popup-galax").addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector("#popup").style.left = "50%";
    document.querySelector("#popup").style.display = "block";
    document.body.classList.add("no-scroll");
  });
  
  document.querySelector("#close-btn").addEventListener("click", function() {
    document.querySelector("#popup").style.left = "-400px";
    setTimeout(function() {
      document.querySelector("#popup").style.display = "none";
      document.body.classList.remove("no-scroll");
    }, 300);
  });

  document.querySelector("#popup-pé").addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector("#popup-exploraçao").style.left = "50%";
    document.querySelector("#popup-exploraçao").style.display = "block";
    document.body.classList.add("no-scroll");
  });
  
  document.querySelector("#close-btn-pé").addEventListener("click", function() {
    document.querySelector("#popup-exploraçao").style.left = "-400px";
    setTimeout(function() {
      document.querySelector("#popup-exploraçao").style.display = "none";
      document.body.classList.remove("no-scroll");
    }, 300);
  });

  document.querySelector("#popup-james").addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector("#popup-weeb").style.left = "50%";
    document.querySelector("#popup-weeb").style.display = "block";
    document.body.classList.add("no-scroll");
  });
  
  document.querySelector("#close-btn-weeb").addEventListener("click", function() {
    document.querySelector("#popup-weeb").style.left = "-400px";
    setTimeout(function() {
      document.querySelector("#popup-weeb").style.display = "none";
      document.body.classList.remove("no-scroll");
    }, 300);
  });

/* LOGIN POP-UP*/

function verLogin() {
  var popup = document.getElementById("popup-login");
  popup.style.display = "block";
}

document.querySelector("#close-login").onclick = function() {
  var popup = document.querySelector("#popup-login");
  popup.style.display = "none";
};