document.addEventListener("DOMContentLoaded", function () {
    const faqSection = document.querySelector(".faq-section");

    faqSection.addEventListener("click", function (event) {
        const clickedFaqItem = event.target.closest(".faq-item");

        if (clickedFaqItem) {
            const openFaqItem = document.querySelector(".faq-item.open");

            // Close currently open FAQ if it's not the same as clicked
            if (openFaqItem && openFaqItem !== clickedFaqItem) {
                openFaqItem.classList.remove("open");
                openFaqItem.querySelector(".faq-answer").style.maxHeight = null;
            }

            // Toggle the clicked FAQ item
            clickedFaqItem.classList.toggle("open");

            const answer = clickedFaqItem.querySelector(".faq-answer");
            if (clickedFaqItem.classList.contains("open")) {
                answer.style.maxHeight = answer.scrollHeight + "px";
            } else {
                answer.style.maxHeight = null;
            }
        }
    });
});



const monthlyBilling = document.getElementById('monthlyBilling');
const yearlyBilling = document.getElementById('yearlyBilling');
const discountButton = document.getElementById('discountButton');

// Function to handle the "Yearly Billing" effect
const activateYearlyBilling = () => {
    yearlyBilling.classList.add('active');
    monthlyBilling.classList.remove('active');
    discountButton.style.backgroundColor = '#47c652'; // Specific green color
    discountButton.classList.add('green');
};
        
// Function to handle the "Monthly Billing" effect
const activateMonthlyBilling = () => {
     monthlyBilling.classList.add('active');
    yearlyBilling.classList.remove('active');
    discountButton.style.backgroundColor = '#8a9bae'; // Specific grey color
    discountButton.classList.remove('green');
};
        
// Event listeners for billing buttons
monthlyBilling.addEventListener('click', activateMonthlyBilling);
yearlyBilling.addEventListener('click', activateYearlyBilling);
        
// Event listener for discount button (same effect as "Yearly Billing")
discountButton.addEventListener('click', activateYearlyBilling);
        
// Set default state to "Yearly Billing" and active discount button
window.onload = () => {
    activateYearlyBilling();
};   