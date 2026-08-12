// import React from 'react';
// import '../../assets/css/style.css';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="footer-main" dir="rtl">
//       <div className="footer-main-container">
//         {/* ردیف اصلی - لینک‌های فوتر */}
//         <div className="footer-row">
//           {/* ستون معرفی */}
//           <div className="footer-col">
//             <h4 className="footer-title">معرفی</h4>
//             <ul className="footer-list">
//               <li className="footer-list-item">
//                 <a href="#" className="footer-link">
//                   درباره راست چین
//                 </a>
//               </li>
//               <li className="footer-list-item">
//                 <a href="#" className="footer-link">
//                   فرصت‌های شغلی
//                 </a>
//               </li>
//               <li className="footer-list-item">
//                 <a href="#" className="footer-link">
//                   اطلاعات تماس
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* ستون خدمات */}
//           <div className="footer-col">
//             <h4 className="footer-title">خدمات</h4>
//             <ul className="footer-list">
//               <li className="footer-list-item">
//                 <a href="#" className="footer-link">
//                   ضمانت بازگشت وجه
//                 </a>
//               </li>
//               <li className="footer-list-item">
//                 <a href="#" className="footer-link">
//                   پشتیبانی سریع
//                 </a>
//               </li>
//               <li className="footer-list-item">
//                 <a href="#" className="footer-link">
//                   فروشنده شوید
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* ستون دسترسی سریع */}
//           <div className="footer-col">
//             <h4 className="footer-title">دسترسی سریع</h4>
//             <ul className="footer-list">
//               <li className="footer-list-item">
//                 <a href="#" className="footer-link">
//                   وبلاگ راست چین
//                 </a>
//               </li>
//               <li className="footer-list-item">
//                 <a href="#" className="footer-link">
//                   افزونه مدیریت الیسنس
//                 </a>
//               </li>
//               <li className="footer-list-item">
//                 <a href="#" className="footer-link">
//                   قوانین سایت
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* ستون سرویس‌های میزبانی */}
//           <div className="footer-col">
//             <h4 className="footer-title">سرویس‌های میزبانی</h4>
//             <ul className="footer-list">
//               <li className="footer-list-item">
//                 <a href="#" className="footer-link">
//                   هاست وردپرس
//                 </a>
//               </li>
//               <li className="footer-list-item">
//                 <a href="#" className="footer-link">
//                   هاست لینوکس
//                 </a>
//               </li>
//               <li className="footer-list-item">
//                 <a href="#" className="footer-link">
//                   سرور مجازی
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* بخش تیکت و شبکه‌های اجتماعی - کنار هم */}
//         <div className="footer-ticket-social-wrapper">
//           {/* بخش ارسال تیکت */}
//           <div className="footer-ticket-section">
//             <h5 className="footer-ticket-title">ارسال تیکت</h5>
//             <p className="footer-ticket-description">
//               ۷ روز هفته و ۲۴ ساعته پاسخگوی شماییم!
//             </p>
//             <a href="#" className="footer-ticket-link">
//               <span>🎧</span>
//               پشتیبانی و تیکت
//               <span>←</span>
//             </a>
//           </div>

//           {/* بخش شبکه‌های اجتماعی */}
//           <div className="footer-social-section">
//             <h5 className="footer-social-title">با ما همراه باشید</h5>
//             <ul className="footer-social-list">
//               {/* اینستاگرام با متن */}
//               <li className="footer-social-item">
//                 <a 
//                   href="https://instagram.com/rtltheme" 
//                   target="_blank" 
//                   rel="nofollow noopener"
//                   className="footer-social-link-text instagram"
//                 >
//                   <span className="footer-social-icon">📷</span>
//                   <span>اینستاگرام</span>
//                 </a>
//               </li>
              
//               {/* تلگرام با متن */}
//               <li className="footer-social-item">
//                 <a 
//                   href="https://t.me/rtltheme" 
//                   target="_blank" 
//                   rel="nofollow noopener"
//                   className="footer-social-link-text telegram"
//                 >
//                   <span className="footer-social-icon">✈️</span>
//                   <span>تلگرام</span>
//                 </a>
//               </li>
              
//               {/* فیسبوک فقط آیکون */}
//               <li className="footer-social-item">
//                 <a 
//                   href="https://fb.com/rtltheme" 
//                   target="_blank" 
//                   rel="nofollow noopener"
//                   className="footer-social-link-icon facebook"
//                 >
//                   <span className="footer-social-icon">📘</span>
//                 </a>
//               </li>
              
//               {/* توییتر فقط آیکون */}
//               <li className="footer-social-item">
//                 <a 
//                   href="https://twitter.com/rtltheme" 
//                   target="_blank" 
//                   rel="nofollow noopener"
//                   className="footer-social-link-icon twitter"
//                 >
//                   <span className="footer-social-icon">🐦</span>
//                 </a>
//               </li>
              
