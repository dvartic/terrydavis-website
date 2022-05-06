const btn = document.getElementById('godspeak-button');
const termOutput = document.getElementById('term-output');

btn.addEventListener('click', function() {
    (async () => {
        try {
            let main = await import('./js-godsays-godspeak');
            termOutput.innerHTML = main.godspeak();
        } catch (error) {
            console.log(error);
        }
    })
});

