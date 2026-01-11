// utils/currencyConverter.js
// Static exchange rates for now; later you can fetch from an API
const EXCHANGE_RATES = {
    USD: 1,       // base
    EUR: 0.92,
    GBP: 0.80,
    SEK: 11.2,
    NOK: 11.8,
};

/**
 * Convert price from one currency to another
 * @param {number} amount - price in fromCurrency
 * @param {string} fromCurrency - original currency (USD, EUR, etc.)
 * @param {string} toCurrency - target currency
 * @returns {number} converted price
 */
export function convertPrice(amount, fromCurrency, toCurrency) {
    if (!EXCHANGE_RATES[fromCurrency] || !EXCHANGE_RATES[toCurrency]) {
        console.warn(`Unknown currency: ${fromCurrency} or ${toCurrency}`);
        return amount;
    }

    // Convert to base (USD), then to target
    const amountInUSD = amount / EXCHANGE_RATES[fromCurrency];
    const converted = amountInUSD * EXCHANGE_RATES[toCurrency];

    // Optional: round to 2 decimals
    return Math.round(converted * 100) / 100;
}
