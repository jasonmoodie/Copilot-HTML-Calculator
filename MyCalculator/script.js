class Calculator {
    constructor() {
        this.displayValue = '0';
        this.firstOperand = null;
        this.waitingForOperand = false;
        this.operator = null;
        this.display = document.getElementById('display-value');
        this.initializeEventListeners();
        this.updateDisplay();
    }

    initializeEventListeners() {
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const value = button.getAttribute('data-value');
                this.handleInput(value);
            });
        });

        // Add keyboard support
        document.addEventListener('keydown', (event) => {
            this.handleKeyboard(event);
        });
    }

    // Add pi input support to 5 decimal places

    handleInput(value) {
        if (this.isNumber(value)) {
            this.inputNumber(value);
        // Add support for pi
        } else if (this.isOperator(value)) {
            this.inputOperator(value);
        } else if (value === '=') {
            this.calculate();
        } else if (value === 'clear') {
            this.clear();
        }
        this.updateDisplay();
        this.animateFace();
    }

    handleKeyboard(event) {
        const key = event.key;
        event.preventDefault();

        if (key >= '0' && key <= '9') {
            this.handleInput(key);
        } else if (key === '+' || key === '-') {
            this.handleInput(key);
        } else if (key === '*') {
            this.handleInput('×');
        } else if (key === '/') {
            this.handleInput('÷');
        } else if (key === 'Enter' || key === '=') {
            this.handleInput('=');
        } else if (key === 'Escape' || key === 'c' || key === 'C') {
            this.handleInput('clear');
        }
    }

    isNumber(value) {
        return /\d/.test(value);
    }

    isOperator(value) {
        return ['+', '-', '×', '÷'].includes(value);
    }

    inputNumber(number) {
        if (this.waitingForOperand) {
            this.displayValue = number;
            this.waitingForOperand = false;
        } else {
            this.displayValue = this.displayValue === '0' ? number : this.displayValue + number;
        }
    }

    inputOperator(nextOperator) {
        const inputValue = parseFloat(this.displayValue);

        if (this.firstOperand === null) {
            this.firstOperand = inputValue;
        } else if (this.operator) {
            const currentValue = this.firstOperand || 0;
            const newValue = this.performCalculation();

            this.displayValue = String(newValue);
            this.firstOperand = newValue;
        }

        this.waitingForOperand = true;
        this.operator = nextOperator;
    }

    calculate() {
        const inputValue = parseFloat(this.displayValue);

        if (this.firstOperand !== null && this.operator) {
            const newValue = this.performCalculation();
            this.displayValue = String(newValue);
            this.firstOperand = null;
            this.operator = null;
            this.waitingForOperand = true;
        }
    }

    performCalculation() {
        const prev = this.firstOperand;
        const current = parseFloat(this.displayValue);
        let result = 0;

        switch (this.operator) {
            case '+':
                result = prev + current;
                break;
            case '-':
                result = prev - current;
                break;
            case '×':
                result = prev * current;
                break;
            case '÷':
                result = current !== 0 ? prev / current : 0;
                break;
            default:
                return current;
        }

        // Round to avoid floating point precision issues
        return Math.round((result + Number.EPSILON) * 100000000) / 100000000;
    }

    clear() {
        this.displayValue = '0';
        this.firstOperand = null;
        this.waitingForOperand = false;
        this.operator = null;
    }

    updateDisplay() {
        // Format large numbers
        let displayText = this.displayValue;
        if (displayText.length > 12) {
            displayText = parseFloat(displayText).toExponential(6);
        }
        this.display.textContent = displayText;
    }

    animateFace() {
        const eyes = document.querySelectorAll('.eye');
        const mouth = document.querySelector('.mouth');
        
        // Blink animation
        eyes.forEach(eye => {
            eye.style.transform = 'scaleY(0.1)';
            setTimeout(() => {
                eye.style.transform = 'scaleY(1)';
            }, 100);
        });

        // Mouth animation for calculations
        if (this.operator || this.waitingForOperand) {
            mouth.style.borderRadius = '15px 15px 0 0';
            setTimeout(() => {
                mouth.style.borderRadius = '0 0 15px 15px';
            }, 200);
        }
    }
}

// Initialize calculator when page loads
document.addEventListener('DOMContentLoaded', () => {
    new Calculator();
});

// Add some fun interactions
document.addEventListener('DOMContentLoaded', () => {
    const calculator = document.querySelector('.calculator');
    
    // Add hover effect to the whole calculator
    calculator.addEventListener('mouseenter', () => {
        const eyes = document.querySelectorAll('.pupil');
        eyes.forEach(pupil => {
            pupil.style.transform = 'translate(3px, -2px)';
        });
    });

    calculator.addEventListener('mouseleave', () => {
        const eyes = document.querySelectorAll('.pupil');
        eyes.forEach(pupil => {
            pupil.style.transform = 'translate(0, 0)';
        });
    });
});