document.addEventListener('DOMContentLoaded', () => {
    const shippingBox = document.getElementById('shipping-box');
    shippingBox.addEventListener('click',  () => {
        const isHidden =  document.getElementById('shipping-info').classList.toggle('hidden');
        shippingBox.classList.toggle('estimate-hidden', isHidden);
    });
});