//               {/* لینکدین فقط آیکون */}
//               <li className="footer-social-item">
//                 <a 
//                   href="https://www.linkedin.com/company/rtltheme/" 
//                   target="_blank" 
//                   rel="nofollow noopener"
//                   className="footer-social-link-icon linkedin"
//                 >
//                   <span className="footer-social-icon">🔗</span>
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* کپی‌رایت */}
//         <div className="footer-copyright">
//           © {currentYear} راست چین. تمامی حقوق محفوظ است.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from 'react';
import '../../assets/css/style.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-main" dir="rtl">
      <div className="footer-main-container">
        {/* ردیف اصلی - لینک‌های فوتر */}
        <div className="footer-row">
          {/* ستون معرفی */}
          <div className="footer-col">
            <h4 className="footer-title">معرفی</h4>
            <ul className="footer-list">
              <li className="footer-list-item">
                <a href="#" className="footer-link">
                  درباره راست چین
                </a>
              </li>
              <li className="footer-list-item">
                <a href="#" className="footer-link">
                  فرصت‌های شغلی
                </a>
              </li>
              <li className="footer-list-item">
                <a href="#" className="footer-link">
                  اطلاعات تماس
                </a>
              </li>
            </ul>
          </div>

          {/* ستون خدمات */}
          <div className="footer-col">
            <h4 className="footer-title">خدمات</h4>
            <ul className="footer-list">
              <li className="footer-list-item">
                <a href="#" className="footer-link">
                  ضمانت بازگشت وجه
                </a>
              </li>
              <li className="footer-list-item">
                <a href="#" className="footer-link">
                  پشتیبانی سریع
                </a>
              </li>
              <li className="footer-list-item">
                <a href="#" className="footer-link">
                  فروشنده شوید
                </a>
              </li>
            </ul>
          </div>

          {/* ستون دسترسی سریع */}
          <div className="footer-col">
            <h4 className="footer-title">دسترسی سریع</h4>
            <ul className="footer-list">
              <li className="footer-list-item">
                <a href="#" className="footer-link">
                  وبلاگ راست چین
                </a>
              </li>
              <li className="footer-list-item">
                <a href="#" className="footer-link">
                  افزونه مدیریت الیسنس
                </a>
              </li>
              <li className="footer-list-item">
                <a href="#" className="footer-link">
                  قوانین سایت
                </a>
              </li>
            </ul>
          </div>

          {/* ستون سرویس‌های میزبانی */}
          <div className="footer-col">
            <h4 className="footer-title">سرویس‌های میزبانی</h4>
            <ul className="footer-list">
              <li className="footer-list-item">
                <a href="#" className="footer-link">
                  هاست وردپرس
                </a>
              </li>
              <li className="footer-list-item">
                <a href="#" className="footer-link">
                  هاست لینوکس
                </a>
              </li>
              <li className="footer-list-item">
                <a href="#" className="footer-link">
                  سرور مجازی
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* بخش تیکت و شبکه‌های اجتماعی - کنار هم */}
        <div className="footer-ticket-social-wrapper">
          {/* بخش ارسال تیکت */}
          <div className="footer-ticket-section">
            <h5 className="footer-ticket-title">ارسال تیکت</h5>
            <p className="footer-ticket-description">
              ۷ روز هفته و ۲۴ ساعته پاسخگوی شماییم!
            </p>
            <a href="#" className="footer-ticket-link">
              <span>🎧</span>
              پشتیبانی و تیکت
              <span>←</span>
            </a>
          </div>

          {/* بخش شبکه‌های اجتماعی */}
          <div className="footer-social-section">
            <h5 className="footer-social-title">با ما همراه باشید</h5>
            <ul className="footer-social-list">
              {/* اینستاگرام با متن */}
              <li className="footer-social-item">
                <a 
                  href="https://instagram.com/rtltheme" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="footer-social-link-text instagram"
                >
                  <span className="footer-social-icon">📷</span>
                  <span>اینستاگرام</span>
                </a>
              </li>
              
              {/* تلگرام با متن */}
              <li className="footer-social-item">
                <a 
                  href="https://t.me/rtltheme" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="footer-social-link-text telegram"
                >
                  <span className="footer-social-icon">✈️</span>
                  <span>تلگرام</span>
                </a>
              </li>
              
              {/* فیسبوک فقط آیکون */}
              <li className="footer-social-item">
                <a 
                  href="https://fb.com/rtltheme" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="footer-social-link-icon facebook"
                >
                  <span className="footer-social-icon">📘</span>
                </a>
              </li>
              
              {/* توییتر فقط آیکون */}
              <li className="footer-social-item">
                <a 
                  href="https://twitter.com/rtltheme" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="footer-social-link-icon twitter"
                >
                  <span className="footer-social-icon">🐦</span>
                </a>
              </li>
              
              {/* لینکدین فقط آیکون */}
              <li className="footer-social-item">
                <a 
                  href="https://www.linkedin.com/company/rtltheme/" 
                  target="_blank" 
                  rel="nofollow noopener"
                  className="footer-social-link-icon linkedin"
                >
                  <span className="footer-social-icon">🔗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* کپی‌رایت */}
        <div className="footer-copyright">
          © {currentYear} راست چین. تمامی حقوق محفوظ است.
        </div>
      </div>
    </footer>
  );
};

export default Footer;