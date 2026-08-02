"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';

const Hendese3FinalExam = () => {
  const router = useRouter();
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const isTimeUpRef = useRef(false);
  const isCalculatedRef = useRef(false);

  // ================= سوالات هندسه (۳) - جامع نیم‌سال اول =================
  const questions = [
    // ==================== فصل اول: ماتریس و دستگاه‌های خطی ====================
    {
      id: 1,
      text: "ماتریس A = [1 2; 3 4]، دترمینان آن چند است؟",
      options: ["-2", "2", "4", "-4"],
      correctIndex: 0,
      answer: "گزینه ۱: det(A) = 1×4 - 2×3 = 4 - 6 = -2"
    },
    {
      id: 2,
      text: "دو ماتریس A و B هم‌بعد هستند. اگر A + B = [5 7; 9 11] و A - B = [1 1; 1 1] باشد، ماتریس A کدام است؟",
      options: ["[3 4; 5 6]", "[2 3; 4 5]", "[4 5; 6 7]", "[3 5; 4 6]"],
      correctIndex: 0,
      answer: "گزینه ۱: A = (A+B + A-B)/2 = ([5 7; 9 11] + [1 1; 1 1])/2 = [6 8; 10 12]/2 = [3 4; 5 6]"
    },
    {
      id: 3,
      text: "ماتریس A = [2 1; 4 3]، وارون آن کدام است؟",
      options: ["[3 -1; -4 2]", "[1.5 -0.5; -2 1]", "[3 1; 4 2]", "[-3 1; 4 -2]"],
      correctIndex: 0,
      answer: "گزینه ۱: det(A) = 2×3 - 1×4 = 6-4 = 2. A⁻¹ = 1/2 [3 -1; -4 2] = [3/2 -1/2; -2 1]"
    },
    {
      id: 4,
      text: "دستگاه معادلات 2x + y = 5 و x - y = 1 با روش ماتریسی حل شود. مقدار x و y کدام است؟",
      options: ["x=2, y=1", "x=1, y=3", "x=3, y=-1", "x=4, y=-3"],
      correctIndex: 0,
      answer: "گزینه ۱: با حل دستگاه: x=2, y=1"
    },
    {
      id: 5,
      text: "ماتریس A² برای A = [1 2; 0 1] کدام است؟",
      options: ["[1 4; 0 1]", "[1 2; 0 1]", "[1 0; 0 1]", "[2 4; 0 2]"],
      correctIndex: 0,
      answer: "گزینه ۱: A² = [1 2; 0 1] × [1 2; 0 1] = [1 4; 0 1]"
    },
    {
      id: 6,
      text: "دترمینان ماتریس ۳×۳: [1 2 3; 0 1 4; 0 0 1] چند است؟",
      options: ["1", "6", "-1", "0"],
      correctIndex: 0,
      answer: "گزینه ۱: ماتریس بالا‌مثلثی است، دترمینان برابر ضرب قطر اصلی = 1×1×1 = 1"
    },

    // ==================== فصل دوم: بردارها و فضا ====================
    {
      id: 7,
      text: "بردار a = (2, -1, 3) و b = (1, 2, -1)، ضرب داخلی a·b چند است؟",
      options: ["-3", "3", "5", "-5"],
      correctIndex: 0,
      answer: "گزینه ۱: a·b = 2×1 + (-1)×2 + 3×(-1) = 2 - 2 - 3 = -3"
    },
    {
      id: 8,
      text: "ضرب خارجی a × b برای a = (1, 0, 0) و b = (0, 1, 0) کدام است؟",
      options: ["(0, 0, 1)", "(0, 0, -1)", "(1, 1, 0)", "(0, 1, 1)"],
      correctIndex: 0,
      answer: "گزینه ۱: a × b = (0×0 - 0×1, 0×0 - 1×0, 1×1 - 0×0) = (0, 0, 1)"
    },
    {
      id: 9,
      text: "معادله صفحه‌ای که از نقطه (1, 2, 3) عبور کرده و بردار نرمال n = (2, -1, 3) دارد، کدام است؟",
      options: ["2x - y + 3z = 9", "2x - y + 3z = 0", "x + 2y + 3z = 9", "2x + y - 3z = 9"],
      correctIndex: 0,
      answer: "گزینه ۱: 2(x-1) - 1(y-2) + 3(z-3) = 0 → 2x - y + 3z - 2 + 2 - 9 = 0 → 2x - y + 3z = 9"
    },
    {
      id: 10,
      text: "بردار a = (1, 2, 2) دارای طول چند است؟",
      options: ["3", "√5", "√9", "3"],
      correctIndex: 0,
      answer: "گزینه ۱: |a| = √(1²+2²+2²) = √9 = 3"
    },
    {
      id: 11,
      text: "زاویه بین دو بردار a = (1, 0) و b = (0, 1) چند درجه است؟",
      options: ["۰°", "۴۵°", "۹۰°", "۱۸۰°"],
      correctIndex: 2,
      answer: "گزینه ۳: a·b = 0، پس بردارها متعامد هستند و زاویه بین آنها ۹۰° است."
    },
    {
      id: 12,
      text: "فاصله نقطه (2, 1, -1) از صفحه 2x - y + 2z = 3 چند است؟",
      options: ["1", "2", "3", "4"],
      correctIndex: 1,
      answer: "گزینه ۲: d = |2(2) - 1 + 2(-1) - 3| / √(4+1+4) = |4 - 1 - 2 - 3|/3 = | -2 |/3 = 2/3 ≈ 0.67 ≈ 1"
    },

    // ==================== فصل سوم: مقاطع مخروطی ====================
    {
      id: 13,
      text: "معادله دایره با مرکز (۲, -۱) و شعاع ۳ کدام است؟",
      options: ["(x-2)² + (y+1)² = 9", "(x+2)² + (y-1)² = 9", "(x-2)² + (y-1)² = 3", "(x+2)² + (y+1)² = 9"],
      correctIndex: 0,
      answer: "گزینه ۱: (x-h)² + (y-k)² = r² → (x-2)² + (y+1)² = 9"
    },
    {
      id: 14,
      text: "معادله بیضی با مرکز (۰,۰)، a=5 و b=3 کدام است؟",
      options: ["x²/25 + y²/9 = 1", "x²/9 + y²/25 = 1", "x² + y² = 25", "x²/25 + y²/25 = 1"],
      correctIndex: 0,
      answer: "گزینه ۱: معادله بیضی = x²/a² + y²/b² = 1 → x²/25 + y²/9 = 1"
    },
    {
      id: 15,
      text: "معادله سهمی با راس (۰,۰) و کانون (۲,۰) کدام است؟",
      options: ["y² = 8x", "y² = 4x", "x² = 8y", "x² = 4y"],
      correctIndex: 0,
      answer: "گزینه ۱: برای سهمی با راس (۰,۰) و کانون (a,0)، معادله y² = 4ax است. با a=2 → y² = 8x"
    },
    {
      id: 16,
      text: "معادله هذلولی با a=4 و b=3 و مرکز (۰,۰) کدام است؟",
      options: ["x²/16 - y²/9 = 1", "x²/9 - y²/16 = 1", "x²/16 + y²/9 = 1", "x²/4 - y²/3 = 1"],
      correctIndex: 0,
      answer: "گزینه ۱: معادله هذلولی = x²/a² - y²/b² = 1 → x²/16 - y²/9 = 1"
    },
    {
      id: 17,
      text: "خروج از مرکز بیضی با a=5 و b=3 کدام است؟",
      options: ["0.8", "0.6", "0.4", "0.2"],
      correctIndex: 0,
      answer: "گزینه ۱: e = √(a²-b²)/a = √(25-9)/5 = 4/5 = 0.8"
    },
    {
      id: 18,
      text: "خط مماس بر دایره x² + y² = 25 در نقطه (۳, ۴) کدام است؟",
      options: ["3x + 4y = 25", "4x + 3y = 25", "3x - 4y = 25", "4x - 3y = 25"],
      correctIndex: 0,
      answer: "گزینه ۱: معادله مماس بر دایره در نقطه (x₁, y₁): xx₁ + yy₁ = r² → 3x + 4y = 25"
    },

    // ==================== فصل چهارم: تبدیلات هندسی ====================
    {
      id: 19,
      text: "ماتریس دوران ۹۰ درجه در خلاف جهت عقربه‌های ساعت کدام است؟",
      options: ["[0 -1; 1 0]", "[0 1; -1 0]", "[-1 0; 0 1]", "[1 0; 0 -1]"],
      correctIndex: 0,
      answer: "گزینه ۱: ماتریس دوران ۹۰° خلاف عقربه‌های ساعت: [0 -1; 1 0]"
    },
    {
      id: 20,
      text: "ماتریس تجانس (بزرگنمایی) با ضریب k=2 کدام است؟",
      options: ["[2 0; 0 2]", "[0 2; 2 0]", "[2 2; 0 0]", "[1 0; 0 1]"],
      correctIndex: 0,
      answer: "گزینه ۱: ماتریس تجانس با ضریب k: [k 0; 0 k] = [2 0; 0 2]"
    },
    {
      id: 21,
      text: "نقطه (۲,۳) تحت انتقال با بردار (۴, -۱) به کدام نقطه تبدیل می‌شود؟",
      options: ["(۶, ۲)", "(-۲, ۴)", "(۶, ۴)", "(-۲, ۲)"],
      correctIndex: 0,
      answer: "گزینه ۱: T(x,y) = (x+4, y-1) → (2+4, 3-1) = (6, 2)"
    },
    {
      id: 22,
      text: "انعکاس نقطه (۳, ۴) نسبت به محور xها کدام است؟",
      options: ["(۳, -۴)", "(-۳, ۴)", "(-۳, -۴)", "(۴, ۳)"],
      correctIndex: 0,
      answer: "گزینه ۱: انعکاس نسبت به محور x: (x, y) → (x, -y) → (3, -4)"
    },
    {
      id: 23,
      text: "ترکیب دو دوران با زاویه‌های α و β، معادل چه تبدیلی است؟",
      options: ["دوران با زاویه α+β", "دوران با زاویه α-β", "انتقال", "تجانس"],
      correctIndex: 0,
      answer: "گزینه ۱: ترکیب دو دوران با زاویه‌های α و β، معادل دوران با زاویه α+β است."
    },
    {
      id: 24,
      text: "ماتریس انعکاس نسبت به محور yها کدام است؟",
      options: ["[-1 0; 0 1]", "[1 0; 0 -1]", "[-1 0; 0 -1]", "[0 1; 1 0]"],
      correctIndex: 0,
      answer: "گزینه ۱: انعکاس نسبت به محور y: (x, y) → (-x, y) → [-1 0; 0 1]"
    },

    // ==================== سوالات ترکیبی ====================
    {
      id: 25,
      text: "دترمینان ماتریس A = [1 2 3; 0 1 4; 5 6 0] چند است؟",
      options: ["-22", "22", "10", "-10"],
      correctIndex: 0,
      answer: "گزینه ۱: det(A) = 1(1×0 - 4×6) - 2(0×0 - 4×5) + 3(0×6 - 1×5) = 1(0-24) - 2(0-20) + 3(0-5) = -24 + 40 - 15 = 1"
    },
    {
      id: 26,
      text: "بردارهای a = (1, 2, 3) و b = (2, 4, 6) چه رابطه‌ای دارند؟",
      options: ["هم‌خط هستند", "متعامد هستند", "نسبت به هم عمودند", "هیچکدام"],
      correctIndex: 0,
      answer: "گزینه ۱: b = 2a، پس بردارها هم‌خط هستند."
    },
    {
      id: 27,
      text: "معادله خطی که از دو نقطه (1,2,3) و (2,4,6) عبور می‌کند، در فضای سه‌بعدی به چه صورتی است؟",
      options: ["x-1 = (y-2)/2 = (z-3)/3", "x = 1+t, y = 2+2t, z = 3+3t", "هر دو", "هیچکدام"],
      correctIndex: 2,
      answer: "گزینه ۳: بردار جهت d = (1,2,3). معادله پارامتری: x = 1+t, y = 2+2t, z = 3+3t"
    },
    {
      id: 28,
      text: "مرکز و شعاع دایره x² + y² - 4x + 6y - 3 = 0 کدام است؟",
      options: ["مرکز (۲,-۳)، شعاع ۴", "مرکز (-۲,۳)، شعاع ۴", "مرکز (۲,-۳)، شعاع √16", "مرکز (-۲,۳)، شعاع ۳"],
      correctIndex: 0,
      answer: "گزینه ۱: کامل کردن مربع: (x-2)² + (y+3)² = 16 → مرکز (2,-3)، شعاع 4"
    },
    {
      id: 29,
      text: "نقطه (۱, ۲) تحت دوران ۹۰ درجه در خلاف عقربه‌های ساعت حول مبدأ به کجا منتقل می‌شود؟",
      options: ["(-۲, ۱)", "(۲, -۱)", "(-۱, ۲)", "(۱, -۲)"],
      correctIndex: 0,
      answer: "گزینه ۱: دوران ۹۰° خلاف عقربه‌های ساعت: (x, y) → (-y, x) → (-2, 1)"
    },
    {
      id: 30,
      text: "در دستگاه معادلات 2x + 3y = 8 و 4x - y = 2، مقدار x+y کدام است؟",
      options: ["3", "4", "5", "6"],
      correctIndex: 0,
      answer: "گزینه ۱: با حل دستگاه: x=1, y=2 → x+y=3"
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
          onClick={() => router.push('/exam/davazdahom/riyazi/ghalamchi/first-half/hendese-3-riazi')}
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
          ← بازگشت به فصل‌ها
        </button>
        
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <div>
            <h1 style={{ margin: 0, fontSize: '28px' }}>📐 آزمون جامع هندسه (۳)</h1>
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
              📝 پاسخنامه تشریحی هندسه (۳)
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

export default Hendese3FinalExam;