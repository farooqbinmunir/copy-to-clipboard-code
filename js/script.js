/* Script starts */
document.querySelector('#fbm-copy-btn').addEventListener('click', e => {
    var text = document.querySelector('p#fbm-text').innerText;
    window.navigator.clipboard.writeText(text).then(x => {
        document.querySelector('.fbm-copied-message').innerHTML = 'Copied to Clipboard';
        setTimeout(() => {
            document.querySelector('.fbm-copied-message').innerHTML = '';
        }, 5000);
    });
});