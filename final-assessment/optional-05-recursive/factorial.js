function factorial(n) {
    if (n === 0 || n === 1) {
      return 1; // Basis rekursi: faktorial dari 0 dan 1 adalah 1
    }
    return n * factorial(n - 1); // Rekursi untuk menghitung faktorial
  }
  
  // Jangan hapus kode di bawah ini!
  export default factorial;
  