"use strict";
let logged;
function sendAnalytics(data) {
    console.log(data);
    logged = true;
}
const res = sendAnalytics("The datas");
console.log("res", res);
//# sourceMappingURL=analytics.js.map