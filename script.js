function buypass() {
  if (!window.PaymentRequest) return alert("Payment Request API is not available! :wompwomp:");

  new PaymentRequest(
    [{
      supportedMethods: location.origin + "/ballspass/pay/ballsment.json",
      data: {
        url: document.querySelector("input").value
      },
    }],
    {
      total: {
        label: "no homo pass",
        amount: {
          value: "69420", currency: "USD"
        },
      },
    }
  ).show();
}

document.querySelector("button").onclick = buypass;
