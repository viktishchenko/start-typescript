let logged;

function sendAnalytics(data: string) {
  console.log(data);
  logged = true;
}

const res = sendAnalytics("The datas");
console.log("res", res);
