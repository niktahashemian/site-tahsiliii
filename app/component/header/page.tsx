
// // // 'use client';

// // // import React, { useState } from 'react';
// // // import { X, LogIn, Home, Menu } from 'lucide-react';
// // // import Link from 'next/link';
// // // import Image from 'next/image';
// // // import { usePathname } from 'next/navigation';
// // // import '../../assets/css/style.css';

// // // const Header = () => {
// // //     const [isMenuOpen, setIsMenuOpen] = useState(false);
// // //     const pathname = usePathname();
    
// // //     return (
// // //         <header className="ras-header">
// // //             <nav className="ras-main-nav">
// // //                 <div className="ras-container">
// // //                     <ul className="ras-menu-list">
// // //                         <li className="ras-menu-item ras-home-item">
// // //                             <Link href="/">
// // //                                 <Image
// // //                                     src="/img/parto.PNG"
// // //                                     className="ras-logo-image"
// // //                                     alt="پرتو امید"
// // //                                     width={120}
// // //                                     height={20}
// // //                                     priority
// // //                                 />
// // //                             </Link>
// // //                             <p style={{ marginRight: '65px', whiteSpace: 'nowrap' }}>مرکز مشاوره پرتو امید</p>
                            
// // //                             {/* دکمه همبرگر - فقط در موبایل نمایش داده میشه */}
// // //                             <button 
// // //                                 className="ras-mobile-toggle"
// // //                                 onClick={() => setIsMenuOpen(true)}
// // //                                 aria-label="باز کردن منو"
// // //                             >
// // //                                 <Menu size={28} />
// // //                             </button>
                            
// // //                             <Link href="/" className={`ras-menu-link ras-home-link ${pathname === '/' ? 'active' : ''}`}>
// // //                                 <Home size={18} />
// // //                                 <span>خانه</span>
// // //                             </Link>
// // //                         </li>
// // //                     </ul>
// // //                 </div>
// // //             </nav>

// // //             {/* منوی موبایل */}
// // //             <div
// // //                 className={`menu-overlay ras-mobile-overlay ${isMenuOpen ? 'active' : ''}`}
// // //                 onClick={() => setIsMenuOpen(false)}
// // //             >
// // //                 <div className="ras-mobile-menu" onClick={(e) => e.stopPropagation()}>
// // //                     <div className="ras-mobile-header">
// // //                         <span className="ras-mobile-title">منوی سایت</span>
// // //                         <button
// // //                             className="ras-mobile-close"
// // //                             onClick={() => setIsMenuOpen(false)}
// // //                             aria-label="بستن منو"
// // //                         >
// // //                             <X size={24} />
// // //                         </button>
// // //                     </div>
// // //                     <div className="ras-mobile-content">
// // //                         <div className="ras-mobile-menu-item">
// // //                             <Link href="/" className="ras-mobile-menu-link" onClick={() => setIsMenuOpen(false)}>
// // //                                 <Home size={18} style={{ marginLeft: '8px' }} />
// // //                                 <span>خانه</span>
// // //                             </Link>
// // //                         </div>
// // //                         <div style={{ marginTop: '20px', padding: '15px', borderTop: '1px solid #eaeaea' }}>
// // //                             <Link href="/account" className="ras-mobile-menu-link" style={{ color: '#ffb726' }} onClick={() => setIsMenuOpen(false)}>
// // //                                 <LogIn size={18} style={{ marginLeft: '8px' }} />
// // //                                 ورود / ثبت نام
// // //                             </Link>
// // //                             <Link href="/vendor" className="ras-mobile-menu-link" style={{ color: '#ffb726', marginTop: '10px' }}>
// // //                                 <span>💰</span>
// // //                                 فروشنده شوید
// // //                             </Link>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </div>
// // //         </header>
// // //     );
// // // };

// // // export default Header;
// // 'use client';

