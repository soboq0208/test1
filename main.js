const generatorBtn = document.getElementById('generator-btn');
const lottoNumbersContainer = document.getElementById('lotto-numbers');
const themeToggle = document.getElementById('theme-toggle');
const tabBtns = document.querySelectorAll('.tab-btn');
const serviceSections = document.querySelectorAll('.service-section');

// Tab Switching Logic
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-target');
        
        // Update button active state
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Update section visibility
        serviceSections.forEach(section => {
            if (section.id === target) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    });
});

// Theme Toggle Logic
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    themeToggle.textContent = isDarkMode ? 'White Mode' : 'Dark Mode';
});

// Lotto Number Generation with Animation
generatorBtn.addEventListener('click', () => {
    lottoNumbersContainer.innerHTML = '';
    const numbers = new Set();
    while(numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    
    const sortedNumbers = Array.from(numbers).sort((a,b) => a - b);

    sortedNumbers.forEach((number, index) => {
        const numberElement = document.createElement('div');
        numberElement.classList.add('lotto-number');
        numberElement.textContent = number;
        lottoNumbersContainer.appendChild(numberElement);

        // Sequential Animation using setTimeout
        setTimeout(() => {
            numberElement.classList.add('show');
        }, index * 150); // 150ms delay between each number
    });
});
