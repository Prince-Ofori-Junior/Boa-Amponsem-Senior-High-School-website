    function openModal(img) {
      var modal = document.getElementById("myModal");
      var modalImg = document.getElementById("modal-img");
      modal.style.display = "block";
      modalImg.src = img.src;
    }

    function closeModal() {
      var modal = document.getElementById("myModal");
      modal.style.display = "none";
    }

    window.onclick = function(event) {
      var modal = document.getElementById("myModal");
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
