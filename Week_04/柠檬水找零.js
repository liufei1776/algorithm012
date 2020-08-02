/**
 * @param {number[]} bills
 * @return {boolean}
 */


// 优先使用10元而不是5元，诠释了“贪心” -- 手里都是5元最好；不是5元的，都兑花出去。 
var lemonadeChange = function(bills) {
   let five = 0;
   let ten = 0;
   // twenty = 0; //  其实不需要，因为最大是20

    for(bill of bills) {
        if(bill == 5) {
            five++;
        }
        else if(bill == 10) {
            five--;  // 只能用5元找零
            ten++;
        }
        else {
            // 20元的情况
            // twenty++; 
            if(ten == 0) {
                // 手里没10元，只能心疼的找3张5元
                five-=3;
            }
            else {
                ten--;  // 10元赶快找零出去
                five--;
            }
        }

        if(five<0 || ten<0) return false;
    }

    return true;
};

console.log(lemonadeChange([10,10]));