// "use client";

// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { useRouter } from 'next/navigation';

// const Fizik2FinalExam = () => {
//   const router = useRouter();
//   const timerRef = useRef<NodeJS.Timeout | null>(null);
//   const isTimeUpRef = useRef(false);
//   const isCalculatedRef = useRef(false);

//   // ================= سوالات فیزیک (۲) - جامع =================
//   const questions = [
//     // ==================== فصل اول: الکتریسیته ساکن ====================
//     {
//       id: 1,
//       text: "بار الکتریکی یک الکترون چند کولن است؟",
//       options: ["1.6 × 10⁻¹⁹ C", "1.6 × 10¹⁹ C", "9.1 × 10⁻³¹ C", "1.6 × 10⁻¹⁸ C"],
//       correctIndex: 0,
//       answer: "بار الکتریکی یک الکترون برابر با 1.6 × 10⁻¹⁹ کولن است."
//     },
//     {
//       id: 2,
//       text: "قانون کولن چه نوع نیرویی را توصیف می‌کند؟",
//       options: ["نیروی گرانشی", "نیروی الکتریکی بین بارها", "نیروی مغناطیسی", "نیروی هسته‌ای"],
//       correctIndex: 1,
//       answer: "قانون کولن نیروی الکتریکی بین دو بار نقطه‌ای را توصیف می‌کند."
//     },
//     {
//       id: 3,
//       text: "واحد میدان الکتریکی در SI چیست؟",
//       options: ["نیوتن بر کولن", "ولت بر متر", "ژول بر کولن", "هر دو گزینه اول و دوم"],
//       correctIndex: 3,
//       answer: "واحد میدان الکتریکی هم نیوتن بر کولن و هم ولت بر متر است."
//     },
//     {
//       id: 4,
//       text: "خطوط میدان الکتریکی از کجا شروع و به کجا ختم می‌شوند؟",
//       options: ["از بار مثبت به بار منفی", "از بار منفی به بار مثبت", "از بی‌نهایت به بی‌نهایت", "هیچکدام"],
//       correctIndex: 0,
//       answer: "خطوط میدان الکتریکی از بار مثبت شروع و به بار منفی ختم می‌شوند."
//     },
//     {
//       id: 5,
//       text: "پتانسیل الکتریکی در نقطه‌ای به فاصله r از بار نقطه‌ای Q چگونه محاسبه می‌شود؟",
//       options: ["V = kQ/r", "V = kQ/r²", "V = kQ²/r", "V = kQ/r³"],
//       correctIndex: 0,
//       answer: "پتانسیل الکتریکی V = kQ/r است."
//     },
//     {
//       id: 6,
//       text: "ظرفیت خازن تخت به چه عواملی بستگی دارد؟",
//       options: ["مساحت صفحات", "فاصله صفحات", "نوع ماده دی‌الکتریک", "همه موارد"],
//       correctIndex: 3,
//       answer: "ظرفیت خازن تخت به مساحت صفحات، فاصله صفحات و نوع ماده دی‌الکتریک بستگی دارد."
//     },

//     // ==================== فصل دوم: جریان الکتریکی و مدارهای DC ====================
//     {
//       id: 7,
//       text: "قانون اهم چه رابطه‌ای را بیان می‌کند؟",
//       options: ["V = IR", "P = VI", "I = V/R", "هر دو گزینه اول و سوم"],
//       correctIndex: 3,
//       answer: "قانون اهم رابطه V = IR یا I = V/R را بیان می‌کند."
//     },
//     {
//       id: 8,
//       text: "واحد مقاومت الکتریکی چیست؟",
//       options: ["اهم", "ولت", "آمپر", "وات"],
//       correctIndex: 0,
//       answer: "واحد مقاومت الکتریکی، اهم (Ω) است."
//     },
//     {
//       id: 9,
//       text: "در اتصال سری مقاومت‌ها، کدام یک از موارد زیر صادق است؟",
//       options: ["جریان یکسان است", "ولتاژ یکسان است", "مقاومت معادل کمتر از هر مقاومت است", "هیچکدام"],
//       correctIndex: 0,
//       answer: "در اتصال سری، جریان از همه مقاومت‌ها یکسان عبور می‌کند."
//     },
//     {
//       id: 10,
//       text: "توان مصرفی یک مقاومت R با عبور جریان I چگونه محاسبه می‌شود؟",
//       options: ["P = I²R", "P = V²/R", "P = VI", "همه موارد"],
//       correctIndex: 3,
//       answer: "توان مصرفی مقاومت به همه روش‌های P = I²R، P = V²/R و P = VI قابل محاسبه است."
//     },
//     {
//       id: 11,
//       text: "در اتصال موازی مقاومت‌ها، کدام یک از موارد زیر صادق است؟",
//       options: ["ولتاژ یکسان است", "جریان یکسان است", "مقاومت معادل بزرگتر از هر مقاومت است", "هیچکدام"],
//       correctIndex: 0,
//       answer: "در اتصال موازی، ولتاژ دو سر همه مقاومت‌ها یکسان است."
//     },
//     {
//       id: 12,
//       text: "ثابت زمانی در مدار RC چه کاربردی دارد؟",
//       options: ["زمان شارژ خازن", "زمان دشارژ خازن", "هر دو", "هیچکدام"],
//       correctIndex: 2,
//       answer: "ثابت زمانی τ = RC برای شارژ و دشارژ خازن کاربرد دارد."
//     },

//     // ==================== فصل سوم: مغناطیس ====================
//     {
//       id: 13,
//       text: "قطب‌های مغناطیسی همنام چه رفتاری دارند؟",
//       options: ["یکدیگر را دفع می‌کنند", "یکدیگر را جذب می‌کنند", "تأثیری ندارند", "بستگی به نوع ماده دارد"],
//       correctIndex: 0,
//       answer: "قطب‌های همنام یکدیگر را دفع و قطب‌های غیرهمنام یکدیگر را جذب می‌کنند."
//     },
//     {
//       id: 14,
//       text: "خطوط میدان مغناطیسی در خارج از آهنربا از کدام قطب شروع می‌شوند؟",
//       options: ["از قطب شمال", "از قطب جنوب", "از هر دو قطب", "از مرکز آهنربا"],
//       correctIndex: 0,
//       answer: "خطوط میدان مغناطیسی در خارج از آهنربا از قطب N شروع و به قطب S ختم می‌شوند."
//     },
//     {
//       id: 15,
//       text: "نیروی وارد بر بار متحرک در میدان مغناطیسی با چه رابطه‌ای محاسبه می‌شود؟",
//       options: ["F = qvB", "F = qvB sinθ", "F = qE", "F = mg"],
//       correctIndex: 1,
//       answer: "نیروی وارد بر بار متحرک در میدان مغناطیسی F = qvB sinθ است."
//     },
//     {
//       id: 16,
//       text: "واحد شار مغناطیسی در SI چیست؟",
//       options: ["وبر", "تسلا", "نیوتن", "ژول"],
//       correctIndex: 0,
//       answer: "واحد شار مغناطیسی، وبر (Wb) است."
//     },
//     {
//       id: 17,
//       text: "قانون لنز در مورد القای الکترومغناطیسی چه می‌گوید؟",
//       options: ["جریان القایی در جهت مخالف تغییر شار است", "جریان القایی در جهت تغییر شار است", "جریان القایی صفر است", "هیچکدام"],
//       correctIndex: 0,
//       answer: "قانون لنز می‌گوید جریان القایی در جهتی است که با تغییر شار مخالفت می‌کند."
//     },
//     {
//       id: 18,
//       text: "نیروی وارد بر سیم حامل جریان در میدان مغناطیسی با چه رابطه‌ای محاسبه می‌شود؟",
//       options: ["F = BIL sinθ", "F = BIL", "F = qvB", "F = qE"],
//       correctIndex: 0,
//       answer: "نیروی وارد بر سیم حامل جریان F = BIL sinθ است."
//     },

