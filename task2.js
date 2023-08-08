"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
function calc_credit() {
    var bal = (0, readline_sync_1.question)("Enter balance:\n");
    var bal1 = parseInt(bal);
    while (bal1 > 100) {
        console.log('Enter value again:');
        bal = (0, readline_sync_1.question)();
        bal1 = parseInt(bal);
    }
    var min_bal = (0, readline_sync_1.question)("Enter minimum balance:\n");
    var min_bal1 = parseInt(min_bal);
    while (min_bal1 > 100) {
        console.log('Enter value again:');
        min_bal = (0, readline_sync_1.question)();
        min_bal1 = parseInt(min_bal);
    }
    var max_bal = (0, readline_sync_1.question)("Enter maximum balance:\n");
    var max_bal1 = parseInt(max_bal);
    while (max_bal1 > 100) {
        console.log('Enter value again:');
        max_bal = (0, readline_sync_1.question)();
        max_bal1 = parseInt(max_bal);
    }
    var sum_credit = bal1 + min_bal1 + max_bal1;
    if (sum_credit >= 250 && sum_credit <= 300) {
        console.log('A+');
    }
    else if (sum_credit >= 220 && sum_credit <= 250) {
        console.log('B');
    }
    else if (sum_credit >= 180 && sum_credit <= 220) {
        console.log('C');
    }
    else if (sum_credit >= 150 && sum_credit <= 180) {
        console.log('D');
    }
    else {
        console.log('Low');
    }
}
calc_credit();
