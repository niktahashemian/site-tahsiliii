"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';

const Arabi3SecondHalfFinalExam = () => {
  const router = useRouter();
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const isTimeUpRef = useRef(false);
  const isCalculatedRef = useRef(false);

  // ================= سوالات عربی (۳) - جامع نیم‌سال دوم =================
  const questions = [
    // ==================== فصل اول: قواعد پیشرفته ====================
    {
      id: 1,
      text: "فعل 'قَالَ' از چه نوع فعلی است؟",
      options: ["سالم", "معتل", "ناقص", "مهموز"],
      correctIndex: 1,
      answer: "گزینه ۲: 'قَالَ' از افعال معتل است زیرا در ریشه آن حرف عله (ا) وجود دارد."
    },
    {
      id: 2,
      text: "فعل 'دَعَا' در ماضی چه نوع فعلی است؟",
      options: ["سالم", "معتل", "ناقص", "مهموز"],
      correctIndex: 2,
      answer: "گزینه ۳: 'دَعَا' فعل ناقص است زیرا به حرف عله (ا) ختم می‌شود."
    },
    {
      id: 3,
      text: "اسم فاعل از چه ساختاری ساخته می‌شود؟",
      options: ["فَاعِل", "مَفْعُول", "فَعِيل", "مُفْعَل"],
      correctIndex: 0,
      answer: "گزینه ۱: اسم فاعل از وزن 'فَاعِل' ساخته می‌شود."
    },
    {
      id: 4,
      text: "اسم مفعول از چه ساختاری ساخته می‌شود؟",
      options: ["مَفْعُول", "مُفْعَل", "فَاعِل", "فَعِيل"],
      correctIndex: 0,
      answer: "گزینه ۱: اسم مفعول از وزن 'مَفْعُول' ساخته می‌شود."
    },
    {
      id: 5,
      text: "وزن کلمه 'مَكْتُوب' چیست؟",
      options: ["مَفْعُول", "مَفْعَل", "مُفْعَل", "فَعِيل"],
      correctIndex: 0,
      answer: "گزینه ۱: 'مَكْتُوب' از وزن 'مَفْعُول' است که اسم مفعول را نشان می‌دهد."
    },
    {
      id: 6,
      text: "مصدر فعل 'كَتَبَ' چیست؟",
      options: ["كِتَابَة", "مَكْتُوب", "كَاتِب", "يَكْتُب"],
      correctIndex: 0,
      answer: "گزینه ۱: مصدر فعل كَتَبَ، كِتَابَة است که به معنای نوشتن است."

    },

    // ==================== فصل دوم: نحو پیشرفته ====================
    {
      id: 7,
      text: "در جمله شرطیه، ادوات شرط چه نقشی دارند؟",
      options: ["رابطه بین شرط و جزا", "فاعل جمله", "مفعول جمله", "خبر جمله"],
      correctIndex: 0,
      answer: "گزینه ۱: ادوات شرط، رابطه بین شرط و جزا را برقرار می‌کنند."
    },
    {
      id: 8,
      text: "جملات موصولی با چه کلماتی شروع می‌شوند؟",
      options: ["الّذی، التی، اللّذان", "إنّ، أنّ، لیت", "قد، سوف، لقد", "هیچکدام"],
      correctIndex: 0,
      answer: "گزینه ۱: جملات موصولی با اسم‌های موصول مانند 'الّذی، التی، اللّذان' شروع می‌شوند."
    },
    {
      id: 9,
      text: "در جمله استثنایی، ادوات استثنا چه نقشی دارند؟",
      options: ["استثنا کردن چیزی", "تأکید جمله", "نفی جمله", "شرط کردن"],
      correctIndex: 0,
      answer: "گزینه ۱: ادوات استثنا برای استثنا کردن چیزی از حکم کلی استفاده می‌شوند."
    },
    {
      id: 10,
      text: "اعراب جملات پیچیده چه اهمیتی دارد؟",
      options: ["تشخیص نقش کلمات", "فهم معنی جمله", "تحلیل نحوی", "همه موارد"],
      correctIndex: 3,
      answer: "گزینه ۴: اعراب جملات پیچیده برای تشخیص نقش کلمات، فهم معنی جمله و تحلیل نحوی اهمیت دارد."
    },
    {
      id: 11,
      text: "در جمله 'إِنْ تَدْرُسْ تَنْجَحْ'، 'إِنْ' چه نوع حرفی است؟",
      options: ["حرف شرط", "حرف نفی", "حرف استفهام", "حرف عطف"],
      correctIndex: 0,
      answer: "گزینه ۱: 'إِنْ' حرف شرط است که شرط و جزا را به هم مرتبط می‌کند."
    },
    {
      id: 12,
      text: "در جمله 'الَّذِي يَجْتَهِدُ يَنْجَحُ'، 'الَّذِي' چه نوع کلمه‌ای است؟",
      options: ["اسم موصول", "حرف شرط", "حرف نفی", "صفت"],
      correctIndex: 0,
      answer: "گزینه ۱: 'الَّذِي' اسم موصول است که به شخص یا چیزی اشاره می‌کند."

    },

    // ==================== فصل سوم: ترجمه و درک مطلب پیشرفته ====================
    {
      id: 13,
      text: "ترجمه صحیح 'يَقْرَأُ الطَّالِبُ الْكِتَابَ' چیست؟",
      options: ["دانش‌آموز کتاب را می‌خواند", "دانش‌آموز کتاب را خواند", "دانش‌آموز کتاب را خواهد خواند", "دانش‌آموز کتاب را می‌نویسد"],
      correctIndex: 0,
      answer: "گزینه ۱: 'يَقْرَأُ' می‌خواند، 'الطَّالِبُ' دانش‌آموز، 'الْكِتَابَ' کتاب را → دانش‌آموز کتاب را می‌خواند."
    },
    {
      id: 14,
      text: "معنی آیه 'إِنَّ مَعَ الْعُسْرِ يُسْرًا' چیست؟",
      options: ["همراه با سختی، آسانی است", "سختی و آسانی با هم هستند", "آسانی از سختی است", "هیچکدام"],
      correctIndex: 0,
      answer: "گزینه ۱: 'إِنَّ مَعَ الْعُسْرِ يُسْرًا' یعنی همراه با سختی، آسانی است."
    },
    {
      id: 15,
      text: "کلمه 'مُهَنْدِس' در عربی به چه معناست؟",
      options: ["مهندس", "معلم", "پزشک", "نویسنده"],
      correctIndex: 0,
      answer: "گزینه ۱: 'مُهَنْدِس' به معنی مهندس است."
    },
    {
      id: 16,
      text: "ترجمه 'اَلنَّجْمُ سَاطِعٌ' چیست؟",
      options: ["ستاره درخشان است", "ستاره زیبا است", "ستاره بزرگ است", "ستاره دور است"],
      correctIndex: 0,
      answer: "گزینه ۱: 'اَلنَّجْمُ' ستاره، 'سَاطِعٌ' درخشان → ستاره درخشان است."
    },
    {
      id: 17,
      text: "معنی 'كَيْفَ أَنْتَ' چیست؟",
      options: ["چطور هستی؟", "کجا هستی؟", "چی کار می‌کنی؟", "اسمت چیست؟"],
      correctIndex: 0,
      answer: "گزینه ۱: 'كَيْفَ' یعنی چگونه، 'أَنْتَ' یعنی تو → چطور هستی؟"
    },
    {
      id: 18,
      text: "ترجمه 'أُحِبُّ الْقِرَاءَةَ' چیست؟",
      options: ["من مطالعه را دوست دارم", "من کتاب را دوست دارم", "من مدرسه را دوست دارم", "من معلم را دوست دارم"],
      correctIndex: 0,
      answer: "گزینه ۱: 'أُحِبُّ' من دوست دارم، 'الْقِرَاءَةَ' مطالعه را → من مطالعه را دوست دارم."

    },

    // ==================== فصل چهارم: تحلیل صرفی و نحوی پیشرفته ====================
    {
      id: 19,
      text: "کلمه 'مَسْجِد' از چه وزنی است؟",
      options: ["مَفْعَل", "مَفْعِل", "مُفْعَل", "مُفْعِل"],
      correctIndex: 0,
      answer: "گزینه ۱: 'مَسْجِد' از وزن 'مَفْعَل' است که مکان را نشان می‌دهد."
    },
    {
      id: 20,
      text: "کلمه 'مِفْتَاح' از چه وزنی است؟",
      options: ["مِفْعَال", "مَفْعَال", "مُفْعَال", "فَتَّاح"],
      correctIndex: 0,
      answer: "گزینه ۱: 'مِفْتَاح' از وزن 'مِفْعَال' است که ابزار را نشان می‌دهد."
    },
    {
      id: 21,
      text: "در جمله 'اَلْكِتَابُ جَدِيدٌ'، اعراب 'اَلْكِتَابُ' چیست؟",
      options: ["مرفوع", "منصوب", "مجرور", "مجزوم"],
      correctIndex: 0,
      answer: "گزینه ۱: 'اَلْكِتَابُ' مبتدا است و مرفوع می‌باشد."
    },
    {
      id: 22,
      text: "در جمله 'يَقْرَأُ الطَّالِبُ الْكِتَابَ'، اعراب 'الطَّالِبُ' چیست؟",
      options: ["مرفوع", "منصوب", "مجرور", "مجزوم"],
      correctIndex: 0,
      answer: "گزینه ۱: 'الطَّالِبُ' فاعل است و مرفوع می‌باشد."
    },
    {
      id: 23,
      text: "ترجمه معکوس 'دانش‌آموز کتاب را می‌خواند' به عربی چیست؟",
      options: ["يَقْرَأُ الطَّالِبُ الْكِتَابَ", "الطَّالِبُ يَقْرَأُ الْكِتَابَ", "يَقْرَأُ الْكِتَابَ الطَّالِبُ", "الْكِتَابَ يَقْرَأُ الطَّالِبُ"],
      correctIndex: 0,
      answer: "گزینه ۱: 'يَقْرَأُ الطَّالِبُ الْكِتَابَ' ترجمه صحیح جمله فارسی است."
    },
    {
      id: 24,
      text: "در جمله 'ذَهَبَ الْأَوْلَادُ إِلَى الْمَدْرَسَةِ'، اعراب 'الْمَدْرَسَةِ' چیست؟",
      options: ["مجرور", "منصوب", "مرفوع", "مجزوم"],
      correctIndex: 0,
      answer: "گزینه ۱: 'الْمَدْرَسَةِ' مجرور است زیرا بعد از حرف جر 'إِلَى' آمده است."

    },

    // ==================== سوالات ترکیبی ====================
    {
      id: 25,
      text: "فعل 'يَسْتَغْفِرُ' از چه بابی است؟",
      options: ["استفعال", "افتعال", "تفعیل", "مفاعله"],
      correctIndex: 0,
      answer: "گزینه ۱: 'يَسْتَغْفِرُ' از باب استفعال است."
    },
    {
      id: 26,
      text: "اسم تفضیل در عربی به چه معناست؟",
      options: ["صفت برتر", "صفت معمولی", "اسم مکان", "اسم زمان"],
      correctIndex: 0,
      answer: "گزینه ۱: اسم تفضیل صفت برتری است و از وزن 'أَفْعَل' ساخته می‌شود."
    },
    {
      id: 27,
      text: "در جمله 'إِنَّ اللهَ غَفُورٌ'، 'غَفُورٌ' چه نقشی دارد؟",
      options: ["خبر إن", "اسم إن", "مبتدا", "خبر"],
      correctIndex: 0,
      answer: "گزینه ۱: 'غَفُورٌ' خبر إن است و مرفوع می‌باشد."
    },
    {
      id: 28,
      text: "علامت اصلی رفع در اسم‌های مفرد چیست؟",
      options: ["ضَمَّة", "فَتْحَة", "كَسْرَة", "سُكُون"],
      correctIndex: 0,
      answer: "گزینه ۱: علامت اصلی رفع در اسم‌های مفرد، ضَمَّة است."
    },
    {
      id: 29,
      text: "منصوبات شامل چه مواردی هستند؟",
      options: ["مفعول به و مفعول مطلق", "مفعول فیه و حال", "تمیز و مستثنی", "همه موارد"],
      correctIndex: 3,
      answer: "گزینه ۴: منصوبات شامل مفعول به، مفعول مطلق، مفعول فیه، حال، تمیز و مستثنی هستند."
    },
    {
      id: 30,
      text: "حروف مشبه بالفعل چه تأثیری بر جمله دارند؟",
      options: ["نصب اسم و رفع خبر", "رفع اسم و نصب خبر", "نصب اسم و خبر", "رفع اسم و خبر"],
      correctIndex: 0,
      answer: "گزینه ۱: حروف مشبه بالفعل مانند إنّ، اسم را نصب و خبر را رفع می‌دهند."
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
        backgroundColor: '#1565C0',
        color: 'white',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '30px',
        textAlign: 'center',
        position: 'relative'
      }}>
        <button 
          onClick={() => router.push('/exam/davazdahom/riyazi/ghalamchi/second-half/arabi-3-riazi')}
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
            <h1 style={{ margin: 0, fontSize: '28px' }}>📚 آزمون جامع عربی (۳) - نیم‌سال دوم</h1>
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
                backgroundColor: '#1565C0',
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
                      border: isSelected ? '3px solid #1565C0' : '1px solid #dee2e6',
                      borderRadius: '10px',
                      backgroundColor: isSelected ? '#e3f2fd' : '#fff',
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
                      backgroundColor: isSelected ? '#1565C0' : '#fff',
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
                  backgroundColor: canCalculate ? '#1565C0' : '#6c757d',
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
              <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#1565C0' }}>
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
            borderTop: '4px solid #1565C0',
            paddingTop: '40px',
            backgroundColor: '#ffffff',
            padding: '40px',
            borderRadius: '12px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
            width: '100%'
          }}>
            <h2 style={{ 
              textAlign: 'center', 
              borderBottom: '3px solid #1565C0', 
              paddingBottom: '20px', 
              marginBottom: '40px',
              fontSize: '26px',
              color: '#1565C0'
            }}>
              📝 پاسخنامه تشریحی عربی (۳) - نیم‌سال دوم
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
                      color: '#1565C0',
                      backgroundColor: '#e3f2fd',
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
                    <span style={{ fontWeight: 'bold', color: '#1565C0' }}>📖 توضیح:</span> 
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

export default Arabi3SecondHalfFinalExam;