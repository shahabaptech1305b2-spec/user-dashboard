import React from 'react';

const Orders = () => {
  // Dummy Orders Data
  const orderData = [
    { id: "#ORD-7721", customer: "Ali Khan", product: "iPhone 15 Pro", date: "2024-03-15", amount: "$999", status: "Delivered" },
    { id: "#ORD-8812", customer: "Saleem Ahmed", product: "MacBook Air M2", date: "2024-03-14", amount: "$1,199", status: "Pending" },
    { id: "#ORD-9905", customer: "Hamza Sheikh", product: "Sony WH-1000XM5", date: "2024-03-12", amount: "$350", status: "Shipped" },
    { id: "#ORD-1120", customer: "Junaid Khan", product: "Apple Watch S9", date: "2024-03-10", amount: "$399", status: "Cancelled" },
    { id: "#ORD-4432", customer: "Bilal Raza", product: "Dell XPS 13", date: "2024-03-08", amount: "$1,450", status: "Delivered" },
  ];

  // Status Badge Styling Logic
  const getStatusStyle = (status) => {
    switch (status) {
      case 'Delivered': return { backgroundColor: '#dcfce7', color: '#166534' }; // Green
      case 'Pending': return { backgroundColor: '#fef9c3', color: '#854d0e' };   // Yellow
      case 'Shipped': return { backgroundColor: '#dbeafe', color: '#1e40af' };   // Blue
      case 'Cancelled': return { backgroundColor: '#fee2e2', color: '#991b1b' }; // Red
      default: return { backgroundColor: '#f3f4f6', color: '#374151' };
    }
  };

  return (
    <div style={{ padding: '25px', backgroundColor: '#f8f9fa', minHeight: '100vh', fontFamily: 'Segoe UI, sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1 style={{ color: '#333', fontSize: '24px', fontWeight: '600' }}>Recent Orders</h1>
        <button style={{ padding: '10px 20px', backgroundColor: '#4f46e5', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
          Export Report
        </button>
      </div>

      <div style={{ backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ backgroundColor: '#f3f4f6', borderBottom: '1px solid #e5e7eb' }}>
              <th style={tableHeaderStyle}>Order ID</th>
              <th style={tableHeaderStyle}>Customer</th>
              <th style={tableHeaderStyle}>Product</th>
              <th style={tableHeaderStyle}>Date</th>
              <th style={tableHeaderStyle}>Amount</th>
              <th style={tableHeaderStyle}>Status</th>
            </tr>
          </thead>
          <tbody>
            {orderData.map((order) => (
              <tr key={order.id} style={{ borderBottom: '1px solid #f0f0f0', transition: '0.3s' }} 
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                <td style={tableCellStyle}>{order.id}</td>
                <td style={{ ...tableCellStyle, fontWeight: '500' }}>{order.customer}</td>
                <td style={tableCellStyle}>{order.product}</td>
                <td style={tableCellStyle}>{order.date}</td>
                <td style={{ ...tableCellStyle, fontWeight: '600' }}>{order.amount}</td>
                <td style={tableCellStyle}>
                  <span style={{ 
                    padding: '5px 12px', 
                    borderRadius: '20px', 
                    fontSize: '12px', 
                    fontWeight: '600',
                    ...getStatusStyle(order.status) 
                  }}>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Reusable Styles
const tableHeaderStyle = {
  padding: '15px',
  color: '#4b5563',
  fontSize: '14px',
  fontWeight: '600',
  textTransform: 'uppercase',
  letterSpacing: '0.5px'
};

const tableCellStyle = {
  padding: '15px',
  fontSize: '14px',
  color: '#374151'
};

export default Orders;