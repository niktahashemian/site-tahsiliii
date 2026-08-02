"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';

const DinVaZendegi3SecondHalfFinalExam = () => {
  const router = useRouter();
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const isTimeUpRef = useRef(false);
  const isCalculatedRef = useRef(false);

  // ================= سوالات دین و زندگی (۳) - جامع نیم‌سال دوم =================
  const questions = [
    // ==================== فصل اول: انسان و ایمان ====================
    {
      id: 1,
      text: "در نگاه اسلام، انسان دارای چه ابعادی است؟",
      options: ["بعد مادی", "بعد معنوی", "هر دو", "هیچکدام"],
      correctIndex: 2,
      answer: "گزینه ۳: انسان در نگاه اسلام دارای دو بعد مادی و معنوی است."
    },
    {
      id: 2,
      text: "فطرت به چه معناست؟",
      options: ["سرشت اولیه انسان", "ایمان اکتسابی", "تعلیم و تربیت", "همه موارد"],
      correctIndex: 0,
      answer: "گزینه ۱: فطرت به سرشت اولیه و خداشناسی فطری انسان اشاره دارد."
    },
    {
      id: 3,
      text: "رابطه ایمان و عمل چگونه است؟",
      options: ["ایمان بدون عمل کافی است", "عمل بدون ایمان کافی است", "ایمان و عمل مکمل یکدیگرند", "هیچ رابطه‌ای ندارند"],
      correctIndex: 2,
      answer: "گزینه ۳: ایمان و عمل مکمل یکدیگرند و ایمان واقعی در عمل نمود پیدا می‌کند."
    },
    {
      id: 4,
      text: "تقوا به چه معناست؟",
      options: ["پرهیزگاری و خودکنترلی", "ترس از خدا", "عبادت زیاد", "همه موارد"],
      correctIndex: 0,
      answer: "گزینه ۱: تقوا به معنی پرهیزگاری و خودکنترلی در برابر گناهان است."
    },
    {
      id: 5,
      text: "آثار تقوا در زندگی چیست؟",
      options: ["آرامش روان", "موفقیت", "قرب الهی", "همه موارد"],
      correctIndex: 3,
      answer: "گزینه ۴: تقوا باعث آرامش روان، موفقیت و قرب الهی می‌شود."
    },
    {
      id: 6,
      text: "ایمان در اسلام به چه معناست؟",
      options: ["اعتقاد قلبی", "اقرار زبانی", "عمل صالح", "همه موارد"],
      correctIndex: 3,
      answer: "گزینه ۴: ایمان در اسلام شامل اعتقاد قلبی، اقرار زبانی و عمل صالح است."

    },

    // ==================== فصل دوم: خانواده و اجتماع ====================
    {
      id: 7,
      text: "خانواده در اسلام چه جایگاهی دارد؟",
      options: ["محیط تربیت و رشد", "محیط آرامش", "محیط عبادت", "همه موارد"],
      correctIndex: 3,
      answer: "گزینه ۴: خانواده در اسلام محیط تربیت، رشد، آرامش و عبادت است."
    },
    {
      id: 8,
      text: "ازدواج در اسلام چه هدفی دارد؟",
      options: ["آرامش", "تولید نسل", "رشد معنوی", "همه موارد"],
      correctIndex: 3,
      answer: "گزینه ۴: ازدواج در اسلام اهداف مختلفی مانند آرامش، تولید نسل و رشد معنوی دارد."
    },
    {
      id: 9,
      text: "عدالت در اسلام چه جایگاهی دارد؟",
      options: ["ارزشی اساسی", "ارزشی فرعی", "غیر ضروری", "هیچکدام"],
      correctIndex: 0,
      answer: "گزینه ۱: عدالت در اسلام ارزشی اساسی و زیربنایی دارد."
    },
    {
      id: 10,
      text: "امر به معروف و نهی از منکر چه هدفی دارد؟",
      options: ["اصلاح جامعه", "تأکید بر ارزش‌ها", "پیشگیری از فساد", "همه موارد"],
      correctIndex: 3,
      answer: "گزینه ۴: امر به معروف و نهی از منکر برای اصلاح جامعه، تأکید بر ارزش‌ها و پیشگیری از فساد است."
    },
    {
      id: 11,
      text: "اقتصاد در اسلام بر چه اصولی استوار است؟",
      options: ["عدالت", "اخلاق", "انصاف", "همه موارد"],
      correctIndex: 3,
      answer: "گزینه ۴: اقتصاد در اسلام بر اصول عدالت، اخلاق و انصاف استوار است."
    },
    {
      id: 12,
      text: "حقوق همسایه در اسلام چه اهمیتی دارد؟",
      options: ["بسیار مهم", "بی‌اهمیت", "فرعی", "اختیاری"],
      correctIndex: 0,
      answer: "گزینه ۱: حقوق همسایه در اسلام بسیار مهم است و رعایت آن از واجبات است."

    },

    // ==================== فصل سوم: اخلاق فردی و اجتماعی ====================
    {
      id: 13,
      text: "تزکیه نفس به چه معناست؟",
      options: ["پالایش روح از رذایل", "آراستن به فضایل", "هر دو", "هیچکدام"],
      correctIndex: 2,
      answer: "گزینه ۳: تزکیه نفس هم به معنای پالایش روح از رذایل و هم آراستن به فضایل است."
    },
    {
      id: 14,
      text: "حسن خلق چه تأثیری در زندگی دارد؟",
      options: ["افزایش محبت", "بهبود روابط", "جلب رضایت خدا", "همه موارد"],
      correctIndex: 3,
      answer: "گزینه ۴: حسن خلق باعث افزایش محبت، بهبود روابط و جلب رضایت خدا می‌شود."
    },
    {
      id: 15,
      text: "صبر در اسلام چه جایگاهی دارد؟",
      options: ["فضیلتی بزرگ", "فضیلتی کوچک", "غیر ضروری", "هیچکدام"],
      correctIndex: 0,
      answer: "گزینه ۱: صبر در اسلام فضیلتی بزرگ است و در قرآن بسیار به آن سفارش شده است."
    },
    {
      id: 16,
      text: "شکرگزاری چه تأثیری در زندگی دارد؟",
      options: ["افزایش نعمت", "آرامش روان", "رضایت الهی", "همه موارد"],
      correctIndex: 3,
      answer: "گزینه ۴: شکرگزاری باعث افزایش نعمت، آرامش روان و رضایت الهی می‌شود."
    },
    {
      id: 17,
      text: "توکل بر خدا به چه معناست؟",
      options: ["اعتماد کامل به خدا", "انکار تلاش", "بی‌تفاوتی", "همه موارد"],
      correctIndex: 0,
      answer: "گزینه ۱: توکل به معنی اعتماد کامل به خداوند و سپردن کارها به اوست."
    },
    {
      id: 18,
      text: "رضا به قضای الهی چه تأثیری دارد؟",
      options: ["آرامش", "رضایت", "قرب الهی", "همه موارد"],
      correctIndex: 3,
      answer: "گزینه ۴: رضا به قضای الهی باعث آرامش، رضایت و قرب الهی می‌شود."

    },

    // ==================== فصل چهارم: سیره معصومین (ع) ====================
    {
      id: 19,
      text: "پیامبر اکرم (ص) در سیره فردی خود چه ویژگی‌هایی داشتند؟",
      options: ["ساده‌زیستی", "عبادت", "اخلاق نیکو", "همه موارد"],
      correctIndex: 3,
      answer: "گزینه ۴: پیامبر اکرم در سیره فردی خود دارای ساده‌زیستی، عبادت و اخلاق نیکو بودند."
    },
    {
      id: 20,
      text: "امام علی (ع) چه ویژگی‌هایی داشتند؟",
      options: ["عدالت", "زهد", "علم", "همه موارد"],
      correctIndex: 3,
      answer: "گزینه ۴: امام علی (ع) دارای عدالت، زهد و علم فراوان بودند."
    },
    {
      id: 21,
      text: "قیام عاشورا چه اهدافی داشت؟",
      options: ["احیای دین", "مبارزه با ظلم", "امر به معروف", "همه موارد"],
      correctIndex: 3,
      answer: "گزینه ۴: قیام عاشورا برای احیای دین، مبارزه با ظلم و امر به معروف بود."
    },
    {
      id: 22,
      text: "امام حسین (ع) در عاشورا چه پیامی داشت؟",
      options: ["ایستادگی در برابر ظلم", "شهادت در راه حق", "دفاع از ارزش‌ها", "همه موارد"],
      correctIndex: 3,
      answer: "گزینه ۴: امام حسین (ع) در عاشورا پیام ایستادگی در برابر ظلم، شهادت در راه حق و دفاع از ارزش‌ها را داشت."
    },
    {
      id: 23,
      text: "سیره معصومین (ع) چه راهنمایی‌هایی برای ما دارد؟",
      options: ["راه زندگی", "راه عبادت", "راه اخلاق", "همه موارد"],
      correctIndex: 3,
      answer: "گزینه ۴: سیره معصومین راه زندگی، عبادت و اخلاق را به ما نشان می‌دهد."
    },
    {
      id: 24,
      text: "هدف نهایی سیره معصومین (ع) چیست؟",
      options: ["قرب الهی", "هدایت انسان", "عدالت", "همه موارد"],
      correctIndex: 3,
      answer: "گزینه ۴: هدف نهایی سیره معصومین، قرب الهی، هدایت انسان و عدالت است."

    },

    // ==================== سوالات ترکیبی ====================
    {
      id: 25,
      text: "انسان متقی در قرآن چگونه توصیف شده است؟",
      options: ["مؤمن و پرهیزگار", "ثروتمند", "زیبا", "دانشمند"],
      correctIndex: 0,
      answer: "گزینه ۱: انسان متقی یعنی مؤمن و پرهیزگار که از گناهان دوری می‌کند."
    },
    {
      id: 26,
      text: "هدف نهایی اخلاق اسلامی چیست؟",
      options: ["قرب الهی", "خوشبختی دنیوی", "ثروت", "شهرت"],
      correctIndex: 0,
      answer: "گزینه ۱: هدف نهایی اخلاق اسلامی، قرب الهی و رسیدن به کمال انسانی است."
    },
    {
      id: 27,
      text: "در اسلام، مهم‌ترین رذیله اخلاقی کدام است؟",
      options: ["کبر", "حسد", "بخل", "همه موارد"],
      correctIndex: 3,
      answer: "گزینه ۴: کبر، حسد و بخل همگی از مهم‌ترین رذایل اخلاقی در اسلام هستند."
    },
    {
      id: 28,
      text: "عدالت در اسلام چه رابطه‌ای با اخلاق دارد؟",
      options: ["عدالت جزئی از اخلاق است", "عدالت خارج از اخلاق است", "هیچ رابطه‌ای ندارند", "عدالت مهم‌تر از اخلاق است"],
      correctIndex: 0,
      answer: "گزینه ۱: عدالت جزئی از اخلاق است و هر دو در اسلام ارزش اساسی دارند."
    },
    {
      id: 29,
      text: "سیره پیامبر اکرم (ص) در چه زمینه‌هایی الگو است؟",
      options: ["فردی", "اجتماعی", "عبادی", "همه موارد"],
      correctIndex: 3,
      answer: "گزینه ۴: سیره پیامبر اکرم در زمینه‌های فردی، اجتماعی و عبادی الگو است."
    },
    {
      id: 30,
      text: "آیه 'إِنَّ اللّهَ یَأْمُرُ بِالْعَدْلِ وَ الْإِحْسَانِ' بر چه موضوعی دلالت دارد؟",
      options: ["عدالت و احسان", "نماز و روزه", "حج و زکات", "هیچکدام"],
      correctIndex: 0,
      answer: "گزینه ۱: این آیه بر لزوم عدالت و احسان در زندگی دلالت دارد."
    },
  ];

  // ==================== State ====================
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: number}>({});
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
    questions.forEach(q => {
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

    setSelectedAnswers(prev => {
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
  const isAllAnswered = questions.every(q => selectedAnswers[q.id] !== undefined);
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
    <div style={{
      fontFamily: 'Tahoma, Arial, sans-serif',
      width: '100vw',
      minHeight: '100vh',
      padding: '15px 10px',
      backgroundColor: '#f8f9fa',
      direction: 'rtl',
      textAlign: 'right',
      boxSizing: 'border-box',
      overflowX: 'hidden'
    }}>
      
      {/* هدر */}
      <div style={{
        backgroundColor: '#1A237E',
        color: 'white',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '30px',
        textAlign: 'center',
        position: 'relative'
      }}>
        <button 
          onClick={() => router.push('/exam/davazdahom/riyazi/ghalamchi/second-half/din-va-zendegi-3-riazi')}
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
            fontSize: '14px'
          }}
        >
          ← بازگشت به لیست دروس
        </button>
        
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <div>
            <h1 style={{ margin: 0, fontSize: '28px' }}>🕌 آزمون جامع دین و زندگی (۳) - نیم‌سال دوم</h1>
            <p style={{ marginTop: '10px', fontSize: '16px', opacity: 0.9 }}>
              {questions.length} سوال - پاسخ داده شده: {answeredCount}/{questions.length}
            </p>
          </div>
          
          <div style={{
            backgroundColor: isTimeUp ? '#dc3545' : 'rgba(255,255,255,0.15)',
            padding: '10px 25px',
            borderRadius: '50px',
            fontSize: '24px',
            fontWeight: 'bold',
            fontFamily: 'monospace',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <span>⏱️</span>
            <span>{isTimeUp ? '⏰ تمام شد!' : formatTime(timeLeft)}</span>
          </div>
        </div>
      </div>

      {/* سوالات */}
      <div style={{ width: '100%' }}>
        {questions.map((q, index) => (
          <div key={q.id} style={{
            marginBottom: '25px',
            backgroundColor: '#ffffff',
            padding: '20px 25px',
            borderRadius: '8px',
            border: '1px solid #e9ecef',
            boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
          }}>
            <div style={{ 
              fontSize: '17px', 
              lineHeight: '1.9', 
              marginBottom: '20px', 
              fontWeight: '500',
              display: 'flex',
              alignItems: 'flex-start'
            }}>
              <span style={{
                display: 'inline-block',
                backgroundColor: '#1A237E',
                color: 'white',
                width: '30px',
                height: '30px',
                textAlign: 'center',
                lineHeight: '30px',
                borderRadius: '50%',
                fontSize: '14px',
                marginLeft: '15px',
                flexShrink: 0
              }}>
                {index + 1}
              </span>
              <span>{q.text}</span>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '12px 30px',
              marginRight: '20px'
            }}>
              {q.options.map((opt, idx) => {
                const isSelected = selectedAnswers[q.id] === idx;
                const isDisabled = isTimeUp || isScoreCalculated;
                
                return (
                  <button
                    key={idx}
                    onClick={() => handleOptionClick(q.id, idx)}
                    disabled={isDisabled}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '12px 18px',
                      border: isSelected ? '3px solid #1A237E' : '1px solid #dee2e6',
                      borderRadius: '10px',
                      backgroundColor: isSelected ? '#e8eaf6' : '#fff',
                      cursor: isDisabled ? 'not-allowed' : 'pointer',
                      fontSize: '15px',
                      textAlign: 'right',
                      transition: 'all 0.2s',
                      width: '100%',
                      opacity: isDisabled && !isSelected ? 0.6 : 1
                    }}
                  >
                    <span style={{
                      display: 'inline-block',
                      width: '28px',
                      height: '28px',
                      border: '1px solid #000',
                      borderRadius: '50%',
                      textAlign: 'center',
                      lineHeight: '28px',
                      fontSize: '14px',
                      marginLeft: '15px',
                      backgroundColor: isSelected ? '#1A237E' : '#fff',
                      color: isSelected ? '#fff' : '#000'
                    }}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        {/* دکمه محاسبه */}
        <div style={{
          marginTop: '30px', 
          marginBottom: '30px', 
          padding: '20px', 
          backgroundColor: '#ffffff', 
          borderRadius: '12px', 
          border: '1px solid #dee2e6',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
          textAlign: 'center'
        }}>
          
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
                  backgroundColor: canCalculate ? '#1A237E' : '#6c757d',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '50px',
                  cursor: canCalculate ? 'pointer' : 'not-allowed',
                  fontWeight: 'bold',
                  opacity: canCalculate ? 1 : 0.6
                }}
              >
                {!isAllAnswered && !isTimeUp ? `✅ ${answeredCount}/${questions.length} پاسخ داده شده - ادامه دهید` : '📊 محاسبه درصد'}
              </button>
              {!isAllAnswered && !isTimeUp && (
                <p style={{ marginTop: '10px', color: '#666', fontSize: '14px' }}>
                  {questions.length - answeredCount} سوال دیگر باقی مانده است
                </p>
              )}
            </div>
          ) : (
            <div>
              <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#1A237E' }}>
                ✅ درصد شما: <span style={{ color: getScoreColor(score!), fontSize: '28px' }}>{Math.round(score!)}%</span>
                {isTimeUp && <span style={{ fontSize: '14px', color: '#dc3545', marginRight: '15px' }}>(زمان پایان یافت)</span>}
              </div>
              
              <div style={{
                width: '80%',
                maxWidth: '400px',
                height: '20px',
                backgroundColor: '#e9ecef',
                borderRadius: '10px',
                overflow: 'hidden',
                margin: '15px auto'
              }}>
                <div style={{
                  width: `${score}%`,
                  height: '100%',
                  backgroundColor: getScoreColor(score!),
                  transition: 'width 0.8s ease-in-out'
                }} />
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
                  marginTop: '10px'
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
              transition: 'all 0.2s'
            }}
          >
            {showAnswers ? "❌ بستن پاسخنامه" : "📄 مشاهده پاسخنامه تشریحی"}
          </button>
        </div>

        {/* پاسخنامه */}
        {showAnswers && isScoreCalculated && (
          <div style={{
            marginTop: '30px',
            borderTop: '4px solid #1A237E',
            paddingTop: '40px',
            backgroundColor: '#ffffff',
            padding: '40px',
            borderRadius: '12px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
            width: '100%'
          }}>
            <h2 style={{ 
              textAlign: 'center', 
              borderBottom: '3px solid #1A237E', 
              paddingBottom: '20px', 
              marginBottom: '40px',
              fontSize: '26px',
              color: '#1A237E'
            }}>
              📝 پاسخنامه تشریحی دین و زندگی (۳) - نیم‌سال دوم
            </h2>
            
            {questions.map((q, index) => {
              const userAnswer = selectedAnswers[q.id];
              const isCorrect = userAnswer === q.correctIndex;
              return (
                <div key={q.id} style={{
                  marginBottom: '35px',
                  borderBottom: '1px dashed #ced4da',
                  paddingBottom: '25px'
                }}>
                  <div style={{ fontSize: '16px', lineHeight: '2' }}>
                    <span style={{ 
                      fontWeight: 'bold', 
                      color: '#1A237E',
                      backgroundColor: '#e8eaf6',
                      padding: '5px 15px',
                      borderRadius: '20px',
                      display: 'inline-block',
                      marginBottom: '10px'
                    }}>
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
                    <span style={{ fontWeight: 'bold', color: '#1A237E' }}>📖 توضیح:</span> 
                    <br />
                    <span style={{ fontSize: '15px', lineHeight: '1.8', color: '#333' }}>{q.answer}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {showAnswers && !isScoreCalculated && (
          <div style={{
            textAlign: 'center',
            padding: '30px',
            backgroundColor: '#fff3cd',
            borderRadius: '12px',
            border: '1px solid #ffc107'
          }}>
            <p style={{ fontSize: '18px', color: '#856404' }}>
              ⚠️ لطفاً ابتدا روی دکمه <strong>&quot;محاسبه درصد&quot;</strong> کلیک کنید تا پاسخنامه نمایش داده شود.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DinVaZendegi3SecondHalfFinalExam;