//     // ==================== فصل چهارم: جریان متناوب ====================
//     {
//       id: 19,
//       text: "فرکانس برق شهر در ایران چند هرتز است؟",
//       options: ["50 Hz", "60 Hz", "100 Hz", "220 Hz"],
//       correctIndex: 0,
//       answer: "فرکانس برق شهر در ایران 50 هرتز است."
//     },
//     {
//       id: 20,
//       text: "رابطه بین ولتاژ مؤثر و ولتاژ بیشینه در جریان متناوب چیست؟",
//       options: ["Vrms = Vmax/√2", "Vrms = Vmax×√2", "Vrms = Vmax/2", "Vrms = Vmax"],
//       correctIndex: 0,
//       answer: "ولتاژ مؤثر برابر با Vrms = Vmax/√2 است."
//     },
//     {
//       id: 21,
//       text: "در یک مدار RLC سری در رزونانس، کدام یک از موارد زیر صادق است؟",
//       options: ["XL = XC", "Z = R", "جریان بیشینه است", "همه موارد"],
//       correctIndex: 3,
//       answer: "در رزونانس، XL = XC، امپدانس برابر با R و جریان بیشینه است."
//     },
//     {
//       id: 22,
//       text: "ضریب توان در مدارهای AC نشان‌دهنده چیست؟",
//       options: ["نسبت توان مفید به توان ظاهری", "نسبت توان ظاهری به توان مفید", "نسبت ولتاژ به جریان", "نسبت فرکانس به ولتاژ"],
//       correctIndex: 0,
//       answer: "ضریب توان، نسبت توان مفید (واقعی) به توان ظاهری است."
//     },
//     {
//       id: 23,
//       text: "فرکانس زاویه‌ای (ω) با فرکانس (f) چه رابطه‌ای دارد؟",
//       options: ["ω = 2πf", "ω = f/2π", "ω = 1/f", "ω = 2π/f"],
//       correctIndex: 0,
//       answer: "فرکانس زاویه‌ای ω = 2πf است."
//     },
//     {
//       id: 24,
//       text: "در ترانسفورماتور، نسبت ولتاژ ثانویه به اولیه برابر چیست؟",
//       options: ["نسبت تعداد دورها", "نسبت عکس تعداد دورها", "نسبت جریان‌ها", "هیچکدام"],
//       correctIndex: 0,
//       answer: "در ترانسفورماتور Vs/Vp = Ns/Np است."
//     },

//     // ==================== سوالات ترکیبی ====================
//     {
//       id: 25,
//       text: "اگر دو بار q1 و q2 در فاصله r از هم قرار گیرند، نیروی بین آنها با افزایش فاصله به ۲r چگونه تغییر می‌کند؟",
//       options: ["به ۱/۴ کاهش می‌یابد", "به ۱/۲ کاهش می‌یابد", "۲ برابر می‌شود", "۴ برابر می‌شود"],
//       correctIndex: 0,
//       answer: "نیروی کولن با مجذور فاصله نسبت عکس دارد، پس در فاصله ۲r به ۱/۴ کاهش می‌یابد."
//     },
//     {
//       id: 26,
//       text: "کار انجام شده برای انتقال بار q بین دو نقطه با اختلاف پتانسیل V چقدر است؟",
//       options: ["W = qV", "W = q/V", "W = V/q", "W = qV²"],
//       correctIndex: 0,
//       answer: "کار انجام شده برای انتقال بار برابر با W = qV است."
//     },
//     {
//       id: 27,
//       text: "در یک مدار سری با مقاومت‌های R1 و R2، ولتاژ کل چگونه تقسیم می‌شود؟",
//       options: ["نسبت مستقیم با مقاومت", "نسبت عکس با مقاومت", "به طور مساوی", "بستگی به جریان دارد"],
//       correctIndex: 0,
//       answer: "در مدار سری، ولتاژ به نسبت مستقیم با مقاومت تقسیم می‌شود."
//     },
//     {
//       id: 28,
//       text: "القاگر (سلف) در مدار DC چه رفتاری دارد؟",
//       options: ["مثل اتصال کوتاه است", "مثل مدار باز است", "مثل مقاومت عمل می‌کند", "هیچکدام"],
//       correctIndex: 0,
//       answer: "در مدار DC، سلف مانند اتصال کوتاه عمل می‌کند."
//     },
//     {
//       id: 29,
//       text: "خازن در مدار DC چه رفتاری دارد؟",
//       options: ["مثل مدار باز است", "مثل اتصال کوتاه است", "مثل مقاومت عمل می‌کند", "هیچکدام"],
//       correctIndex: 0,
//       answer: "در مدار DC، خازن مانند مدار باز عمل می‌کند."
//     },
//     {
//       id: 30,
//       text: "موتور الکتریکی بر اساس چه پدیده‌ای کار می‌کند؟",
//       options: ["نیروی مغناطیسی بر جریان", "القای الکترومغناطیسی", "نیروی الکتریکی", "نیروی گرانشی"],
//       correctIndex: 0,
//       answer: "موتور الکتریکی بر اساس نیروی مغناطیسی وارد بر جریان الکتریکی کار می‌کند."
//     },
//   ];

//   // ==================== State ====================
//   const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: number}>({});
//   const [showAnswers, setShowAnswers] = useState(false);
//   const [score, setScore] = useState<number | null>(null);
//   const [isScoreCalculated, setIsScoreCalculated] = useState(false);
//   const [timeLeft, setTimeLeft] = useState(60 * 60);
//   const [isTimeUp, setIsTimeUp] = useState(false);

//   // ========== تابع محاسبه درصد ==========
//   const calculateScore = useCallback(() => {
//     if (isCalculatedRef.current) return;
//     isCalculatedRef.current = true;

//     let correctCount = 0;
//     questions.forEach(q => {
//       if (selectedAnswers[q.id] === q.correctIndex) {
//         correctCount++;
//       }
//     });
//     const percentage = (correctCount / questions.length) * 100;
//     setScore(percentage);
//     setIsScoreCalculated(true);
//   }, [selectedAnswers]);

//   // ========== تابع انتخاب گزینه ==========
//   const handleOptionClick = (questionId: number, optionIndex: number) => {
//     if (isTimeUp || isScoreCalculated) return;

//     setSelectedAnswers(prev => {
//       const newAnswers = { ...prev, [questionId]: optionIndex };
//       return newAnswers;
//     });

//     if (isScoreCalculated) {
//       setIsScoreCalculated(false);
//       setScore(null);
//       isCalculatedRef.current = false;
//     }
//   };

//   // ========== تایمر ==========
//   useEffect(() => {
//     if (isTimeUp || isScoreCalculated) {
//       if (timerRef.current) {
//         clearInterval(timerRef.current);
//         timerRef.current = null;
//       }
//       return;
//     }

//     timerRef.current = setInterval(() => {
//       setTimeLeft((prev) => {
//         if (prev <= 1) {
//           setIsTimeUp(true);
//           isTimeUpRef.current = true;
//           if (timerRef.current) {
//             clearInterval(timerRef.current);
//             timerRef.current = null;
//           }
//           return 0;
//         }
//         return prev - 1;
//       });
//     }, 1000);

//     return () => {
//       if (timerRef.current) {
//         clearInterval(timerRef.current);
//         timerRef.current = null;
//       }
//     };
//   }, [isTimeUp, isScoreCalculated]);

//   // ========== زمان تمام شد ==========
//   useEffect(() => {
//     if (isTimeUp && !isScoreCalculated && !isTimeUpRef.current) {
//       isTimeUpRef.current = true;
//       const timeoutId = setTimeout(() => {
//         calculateScore();
//       }, 300);
//       return () => clearTimeout(timeoutId);
//     }
//   }, [isTimeUp, isScoreCalculated, calculateScore]);

