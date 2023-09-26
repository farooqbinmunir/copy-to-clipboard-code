/* Script starts */
document.querySelector('#fbm-copy-btn').addEventListener('click', e => {
    var text = document.querySelector('p#fbm-text').innerText;
    window.navigator.clipboard.writeText(text).then(x => {
        let element = document.createElement('span');
        element.classList.add('fbm-copied');
        element = element.append('Copied to clipboard');
        document.querySelector('.fbm-content-wrapper').append(element);
        setTimeout(() => {
            document.querySelector('.fbm-copied').remove();
        }, 5000);
    });
});