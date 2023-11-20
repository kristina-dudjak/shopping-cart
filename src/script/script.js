document.addEventListener('DOMContentLoaded', function() {
    fetch('../../header.html').then(response => response.text()).then(data => {
        document.getElementById('header').innerHTML=data;
    })
    .catch(error => console.error('Error fetching header:', error));
})

document.addEventListener('DOMContentLoaded', function() {
    fetch('../../cart-item.html').then(response => response.text()).then(data => {
        document.getElementById('cart-item-1').innerHTML=data;
    })
    .catch(error => console.error('Error fetching cart item:', error));
})

document.addEventListener('DOMContentLoaded', function() {
    fetch('../../cart-item.html').then(response => response.text()).then(data => {
        document.getElementById('cart-item-2').innerHTML=data;
    })
    .catch(error => console.error('Error fetching cart item:', error));
})

document.addEventListener('DOMContentLoaded', function() {
    fetch('../../footer.html').then(response => response.text()).then(data => {
        document.getElementById('footer').innerHTML=data;
    })
    .catch(error => console.error('Error fetching footer:', error));
})

document.addEventListener('DOMContentLoaded', function() {
    fetch('../../summary.html').then(response => response.text()).then(data => {
        document.getElementById('summary').innerHTML=data;
    })
    .catch(error => console.error('Error fetching summary:', error));
})