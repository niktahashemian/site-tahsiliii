"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';

const GosasteRiyaziSecondHalfFinalExam = () => {
  const router = useRouter();
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const isTimeUpRef = useRef(false);
  const isCalculatedRef = useRef(false);

  // ================= سوالات ریاضی گسسته - جامع نیم‌سال دوم =================
  const questions = [
    // ==================== فصل اول: ترکیبیات پیشرفته ====================
    {
      id: 1,
      text: "تعداد جایگشت‌های حروف کلمه 'REPETITION' چند است؟",
      options: ["۱۰!", "۱۰! / (۳! × ۲!)", "۱۰! / (۲! × ۲!)", "۱۰! / (۳! × ۲! × ۲!)"],
      correctIndex: 3,
      answer: "گزینه ۴: در کلمه REPETITION، حرف E ۳ بار، T ۲ بار و I ۲ بار تکرار شده است، پس جواب ۱۰! / (۳! × ۲! × ۲!) است."
    },
    {
      id: 2,
      text: "تعداد راه‌های انتخاب ۳ نفر از ۸ نفر چند است؟",
      options: ["۵۶", "۳۳۶", "۲۴", "۱۲۰"],
      correctIndex: 0,
      answer: "گزینه ۱: تعداد ترکیب = C(8,3) = ۸! / (۳! × ۵!) = ۵۶"
    },
    {
      id: 3,
      text: "اصل لانه کبوتری چه می‌گوید؟",
      options: ["اگر n+1 کبوتر در n لانه باشند، حداقل یک لانه دو کبوتر دارد", "اگر n کبوتر در n+1 لانه باشند، حداقل یک لانه خالی است", "همیشه تعداد کبوترها با لانه‌ها برابر است", "هیچکدام"],
      correctIndex: 0,
      answer: "گزینه ۱: اصل لانه کبوتری می‌گوید اگر n+1 شیء در n جعبه قرار گیرد، حداقل یک جعبه دارای دو شیء است."
    },
    {
      id: 4,
      text: "تعداد زیرمجموعه‌های ۳ عضوی از مجموعه {۱,۲,۳,۴,۵,۶} چند است؟",
      options: ["۲۰", "۱۵", "۳۰", "۱۰"],
      correctIndex: 0,
      answer: "گزینه ۱: C(6,3) = ۲۰"
    },
    {
      id: 5,
      text: "تعداد روش‌های توزیع ۴ کتاب مختلف بین ۳ دانش‌آموز چند است؟",
      options: ["۳⁴", "۴³", "۳×۴", "۴!"],
      correctIndex: 0,
      answer: "گزینه ۱: هر کتاب ۳ انتخاب دارد، پس ۳⁴"
    },
    {
      id: 6,
      text: "در توزیع دو جمله‌ای با n=5 و p=0.2، E(X) و Var(X) کدامند؟",
      options: ["E=1, Var=0.8", "E=0.2, Var=5", "E=5, Var=1", "E=1, Var=0.16"],
      correctIndex: 0,
      answer: "گزینه ۱: در توزیع دوجمله‌ای، E(X)=np=5×0.2=1 و Var(X)=np(1-p)=5×0.2×0.8=0.8"
    },

    // ==================== فصل دوم: نظریه اعداد پیشرفته ====================
    {
      id: 7,
      text: "همنهشتی ۷ ≡ ۲ (mod ۵) به چه معناست؟",
      options: ["۷ بر ۵ بخش‌پذیر است", "۲ بر ۵ بخش‌پذیر است", "۷ و ۲ باقیمانده یکسان بر ۵ دارند", "۷ و ۲ متضاد هستند"],
      correctIndex: 2,
      answer: "گزینه ۳: یعنی ۷ و ۲ هنگام تقسیم بر ۵ باقیمانده یکسانی دارند."
    },
    {
      id: 8,
      text: "طبق قضیه کوچک فرما، ۲^۶ ≡ ? (mod ۷)",
      options: ["۱", "۲", "۶", "۰"],
      correctIndex: 0,
      answer: "گزینه ۱: طبق قضیه کوچک فرما، برای عدد اول p و a که بر p بخش‌پذیر نیست: a^(p-1) ≡ 1 (mod p). پس ۲^۶ ≡ 1 (mod ۷)"
    },
    {
      id: 9,
      text: "معادله دیوفانتین ۳x + ۵y = ۱ چند جواب صحیح دارد؟",
      options: ["یک جواب", "دو جواب", "نامتناهی جواب", "هیچ جواب"],
      correctIndex: 2,
      answer: "گزینه ۳: معادلات دیوفانتین خطی با جواب، دارای نامتناهی جواب صحیح هستند."
    },
    {
      id: 10,
      text: "بزرگترین مقسوم‌علیه مشترک (ب.م.م) اعداد ۱۲ و ۱۸ چند است؟",
      options: ["۳", "۶", "۹", "۱۲"],
      correctIndex: 1,
      answer: "گزینه ۲: ب.م.م(12,18) = 6"
    },
    {
      id: 11,
      text: "کوچکترین مضرب مشترک (ک.م.م) اعداد ۶ و ۸ چند است؟",
      options: ["۱۲", "۲۴", "۳۶", "۴۸"],
      correctIndex: 1,
      answer: "گزینه ۲: ک.م.م(6,8) = 24"
    },
    {
      id: 12,
      text: "تابع فی اویلر φ(12) چند است؟",
      options: ["۴", "۶", "۸", "۱۰"],
      correctIndex: 0,
      answer: "گزینه ۱: φ(12) = 12 × (1-1/2) × (1-1/3) = 12 × 1/2 × 2/3 = 4"
    },

    // ==================== فصل سوم: گراف‌ها و درخت‌ها ====================
    {
      id: 13,
      text: "در یک گراف ساده با ۶ راس، حداکثر تعداد یال‌ها چند است؟",
      options: ["۱۰", "۱۲", "۱۵", "۲۰"],
      correctIndex: 2,
      answer: "گزینه ۳: در گراف ساده، حداکثر یال‌ها = n(n-1)/2 = 6×5/2 = 15"
    },
    {
      id: 14,
      text: "یک گراف همبند چه ویژگی دارد؟",
      options: ["بین هر دو راس آن مسیر وجود دارد", "همه راس‌ها درجه یکسان دارند", "بدون دور است", "تعداد یال‌ها برابر راس‌هاست"],
      correctIndex: 0,
      answer: "گزینه ۱: گراف همبند گرافی است که بین هر دو راس آن مسیر وجود داشته باشد."
    },
    {
      id: 15,
      text: "یک درخت با n راس چند یال دارد؟",
      options: ["n", "n-1", "n+1", "n-2"],
      correctIndex: 1,
      answer: "گزینه ۲: درخت با n راس، دقیقاً n-1 یال دارد."
    },
    {
      id: 16,
      text: "گراف اویلری چه ویژگی دارد؟",
      options: ["همه راس‌ها درجه زوج دارند", "همه راس‌ها درجه فرد دارند", "حداقل یک راس درجه فرد دارد", "هیچ راس درجه فردی ندارد"],
      correctIndex: 0,
      answer: "گزینه ۱: گراف اویلری دارای مداری است که از همه یال‌ها دقیقاً یک بار عبور کند و شرط آن زوج بودن درجه همه راس‌هاست."
    },
    {
      id: 17,
      text: "گراف هامیلتونی چه ویژگی دارد؟",
      options: ["دوری دارد که از همه راس‌ها دقیقاً یک بار عبور می‌کند", "دوری دارد که از همه یال‌ها دقیقاً یک بار عبور می‌کند", "همبند است", "هیچکدام"],
      correctIndex: 0,
      answer: "گزینه ۱: گراف هامیلتونی دارای دوری است که از همه راس‌ها دقیقاً یک بار عبور می‌کند."
    },
    {
      id: 18,
      text: "درخت پوشا در یک گراف چه نقشی دارد؟",
      options: ["زیرگرافی همبند با حداقل یال‌ها", "زیرگرافی با حداکثر یال‌ها", "زیرگرافی با همه راس‌ها و حداقل یال‌ها", "زیرگرافی بدون راس"],
      correctIndex: 2,
      answer: "گزینه ۳: درخت پوشا زیرگرافی است که همه راس‌های گراف را شامل شده و همبند باشد."
    },

    // ==================== فصل چهارم: جبر بولی و مدارهای منطقی ====================
    {
      id: 19,
      text: "در جبر بولی، نتیجه x + x برابر چیست؟",
      options: ["x", "1", "0", "x'"],
      correctIndex: 0,
      answer: "گزینه ۱: در جبر بولی، x + x = x (قانون همانی)"
    },
    {
      id: 20,
      text: "در جبر بولی، نتیجه x · x' برابر چیست؟",
      options: ["0", "1", "x", "x'"],
      correctIndex: 0,
      answer: "گزینه ۱: در جبر بولی، x · x' = 0 (قانون مکمل)"
    },
    {
      id: 21,
      text: "گیت AND چه عملی را انجام می‌دهد؟",
      options: ["ضرب منطقی", "جمع منطقی", "نقیض", "یای انحصاری"],
      correctIndex: 0,
      answer: "گزینه ۱: گیت AND عملیات ضرب منطقی را انجام می‌دهد."
    },
    {
      id: 22,
      text: "گیت OR چه عملی را انجام می‌دهد؟",
      options: ["جمع منطقی", "ضرب منطقی", "نقیض", "یای انحصاری"],
      correctIndex: 0,
      answer: "گزینه ۱: گیت OR عملیات جمع منطقی را انجام می‌دهد."
    },
    {
      id: 23,
      text: "نقیض (NOT) یک متغیر بولی چه نام دارد؟",
      options: ["مکمل", "همان", "صفر", "یک"],
      correctIndex: 0,
      answer: "گزینه ۱: نقیض یک متغیر بولی، مکمل آن نام دارد."
    },
    {
      id: 24,
      text: "در جبر بولی، قانون توزیع‌پذیری چیست؟",
      options: ["x(y+z) = xy + xz", "x+yz = (x+y)(x+z)", "هر دو", "هیچکدام"],
      correctIndex: 2,
      answer: "گزینه ۳: قانون توزیع‌پذیری در جبر بولی به دو صورت x(y+z) = xy + xz و x+yz = (x+y)(x+z) است."
    },

    // ==================== سوالات ترکیبی ====================
    {
      id: 25,
      text: "تعداد راه‌های چیدن ۴ کتاب مختلف در یک قفسه چند است؟",
      options: ["۴", "۱۲", "۱۶", "۲۴"],
      correctIndex: 3,
      answer: "گزینه ۴: 4! = 24"
    },
    {
      id: 26,
      text: "در یک گراف با ۵ راس، حداقل چند یال لازم است تا گراف همبند باشد؟",
      options: ["۳", "۴", "۵", "۶"],
      correctIndex: 1,
      answer: "گزینه ۲: حداقل یال‌ها برای همبندی = n-1 = 4"
    },
    {
      id: 27,
      text: "در جبر بولی، عبارت x + (y · z) معادل کدام است؟",
      options: ["(x+y) · (x+z)", "x+y+z", "x·y + x·z", "x+y"],
      correctIndex: 0,
      answer: "گزینه ۱: طبق قانون توزیع‌پذیری، x + (y · z) = (x+y) · (x+z)"
    },
    {
      id: 28,
      text: "در توزیع دو جمله‌ای با n=4 و p=0.5، احتمال P(X=2) چند است؟",
      options: ["0.375", "0.25", "0.5", "0.125"],
      correctIndex: 0,
      answer: "گزینه ۱: P(X=2) = C(4,2) × (0.5)² × (0.5)² = 6 × 0.25 × 0.25 = 0.375"
    },
    {
      id: 29,
      text: "کدگذاری پرودو برای چه نوع گراف‌هایی استفاده می‌شود؟",
      options: ["گراف‌های کامل", "درخت‌ها", "گراف‌های دوبخشی", "گراف‌های اویلری"],
      correctIndex: 1,
      answer: "گزینه ۲: کدگذاری پرودو برای نمایش یکتای درخت‌ها استفاده می‌شود."
    },
    {
      id: 30,
      text: "در جبر بولی، عبارت x + x'y برابر چیست؟",
      options: ["x + y", "x + y'", "x'y", "x"],
      correctIndex: 0,
      answer: "گزینه ۱: x + x'y = (x+x')(x+y) = 1 · (x+y) = x+y"
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
          onClick={() => router.push('/exam/davazdahom/riyazi/ghalamchi/second-half/gosaste-riazi')}
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
            <h1 style={{ margin: 0, fontSize: '28px' }}>🧮 آزمون جامع ریاضی گسسته</h1>
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
              📝 پاسخنامه تشریحی ریاضی گسسته
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

export default GosasteRiyaziSecondHalfFinalExam;