// // import React, { useState } from 'react';
// // import { X, LogIn, Home, Menu } from 'lucide-react';
// // import Link from 'next/link';
// // import Image from 'next/image';
// // import { usePathname } from 'next/navigation';
// // import '../../assets/css/style.css';

// // const Header = () => {
// //     const [isMenuOpen, setIsMenuOpen] = useState(false);
// //     const pathname = usePathname();
    
// //     return (
// //         <header className="ras-header">
// //             <nav className="ras-main-nav">
// //                 <div className="ras-container">
// //                     <ul className="ras-menu-list">
// //                         <li className="ras-menu-item ras-home-item">
// //                             <Link href="/">
// //                                 <Image
// //                                     src="/img/parto.PNG"
// //                                     className="ras-logo-image"
// //                                     alt="پرتو امید"
// //                                     width={120}
// //                                     height={20}
// //                                     priority
// //                                 />
// //                             </Link>
// //                             <p style={{ marginRight: '65px', whiteSpace: 'nowrap' }}>مرکز مشاوره پرتو امید</p>
                            
// //                             <button 
// //                                 className="ras-mobile-toggle"
// //                                 onClick={() => setIsMenuOpen(true)}
// //                                 aria-label="باز کردن منو"
// //                             >
// //                                 <Menu size={28} />
// //                             </button>
                            
// //                             <Link href="/" className={`ras-menu-link ras-home-link ${pathname === '/' ? 'active' : ''}`}>
// //                                 <Home size={18} />
// //                                 <span>خانه</span>
// //                             </Link>
// //                         </li>
// //                     </ul>
// //                 </div>
// //             </nav>

// //             <div
// //                 className={`menu-overlay ras-mobile-overlay ${isMenuOpen ? 'active' : ''}`}
// //                 onClick={() => setIsMenuOpen(false)}
// //             >
// //                 <div className="ras-mobile-menu" onClick={(e) => e.stopPropagation()}>
// //                     <div className="ras-mobile-header">
// //                         <span className="ras-mobile-title">منوی سایت</span>
// //                         <button
// //                             className="ras-mobile-close"
// //                             onClick={() => setIsMenuOpen(false)}
// //                             aria-label="بستن منو"
// //                         >
// //                             <X size={24} />
// //                         </button>
// //                     </div>
// //                     <div className="ras-mobile-content">
// //                         <div className="ras-mobile-menu-item">
// //                             <Link href="/" className="ras-mobile-menu-link" onClick={() => setIsMenuOpen(false)}>
// //                                 <Home size={18} style={{ marginLeft: '8px' }} />
// //                                 <span>خانه</span>
// //                             </Link>
// //                         </div>
// //                         <div style={{ marginTop: '20px', padding: '15px', borderTop: '1px solid #eaeaea' }}>
// //                             <Link href="/account" className="ras-mobile-menu-link" style={{ color: '#ffb726' }} onClick={() => setIsMenuOpen(false)}>
// //                                 <LogIn size={18} style={{ marginLeft: '8px' }} />
// //                                 ورود / ثبت نام
// //                             </Link>
// //                             <Link href="/vendor" className="ras-mobile-menu-link" style={{ color: '#ffb726', marginTop: '10px' }}>
// //                                 <span>💰</span>
// //                                 فروشنده شوید
// //                             </Link>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </header>
// //     );
// // };

// // export default Header;
// 'use client';

// import React, { useState } from 'react';
// import { X, LogIn, Home, Menu } from 'lucide-react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { usePathname } from 'next/navigation';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../../assets/css/style.css';

// const Header = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const pathname = usePathname();
    
