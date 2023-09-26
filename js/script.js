/* Script starts */
document.querySelector('#fbm-copy-btn').addEventListener('click', e => {
    var text = document.querySelector('p#fbm-text').innerText;
    window.navigator.clipboard.writeText(text).then(x => {
        document.querySelector('.fbm-content-wrapper').append('<span id="fbm-copied">Copied to clipboard</span>');
        setTimeout(() => {
            document.querySelector('#fbm-copied').remove();
        }, 5000);
    });
});