const getCopyButton = document.getElementById('copy-email');
const getEmailCopied = document.getElementById('email-copied');

getCopyButton.addEventListener('click', () => {
    const emailLink = document.querySelector('a[href^="mailto:"]').getAttribute('href');
    const email = emailLink.replace('mailto:', '');
    navigator.clipboard.writeText(email).then(() => {
        getEmailCopied.textContent = 'Email: ' + email + ' copied to clipboard!';
        setTimeout(() => {
            getEmailCopied.textContent = '';
        }, 3000);
    }).catch((err) => {
        console.error('Failed to copy email: ', err);
    });
});