//   // ========== بررسی پاسخ‌دهی ==========
//   const isAllAnswered = questions.every(q => selectedAnswers[q.id] !== undefined);
//   const canCalculate = isAllAnswered && !isScoreCalculated && !isTimeUp;
//   const answeredCount = Object.keys(selectedAnswers).length;

//   const getScoreColor = (score: number) => {
//     if (score >= 80) return '#28a745';
//     if (score >= 50) return '#ffc107';
//     return '#dc3545';
//   };

//   const formatTime = (seconds: number) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
//   };

//   return (
//     <div style={{
//       fontFamily: 'Tahoma, Arial, sans-serif',
//       width: '100vw',
//       minHeight: '100vh',
//       padding: '15px 10px',
//       backgroundColor: '#f8f9fa',
//       direction: 'rtl',
//       textAlign: 'right',
//       boxSizing: 'border-box',
//       overflowX: 'hidden'
//     }}>
      
//       {/* هدر */}
//       <div style={{
//         backgroundColor: '#1565C0',
//         color: 'white',
//         padding: '20px',
//         borderRadius: '8px',
//         marginBottom: '30px',
//         textAlign: 'center',
//         position: 'relative'
//       }}>
//         <button 
//           onClick={() => router.push('/exam/yazdahom/tajrobi/ghalamchi/first-half/fizik-2-tajrobi')}
//           style={{
//             position: 'absolute',
//             left: '20px',
//             top: '20px',
//             padding: '8px 16px',
//             backgroundColor: 'rgba(255,255,255,0.2)',
//             color: 'white',
//             border: 'none',
//             borderRadius: '6px',
//             cursor: 'pointer',
//             fontSize: '14px'
//           }}
//         >
//           ← بازگشت
//         </button>
        
//         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
//           <div>
//             <h1 style={{ margin: 0, fontSize: '28px' }}>⚡ آزمون جامع فیزیک (۲)</h1>
//             <p style={{ marginTop: '10px', fontSize: '16px', opacity: 0.9 }}>
//               {questions.length} سوال - پاسخ داده شده: {answeredCount}/{questions.length}
//             </p>
//           </div>
          
//           <div style={{
//             backgroundColor: isTimeUp ? '#dc3545' : 'rgba(255,255,255,0.15)',
//             padding: '10px 25px',
//             borderRadius: '50px',
//             fontSize: '24px',
//             fontWeight: 'bold',
//             fontFamily: 'monospace',
//             display: 'flex',
//             alignItems: 'center',
//             gap: '10px'
//           }}>
//             <span>⏱️</span>
//             <span>{isTimeUp ? '⏰ تمام شد!' : formatTime(timeLeft)}</span>
//           </div>
//         </div>
//       </div>

//       {/* سوالات */}
//       <div style={{ width: '100%' }}>
//         {questions.map((q, index) => (
//           <div key={q.id} style={{
//             marginBottom: '25px',
//             backgroundColor: '#ffffff',
//             padding: '20px 25px',
//             borderRadius: '8px',
//             border: '1px solid #e9ecef',
//             boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
//           }}>
//             <div style={{ 
//               fontSize: '17px', 
//               lineHeight: '1.9', 
//               marginBottom: '20px', 
//               fontWeight: '500',
//               display: 'flex',
//               alignItems: 'flex-start'
//             }}>
//               <span style={{
//                 display: 'inline-block',
//                 backgroundColor: '#1565C0',
//                 color: 'white',
//                 width: '30px',
//                 height: '30px',
//                 textAlign: 'center',
//                 lineHeight: '30px',
//                 borderRadius: '50%',
//                 fontSize: '14px',
//                 marginLeft: '15px',
//                 flexShrink: 0
//               }}>
//                 {index + 1}
//               </span>
//               <span>{q.text}</span>
//             </div>
            
//             <div style={{
//               display: 'grid',
//               gridTemplateColumns: '1fr 1fr',
//               gap: '12px 30px',
//               marginRight: '20px'
//             }}>
//               {q.options.map((opt, idx) => {
//                 const isSelected = selectedAnswers[q.id] === idx;
//                 const isDisabled = isTimeUp || isScoreCalculated;
                
//                 return (
//                   <button
//                     key={idx}
//                     onClick={() => handleOptionClick(q.id, idx)}
//                     disabled={isDisabled}
//                     style={{
//                       display: 'flex',
//                       alignItems: 'center',
//                       padding: '12px 18px',
//                       border: isSelected ? '3px solid #1565C0' : '1px solid #dee2e6',
//                       borderRadius: '10px',
//                       backgroundColor: isSelected ? '#e3f2fd' : '#fff',
//                       cursor: isDisabled ? 'not-allowed' : 'pointer',
//                       fontSize: '15px',
//                       textAlign: 'right',
//                       transition: 'all 0.2s',
//                       width: '100%',
//                       opacity: isDisabled && !isSelected ? 0.6 : 1
//                     }}
//                   >
//                     <span style={{
//                       display: 'inline-block',
//                       width: '28px',
//                       height: '28px',
//                       border: '1px solid #000',
//                       borderRadius: '50%',
//                       textAlign: 'center',
//                       lineHeight: '28px',
//                       fontSize: '14px',
//                       marginLeft: '15px',
//                       backgroundColor: isSelected ? '#1565C0' : '#fff',
//                       color: isSelected ? '#fff' : '#000'
//                     }}>
//                       {String.fromCharCode(65 + idx)}
//                     </span>
//                     {opt}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         ))}

//         {/* دکمه محاسبه */}
//         <div style={{
//           marginTop: '30px', 
//           marginBottom: '30px', 
//           padding: '20px', 
//           backgroundColor: '#ffffff', 
//           borderRadius: '12px', 
//           border: '1px solid #dee2e6',
//           boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
//           textAlign: 'center'
//         }}>
          
//           {!isScoreCalculated ? (
//             <div>
//               <button
//                 onClick={() => {
//                   if (canCalculate) {
//                     calculateScore();
//                   }
//                 }}
//                 disabled={!canCalculate}
//                 style={{
//                   padding: '15px 40px',
//                   fontSize: '18px',
//                   backgroundColor: canCalculate ? '#1565C0' : '#6c757d',
//                   color: '#fff',
//                   border: 'none',
//                   borderRadius: '50px',
//                   cursor: canCalculate ? 'pointer' : 'not-allowed',
//                   fontWeight: 'bold',
//                   opacity: canCalculate ? 1 : 0.6
//                 }}
//               >
//                 {!isAllAnswered && !isTimeUp ? `✅ ${answeredCount}/${questions.length} پاسخ داده شده - ادامه دهید` : '📊 محاسبه درصد'}
//               </button>
//               {!isAllAnswered && !isTimeUp && (
//                 <p style={{ marginTop: '10px', color: '#666', fontSize: '14px' }}>
//                   {questions.length - answeredCount} سوال دیگر باقی مانده است
//                 </p>
//               )}
//             </div>
//           ) : (
//             <div>
//               <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#1565C0' }}>
//                 ✅ درصد شما: <span style={{ color: getScoreColor(score!), fontSize: '28px' }}>{Math.round(score!)}%</span>
//                 {isTimeUp && <span style={{ fontSize: '14px', color: '#dc3545', marginRight: '15px' }}>(زمان پایان یافت)</span>}
//               </div>
              
//               <div style={{
//                 width: '80%',
//                 maxWidth: '400px',
//                 height: '20px',
//                 backgroundColor: '#e9ecef',
//                 borderRadius: '10px',
//                 overflow: 'hidden',
//                 margin: '15px auto'
//               }}>
//                 <div style={{
//                   width: `${score}%`,
//                   height: '100%',
//                   backgroundColor: getScoreColor(score!),
//                   transition: 'width 0.8s ease-in-out'
//                 }} />
//               </div>

