// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// Variabel yang menampung data orders
let orders = [];

// Fungsi untuk menambah pesanan baru
function addOrder(customerName, items) {
  const totalPrice = items.reduce((acc, item) => acc + item.price, 0); // Menghitung total harga
  const newOrder = {
    id: generateUniqueId(),
    customerName,
    items,
    totalPrice,
    status: 'Menunggu' // Status default adalah 'Menunggu'
  };
  orders.push(newOrder);
}

// Fungsi untuk memperbarui status pesanan
function updateOrderStatus(orderId, status) {
  const order = orders.find(order => order.id === orderId);
  if (order) {
    order.status = status; // Update status pesanan
  }
}

// Fungsi untuk menghitung total pendapatan dari pesanan yang berstatus 'Selesai'
function calculateTotalRevenue() {
  return orders
    .filter(order => order.status === 'Selesai') // Menyaring pesanan yang selesai
    .reduce((total, order) => total + order.totalPrice, 0); // Menjumlahkan total harga dari pesanan yang selesai
}

// Fungsi untuk menghapus pesanan berdasarkan id
function deleteOrder(id) {
  orders = orders.filter(order => order.id !== id); // Menghapus pesanan berdasarkan id
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
