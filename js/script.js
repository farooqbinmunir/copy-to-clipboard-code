/* Script starts */
document.querySelector('#fbm-copy-btn').addEventListener('click', e => {
    var text = document.querySelector('p#fbm-text').innerText;
    window.navigator.clipboard.writeText(text).then(x => {
        document.querySelector('.fbm-content-wrapper').append('Copied to Clipboard');
    });
});