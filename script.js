// for responsive
document.addEventListener('DOMContentLoaded',() => {
  const menuicon = document.getElementById('menu-icon');
  const navbar = document.getElementById('navbar');

  menuicon.addEventListener('click', () => {
      navbar.classList.toggle('active');
  });

  const navLinks = document.querySelectorAll('.nav-link')
  navLinks.forEach(link => {
      link.addEventListener('click', () =>{
          navbar.classList.remove('active');
      });
  });
});

   
// for submitting message
  function sendmail(){

    var Name = $('#name').val();
    var Email = $('#email').val();
    var Message = $('#message').val();
}

Email.send({
    Host : "smtp.gmail.com",
    Username : "belakshya07@gmail.com",
    Password : "********",
    To : 'belakshya87@gmail.com',
    From : "belakshya07@gmail.com",
    Subject : "New mail on contact form from :"+name,
    Body : Body
}).then(
  message => {
    if(message == 'ok'){
        alert('Youe mail has been send. Thankyou for connecting.');
    }
    else{
        console.error(message);
        alert('There is error at sending message.')
    }
  }
);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
  