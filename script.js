$(document).ready(function() {
    let cartItemCount = 0; // Initialize cart count

    /**
     * Updates the cart count displayed on the navbar.
     */
    function updateCartDisplay() {
        // Update desktop cart count
        $('#cart-item-count').text(cartItemCount);
        // Update mobile cart count
        $('#cart-item-count-mobile').text(cartItemCount);
    }

    // Initial display update
    updateCartDisplay();

    /**
     * Event handler for adding a demo item to the cart.
     */
    $('#add-item-btn').on('click', function() {
        // Simulate adding an item
        cartItemCount++;
        updateCartDisplay();
        
        // Optional: Provide feedback to the user
        alert(`1 item added to cart! Total items: ${cartItemCount}`);
    });
    
    // You can add more click handlers for your Shop, Login, and Cart links here
    // For now, they just prevent default action to show they are clickable
    $('.nav-link').on('click', function(e) {
        // This stops the page from reloading if the href is just '#'
        // In a real application, you would remove this and link to the correct pages
        if ($(this).attr('href') === '#') {
            e.preventDefault();
        }
    });

});

$(document).ready(function() {
    // Agar aap click par koi effect dena chahte hain:
    $('.service-block-neutral').on('click', function() {
        console.log("Block Clicked: " + $(this).find('.service-title-neutral').text());
        // Yahan aap user ko kisi page par redirect kar sakte hain
        // window.location.href = 'your-link-here.html';
    });
});


//  Customer Testimonials Slider Initialization 

 
  const slider = document.querySelector('.review-slider');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');

  let scrollAmount = 0;
  const scrollStep = 370;

  nextBtn.addEventListener('click', () => {
    scrollAmount += scrollStep;
    if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
      scrollAmount = 0;
    }
    slider.style.transform = `translateX(-${scrollAmount}px)`;
  });

  prevBtn.addEventListener('click', () => {
    scrollAmount -= scrollStep;
    if (scrollAmount < 0) {
      scrollAmount = slider.scrollWidth - slider.clientWidth;
    }
    slider.style.transform = `translateX(-${scrollAmount}px)`;
  });

  // Auto-slide every 4 seconds
  setInterval(() => {
    nextBtn.click();
  }, 4000);

//   PRODUCT CARDS  

  
 