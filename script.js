const textarea = document.getElementById('inputText');
const charCount = document.getElementById('charCount');

textarea.addEventListener('input', () => {
    const text = textarea.value;
    charCount.textContent = text.length;
});