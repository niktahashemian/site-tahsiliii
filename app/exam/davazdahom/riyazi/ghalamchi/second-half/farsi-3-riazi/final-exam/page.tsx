"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';

const Farsi3SecondHalfFinalExam = () => {
  const router = useRouter();
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const isTimeUpRef = useRef(false);
  const isCalculatedRef = useRef(false);

  // ================= سوالات فارسی (۳) - جامع نیم‌سال دوم =================
  const questions = [
    // ==================== فصل اول: نثر فارسی ====================
    {
      id: 1,
      text: "نثر ساده چه ویژگی‌هایی دارد؟",
      options: ["زبان روان و ساده", "استفاده از صنایع ادبی پیچیده", "جملات طولانی", "کاربرد واژگان عربی"],
      correctIndex: 0,
      answer: "گزینه ۱: نثر ساده دارای زبان روان و ساده است و از صنایع ادبی پیچیده پرهیز می‌کند."
    },
    {
      id: 2,
      text: "نثر مسجع چه ویژگی‌هایی دارد؟",
      options: ["دارای آهنگ و موسیقی است", "فاقد قافیه است", "نثری علمی است", "هیچکدام"],
      correctIndex: 0,
      answer: "گزینه ۱: نثر مسجع دارای آهنگ و موسیقی است و کلمات آن با هم هم‌آهنگ هستند."
    },
    {
      id: 3,
      text: "نثر مرسل در چه دوره‌ای رواج داشت؟",
      options: ["دوره سامانی", "دوره صفوی", "دوره قاجار", "دوره معاصر"],
      correctIndex: 0,
      answer: "گزینه ۱: نثر مرسل در دوره سامانی و اوایل دوره غزنوی رواج داشت."
    },
    {
      id: 4,
      text: "کدام یک از موارد زیر از ویژگی‌های نثر فنی است؟",
      options: ["استفاده از آرایه‌های ادبی", "زبان ساده", "جملات کوتاه", "کاربرد واژگان عامیانه"],
      correctIndex: 0,
      answer: "گزینه ۱: نثر فنی با استفاده از آرایه‌های ادبی و صنایع بدیعی مشخص می‌شود."
    },
    {
      id: 5,
      text: "نثر معاصر فارسی چه ویژگی‌هایی دارد؟",
      options: ["زبان ساده و روان", "تأثیرپذیری از نثر غربی", "توجه به مخاطب", "همه موارد"],
      correctIndex: 3,
      answer: "گزینه ۴: نثر معاصر با زبان ساده، تأثیرپذیری از نثر غربی و توجه به مخاطب مشخص می‌شود."
    },
    {
      id: 6,
      text: "نمونه‌ای از نثر مسجع در ادبیات فارسی کدام است؟",
      options: ["گلستان سعدی", "تاریخ بیهقی", "کلیله و دمنه", "سیاست نامه"],
      correctIndex: 0,
      answer: "گزینه ۱: گلستان سعدی نمونه‌ای از نثر مسجع در ادبیات فارسی است."

    },

    // ==================== فصل دوم: نظم فارسی ====================
    {
      id: 7,
      text: "قالب قصیده در شعر فارسی چه ویژگی‌هایی دارد؟",
      options: ["دارای مصراع‌های بلند", "تک بیت است", "دارای ردیف است", "هیچکدام"],
      correctIndex: 0,
      answer: "گزینه ۱: قصیده دارای مصراع‌های بلند است و معمولاً برای مدح یا منقبت سروده می‌شود."
    },
    {
      id: 8,
      text: "غزل در شعر فارسی به چه معناست؟",
      options: ["شعر عاشقانه", "شعر حماسی", "شعر تعلیمی", "شعر مدحی"],
      correctIndex: 0,
      answer: "گزینه ۱: غزل شعری عاشقانه و عارفانه است که در آن احساسات شاعر بیان می‌شود."
    },
    {
      id: 9,
      text: "مثنوی چه نوع قالبی است؟",
      options: ["هر بیت دارای قافیه جداگانه", "همه ابیات یک قافیه دارند", "بدون قافیه است", "هیچکدام"],
      correctIndex: 0,
      answer: "گزینه ۱: در مثنوی، هر بیت قافیه جداگانه‌ای دارد و برای بیان داستان‌های بلند استفاده می‌شود."
    },
    {
      id: 10,
      text: "رباعی در شعر فارسی چند مصراع دارد؟",
      options: ["۲ مصراع", "۴ مصراع", "۶ مصراع", "۸ مصراع"],
      correctIndex: 1,
      answer: "گزینه ۲: رباعی دارای ۴ مصراع است که مصراع‌های اول، دوم و چهارم هم‌قافیه هستند."
    },
    {
      id: 11,
      text: "سبک عراقی چه ویژگی‌هایی دارد؟",
      options: ["عرفان و تصوف", "حماسه‌سرایی", "مضمون‌پردازی پیچیده", "زبان عامیانه"],
      correctIndex: 0,
      answer: "گزینه ۱: سبک عراقی با عرفان و تصوف و زبان ساده مشخص می‌شود."
    },
    {
      id: 12,
      text: "شعر نو توسط چه کسی بنیان‌گذاری شد؟",
      options: ["نیما یوشیج", "احمد شاملو", "فروغ فرخزاد", "مهدی اخوان ثالث"],
      correctIndex: 0,
      answer: "گزینه ۱: نیما یوشیج را پدر شعر نو فارسی می‌دانند."

    },

    // ==================== فصل سوم: آرایه‌های ادبی ====================
    {
      id: 13,
      text: "تشبیه در ادبیات چیست؟",
      options: ["ادعای همانندی دو چیز", "مقایسه دو چیز", "ادعای یکی بودن دو چیز", "نفی شباهت"],
      correctIndex: 0,
      answer: "گزینه ۱: تشبیه ادعای همانندی دو چیز است که با کلماتی مانند 'مانند' بیان می‌شود."
    },
    {
      id: 14,
      text: "استعاره چه تفاوتی با تشبیه دارد؟",
      options: ["در استعاره، ادات تشبیه حذف می‌شود", "در استعاره، مشبه به حذف می‌شود", "در استعاره، مشبه حذف می‌شود", "هیچ تفاوتی ندارند"],
      correctIndex: 2,
      answer: "گزینه ۳: در استعاره، مشبه (چیز اصلی) حذف می‌شود و مشبه به جای آن می‌نشیند."
    },
    {
      id: 15,
      text: "آرایهٔ مراعات النظیر چیست؟",
      options: ["آوردن کلمات هم‌خانواده", "آوردن کلمات متناقض", "آوردن کلمات مرتبط با هم", "تکرار کلمات"],
      correctIndex: 2,
      answer: "گزینه ۳: مراعات النظیر آوردن کلماتی است که از نظر معنی با هم مرتبط هستند."
    },
    {
      id: 16,
      text: "جناس در ادبیات به چه معناست؟",
      options: ["شباهت آوایی دو کلمه", "شباهت معنایی دو کلمه", "تضاد بین دو کلمه", "تکرار یک کلمه"],
      correctIndex: 0,
      answer: "گزینه ۱: جناس شباهت آوایی دو کلمه است که معنی متفاوتی دارند."
    },
    {
      id: 17,
      text: "تلمیح در ادبیات چیست؟",
      options: ["اشاره به داستان‌ها و شخصیت‌های معروف", "استفاده از تشبیه", "استفاده از استعاره", "تکرار کلمات"],
      correctIndex: 0,
      answer: "گزینه ۱: تلمیح اشاره به داستان‌ها، شخصیت‌ها و رویدادهای معروف است."
    },
    {
      id: 18,
      text: "آرایهٔ تضاد به چه معناست؟",
      options: ["آوردن دو کلمه متضاد", "آوردن دو کلمه هم‌معنی", "تکرار یک کلمه", "حذف کلمه"],
      correctIndex: 0,
      answer: "گزینه ۱: تضاد آوردن دو کلمه متضاد در کنار هم است."

    },

    // ==================== فصل چهارم: ادبیات تطبیقی ====================
    {
      id: 19,
      text: "ادبیات تطبیقی به چه موضوعی می‌پردازد؟",
      options: ["مقایسه ادبیات ملل مختلف", "بررسی ادبیات یک کشور", "تاریخ ادبیات", "نقد ادبی"],
      correctIndex: 0,
      answer: "گزینه ۱: ادبیات تطبیقی به مقایسه و بررسی ادبیات ملل مختلف می‌پردازد."
    },
    {
      id: 20,
      text: "تأثیر ادبیات فارسی بر ادبیات جهان در کدام موارد دیده می‌شود؟",
      options: ["شعر و عرفان", "داستان‌نویسی", "نمایش‌نامه", "همه موارد"],
      correctIndex: 3,
      answer: "گزینه ۴: ادبیات فارسی بر شعر، عرفان، داستان‌نویسی و نمایش‌نامه تأثیرگذار بوده است."
    },
    {
      id: 21,
      text: "ترجمه چه نقشی در ادبیات تطبیقی دارد؟",
      options: ["انتقال فرهنگ و ادبیات", "ایجاد ادبیات جدید", "تغییر زبان", "همه موارد"],
      correctIndex: 3,
      answer: "گزینه ۴: ترجمه نقش مهمی در انتقال فرهنگ، ایجاد ادبیات جدید و تغییر زبان دارد."
    },
    {
      id: 22,
      text: "جریان‌های ادبی معاصر در ایران کدامند؟",
      options: ["رمانتیسیسم", "رئالیسم", "ناتورالیسم", "همه موارد"],
      correctIndex: 3,
      answer: "گزینه ۴: رمانتیسیسم، رئالیسم و ناتورالیسم از جریان‌های ادبی معاصر در ایران هستند."
    },
    {
      id: 23,
      text: "ادبیات تطبیقی در ایران از چه زمانی شروع شد؟",
      options: ["دوره قاجار", "دوره صفوی", "دوره پهلوی", "دوره معاصر"],
      correctIndex: 0,
      answer: "گزینه ۱: ادبیات تطبیقی در ایران از دوره قاجار و با آشنایی با ادبیات غرب شروع شد."
    },
    {
      id: 24,
      text: "هدف اصلی ادبیات تطبیقی چیست؟",
      options: ["شناخت بهتر ادبیات ملل", "برتری یک ادبیات", "ایجاد ادبیات واحد", "هیچکدام"],
      correctIndex: 0,
      answer: "گزینه ۱: هدف اصلی ادبیات تطبیقی، شناخت بهتر ادبیات ملل مختلف است."

    },

    // ==================== سوالات ترکیبی ====================
    {
      id: 25,
      text: "کدام یک از موارد زیر از شاعران سبک عراقی است؟",
      options: ["سعدی", "فردوسی", "نیما یوشیج", "احمد شاملو"],
      correctIndex: 0,
      answer: "گزینه ۱: سعدی از شاعران بزرگ سبک عراقی است."
    },
    {
      id: 26,
      text: "آرایهٔ حسن تعلیل به چه معناست؟",
      options: ["علت زیبایی برای امری غیرواقعی", "علت واقعی برای امری", "توصیف زیبایی", "هیچکدام"],
      correctIndex: 0,
      answer: "گزینه ۱: حسن تعلیل، علت زیبایی و شاعرانه‌ای برای امری غیرواقعی است."
    },
    {
      id: 27,
      text: "وزن شعر فارسی بر اساس چیست؟",
      options: ["تعداد هجاها", "تعداد کلمات", "تعداد حروف", "تعداد مصراع‌ها"],
      correctIndex: 0,
      answer: "گزینه ۱: وزن شعر فارسی بر اساس تعداد و ترتیب هجاهاست."
    },
    {
      id: 28,
      text: "کدام یک از موارد زیر از آرایه‌های بدیعی است؟",
      options: ["سجع", "تشبیه", "استعاره", "کنایه"],
      correctIndex: 0,
      answer: "گزینه ۱: سجع از آرایه‌های بدیعی (لفظی) است."
    },
    {
      id: 29,
      text: "شعر سپید چه تفاوتی با شعر نو دارد؟",
      options: ["فاقد وزن و قافیه است", "دارای وزن است اما قافیه ندارد", "دارای قافیه است اما وزن ندارد", "هیچ تفاوتی ندارند"],
      correctIndex: 0,
      answer: "گزینه ۱: شعر سپید فاقد وزن و قافیه است و بر اساس زبان روزمره نوشته می‌شود."
    },
    {
      id: 30,
      text: "مثنوی مولوی به چه سبکی سروده شده است؟",
      options: ["سبک عراقی", "سبک خراسانی", "سبک هندی", "سبک بازگشت"],
      correctIndex: 0,
      answer: "گزینه ۱: مثنوی مولوی به سبک عراقی سروده شده است."
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
        backgroundColor: '#C62828',
        color: 'white',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '30px',
        textAlign: 'center',
        position: 'relative'
      }}>
        <button 
          onClick={() => router.push('/exam/davazdahom/riyazi/ghalamchi/second-half/farsi-3-riazi')}
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
            <h1 style={{ margin: 0, fontSize: '28px' }}>📖 آزمون جامع فارسی (۳) - نیم‌سال دوم</h1>
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
                backgroundColor: '#C62828',
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
                      border: isSelected ? '3px solid #C62828' : '1px solid #dee2e6',
                      borderRadius: '10px',
                      backgroundColor: isSelected ? '#ffebee' : '#fff',
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
                      backgroundColor: isSelected ? '#C62828' : '#fff',
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
                  backgroundColor: canCalculate ? '#C62828' : '#6c757d',
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
              <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#C62828' }}>
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
            borderTop: '4px solid #C62828',
            paddingTop: '40px',
            backgroundColor: '#ffffff',
            padding: '40px',
            borderRadius: '12px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
            width: '100%'
          }}>
            <h2 style={{ 
              textAlign: 'center', 
              borderBottom: '3px solid #C62828', 
              paddingBottom: '20px', 
              marginBottom: '40px',
              fontSize: '26px',
              color: '#C62828'
            }}>
              📝 پاسخنامه تشریحی فارسی (۳) - نیم‌سال دوم
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
                      color: '#C62828',
                      backgroundColor: '#ffebee',
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
                    <span style={{ fontWeight: 'bold', color: '#C62828' }}>📖 توضیح:</span> 
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

export default Farsi3SecondHalfFinalExam;