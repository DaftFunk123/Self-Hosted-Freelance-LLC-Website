import React from 'react';

export function Profile({ user }) {
  const [profile, setProfile] = React.useState({
    name: '',
    email: '',
    phone: '',
    businessType: 'tutoring',
    notifications: true
  });
  const [isEditing, setIsEditing] = React.useState(false);
  const [saved, setSaved] = React.useState(false);

  // Load profile from localStorage on mount
  React.useEffect(() => {
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    } else {
      setProfile({
        name: user || '',
        email: '',
        phone: '',
        businessType: 'tutoring',
        notifications: true
      });
    }
  }, [user]);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem('userProfile', JSON.stringify(profile));
    setIsEditing(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  return (
    <main className="container mt-5 pt-5">
      <h1>User Profile</h1>
      <p className="lead">Manage your account settings</p>

      {saved && (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
          Profile saved successfully!
          <button type="button" className="btn-close" onClick={() => setSaved(false)}></button>
        </div>
      )}

      <div className="card p-4">
        {!isEditing ? (
          // View Mode
          <div>
            <div className="row mb-3">
              <div className="col-sm-3 fw-bold">Username:</div>
              <div className="col-sm-9">{user}</div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-3 fw-bold">Name:</div>
              <div className="col-sm-9">{profile.name || 'Not set'}</div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-3 fw-bold">Email:</div>
              <div className="col-sm-9">{profile.email || 'Not set'}</div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-3 fw-bold">Phone:</div>
              <div className="col-sm-9">{profile.phone || 'Not set'}</div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-3 fw-bold">Business Type:</div>
              <div className="col-sm-9">
                {profile.businessType === 'tutoring' ? 'Tutoring' : 
                 profile.businessType === 'rental' ? 'Equipment Rental' : 
                 profile.businessType === 'music' ? 'Music Lessons' : 'Not set'}
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-sm-3 fw-bold">Notifications:</div>
              <div className="col-sm-9">{profile.notifications ? 'Enabled' : 'Disabled'}</div>
            </div>
            <button className="btn btn-primary" onClick={() => setIsEditing(true)}>
              Edit Profile
            </button>
          </div>
        ) : (
          // Edit Mode
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={profile.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={profile.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input
                type="tel"
                className="form-control"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Business Type</label>
              <select
                className="form-select"
                name="businessType"
                value={profile.businessType}
                onChange={handleChange}
              >
                <option value="tutoring">Tutoring</option>
                <option value="rental">Equipment Rental</option>
                <option value="music">Music Lessons</option>
              </select>
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name="notifications"
                checked={profile.notifications}
                onChange={handleChange}
                id="notifications"
              />
              <label className="form-check-label" htmlFor="notifications">
                Receive email notifications
              </label>
            </div>
            <div className="d-flex gap-2">
              <button type="submit" className="btn btn-success">
                Save Changes
              </button>
              <button type="button" className="btn btn-secondary" onClick={() => setIsEditing(false)}>
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </main>
  );
}