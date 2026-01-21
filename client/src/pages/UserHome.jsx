import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Menu,
    X,
    Users,
    PlusCircle,
    LogIn,
    Settings,
    LogOut,
    User,
    Leaf,
    Code,
    Sun,
    Moon
} from 'lucide-react';
import '../styles/UserHome.css';

const UserHome = ({ isDark, toggleTheme }) => {
    const [myGroups, setMyGroups] = useState([]);

    useEffect(() => {
        // This is where you would fetch data from your database
        // example: fetch('/api/user/groups').then(...)
        const mockData = [
            { id: 1, name: "Web Dev Alpha", members: 12 },
            { id: 2, name: "React Learners", members: 8 },
            { id: 3, name: "Algorithm Squad", members: 5 },
            { id: 4, name: "Python Basics", members: 21 },
        ];
        setMyGroups(mockData);
    }, []);

    return (
        <div className="dashboard-container">
            {/* Top Navbar */}
            <nav className="dashboard-navbar">
                <div className="dashboard-brand">
                    <Leaf size={28} fill="currentColor" strokeWidth={0} />
                    <span>CoLearn</span>
                </div>

                <div className="dashboard-nav-right">
                    <button onClick={toggleTheme} className="nav-icon-btn">
                        {isDark ? <Sun size={22} /> : <Moon size={22} />}
                    </button>
                    <button className="nav-icon-btn">
                        <Settings size={22} />
                    </button>
                    <button className="nav-icon-btn" style={{ color: '#ef4444' }}>
                        <LogOut size={22} />
                    </button>
                    <div className="user-avatar-circle">
                        NK
                    </div>
                </div>
            </nav>

            <main className="dashboard-main">
                {/* Row 1: My Groups (Left) & Join Group (Right) */}
                <div className="dashboard-row-1">
                    {/* Left: My Groups */}
                    <div className="section-container">
                        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                            <h2 className="section-title" style={{ marginBottom: 0 }}><Users /> My Groups</h2>
                            <Link to="/all-groups" style={{ fontSize: '0.9rem', color: 'var(--color-lime-green)', textDecoration: 'none', fontFamily: 'var(--font-display)', fontWeight: '600' }}>
                                All Groups →
                            </Link>
                        </div>
                        <div className="my-groups-container">
                            {myGroups.map(group => (
                                <div key={group.id} className="group-card-square">
                                    <div className="group-info">
                                        <h3>{group.name}</h3>
                                    </div>
                                    <div className="group-meta">
                                        <User size={16} />
                                        <span>{group.members} members</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Join Group */}
                    <div className="section-container">
                        <h2 className="section-title"><LogIn /> Join Group</h2>
                        <div className="join-action-card">
                            <div className="form-group">
                                <label className="form-label">Group ID</label>
                                <input type="text" className="form-input" placeholder="Enter Group ID" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Group Key</label>
                                <input type="password" className="form-input" placeholder="Enter Group Key" />
                            </div>
                            <button className="btn-primary-block">Join</button>
                        </div>
                    </div>
                </div>

                {/* Row 2: Create Group (Left) & Create Coding Collab (Right) */}
                <div className="dashboard-row-2">
                    {/* Left: Create Group */}
                    <div className="section-container">
                        <h2 className="section-title"><PlusCircle /> Create Group</h2>
                        <div className="action-card">
                            <div className="form-group">
                                <label className="form-label">Group Name</label>
                                <input type="text" className="form-input" placeholder="e.g. History Class" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Group ID</label>
                                <input type="text" className="form-input" placeholder="Alphanumeric (eg - abc123)" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Secret Key</label>
                                <input type="password" className="form-input" placeholder="Numerics (eg - 123456)" />
                            </div>
                            <button className="btn-primary-block">Create Group</button>
                        </div>
                    </div>

                    {/* Right: Create Coding Collab */}
                    <div className="section-container">
                        <h2 className="section-title"><Code /> Create Coding Collab</h2>
                        <div className="action-card">
                            <div className="form-group">
                                <label className="form-label">Collab Name</label>
                                <input type="text" className="form-input" placeholder="e.g. Hackathon Prep" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Unique ID</label>
                                <input type="text" className="form-input" placeholder="Alpha Numerics(eg - abc123)" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Secret Key</label>
                                <input type="password" className="form-input" placeholder="Numerics(eg - 123456)" />
                            </div>
                            <button className="btn-primary-block">Start Coding</button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default UserHome;
