let belanja = -2_000_000
let totalBelanja

switch (true) {
    case belanja > 1e6: 
        totalBelanja = belanja - (belanja * 0.1)
        console.log("Total Harga : " + totalBelanja);
        break
    case belanja >= 5e5: 
        totalBelanja = belanja - (belanja * 0.05)
        console.log("Total Harga : " + totalBelanja);
        break
    case belanja < 5e5 && belanja > 0: 
        console.log("Total Harga : " + belanja);
        break
    default:
        console.log("Invalid");
  }