import React from 'react';

function Analytics() {
  // Dummy Data for Stats
  const stats = [
    { id: 1, title: "Total Revenue", value: "$45,231", growth: "+12.5%", color: "#4f46e5" },
    { id: 2, title: "Active Users", value: "2,405", growth: "+3.2%", color: "#10b981" },
    { id: 3, title: "New Orders", value: "156", growth: "+18.7%", color: "#f59e0b" },
    { id: 4, title: "Conversion Rate", value: "3.42%", growth: "-1.5%", color: "#ef4444" },
  ];

  return (
    <div style={{ padding: '25px', backgroundColor: '#f8f9fa', minHeight: '100vh', fontFamily: 'Segoe UI, sans-serif' }}>
      <div style={{ marginBottom: '25px' }}>
        <h1 style={{ color: '#333', fontSize: '26px', fontWeight: 'bold' }}>Analytics Dashboard</h1>
        <p style={{ color: '#666' }}>Traking your business performance and growth metrics.</p>
      </div>

      {/* Stats Grid */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
        gap: '20px',
        marginBottom: '30px' 
      }}>
        {stats.map((stat) => (
          <div key={stat.id} style={statCardStyle}>
            <p style={{ color: '#666', fontSize: '14px', margin: '0 0 10px 0' }}>{stat.title}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2 style={{ fontSize: '28px', margin: 0, color: '#111' }}>{stat.value}</h2>
              <span style={{ 
                fontSize: '12px', 
                fontWeight: 'bold', 
                color: stat.growth.startsWith('+') ? '#10b981' : '#ef4444',
                backgroundColor: stat.growth.startsWith('+') ? '#dcfce7' : '#fee2e2',
                padding: '4px 8px',
                borderRadius: '6px'
              }}>
                {stat.growth}
              </span>
            </div>
            <div style={{ marginTop: '15px', height: '4px', backgroundColor: '#eee', borderRadius: '2px' }}>
              <div style={{ width: '70%', height: '100%', backgroundColor: stat.color, borderRadius: '2px' }}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Visual Analytics Section */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px' }}>
        {/* Performance Overview (Fake Chart Area) */}
        <div style={contentBlockStyle}>
          <h3 style={{ marginBottom: '20px' }}>Performance Overview</h3>
          <div style={{ height: '200px', display: 'flex', alignItems: 'flex-end', gap: '10px', paddingBottom: '20px' }}>
            {[40, 70, 45, 90, 65, 80, 50, 95, 60, 75].map((height, i) => (
              <div key={i} style={{ 
                flex: 1, 
                height: `${height}%`, 
                backgroundColor: '#4f46e5', 
                borderRadius: '4px 4px 0 0',
                opacity: 0.7 + (i * 0.03) 
              }}></div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: '#999', fontSize: '12px' }}>
            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
          </div>
        </div>

        {/* Target Section */}
        <div style={contentBlockStyle}>
          <h3>Monthly Goal</h3>
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <h1 style={{ fontSize: '48px', color: '#4f46e5', margin: 0 }}>75%</h1>
            <p style={{ color: '#666' }}>Target Reached</p>
            <button style={{ 
              marginTop: '15px', 
              padding: '10px 20px', 
              backgroundColor: '#111', 
              color: 'white', 
              border: 'none', 
              borderRadius: '8px',
              cursor: 'pointer'
            }}>
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Styles
const statCardStyle = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '16px',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
  border: '1px solid #f0f0f0'
};

const contentBlockStyle = {
  backgroundColor: 'white',
  padding: '25px',
  borderRadius: '16px',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
  border: '1px solid #f0f0f0'
};

export default Analytics;