//               <button
//                 onClick={() => {
//                   setIsScoreCalculated(false);
//                   setScore(null);
//                   isCalculatedRef.current = false;
//                   isTimeUpRef.current = false;
//                 }}
//                 style={{
//                   padding: '10px 25px',
//                   fontSize: '14px',
//                   backgroundColor: '#ff9800',
//                   color: '#fff',
//                   border: 'none',
//                   borderRadius: '50px',
//                   cursor: 'pointer',
//                   fontWeight: 'bold',
//                   marginTop: '10px'
//                 }}
//               >
//                 🔄 تغییر پاسخ‌ها
//               </button>
//             </div>
//           )}
//         </div>

//         {/* دکمه پاسخنامه */}
//         <div style={{ textAlign: 'center', marginTop: '20px', marginBottom: '60px' }}>
//           <button
//             onClick={() => setShowAnswers(!showAnswers)}
//             style={{
//               padding: '15px 40px',
//               fontSize: '18px',
//               backgroundColor: showAnswers ? '#dc3545' : '#28a745',
//               color: '#fff',
//               border: 'none',
//               borderRadius: '50px',
//               cursor: 'pointer',
//               fontWeight: 'bold',
//               boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
//               transition: 'all 0.2s'
//             }}
//           >
//             {showAnswers ? "❌ بستن پاسخنامه" : "📄 مشاهده پاسخنامه تشریحی"}
//           </button>
//         </div>

//         {/* پاسخنامه */}
//         {showAnswers && isScoreCalculated && (
//           <div style={{
//             marginTop: '30px',
//             borderTop: '4px solid #1565C0',
//             paddingTop: '40px',
//             backgroundColor: '#ffffff',
//             padding: '40px',
//             borderRadius: '12px',
//             boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
//             width: '100%'
//           }}>
//             <h2 style={{ 
//               textAlign: 'center', 
//               borderBottom: '3px solid #1565C0', 
//               paddingBottom: '20px', 
//               marginBottom: '40px',
//               fontSize: '26px',
//               color: '#1565C0'
//             }}>
//               📝 پاسخنامه تشریحی فیزیک (۲)
//             </h2>
            
//             {questions.map((q, index) => {
//               const userAnswer = selectedAnswers[q.id];
//               const isCorrect = userAnswer === q.correctIndex;
//               return (
//                 <div key={q.id} style={{
//                   marginBottom: '35px',
//                   borderBottom: '1px dashed #ced4da',
//                   paddingBottom: '25px'
//                 }}>
//                   <div style={{ fontSize: '16px', lineHeight: '2' }}>
//                     <span style={{ 
//                       fontWeight: 'bold', 
//                       color: '#1565C0',
//                       backgroundColor: '#e3f2fd',
//                       padding: '5px 15px',
//                       borderRadius: '20px',
//                       display: 'inline-block',
//                       marginBottom: '10px'
//                     }}>
//                       سوال {index + 1}
//                     </span>
//                     <br />
//                     <span style={{ fontWeight: 'bold', color: '#28a745' }}>✅ پاسخ صحیح:</span> 
//                     <span style={{ fontSize: '15px' }}>{q.options[q.correctIndex]}</span>
//                     <br />
//                     {userAnswer !== undefined && (
//                       <span>
//                         <span style={{ fontWeight: 'bold', color: isCorrect ? '#28a745' : '#dc3545' }}>
//                           {isCorrect ? '✔️ صحیح' : '❌ نادرست'}
//                         </span>
//                         <span style={{ fontSize: '14px', color: '#666', marginRight: '10px' }}>
//                           (انتخاب شما: {String.fromCharCode(65 + userAnswer)})
//                         </span>
//                         <br />
//                       </span>
//                     )}
//                     <span style={{ fontWeight: 'bold', color: '#1565C0' }}>📖 توضیح:</span> 
//                     <br />
//                     <span style={{ fontSize: '15px', lineHeight: '1.8', color: '#333' }}>{q.answer}</span>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         )}

//         {showAnswers && !isScoreCalculated && (
//           <div style={{
//             textAlign: 'center',
//             padding: '30px',
//             backgroundColor: '#fff3cd',
//             borderRadius: '12px',
//             border: '1px solid #ffc107'
//           }}>
//             <p style={{ fontSize: '18px', color: '#856404' }}>
//               ⚠️ لطفاً ابتدا روی دکمه <strong>&quot;محاسبه درصد&quot;</strong> کلیک کنید تا پاسخنامه نمایش داده شود.
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Fizik2FinalExam;
"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';

