import React from 'react';

function Customers() {
  // Updated Customers with working Nature Images
  const customers = [
    { id: 1, name: "Zeeshan Khan", email: "zeeshan@example.com", spend: "$4,200", joined: "Jan 2024", avatar: "https://picsum.photos/seed/nature1/200" },
    { id: 2, name: "Umer Sheikh", email: "umer@example.com", spend: "$2,850", joined: "Feb 2024", avatar: "https://picsum.photos/seed/mountain/200" },
    { id: 3, name: "Danish Taimoor", email: "danish@example.com", spend: "$3,100", joined: "Mar 2024", avatar: "https://picsum.photos/seed/forest/200" },
    { id: 4, name: "Bilal Raza", email: "bilal@example.com", spend: "$1,000", joined: "Dec 2023", avatar: "https://picsum.photos/seed/river/200" },
    { id: 5, name: "Fawad Khan", email: "fawad@example.com", spend: "$2,900", joined: "Jan 2024", avatar: "https://picsum.photos/seed/sky/200" },
    { id: 6, name: "Hamza Ali", email: "hamza@example.com", spend: "$4,300", joined: "Nov 2023", avatar: "https://picsum.photos/seed/winter/200" }, // Seed changed to winter
  ];

  return (
    <div style={{ padding: '25px', backgroundColor: '#f8f9fa', minHeight: '100vh', fontFamily: 'Segoe UI, sans-serif' }}>
      <div style={{ marginBottom: '25px' }}>
        <h1 style={{ color: '#333', fontSize: '26px', fontWeight: 'bold' }}>Customer Profiles</h1>
        <p style={{ color: '#666' }}>Manage and view your customer base with refreshing nature-themed profile icons.</p>
      </div>

      {/* Grid Layout */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
        gap: '20px' 
      }}>
        {customers.map((user) => (
          <div key={user.id} style={cardStyle}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
              <img 
                src={user.avatar} 
                alt={user.name} 
                style={{ 
                    width: '65px', 
                    height: '65px', 
                    borderRadius: '12px', // Square-ish look looks better with landscape photos
                    marginRight: '15px', 
                    border: '2px solid #e5e7eb',
                    objectFit: 'cover' // Crucial for non-distorted images
                }} 
              />
              <div>
                <h3 style={{ margin: 0, fontSize: '18px', color: '#111' }}>{user.name}</h3>
                <p style={{ margin: 0, fontSize: '13px', color: '#666' }}>{user.email}</p>
              </div>
            </div>

            <div style={{ borderTop: '1px solid #eee', paddingTop: '15px', display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <p style={labelStyle}>Total Spend</p>
                <p style={valueStyle}>{user.spend}</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={labelStyle}>Member Since</p>
                <p style={valueStyle}>{user.joined}</p>
              </div>
            </div>

            <button style={btnStyle}>View Profile</button>
          </div>
        ))}
      </div>
    </div>
  );
}

// Inline Styles (Unchanged)
const cardStyle = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '12px',
  boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
  transition: 'transform 0.2s ease',
  cursor: 'default',
};

const labelStyle = {
  margin: 0,
  fontSize: '11px',
  color: '#999',
  textTransform: 'uppercase',
  fontWeight: '600'
};

const valueStyle = {
  margin: '2px 0 0 0',
  fontSize: '15px',
  color: '#333',
  fontWeight: 'bold'
};

const btnStyle = {
  marginTop: '20px',
  width: '100%',
  padding: '10px',
  backgroundColor: '#f3f4f6',
  border: 'none',
  borderRadius: '8px',
  color: '#4f46e5',
  fontWeight: '600',
  cursor: 'pointer',
  transition: '0.3s'
};

export default Customers;