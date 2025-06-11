// Exported variables and functions
export const BANK_NAME = "State Bank of India";

export let customerName = "";
export let amount = 0;

export function setCustomer(name, initialAmount = 0) {
  customerName = name;
  amount = initialAmount;
}

export function deposit(val) {
  amount += val;
  return amount;
}

export function getBalance() {
  return amount;
}

export function greet() {
  return `Hello, ${customerName}! Welcome to ${BANK_NAME}. Your balance is ₹${amount}.`;
}