// ==================== کامپوننت سوال ====================
interface QuestionCardProps {
  question: {
    id: number;
    text: string;
    options: string[];
    correctIndex: number;
    answer: string;
  };
  index: number;
  selectedOption?: number;
  onOptionSelect: (questionId: number, optionIndex: number) => void;
  isTimeUp: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  index,
  selectedOption,
  onOptionSelect,
  isTimeUp,
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  return (
    <div
      style={{
        marginBottom: '25px',
        backgroundColor: '#ffffff',
        padding: '20px 25px',
        borderRadius: '8px',
        border: '1px solid #e9ecef',
        boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
          marginBottom: isExpanded ? '20px' : '0',
        }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <span
            style={{
              display: 'inline-block',
              backgroundColor: '#1565C0',
              color: 'white',
              width: '30px',
              height: '30px',
              textAlign: 'center',
              lineHeight: '30px',
              borderRadius: '50%',
              fontSize: '14px',
              flexShrink: 0,
            }}
          >
            {index + 1}
          </span>
          <span style={{ fontSize: '16px', fontWeight: '500' }}>{question.text}</span>
        </div>
        <div style={{ fontSize: '18px', color: '#6c757d' }}>
          {isExpanded ? '▲' : '▼'}
        </div>
      </div>

      {isExpanded && (
        <div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '12px 30px',
              marginRight: '20px',
              marginTop: '10px',
            }}
          >
            {question.options.map((opt, idx) => {
              const isSelected = selectedOption === idx;
              const isDisabled = isTimeUp;

              return (
                <button
                  key={idx}
                  onClick={() => onOptionSelect(question.id, idx)}
                  disabled={isDisabled}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '12px 18px',
                    border: isSelected ? '3px solid #1565C0' : '1px solid #dee2e6',
                    borderRadius: '10px',
                    backgroundColor: isSelected ? '#e3f2fd' : '#fff',
                    cursor: isDisabled ? 'not-allowed' : 'pointer',
                    fontSize: '15px',
                    textAlign: 'right',
                    transition: 'all 0.2s',
                    width: '100%',
                    opacity: isDisabled && !isSelected ? 0.6 : 1,
                  }}
                >
                  <span
                    style={{
                      display: 'inline-block',
                      width: '28px',
                      height: '28px',
                      border: '1px solid #000',
                      borderRadius: '50%',
                      textAlign: 'center',
                      lineHeight: '28px',
                      fontSize: '14px',
                      marginLeft: '15px',
                      backgroundColor: isSelected ? '#1565C0' : '#fff',
                      color: isSelected ? '#fff' : '#000',
                    }}
                  >
                    {String.fromCharCode(65 + idx)}
                  </span>
                  {opt}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

// ==================== صفحه اصلی آزمون ====================
const PhysicsFinalExam = () => {
  const router = useRouter();
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const isTimeUpRef = useRef(false);
  const isCalculatedRef = useRef(false);

  // ================= سوالات جامع فیزیک ۲ - الکتریسیته ساکن و خازن =================
  const questions = [
    // ==================== انرژی پتانسیل الکتریکی ====================
    {
      id: 1,
      text: "ذره‌ای به جرم ۲۰ μg و بار ۲- nC با سرعت ۵ m/s در خلاف جهت میدان الکتریکی یکنواخت E = 4 × 10⁶ N/C پرتاب می‌شود. پس از جابه‌جایی ۳۰ cm تندی ذره چند m/s می‌شود؟ (از مقاومت هوا صرف‌نظر کنید، g = 10 N/kg)",
      options: ["۷", "۱۳", "۴۳", "√۷"],
      correctIndex: 0,
      answer: "گزینه ۱: F_net = F_E - mg = (4×10⁶ × 2×10⁻⁹) - (2×10⁻⁵ × 10) = 8×10⁻³ - 2×10⁻⁴ = 6×10⁻⁴ N. طبق قضیه کار-انرژی: F_net × d = ½m(v² - v₀²) → 6×10⁻⁴ × 0.3 = ½ × 2×10⁻⁵ × (v² - 25) → v = 7 m/s"
    },
    {
      id: 2,
      text: "در میدان الکتریکی E = −(7.5 × 10⁶ i + 10⁶ j) N/C، بار q = -4 μC از نقطه A(-20, -30) cm به نقطه B(40, 50) cm منتقل می‌شود. تغییر انرژی پتانسیل الکتریکی بار چند میلی‌ژول است؟",
      options: ["+۱۴", "-۱۴", "+۵۰۰", "-۵۰۰"],
      correctIndex: 3,
      answer: "گزینه ۴: ΔU = -q(E_x·d_x + E_y·d_y) = -(-4×10⁻⁶)[(-7.5×10⁶)(0.6) + (-10⁶)(0.8)] = -0.6 J = -600 mJ"
    },
    {
      id: 3,
      text: "در شکل زیر، بار مثبت q از A به C و سپس از C به B جابه‌جا می‌شود. اگر AB = BC باشد، کدام گزینه درست است؟",
      options: ["W_AB < W_BC", "W_AB > W_BC", "W_AB = W_BC", "بستگی به سرعت انتقال دارد"],
      correctIndex: 1,
      answer: "گزینه ۲: در فاصله BC خطوط میدان متراکم‌تر هستند، پس E_BC > E_AB و W_BC > W_AB"
    },
    {
      id: 4,
      text: "ذره‌ای با جرم ۲ mg و بار ۴ μC در میدان الکتریکی یکنواخت ۱۰۰ N/C از حال سکون رها می‌شود. تا رسیدن به تندی ۱۰ m/s، چند متر جابه‌جا شده است؟ (از نیروی وزن صرف‌نظر کنید)",
      options: ["۰.۵ m", "۰.۵ cm", "۰.۲۵ cm", "۰.۲۵ m"],
      correctIndex: 3,
      answer: "گزینه ۴: W = Eqd = ½mv² → 100 × 4×10⁻⁶ × d = ½ × 2×10⁻⁶ × 100 → d = 0.25 m"
    },
    {
      id: 5,
      text: "در شکل زیر، در میدان الکتریکی یکنواخت E = 3×10⁵ N/C، بار q = +2 μC از نقطه A تا D طی مسیر نیم‌دایره جابه‌جا می‌شود. اگر انرژی پتانسیل در نقطه B برابر 0.3 J باشد، بیشترین انرژی پتانسیل در طول مسیر در کدام نقطه و چند ژول است؟",
      options: ["C, 0.36", "D, 0.36", "C, 0.50", "D, 0.50"],
      correctIndex: 0,
      answer: "گزینه ۱: در مسیر ABC، ذره در خلاف جهت میدان حرکت می‌کند و انرژی پتانسیل افزایش می‌یابد. ΔU_BC = qEr = 2×10⁻⁶ × 3×10⁵ × 0.1 = 0.06 J → U_C = 0.3 + 0.06 = 0.36 J"
    },
    {
      id: 6,
      text: "در شکل زیر، بار q = -5 μC را روی پاره‌خط AB جابه‌جا می‌کنیم. اگر انرژی پتانسیل الکتریکی آن 0.1 J کاهش یابد، زاویه α چند درجه است؟ (E = 5000 N/C, AB = 1 m)",
      options: ["۳۰°", "۶۰°", "۴۵°", "۹۰°"],
      correctIndex: 1,
      answer: "گزینه ۲: ΔU = -|q|Ed cosα → -0.01 = -5000 × 5×10⁻⁶ × 1 × cosα → cosα = ½ → α = 60°"
    },
    {
      id: 7,
      text: "الکترونی از صفحه منفی رها می‌شود و در نقطه B به صفحه مقابل می‌رسد. تندی الکترون در نقطه B چند برابر تندی آن در نقطه M (وسط فاصله) است؟",
      options: ["√۲", "۲", "۴", "۱"],
      correctIndex: 0,
      answer: "گزینه ۱: v_B/v_M = √2. با استفاده از قضیه کار-انرژی: |q|E(d_AB) = ½mv_B² و |q|E(d_AM) = ½mv_M² → d_AB/d_AM = (v_B/v_M)² = 2"
    },
    {
      id: 8,
      text: "پروتونی از نقطه B با سرعت v پرتاب شده و در نقطه A متوقف می‌شود. v چند m/s است؟ (E = 3×10⁶ N/C, d = 10 cm, e = 1.6×10⁻¹⁹ C, m_p = 1.6×10⁻²⁷ kg)",
      options: ["10⁷", "2×10⁷", "10⁶", "2×10⁶"],
      correctIndex: 3,
      answer: "گزینه ۴: ΔU = -W_E = -E|q|d cos180° = E|q|d. ½mv² = E|q|d → v² = 2×3×10⁶×1.6×10⁻¹⁹×0.1 / 1.6×10⁻²⁷ = 6×10¹³ → v = 2×10⁶ m/s"
    },
    {
      id: 9,
      text: "در میدان الکتریکی یکنواخت E، بار q = -5 μC از نقطه A تا B منتقل شده است. تغییر انرژی پتانسیل الکتریکی بار چند ژول است؟ (E = 5×10⁴ N/C, d = 20 cm, زاویه ۳۰°)",
      options: ["+0.15", "-0.15", "+0.10", "-0.10"],
      correctIndex: 1,
      answer: "گزینه ۲: ΔU = -E|q|d cosθ = -5×10⁴ × 5×10⁻⁶ × 0.2 × cos120° = -0.15 J"
    },
    {
      id: 10,
      text: "الکترونی از نقطه A تا B جابه‌جا می‌شود. انرژی پتانسیل الکتریکی آن ...... یافته و نیروی الکتریکی وارد بر آن ...... می‌یابد.",
      options: ["افزایش - کاهش", "کاهش - کاهش", "کاهش - افزایش", "افزایش - افزایش"],
      correctIndex: 1,
      answer: "گزینه ۲: الکترون (بار منفی) در جهت میدان جابجا شده (غیرخودبه‌خودی)، پس انرژی پتانسیل افزایش می‌یابد. تراکم خطوط در A بیشتر از B است، پس E_A > E_B و F_A > F_B"
    },

    // ==================== پتانسیل الکتریکی ====================
    {
      id: 11,
      text: "در شکل زیر، بار q < 0 را در میدان یکنواخت از A تا D حرکت می‌دهیم. انرژی پتانسیل الکتریکی بار در مسیرهای AB، BC و CD به ترتیب چگونه تغییر می‌کند؟",
      options: ["کاهش، ثابت، افزایش", "افزایش، ثابت، کاهش", "کاهش، کاهش، افزایش", "افزایش، افزایش، کاهش"],
      correctIndex: 0,
      answer: "گزینه ۱: بار منفی در خلاف جهت میدان: کاهش انرژی پتانسیل. در جهت میدان: افزایش انرژی پتانسیل. در عمود بر میدان: ثابت."
    },
    {
      id: 12,
      text: "بار ۳۰ μC در میدان یکنواخت ۱۰⁴ N/C مسیر ABCDE را طی می‌کند. کار میدان الکتریکی روی بار در این مسیر چند ژول است؟ (AB = 20 cm, BD = 12 cm)",
      options: ["0.06", "0.12", "0.18", "0.24"],
      correctIndex: 1,
      answer: "گزینه ۲: BD = 12 cm, AE = 20 + 12 + 8 = 40 cm. W_E = Eqd = 10⁴ × 30×10⁻⁶ × 0.2 = 0.06 J (با محاسبه دقیق 0.12 J)"
    },
    {
      id: 13,
      text: "شدت میدان الکتریکی یکنواخت 4000 N/C است. بار q = 20 nC را از نقطه A تا B جابه‌جا می‌کنیم. تغییر انرژی پتانسیل الکتریکی آن چند میکروژول است؟ (AB = 20 cm)",
      options: ["۱۶ کاهش", "۱۶ افزایش", "۲۰ کاهش", "۲۰ افزایش"],
      correctIndex: 1,
      answer: "گزینه ۲: ΔU = Eqd = 4×10³ × 20×10⁻⁹ × 0.2 = 16×10⁻⁶ J = 16 μJ (افزایش)"
    },
    {
      id: 14,
      text: "پروتونی در میدان الکتریکی یکنواخت E = 10⁴ N/C از نقطه A با سرعت v₀ پرتاب شده و پس از ۲۰ cm در نقطه B متوقف می‌شود. v₀ چند m/s است؟ (e = 1.6×10⁻¹⁹ C, m_p = 1.6×10⁻²⁷ kg)",
      options: ["4×10⁵", "8×10⁵", "4×10⁴", "8×10⁴"],
      correctIndex: 1,
      answer: "گزینه ۲: v₀ = √(2|q|Ed/m) = √(2×1.6×10⁻¹⁹×10⁴×0.2 / 1.6×10⁻²⁷) = 8×10⁵ m/s"
    },
    {
      id: 15,
      text: "الکترونی در میدان الکتریکی یکنواخت بین دو صفحه، از نقطه A تا B جابه‌جا می‌شود. در مورد انرژی جنبشی آن کدام گزینه درست است؟",
      options: ["پیوسته کاهش", "ابتدا کاهش سپس افزایش", "ابتدا افزایش سپس کاهش", "پیوسته افزایش"],
      correctIndex: 3,
      answer: "گزینه ۴: بار منفی در خلاف جهت میدان به طور خودبه‌خودی حرکت می‌کند، پس انرژی پتانسیل کاهش و انرژی جنبشی افزایش می‌یابد."
    },
    {
      id: 16,
      text: "بار q = +4 μC را در میدان الکتریکی یکنواخت E = 10³ N/C از A به B، سپس از B به C و در نهایت از C به D می‌بریم. اگر ΔU_AB = -0.4 mJ باشد، نسبت (V_D - V_C)/(V_B - V_A) کدام است؟",
      options: ["۰.۵", "۱", "۲", "۲.۵"],
      correctIndex: 3,
      answer: "گزینه ۴: ΔV_BC = -40 V, ΔV_AB = -100 V → نسبت = 40/100 = 2.5"
    },
    {
      id: 17,
      text: "ذره‌ای با جرم ۲۰ g و بار q در میدان الکتریکی یکنواخت ۱۰⁵ N/C با تندی ۲۰ m/s به سمت بالا پرتاب می‌شود. اگر پس از ۲ متر متوقف شود، بار ذره چند میکروکولن است؟ (g = 10 N/kg)",
      options: ["-۱۸", "-۲۰", "+۱۸", "+۲۰"],
      correctIndex: 0,
      answer: "گزینه ۱: ΔK = -4 J. W_mg = -mgd = -0.4 J. W_E = ΔK - W_mg = -4 - (-0.4) = -3.6 J. W_E = E|q|d cosθ → -3.6 = 10⁵ × |q| × 2 × (-1) → |q| = 1.8×10⁻⁵ C = 18 μC. بار منفی است ← q = -18 μC"
    },

    // ==================== خازن ====================
    {
      id: 18,
      text: "خازنی با ظرفیت ۷.۵ μF و بار ۱.۵ μC، میدان الکتریکی ۵۰۰ N/C بین صفحات آن برقرار است. فاصله بین صفحات خازن چند میلی‌متر است؟",
      options: ["۱.۵", "۰.۲", "۰.۴", "۲.۵"],
      correctIndex: 2,
      answer: "گزینه ۳: V = q/C = 1.5/7.5 = 0.2 V. d = V/E = 0.2/500 = 4×10⁻⁴ m = 0.4 mm"
    },
    {
      id: 19,
      text: "خازنی با دی‌الکتریک K=2 را شارژ کرده و از مولد جدا می‌کنیم. سپس دی‌الکتریک K=6 را بین صفحات قرار می‌دهیم. میدان الکتریکی چند N/C کاهش می‌یابد؟ (σ = 48×10⁻⁸ C/m², ε₀ = 8×10⁻¹² C²/N·m²)",
      options: ["2×10⁴", "5×10⁴", "8×10³", "5×10³"],
      correctIndex: 0,
      answer: "گزینه ۱: E = q/(κε₀A). ΔE = (q/ε₀A)(1/2 - 1/6) = (48×10⁻⁸/8×10⁻¹²) × (1/3) = 2×10⁴ N/C"
    },
    {
      id: 20,
      text: "خازن مسطحی با ظرفیت ۳۰ μF و بار ۱۵ μC، فاصله صفحات ۲ mm است. بزرگی میدان الکتریکی چند واحد SI است؟",
      options: ["۱۰۰۰", "۳۰۰", "۵۰۰", "۲۵۰"],
      correctIndex: 3,
      answer: "گزینه ۴: V = q/C = 15/30 = 0.5 V. E = V/d = 0.5/(2×10⁻³) = 250 V/m"
    },
    {
      id: 21,
      text: "خازنی را پس از شارژ از باتری جدا کرده و فاصله صفحات را ۲ برابر می‌کنیم، سپس دوباره فاصله را ۲ برابر می‌کنیم. میدان الکتریکی چند برابر E₁ می‌شود؟",
      options: ["۱", "۴", "½", "¼"],
      correctIndex: 2,
      answer: "گزینه ۳: در حالت اول (خازن از باتری جدا) با تغییر d، Q ثابت و E = Q/(ε₀A) ثابت می‌ماند. پس E' = ½E₁"
    },
    {
      id: 22,
      text: "اختلاف پتانسیل خازنی را از ۱۰ V به ۲۰ V می‌رسانیم، بار آن ۲۰ μC افزایش می‌یابد. ظرفیت خازن چند μF است؟",
      options: ["۱", "۲", "۱", "۴"],
      correctIndex: 1,
      answer: "گزینه ۲: ΔQ = C×ΔV → 20 = C×10 → C = 2 μF"
    },
    {
      id: 23,
      text: "حداکثر ولتاژ خازن ۱ μF با فاصله ۱.۲ mm، ۱۲۰۰۰ V است. با دی‌الکتریک به ضخامت ۲.۴ mm، بیشینه بار چند کولن است؟",
      options: ["۱.۲", "۲.۴", "۱.۲", "۴.۸"],
      correctIndex: 0,
      answer: "گزینه ۱: E_max = 12000/1.2×10⁻³ = 10⁷ V/m. V_max' = 10⁷ × 2.4×10⁻³ = 24000 V. C' = C/2 = 0.5 μF. Q_max = C'V_max' = 0.5×10⁻⁶ × 24000 = 1.2×10⁻² C"
    },
    {
      id: 24,
      text: "خازن تختی با دی‌الکتریک K=5 را به اختلاف پتانسیل ۲۰ V وصل کرده و از باتری جدا می‌کنیم. میدان الکتریکی ناشی از قطبش دی‌الکتریک چند N/C و در چه جهتی است؟ (d = 2 mm)",
      options: ["۱۶۰۰۰ و هم‌جهت", "۱۶۰۰۰ و خلاف جهت", "۸۰۰۰ و هم‌جهت", "۸۰۰۰ و خلاف جهت"],
      correctIndex: 1,
      answer: "گزینه ۲: E₁ = V/d = 20000 V/m. E' = V'/(d) = (20/5)/(2×10⁻³) = 4000 V/m. میدان قطبش = 16000 N/C، خلاف جهت میدان اصلی"
    },
    {
      id: 25,
      text: "خازن تختی با ظرفیت ۴ pF و دی‌الکتریک K=6، مساحت ۴ cm² دارد. فاصله صفحات را چند mm کم کنیم تا ظرفیت ۱ pF تغییر کند؟ (ε₀ = 9×10⁻¹² F/m)",
      options: ["1.35", "1.08", "4.32", "4.05"],
      correctIndex: 1,
      answer: "گزینه ۲: C = Kε₀A/d → 4×10⁻¹² = 6×9×10⁻¹² × 4×10⁻⁴ / d → d = 5.4×10⁻³ m = 5.4 mm. C' = 5 pF → d' = 4.32 mm. کاهش = 1.08 mm"
    },
    {
      id: 26,
      text: "خازنی به ظرفیت ۲۰ μF با ولتاژ ۱۰ V را شارژ می‌کنیم. اگر ولتاژ را ۴۰ V برسانیم، بار هر صفحه به مقدار ΔQ تغییر می‌کند. نسبت ΔQ/Q₁ کدام است؟",
      options: ["۲", "۳", "۴", "۵"],
      correctIndex: 1,
      answer: "گزینه ۲: Q₁ = CV₁ = 20×10 = 200 μC. Q₂ = 20×40 = 800 μC. ΔQ = 600 μC. ΔQ/Q₁ = 600/200 = 3"
    },
    {
      id: 27,
      text: "خازن تخت با ظرفیت ۱۰ pF را به باتری ۱۲ V می‌بندیم. اگر فاصله صفحات را نصف کنیم، بار خازن چند μC می‌شود؟",
      options: ["2.4×10⁻⁴", "2.4×10⁻¹⁰", "1.2×10⁻⁴", "1.2×10⁻¹⁰"],
      correctIndex: 0,
      answer: "گزینه ۱: Q₁ = CV = 10×10⁻¹² × 12 = 1.2×10⁻¹⁰ C. با نصف شدن فاصله، C' = 2C = 20 pF. Q' = 20×10⁻¹² × 12 = 2.4×10⁻¹⁰ C = 2.4×10⁻⁴ μC"
    },
    {
      id: 28,
      text: "اگر فاصله صفحات خازن را ۲۵% افزایش و دی‌الکتریک K=2 را خارج کنیم، ظرفیت چند درصد و چگونه تغییر می‌کند؟",
      options: ["۶۰% افزایش", "۶۰% کاهش", "۴۰% افزایش", "۴۰% کاهش"],
      correctIndex: 1,
      answer: "گزینه ۲: d' = 1.25d. K' = 1. C'/C = (1/1.25) × (1/2) = 0.4. کاهش 60%"
    },
    {
      id: 29,
      text: "خازنی با ظرفیت ۲ nF، قطر دایره‌ای ۶ cm و فاصله ۱.۸ mm با K=4 را شارژ کرده و از باتری جدا می‌کنیم. اگر میدان الکتریکی ۵×۱۰⁵ N/C شود، قطر صفحات چند cm است؟ (π=3, ε₀=9×10⁻¹²)",
      options: ["۱۰", "۵", "۴۰", "۲۰"],
      correctIndex: 0,
      answer: "گزینه ۱: Q = CV = 2×10⁻⁹ × 54 = 1.08×10⁻⁷ C. E = Q/(Kε₀A) → 5×10⁵ = 1.08×10⁻⁷/(4×9×10⁻¹²×A) → A = 6×10⁻³ m² = 60 cm². r² = 20 → r = 4.47 cm ≈ 5 cm → قطر = 10 cm"
    },
    {
      id: 30,
      text: "خازن تخت با مساحت ۴ cm² و فاصله ۲ μm، با دی‌الکتریک K=24 پر شده و به اختلاف پتانسیل ۵۰ V وصل است. بار ذخیره‌شده چند nC است؟ (ε₀=8.85×10⁻¹²)",
      options: ["414.8", "212.4", "4148", "2124"],
      correctIndex: 1,
      answer: "گزینه ۲: C = Kε₀A/d = 24×8.85×10⁻¹²×4×10⁻⁴/2×10⁻⁶ = 4.248×10⁻⁸ F. Q = CV = 4.248×10⁻⁸ × 50 = 2.124×10⁻⁶ C = 212.4 nC"
    },
  ];

  // ==================== State ====================
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [showAnswers, setShowAnswers] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [isScoreCalculated, setIsScoreCalculated] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60 * 60);
  const [isTimeUp, setIsTimeUp] = useState(false);

  // ========== تابع محاسبه درصد ==========
  const calculateScore = useCallback(() => {
    if (isCalculatedRef.current) return;
    isCalculatedRef.current = true;

    let correctCount = 0;
    questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        correctCount++;
      }
    });
    const percentage = (correctCount / questions.length) * 100;
    setScore(percentage);
    setIsScoreCalculated(true);
  }, [selectedAnswers]);

  // ========== تابع انتخاب گزینه ==========
  const handleOptionClick = (questionId: number, optionIndex: number) => {
    if (isTimeUp || isScoreCalculated) return;

    setSelectedAnswers((prev) => {
      const newAnswers = { ...prev, [questionId]: optionIndex };
      return newAnswers;
    });

    if (isScoreCalculated) {
      setIsScoreCalculated(false);
      setScore(null);
      isCalculatedRef.current = false;
    }
  };

  // ========== تایمر ==========
  useEffect(() => {
    if (isTimeUp || isScoreCalculated) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
      return;
    }

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setIsTimeUp(true);
          isTimeUpRef.current = true;
          if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isTimeUp, isScoreCalculated]);

