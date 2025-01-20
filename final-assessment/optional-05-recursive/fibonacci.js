// Fungsi rekursif untuk menghasilkan deret Fibonacci hingga elemen ke-n
function fibonacci(n) {
    if (n === 0) {
      return [0];  // Basis: elemen pertama deret Fibonacci adalah [0]
    } else if (n === 1) {
      return [0, 1];  // Basis: elemen kedua adalah [0, 1]
    }
    const fib = fibonacci(n - 1);  // Rekursif: menghitung deret Fibonacci hingga elemen ke-(n-1)
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);  // Menambahkan elemen ke-n dalam deret
    return fib;
  }
  
  // Jangan hapus kode di bawah ini!
  export default fibonacci;
  