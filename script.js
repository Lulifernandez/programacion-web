//<----------------Toggle Button---------------->
const toggleButtons = document.querySelectorAll('.toggle-button');

toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    const moreInfo = button.nextElementSibling;

    if (moreInfo.style.display === 'none') {
      moreInfo.style.display = 'block';
    } else {
      moreInfo.style.display = 'none';
    }
  });
});

// <----------------Verificar form---------------->

document.getElementById("send-button").addEventListener("click", function() {
  const name = document.getElementById("name-form").value;
  const email = document.getElementById("mail-form").value;
  const message = document.getElementById("desc-form").value;
  
  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields.");
  } else {
    alert("Your message has been sent.");
    document.getElementById("name-form").value = "";
    document.getElementById("mail-form").value = "";
    document.getElementById("desc-form").value = "";
  }
});

