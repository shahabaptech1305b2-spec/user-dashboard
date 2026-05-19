import React from 'react';

function ProfileSettings() {
  return (
    <div style={{ padding: '25px', backgroundColor: '#f8f9fa', minHeight: '100vh', fontFamily: 'Segoe UI, sans-serif' }}>
      <div style={{ marginBottom: '25px' }}>
        <h1 style={{ color: '#333', fontSize: '26px', fontWeight: 'bold' }}>Profile Settings</h1>
        <p style={{ color: '#666' }}>Update your personal information and account preferences.</p>
      </div>

      <div style={containerStyle}>
        {/* Left Side: Profile Picture Section */}
        <div style={sidebarStyle}>
          <div style={{ textAlign: 'center' }}>
            <div style={imageWrapperStyle}>
              <img 
                src="https://picsum.photos/seed/mountain/150" 
                alt="Profile" 
                style={profileImageStyle} 
              />
              <button style={changePicBtnStyle}>Change Photo</button>
            </div>
            <h3 style={{ marginTop: '15px', color: '#111' }}>Zeeshan Khan</h3>
            <p style={{ color: '#666', fontSize: '14px' }}>Administrator</p>
          </div>
          
          <div style={{ marginTop: '30px' }}>
             <button style={navItemActive}>Public Profile</button>
             <button style={navItem}>Account Settings</button>
             <button style={navItem}>Notifications</button>
             <button style={navItem}>Security & Privacy</button>
          </div>
        </div>

        {/* Right Side: Form Section */}
        <div style={formSectionStyle}>
          <h3 style={{ marginBottom: '20px', color: '#333' }}>Personal Information</h3>
          
          <div style={gridFormStyle}>
            <div style={inputGroup}>
              <label style={labelStyle}>First Name</label>
              <input type="text" defaultValue="Zeeshan" style={inputStyle} />
            </div>
            <div style={inputGroup}>
              <label style={labelStyle}>Last Name</label>
              <input type="text" defaultValue="Khan" style={inputStyle} />
            </div>
            <div style={inputGroup}>
              <label style={labelStyle}>Email Address</label>
              <input type="email" defaultValue="zeeshan@example.com" style={inputStyle} />
            </div>
            <div style={inputGroup}>
              <label style={labelStyle}>Phone Number</label>
              <input type="text" defaultValue="+92 300 1234567" style={inputStyle} />
            </div>
          </div>

          <div style={{ ...inputGroup, marginTop: '20px' }}>
            <label style={labelStyle}>Bio</label>
            <textarea 
              rows="4" 
              defaultValue="I am a passionate developer working on modern dashboard solutions." 
              style={{ ...inputStyle, resize: 'none' }}
            />
          </div>

          <div style={{ marginTop: '30px', display: 'flex', gap: '15px' }}>
            <button style={saveBtnStyle}>Save Changes</button>
            <button style={cancelBtnStyle}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Styles
const containerStyle = {
  display: 'grid',
  gridTemplateColumns: '300px 1fr',
  gap: '30px',
  backgroundColor: 'white',
  borderRadius: '16px',
  padding: '30px',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
  border: '1px solid #f0f0f0'
};

const sidebarStyle = {
  borderRight: '1px solid #f0f0f0',
  paddingRight: '30px'
};

const imageWrapperStyle = {
  position: 'relative',
  display: 'inline-block'
};

const profileImageStyle = {
  width: '120px',
  height: '120px',
  borderRadius: '20px',
  objectFit: 'cover',
  border: '4px solid #f3f4f6'
};

const changePicBtnStyle = {
  position: 'absolute',
  bottom: '-10px',
  left: '50%',
  transform: 'translateX(-50%)',
  backgroundColor: '#111',
  color: 'white',
  border: 'none',
  padding: '5px 12px',
  borderRadius: '20px',
  fontSize: '11px',
  cursor: 'pointer'
};

const formSectionStyle = {
  paddingLeft: '10px'
};

const gridFormStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '20px'
};

const inputGroup = {
  display: 'flex',
  flexDirection: 'column'
};

const labelStyle = {
  fontSize: '13px',
  fontWeight: '600',
  color: '#4b5563',
  marginBottom: '8px'
};

const inputStyle = {
  padding: '10px 15px',
  borderRadius: '8px',
  border: '1px solid #e5e7eb',
  fontSize: '14px',
  outline: 'none',
  backgroundColor: '#f9fafb'
};

const saveBtnStyle = {
  padding: '12px 25px',
  backgroundColor: '#4f46e5',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  fontWeight: '600',
  cursor: 'pointer'
};

const cancelBtnStyle = {
  padding: '12px 25px',
  backgroundColor: '#f3f4f6',
  color: '#4b5563',
  border: 'none',
  borderRadius: '8px',
  fontWeight: '600',
  cursor: 'pointer'
};

const navItem = {
  display: 'block',
  width: '100%',
  textAlign: 'left',
  padding: '12px 15px',
  backgroundColor: 'transparent',
  border: 'none',
  borderRadius: '8px',
  color: '#666',
  fontSize: '14px',
  cursor: 'pointer',
  marginBottom: '5px'
};

const navItemActive = {
  ...navItem,
  backgroundColor: '#eef2ff',
  color: '#4f46e5',
  fontWeight: '600'
};

export default ProfileSettings;