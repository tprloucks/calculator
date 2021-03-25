class Calculator{
    constructor(currentOperandTextElement, previousOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }
    clear(){
        this.currentOperand = ""
        this.previousOperand = ""
        this.operation = undefined
    }
    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand

    }
    appendNumber(number){
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }
}


 
const numButtons = document.querySelectorAll('.num');
const operatorButtons = document.querySelectorAll('.oper');
const equalsButton = document.querySelector('.is-red');
const clearButton = document.querySelector('.clear');
const currentOperandTextElement = document.querySelector('.current-operand')
const previousOperandTextElement = document.querySelector('.previous-operand')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    
    })
  })