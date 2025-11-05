let belanja = 600000
let totalBelanja

if (belanja > 1e6) {
    totalBelanja = belanja - (belanja * 0.1)
      console.log("Total Harga : " + totalBelanja);
  } else if (belanja >= 5e5) {
    totalBelanja = belanja - (belanja * 0.05)
      console.log("Total Harga : " + totalBelanja);
  } else if (belanja < 5e5 && belanja > 0) {
      console.log("Total Harga : " + belanja);
  } else {
      console.log("Invalid");
  }