async function fetchTemplate(url, elementId) {
    try {
        const response = await fetch(url);
        const data = await response.text();
        document.getElementById(elementId).innerHTML = data;
    } catch (error) {
        console.error(`Error fetching ${elementId}:`, error);
    }
}

document.addEventListener('DOMContentLoaded', async function () {
    await Promise.all([
        fetchTemplate('../../header.html', 'header'),
        fetchTemplate('../../cart-item.html', 'cart-item-1'),
        fetchTemplate('../../cart-item.html', 'cart-item-2'),
        fetchTemplate('../../footer.html', 'footer'),
        fetchTemplate('../../summary.html', 'summary')
    ]);
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
});