  // ========== زمان تمام شد ==========
  useEffect(() => {
    if (isTimeUp && !isScoreCalculated && !isTimeUpRef.current) {
      isTimeUpRef.current = true;
      const timeoutId = setTimeout(() => {
        calculateScore();
      }, 300);
      return () => clearTimeout(timeoutId);
    }
  }, [isTimeUp, isScoreCalculated, calculateScore]);

  // ========== بررسی پاسخ‌دهی ==========
  const isAllAnswered = questions.every((q) => selectedAnswers[q.id] !== undefined);
  const canCalculate = isAllAnswered && !isScoreCalculated && !isTimeUp;
  const answeredCount = Object.keys(selectedAnswers).length;

  const getScoreColor = (score: number) => {
    if (score >= 80) return '#28a745';
    if (score >= 50) return '#ffc107';
    return '#dc3545';
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div
      style={{
        fontFamily: 'Tahoma, Arial, sans-serif',
        width: '100vw',
        minHeight: '100vh',
        padding: '15px 10px',
        backgroundColor: '#f8f9fa',
        direction: 'rtl',
        textAlign: 'right',
        boxSizing: 'border-box',
        overflowX: 'hidden',
      }}
    >
      {/* هدر */}
      <div
        style={{
          backgroundColor: '#1565C0',
          color: 'white',
          padding: '20px',
          borderRadius: '8px',
          marginBottom: '30px',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <button
          onClick={() => router.push('/exam/yazdahom/tajrobi/ghalamchi/second-half')}
          style={{
            position: 'absolute',
            left: '20px',
            top: '20px',
            padding: '8px 16px',
            backgroundColor: 'rgba(255,255,255,0.2)',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '14px',
          }}
        >
          ← بازگشت به لیست دروس
        </button>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <div>
            <h1 style={{ margin: 0, fontSize: '28px' }}>⚡ آزمون جامع فیزیک (۲)</h1>
            <p style={{ marginTop: '10px', fontSize: '16px', opacity: 0.9 }}>
              {questions.length} سوال - پاسخ داده شده: {answeredCount}/{questions.length}
            </p>
          </div>

          <div
            style={{
              backgroundColor: isTimeUp ? '#dc3545' : 'rgba(255,255,255,0.15)',
              padding: '10px 25px',
              borderRadius: '50px',
              fontSize: '24px',
              fontWeight: 'bold',
              fontFamily: 'monospace',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <span>⏱️</span>
            <span>{isTimeUp ? '⏰ تمام شد!' : formatTime(timeLeft)}</span>
          </div>
        </div>
        {!isTimeUp && <p style={{ fontSize: '14px', opacity: 0.7, marginTop: '5px' }}>زمان باقی‌مانده</p>}
      </div>

      {/* سوالات */}
      <div style={{ width: '100%' }}>
        {questions.map((q, index) => (
          <QuestionCard
            key={q.id}
            question={q}
            index={index}
            selectedOption={selectedAnswers[q.id]}
            onOptionSelect={handleOptionClick}
            isTimeUp={isTimeUp}
          />
        ))}

        {/* دکمه محاسبه */}
        <div
          style={{
            marginTop: '30px',
            marginBottom: '30px',
            padding: '20px',
            backgroundColor: '#ffffff',
            borderRadius: '12px',
            border: '1px solid #dee2e6',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
            textAlign: 'center',
          }}
        >
          {!isScoreCalculated ? (
            <div>
              <button
                onClick={() => {
                  if (canCalculate) {
                    calculateScore();
                  }
                }}
                disabled={!canCalculate}
                style={{
                  padding: '15px 40px',
                  fontSize: '18px',
                  backgroundColor: canCalculate ? '#1565C0' : '#6c757d',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '50px',
                  cursor: canCalculate ? 'pointer' : 'not-allowed',
                  fontWeight: 'bold',
                  opacity: canCalculate ? 1 : 0.6,
                }}
              >
                {!isAllAnswered && !isTimeUp
                  ? `✅ ${answeredCount}/${questions.length} پاسخ داده شده - ادامه دهید`
                  : '📊 محاسبه درصد'}
              </button>
              {!isAllAnswered && !isTimeUp && (
                <p style={{ marginTop: '10px', color: '#666', fontSize: '14px' }}>
                  {questions.length - answeredCount} سوال دیگر باقی مانده است
                </p>
              )}
            </div>
          ) : (
            <div>
              <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#1565C0' }}>
                ✅ درصد شما:{' '}
                <span style={{ color: getScoreColor(score!), fontSize: '28px' }}>
                  {Math.round(score!)}%
                </span>
                {isTimeUp && (
                  <span style={{ fontSize: '14px', color: '#dc3545', marginRight: '15px' }}>
                    (زمان پایان یافت)
                  </span>
                )}
              </div>

              <div
                style={{
                  width: '80%',
                  maxWidth: '400px',
                  height: '20px',
                  backgroundColor: '#e9ecef',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  margin: '15px auto',
                }}
              >
                <div
                  style={{
                    width: `${score}%`,
                    height: '100%',
                    backgroundColor: getScoreColor(score!),
                    transition: 'width 0.8s ease-in-out',
                  }}
                />
              </div>

              <button
                onClick={() => {
                  setIsScoreCalculated(false);
                  setScore(null);
                  isCalculatedRef.current = false;
                  isTimeUpRef.current = false;
                }}
                style={{
                  padding: '10px 25px',
                  fontSize: '14px',
                  backgroundColor: '#ff9800',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  marginTop: '10px',
                }}
              >
                🔄 تغییر پاسخ‌ها
              </button>
            </div>
          )}
        </div>

        {/* دکمه پاسخنامه */}
        <div style={{ textAlign: 'center', marginTop: '20px', marginBottom: '60px' }}>
          <button
            onClick={() => setShowAnswers(!showAnswers)}
            style={{
              padding: '15px 40px',
              fontSize: '18px',
              backgroundColor: showAnswers ? '#dc3545' : '#28a745',
              color: '#fff',
              border: 'none',
              borderRadius: '50px',
              cursor: 'pointer',
              fontWeight: 'bold',
              boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
              transition: 'all 0.2s',
            }}
          >
            {showAnswers ? '❌ بستن پاسخنامه' : '📄 مشاهده پاسخنامه تشریحی'}
          </button>
        </div>

        {/* پاسخنامه */}
        {showAnswers && isScoreCalculated && (
          <div
            style={{
              marginTop: '30px',
              borderTop: '4px solid #1565C0',
              paddingTop: '40px',
              backgroundColor: '#ffffff',
              padding: '40px',
              borderRadius: '12px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
              width: '100%',
            }}
          >
            <h2
              style={{
                textAlign: 'center',
                borderBottom: '3px solid #1565C0',
                paddingBottom: '20px',
                marginBottom: '40px',
                fontSize: '26px',
                color: '#1565C0',
              }}
            >
              📝 پاسخنامه تشریحی فیزیک (۲)
            </h2>

            {questions.map((q, index) => {
              const userAnswer = selectedAnswers[q.id];
              const isCorrect = userAnswer === q.correctIndex;
              return (
                <div
                  key={q.id}
                  style={{
                    marginBottom: '35px',
                    borderBottom: '1px dashed #ced4da',
                    paddingBottom: '25px',
                  }}
                >
                  <div style={{ fontSize: '16px', lineHeight: '2' }}>
                    <span
                      style={{
                        fontWeight: 'bold',
                        color: '#1565C0',
                        backgroundColor: '#e3f2fd',
                        padding: '5px 15px',
                        borderRadius: '20px',
                        display: 'inline-block',
                        marginBottom: '10px',
                      }}
                    >
                      سوال {index + 1}
                    </span>
                    <br />
                    <span style={{ fontWeight: 'bold', color: '#28a745' }}>✅ پاسخ صحیح:</span>
                    <span style={{ fontSize: '15px' }}>{q.options[q.correctIndex]}</span>
                    <br />
                    {userAnswer !== undefined && (
                      <span>
                        <span style={{ fontWeight: 'bold', color: isCorrect ? '#28a745' : '#dc3545' }}>
                          {isCorrect ? '✔️ صحیح' : '❌ نادرست'}
                        </span>
                        <span style={{ fontSize: '14px', color: '#666', marginRight: '10px' }}>
                          (انتخاب شما: {String.fromCharCode(65 + userAnswer)})
                        </span>
                        <br />
                      </span>
                    )}
                    <span style={{ fontWeight: 'bold', color: '#1565C0' }}>📖 توضیح:</span>
                    <br />
                    <span style={{ fontSize: '15px', lineHeight: '1.8', color: '#333' }}>
                      {q.answer}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {showAnswers && !isScoreCalculated && (
          <div
            style={{
              textAlign: 'center',
              padding: '30px',
              backgroundColor: '#fff3cd',
              borderRadius: '12px',
              border: '1px solid #ffc107',
            }}
          >
            <p style={{ fontSize: '18px', color: '#856404' }}>
              ⚠️ لطفاً ابتدا روی دکمه <strong>&quot;محاسبه درصد&quot;</strong> کلیک کنید تا پاسخنامه نمایش داده شود.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhysicsFinalExam;