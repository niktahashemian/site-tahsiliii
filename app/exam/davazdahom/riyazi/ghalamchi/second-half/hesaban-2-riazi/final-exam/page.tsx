"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';

const Hesaban2SecondHalfFinalExam = () => {
  const router = useRouter();
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const isTimeUpRef = useRef(false);
  const isCalculatedRef = useRef(false);

  // ================= سوالات حسابان (۲) - جامع نیم‌سال دوم =================
  const questions = [
    // ==================== فصل اول: کاربردهای مشتق ====================
    {
      id: 1,
      text: "نقطه بحرانی تابع f(x) = x² - 4x + 3 کدام است؟",
      options: ["x = 2", "x = 1", "x = 3", "x = -2"],
      correctIndex: 0,
      answer: "گزینه ۱: f'(x) = 2x - 4 = 0 → x = 2"
    },
    {
      id: 2,
      text: "نقطه مینیمم تابع f(x) = x² - 4x + 3 کدام است؟",
      options: ["(2,-1)", "(2,0)", "(1,-2)", "(3,0)"],
      correctIndex: 0,
      answer: "گزینه ۱: f'(x) = 2x-4 = 0 → x=2، f(2) = 4-8+3 = -1 → (2,-1)"
    },
    {
      id: 3,
      text: "نقطه عطف تابع f(x) = x³ - 3x² + 1 کدام است؟",
      options: ["(1,-1)", "(1,0)", "(0,1)", "(2,-3)"],
      correctIndex: 0,
      answer: "گزینه ۱: f''(x) = 6x - 6 = 0 → x = 1، f(1) = 1-3+1 = -1 → (1,-1)"
    },
    {
      id: 4,
      text: "تابع f(x) = x³ - 3x در چه بازه‌ای صعودی است؟",
      options: ["(-∞, -1) ∪ (1, ∞)", "(-1, 1)", "(-∞, ∞)", "هیچکدام"],
      correctIndex: 0,
      answer: "گزینه ۱: f'(x) = 3x² - 3 = 3(x²-1). f'(x) > 0 → x < -1 یا x > 1"
    },
    {
      id: 5,
      text: "حداکثر مقدار تابع f(x) = -x² + 4x - 3 در بازه [0, 4] چند است؟",
      options: ["۱", "۲", "۳", "۴"],
      correctIndex: 0,
      answer: "گزینه ۱: f'(x) = -2x+4 = 0 → x=2. f(2) = -4+8-3 = 1"
    },
    {
      id: 6,
      text: "تابع f(x) = -x² + 4x در چه بازه‌ای مقعر رو به پایین است؟",
      options: ["(-∞, ∞)", "(-∞, 2)", "(2, ∞)", "هیچکدام"],
      correctIndex: 0,
      answer: "گزینه ۱: f''(x) = -2 < 0 برای همه x، پس تابع همواره مقعر رو به پایین است."

    },

    // ==================== فصل دوم: رسم نمودار توابع ====================
    {
      id: 7,
      text: "مجانب قائم تابع f(x) = 1/(x-2) کدام است؟",
      options: ["x = 2", "x = -2", "y = 0", "y = 2"],
      correctIndex: 0,
      answer: "گزینه ۱: مجانب قائم در جایی است که مخرج صفر شود: x = 2"
    },
    {
      id: 8,
      text: "مجانب افقی تابع f(x) = (2x+1)/(x-3) کدام است؟",
      options: ["y = 2", "y = 1", "y = 0", "y = 3"],
      correctIndex: 0,
      answer: "گزینه ۱: lim(x→∞) (2x+1)/(x-3) = 2 → مجانب افقی y = 2"
    },
    {
      id: 9,
      text: "نمودار تابع f(x) = x³ چه ویژگی‌هایی دارد؟",
      options: ["فرد و صعودی", "زوج و صعودی", "فرد و نزولی", "زوج و نزولی"],
      correctIndex: 0,
      answer: "گزینه ۱: f(-x) = -x³ = -f(x) → فرد. f'(x) = 3x² ≥ 0 → صعودی"
    },
    {
      id: 10,
      text: "مجانب مایل تابع f(x) = (x²+1)/(x) کدام است؟",
      options: ["y = x", "y = x+1", "y = x-1", "y = 1"],
      correctIndex: 0,
      answer: "گزینه ۱: با تقسیم: (x²+1)/x = x + 1/x → مجانب مایل y = x"
    },
    {
      id: 11,
      text: "نمودار تابع f(x) = sin(x) در بازه [0, 2π] چند بار از محور x عبور می‌کند؟",
      options: ["۲", "۳", "۴", "۱"],
      correctIndex: 0,
      answer: "گزینه ۱: sin(x) = 0 در x = 0, π, 2π → ۳ بار (یا ۲ بار در بازه باز)"
    },
    {
      id: 12,
      text: "دامنه تابع f(x) = √(x-2) کدام است؟",
      options: ["x ≥ 2", "x > 2", "x ≤ 2", "x < 2"],
      correctIndex: 0,
      answer: "گزینه ۱: برای ریشه دوم، عبارت زیر ریشه باید نامنفی باشد: x-2 ≥ 0 → x ≥ 2"

    },

    // ==================== فصل سوم: انتگرال ====================
    {
      id: 13,
      text: "∫ 2x dx برابر چیست؟",
      options: ["x² + C", "2x² + C", "x² + 2C", "x²/2 + C"],
      correctIndex: 0,
      answer: "گزینه ۱: ∫ 2x dx = x² + C"
    },
    {
      id: 14,
      text: "∫ sin(x) dx برابر چیست؟",
      options: ["-cos(x) + C", "cos(x) + C", "-sin(x) + C", "sin(x) + C"],
      correctIndex: 0,
      answer: "گزینه ۱: ∫ sin(x) dx = -cos(x) + C"
    },
    {
      id: 15,
      text: "∫ cos(x) dx برابر چیست؟",
      options: ["sin(x) + C", "-sin(x) + C", "cos(x) + C", "-cos(x) + C"],
      correctIndex: 0,
      answer: "گزینه ۱: ∫ cos(x) dx = sin(x) + C"
    },
    {
      id: 16,
      text: "∫ e^x dx برابر چیست؟",
      options: ["e^x + C", "xe^(x-1) + C", "ln(x) + C", "e^x"],
      correctIndex: 0,
      answer: "گزینه ۱: ∫ e^x dx = e^x + C"
    },
    {
      id: 17,
      text: "∫₀¹ x² dx برابر چیست؟",
      options: ["1/3", "1/2", "1", "0"],
      correctIndex: 0,
      answer: "گزینه ۱: ∫₀¹ x² dx = [x³/3]₀¹ = 1/3"
    },
    {
      id: 18,
      text: "مساحت زیر منحنی f(x) = x² از x=0 تا x=2 چند است؟",
      options: ["8/3", "4/3", "2", "4"],
      correctIndex: 0,
      answer: "گزینه ۱: ∫₀² x² dx = [x³/3]₀² = 8/3"

    },

    // ==================== فصل چهارم: معادلات دیفرانسیل ====================
    {
      id: 19,
      text: "مرتبه معادله دیفرانسیل y'' + 3y' + 2y = 0 چند است؟",
      options: ["۲", "۱", "۳", "۰"],
      correctIndex: 0,
      answer: "گزینه ۱: مرتبه معادله دیفرانسیل، بالاترین مرتبه مشتق است که ۲ می‌باشد."
    },
    {
      id: 20,
      text: "درجه معادله دیفرانسیل (y'')² + y' = 0 چند است؟",
      options: ["۲", "۱", "۰", "۳"],
      correctIndex: 0,
      answer: "گزینه ۱: درجه معادله دیفرانسیل، توان بالاترین مشتق است که ۲ می‌باشد."
    },
    {
      id: 21,
      text: "جواب معادله دیفرانسیل dy/dx = x کدام است؟",
      options: ["y = x²/2 + C", "y = x + C", "y = 2x + C", "y = x² + C"],
      correctIndex: 0,
      answer: "گزینه ۱: dy = x dx → y = x²/2 + C"
    },
    {
      id: 22,
      text: "جواب معادله دیفرانسیل dy/dx = 2x با شرط اولیه y(0) = 1 کدام است؟",
      options: ["y = x² + 1", "y = x² + C", "y = 2x + 1", "y = x² + 2"],
      correctIndex: 0,
      answer: "گزینه ۱: y = x² + C، با y(0) = 1 → C = 1 → y = x² + 1"
    },
    {
      id: 23,
      text: "معادله دیفرانسیل y' = y چه نوع معادله‌ای است؟",
      options: ["قابل جداسازی", "همگن", "خطی", "غیرخطی"],
      correctIndex: 0,
      answer: "گزینه ۱: dy/dx = y → dy/y = dx → قابل جداسازی"
    },
    {
      id: 24,
      text: "جواب معادله دیفرانسیل dy/dx = y کدام است؟",
      options: ["y = Ce^x", "y = Ce^(-x)", "y = Cx", "y = C"],
      correctIndex: 0,
      answer: "گزینه ۱: dy/y = dx → ln|y| = x + C → y = Ce^x"

    },

    // ==================== سوالات ترکیبی ====================
    {
      id: 25,
      text: "حد تابع f(x) = (x²-4)/(x-2) در x→2 کدام است؟",
      options: ["۴", "۲", "۰", "∞"],
      correctIndex: 0,
      answer: "گزینه ۱: (x²-4)/(x-2) = (x-2)(x+2)/(x-2) = x+2 → lim = 2+2 = 4"
    },
    {
      id: 26,
      text: "مشتق تابع f(x) = sin(x) چیست؟",
      options: ["cos(x)", "-cos(x)", "sin(x)", "tan(x)"],
      correctIndex: 0,
      answer: "گزینه ۱: مشتق sin(x) برابر cos(x) است."
    },
    {
      id: 27,
      text: "مشتق تابع f(x) = e^x چیست؟",
      options: ["e^x", "xe^(x-1)", "e", "ln(x)"],
      correctIndex: 0,
      answer: "گزینه ۱: مشتق e^x برابر خودش یعنی e^x است."
    },
    {
      id: 28,
      text: "مجموع ریشه‌های معادله x² - 4x + 3 = 0 کدام است؟",
      options: ["۴", "۳", "-۴", "-۳"],
      correctIndex: 0,
      answer: "گزینه ۱: در معادله درجه دوم ax² + bx + c = 0، مجموع ریشه‌ها = -b/a = 4"
    },
    {
      id: 29,
      text: "∫₀^π sin(x) dx برابر چیست؟",
      options: ["۲", "۱", "۰", "-۲"],
      correctIndex: 0,
      answer: "گزینه ۱: ∫₀^π sin(x) dx = [-cos(x)]₀^π = -cos(π) + cos(0) = 1 + 1 = 2"
    },
    {
      id: 30,
      text: "∫ 1/x dx برابر چیست؟",
      options: ["ln|x| + C", "x ln|x| + C", "1/x² + C", "x² + C"],
      correctIndex: 0,
      answer: "گزینه ۱: ∫ 1/x dx = ln|x| + C"
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
          onClick={() => router.push('/exam/davazdahom/riyazi/ghalamchi/second-half/hesaban-2-riazi')}
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
            <h1 style={{ margin: 0, fontSize: '28px' }}>📈 آزمون جامع حسابان (۲) - نیم‌سال دوم</h1>
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
              📝 پاسخنامه تشریحی حسابان (۲) - نیم‌سال دوم
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

export default Hesaban2SecondHalfFinalExam;