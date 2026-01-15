import React, { useState } from 'react';
import { Leaf, Moon, Sun, Menu, X } from 'lucide-react';
import '../styles/Navbar.css';

const Navbar = ({ isDark, toggleTheme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`navbar ${isDark ? 'dark' : 'light'}`}>
            {/* Brand */}
            <div className="nav-brand">
                <Leaf size={28} fill={isDark ? "var(--color-gold)" : "var(--color-lime-green)"} strokeWidth={0} />
                <span style={{ color: isDark ? 'var(--color-gold)' : 'var(--color-black)' }}>CoLearn</span>
            </div>

            {/* Mobile Menu Toggle */}
            <button
                className="mobile-menu-toggle"
                onClick={toggleMenu}
                style={{ color: isDark ? 'var(--color-gold)' : 'var(--color-black)' }}
            >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Links & Actions Wrapper - Logic determines class based on mobile state */}
            <div className={`nav-content ${isMenuOpen ? 'mobile-open' : ''}`} style={{ backgroundColor: isMenuOpen && isDark ? '#000' : isMenuOpen ? '#fff' : 'transparent' }}>
                <div className="nav-links">
                    <a href="#home" className="nav-link" style={{ color: isDark ? 'var(--color-gold)' : 'var(--color-black)' }} onClick={() => setIsMenuOpen(false)}>Home</a>
                    <a href="#how-we-work" className="nav-link" style={{ color: isDark ? 'var(--color-gold)' : 'var(--color-black)' }} onClick={() => setIsMenuOpen(false)}>How We Work</a>
                    <a href="#features" className="nav-link" style={{ color: isDark ? 'var(--color-gold)' : 'var(--color-black)' }} onClick={() => setIsMenuOpen(false)}>Features</a>
                </div>

                <div className="nav-actions">
                    <button
                        onClick={toggleTheme}
                        className="theme-toggle"
                        style={{ color: isDark ? 'var(--color-gold)' : 'var(--color-black)' }}
                        aria-label="Toggle Theme"
                    >
                        {isDark ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    <button className="btn-login" style={{ color: isDark ? 'var(--color-gold)' : 'var(--color-black)', borderColor: isDark ? 'var(--color-gold)' : 'var(--color-black)' }}>
                        Login
                    </button>
                    <button className="btn-signup">
                        Signup
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
