'use client';

import React, { useState, } from 'react';
import { X, LogIn, Home } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import '../../assets/css/style.css';



const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const pathname = usePathname();
    return (
        <header className="ras-header">
            <nav className="ras-main-nav">
                <div className="ras-container">
                    <ul className="ras-menu-list">
                        <li className="ras-menu-item ras-home-item">
                            <Link href="/">
                                <Image
                                    src="/img/photo-output.jpeg"
                                    className="ras-logo-image"
                                    alt="پرتو امید"
                                    width={120}
                                    height={20}
                                    priority
                                />
                            </Link>
                            <p style={{ marginRight: '65px', whiteSpace: 'nowrap' }}>مرکز مشاوره پرتو امید</p>                            <Link href="/" className={`ras-menu-link ras-home-link ${pathname === '/' ? 'active' : ''}`}>
                                <Home size={18} />
                                <span>خانه</span>
                            </Link>
                        </li>


                    </ul>
                </div>
            </nav>

            {isMenuOpen && (
                <div
                    className={`menu-overlay ras-mobile-overlay ${isMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                >
                    <div className="ras-mobile-menu" onClick={(e) => e.stopPropagation()}>
                        <div className="ras-mobile-header">
                            <span className="ras-mobile-title">منوی سایت</span>
                            <button
                                className="ras-mobile-close"
                                onClick={() => setIsMenuOpen(false)}
                                aria-label="بستن منو"
                            >
                                <X size={24} />
                            </button>
                        </div>
                        <div className="ras-mobile-content">
                            {/* گزینه خانه در منوی موبایل */}
                            <div className="ras-mobile-menu-item">
                                <Link href="/" className="ras-mobile-menu-link" onClick={() => setIsMenuOpen(false)}>
                                    <Home size={18} style={{ marginLeft: '8px' }} />
                                    <span>خانه</span>
                                </Link>
                            </div>
                            <div style={{ marginTop: '20px', padding: '15px', borderTop: '1px solid #eaeaea' }}>
                                <Link href="/account" className="ras-mobile-menu-link" style={{ color: '#ffb726' }} onClick={() => setIsMenuOpen(false)}>
                                    <LogIn size={18} style={{ marginLeft: '8px' }} />
                                    ورود / ثبت نام
                                </Link>
                                <Link href="/vendor" className="ras-mobile-menu-link" style={{ color: '#ffb726', marginTop: '10px' }}>
                                    <span>💰</span>
                                    فروشنده شوید
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;