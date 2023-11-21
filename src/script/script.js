
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

document.addEventListener('DOMContentLoaded', function () {  
    fetch('../../summary.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('summary').innerHTML = data;
        const shippingBox = document.getElementById('shipping-box');
        const shippingInfo = document.getElementById('shipping-info');
        const shippingText = document.getElementById('shipping-text');
        const expand = document.getElementById('expand');
        const hide = document.getElementById('hide');
        const footer = document.getElementById('footer');
  
        shippingBox.addEventListener('click', function () {
          const isHidden = shippingInfo.classList.toggle('hidden');
          footer.style.paddingTop = isHidden ? '0' : '182px';
          shippingText.style.color = isHidden ? '#2F2F2F' : '#008421';
          expand.style.display = isHidden ? 'inline' : 'none';
          hide.style.display = isHidden ? 'none' : 'inline';
          hide.style.color = isHidden ? '' : '#008421';
        });
      })
      .catch(error => console.error('Error fetching summary:', error));
  });
