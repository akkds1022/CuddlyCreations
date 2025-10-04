let imgArray = [
  "../images/card1.png",
  "../images/card2.png",
  "../images/card3.png",
  "../images/card4.png",
];
let heading = ["Teddy-Bear", "Elephant", "Unicorn", "Giraffe"];
let imgElement = document.getElementById("slider-img");
let slider_heading = document.getElementById("slider-heading");

var currentIndex = 0;

function change() {
  if (currentIndex < imgArray.length - 1) {
    currentIndex++;
  } else if (currentIndex == imgArray.length - 1) {
    currentIndex = 0;
  }

  imgElement.src = imgArray[currentIndex];
  slider_heading.innerHTML = heading[currentIndex];
}

let dispalyElements = [
  "../images/card1.png",
  "../images/card1b.png",
  "../images/card1c.png",
  "../images/card2.png",
  "../images/card2b.png",
  "../images/card2c.png",
  "../images/card4.png",
  "../images/card4b.png",
  "../images/card4c.png",
];

let img1 = document.getElementById("display-img1");
let img2 = document.getElementById("display-img2");
let img3 = document.getElementById("display-img3");

console.log(img2);

function changeD1() {
  img1.src = dispalyElements[0];
  img2.src = dispalyElements[1];
  img3.src = dispalyElements[2];
}
function changeD2() {
  img1.src = dispalyElements[3];
  img2.src = dispalyElements[4];
  img3.src = dispalyElements[5];
}
function changeD3() {
  img1.src = dispalyElements[6];
  img2.src = dispalyElements[7];
  img3.src = dispalyElements[8];
}

dispalyElements = [
  "../images/card1.png",
  "../images/card1b.png",
  "../images/card1c.png",
  "../images/card2.png",
  "../images/card2b.png",
  "../images/card2c.png",
  "../images/card4.png",
  "../images/card4b.png",
  "../images/card4c.png",
];

let left_arrow = document.getElementById("aleft");
let right_arrow = document.getElementById("aright");
let current_Index = 0;
let imgP = document.getElementById("slider-imgP");

function changeR() {
  if (current_Index == dispalyElements.length - 1) {
    right_arrow.style.color = " rgba(10, 55, 59, 0.288)";
  } else {
    current_Index++;
    imgP.src = dispalyElements[current_Index];
  }

  if (current_Index != 0) {
    left_arrow.style.color = " rgb(10, 55, 59)";
  }
}

function changeL() {
  if (current_Index == 0) {
    left_arrow.style.color = " rgba(10, 55, 59, 0.288)";
  } else {
    current_Index--;
    imgP.src = dispalyElements[current_Index];
  }

  if (current_Index != dispalyElements.length - 1) {
    right_arrow.style.color = " rgb(10, 55, 59)";
  }
}

// Modal Functionality
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("contactModal");
  const contactNavLink = document.getElementById("contact-nav");
  const contactFooterLink = document.getElementById("contact-footer");
  const closeBtn = document.getElementById("closeModal");
  const cancelBtn = document.getElementById("cancelModal");
  const contactForm = document.getElementById("contactForm");

  // Function to show modal
  function showModal() {
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  }

  // Function to hide modal
  function hideModal() {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Restore scrolling
    contactForm.reset(); // Clear form fields
  }

  // Event listeners for opening modal
  if (contactNavLink) {
    contactNavLink.addEventListener("click", function (e) {
      e.preventDefault();
      showModal();
    });
  }

  if (contactFooterLink) {
    contactFooterLink.addEventListener("click", function (e) {
      e.preventDefault();
      showModal();
    });
  }

  // Event listeners for closing modal
  if (closeBtn) {
    closeBtn.addEventListener("click", hideModal);
  }

  if (cancelBtn) {
    cancelBtn.addEventListener("click", hideModal);
  }

  // Close modal when clicking outside of it
  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      hideModal();
    }
  });

  // Close modal with Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal.style.display === "block") {
      hideModal();
    }
  });

  // Handle form submission
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData(contactForm);
      const name = formData.get("name");
      const email = formData.get("email");
      const subject = formData.get("subject");
      const message = formData.get("message");

      // Simple validation
      if (!name || !email || !subject || !message) {
        alert("Please fill in all fields.");
        return;
      }

      // Simulate form submission
      alert(
        `Thank you, ${name}! Your message has been sent. We'll get back to you soon at ${email}.`
      );

      // Close modal and reset form
      hideModal();
    });
  }
});
