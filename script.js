const inputText = document.getElementById('inputText');
const charCount = document.getElementById('charCount');
const spaceCount = document.getElementById('spaceCount');
const wordCount = document.getElementById('wordCount');
const paragraphCount = document.getElementById('paragraphCount');

inputText.addEventListener('input', () => {
    const text = inputText.value;
    charCount.textContent = text.length;
    spaceCount.textContent = text.split(' ').length - 1;
    const words = text.match(/\b\w+\b/g);
    wordCount.textContent = words ? words.length : 0;
    const paragraphs = text.split('\n\n').filter(para => para.trim() !== '');
    paragraphCount.textContent = paragraphs.length;
});

resetButton.addEventListener('click', () => {
    inputText.value = '';
    charCount.textContent = 0;
    spaceCount.textContent = 0;
    wordCount.textContent = 0;
    paragraphCount.textContent = 0;
});