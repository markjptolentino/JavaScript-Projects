// Menu state variables
let orderCounter = 0; // Total orders placed
let streakCounter = 0; // Consecutive orders without canceling
let darkMode = false; // Theme toggle
let orderHistory = []; // Tracks past orders

// Price configuration
const prices = {
    sizes: {
        personal: 6.00,
        small: 8.00,
        medium: 10.00,
        large: 14.00,
        'extra-large': 16.00
    },
    crusts: {
        'cheese-stuffed': 3.00
    },
    toppings: 1.00 // Additional meat/veggie after first free
};

// Updates the order summary and total
function updateOrder() {
    const size = document.querySelector('input[name="size"]:checked');
    const crust = document.querySelector('input[name="crust"]:checked');
    const sauce = document.querySelector('input[name="sauce"]:checked');
    const meats = document.querySelectorAll('input[name="meat"]:checked');
    const vegetables = document.querySelectorAll('input[name="vegetable"]:checked');
    
    let total = 0;
    let details = [];

    // Calculate size price
    if (size) {
        const sizePrice = prices.sizes[size.value];
        total += sizePrice;
        details.push(`${size.value.charAt(0).toUpperCase() + size.value.slice(1)} Pizza: $${sizePrice.toFixed(2)}`);
    }

    // Calculate crust price
    if (crust && prices.crusts[crust.value]) {
        const crustPrice = prices.crusts[crust.value];
        total += crustPrice;
        details.push(`${crust.value.charAt(0).toUpperCase() + crust.value.slice(1)} Crust: $${crustPrice.toFixed(2)}`);
    } else if (crust) {
        details.push(`${crust.value.charAt(0).toUpperCase() + crust.value.slice(1)} Crust: $0.00`);
    }

    // Calculate sauce (free)
    if (sauce) {
        details.push(`${sauce.value.charAt(0).toUpperCase() + sauce.value.slice(1)} Sauce: $0.00`);
    }

    // Calculate meat toppings (first free, then $1 each)
    if (meats.length > 0) {
        meats.forEach((meat, index) => {
            const price = index === 0 ? 0 : prices.toppings;
            total += price;
            details.push(`${meat.value.charAt(0).toUpperCase() + meat.value.slice(1)}: $${price.toFixed(2)}`);
        });
    }

    // Calculate vegetable toppings (first free, then $1 each)
    if (vegetables.length > 0) {
        vegetables.forEach((veggie, index) => {
            const price = index === 0 ? 0 : prices.toppings;
            total += price;
            details.push(`${veggie.value.charAt(0).toUpperCase() + veggie.value.slice(1)}: $${price.toFixed(2)}`);
        });
    }

    // Update order summary
    document.querySelector('#order-details').innerHTML = details.map(item => `<div>${item}</div>`).join('');
    document.querySelector('#order-total').innerText = `Total: $${parseFloat(total).toFixed(2)}`;
}

// Places the order and updates stats
function placeOrder() {
    const size = document.querySelector('input[name="size"]:checked');
    if (!size) {
        alert('Please select a pizza size.');
        return;
    }

    orderCounter++;
    streakCounter++;
    document.querySelector('#order-counter').innerText = orderCounter;
    document.querySelector('#streak-counter').innerText = streakCounter;

    // Save order to history
    const orderDetails = document.querySelector('#order-details').innerHTML;
    const orderTotal = document.querySelector('#order-total').innerText;
    orderHistory.push(`<div>Order #${orderCounter}:<br>${orderDetails}<br>${orderTotal}</div>`);
    document.querySelector('#order-history').innerHTML = orderHistory.join('');

    // Update achievements and trigger confetti
    updateAchievements();
    triggerConfetti();

    // Reset selections
    cancelOrder();
}

// Cancels the current order
function cancelOrder() {
    document.querySelectorAll('input[type="radio"], input[type="checkbox"]').forEach(input => input.checked = false);
    document.querySelector('#order-details').innerHTML = '';
    document.querySelector('#order-total').innerText = 'Total: $0.00';
    streakCounter = 0;
    document.querySelector('#streak-counter').innerText = streakCounter;
}

// Updates achievement badges
function updateAchievements() {
    if (orderCounter >= 5) {
        document.querySelector('#ach-5').classList.add('unlocked');
        if (orderCounter === 5) triggerConfetti();
    }
    if (orderCounter >= 10) {
        document.querySelector('#ach-10').classList.add('unlocked');
        if (orderCounter === 10) triggerConfetti();
    }
    if (orderCounter >= 20) {
        document.querySelector('#ach-20').classList.add('unlocked');
        if (orderCounter === 20) triggerConfetti();
    }
}

// Triggers confetti animation
function triggerConfetti() {
    if (typeof confetti === 'function') {
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 }, colors: ['#ffd700', '#ff4500'] });
    }
}

// Toggles light/dark theme
function toggleTheme() {
    darkMode = !darkMode; // Toggle using not operator
    document.body.classList.toggle('dark-mode');
    document.querySelector('.container').classList.toggle('dark-mode');
    document.querySelectorAll('button').forEach(btn => btn.classList.toggle('dark-mode'));
    document.querySelector('#theme-toggle').innerText = darkMode ? 'Light Mode' : 'Dark Mode';
}

// Keyboard support
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') placeOrder();
    if (event.key === 'Escape') cancelOrder();
});

// Initialize menu
updateOrder();