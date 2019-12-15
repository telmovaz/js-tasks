/**
 * Two variables below (currency and amount)
 * We will assign to them currency and how much
 * we want to convert.
 */
let currency;
let amount;

/**
 * run() function below will start work as soon as 
 * you will click a convert button. Put all
 * logic inside of this function.
 * 
 * What you need to know:
 * There are four global variables available:
 * 
 * 1. usdValue
 * 2. eurValue
 * 3. gbpValue
 * 4. chfValue
 * 
 * There variables already exist! Do not recreate them! Just use them.
 * Each variable attached to input fiels.
 * 
 * 
 * /////// TASK ///////
 * 
 * 1. Create if - else if - else if - else coonditions
 *    and verify which input has some value entered
 * 2. Inside of each condition convert currency variable from
 *    string to number using parseInt().
 * 3. Assign type of currency (usd, gbp, chf, eur)
 *    to 'currency' variable; assign variable with amount
 *    (usdValue, gbpValue, chfValue, eurValue)
 */

function run() {
    if (usdValue.length) {
        currency = 'usd';
        amount = parseInt(usdValue);
        
    } else if (eurValue.length) {
        currency = 'eur';
        amount = parseInt(eurValue);
        
    } else if (gbpValue.length) {
        currency = 'gbp';
        amount = parseInt(gbpValue);
        
    } else if (chfValue.length) {
        currency = 'chf';
        amount = parseInt(chfValue);
        
    } else {
        alert('Nothing to convert :(');
    }
}