//     return (
//         <header className="ras-header">
//             <nav className="ras-main-nav">
//                 <div className="container-fluid">
//                     <div className="row align-items-center">
//                         <div className="col-12">
//                             <ul className="ras-menu-list">
//                                 <li className="ras-menu-item ras-home-item">
//                                     <Link href="/">
//                                         <Image
//                                             src="/img/parto.PNG"
//                                             className="ras-logo-image"
//                                             alt="پرتو امید"
//                                             width={120}
//                                             height={20}
//                                             priority
//                                         />
//                                     </Link>
//                                     <p className="mb-0" style={{ marginRight: '65px', whiteSpace: 'nowrap' }}>مرکز مشاوره پرتو امید</p>
                                    
//                                     {/* دکمه همبرگر - فقط در موبایل و تبلت */}
//                                     <button 
//                                         className="ras-mobile-toggle d-lg-none"
//                                         onClick={() => setIsMenuOpen(true)}
//                                         aria-label="باز کردن منو"
//                                     >
//                                         <Menu size={28} />
//                                     </button>
                                    
//                                     <Link href="/" className={`ras-menu-link ras-home-link d-none d-lg-flex ${pathname === '/' ? 'active' : ''}`}>
//                                         <Home size={18} />
//                                         <span>خانه</span>
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </nav>

//             {/* منوی موبایل */}
//             <div
//                 className={`menu-overlay ras-mobile-overlay ${isMenuOpen ? 'active' : ''}`}
//                 onClick={() => setIsMenuOpen(false)}
//             >
//                 <div className="ras-mobile-menu" onClick={(e) => e.stopPropagation()}>
//                     <div className="ras-mobile-header">
//                         <span className="ras-mobile-title">منوی سایت</span>
//                         <button
//                             className="ras-mobile-close"
//                             onClick={() => setIsMenuOpen(false)}
//                             aria-label="بستن منو"
//                         >
//                             <X size={24} />
//                         </button>
//                     </div>
//                     <div className="ras-mobile-content">
//                         <div className="ras-mobile-menu-item">
//                             <Link href="/" className="ras-mobile-menu-link" onClick={() => setIsMenuOpen(false)}>
//                                 <Home size={18} style={{ marginLeft: '8px' }} />
//                                 <span>خانه</span>
//                             </Link>
//                         </div>
//                         <div style={{ marginTop: '20px', padding: '15px', borderTop: '1px solid #eaeaea' }}>
//                             <Link href="/account" className="ras-mobile-menu-link" style={{ color: '#ffb726' }} onClick={() => setIsMenuOpen(false)}>
//                                 <LogIn size={18} style={{ marginLeft: '8px' }} />
//                                 ورود / ثبت نام
//                             </Link>
//                             <Link href="/vendor" className="ras-mobile-menu-link" style={{ color: '#ffb726', marginTop: '10px' }}>
//                                 <span>💰</span>
//                                 فروشنده شوید
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </header>
//     );
// };

// export default Header;
'use client';

import React, { useState } from 'react';
import { X, LogIn, Home, Menu } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/style.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    
    return (
        <header className="ras-header">
            <nav className="ras-main-nav">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-12">
                            <ul className="ras-menu-list">
                                <li className="ras-menu-item ras-home-item">
                                    {/* <Link href="/">
                                        <Image
                                            src="/img/parto.PNG"
                                            className="ras-logo-image"
                                            alt="پرتو امید"
                                            width={120}
                                            height={20}
                                            priority
                                        />
                                    </Link> */}
                                    <p className="mb-0 ras-title-text">مرکز مشاوره پرتو امید</p>
                                    
                                    {/* دکمه همبرگر - فقط در موبایل و تبلت */}
                                    <button 
                                        className="ras-mobile-toggle d-lg-none"
                                        onClick={() => setIsMenuOpen(true)}
                                        aria-label="باز کردن منو"
                                    >
                                        <Menu size={28} />
                                    </button>
                                    
                                    <Link href="/" className={`ras-menu-link ras-home-link d-none d-lg-flex ${pathname === '/' ? 'active' : ''}`}>
                                        <Home size={18} />
                                        <span>خانه</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            {/* منوی موبایل */}
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
        </header>
    );
};

export default Header;