"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';

const Shimi3SecondHalfFinalExam = () => {
  const router = useRouter();
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const isTimeUpRef = useRef(false);
  const isCalculatedRef = useRef(false);

  // ================= سوالات شیمی (۳) - جامع نیم‌سال دوم =================
  const questions = [
    // ==================== فصل اول: سینتیک شیمیایی ====================
    {
      id: 1,
      text: "سرعت واکنش به چه عواملی بستگی دارد؟",
      options: ["غلظت مواد", "دما", "کاتالیزور", "همه موارد"],
      correctIndex: 3,
      answer: "گزینه ۴: سرعت واکنش به غلظت مواد، دما و کاتالیزور بستگی دارد."
    },
    {
      id: 2,
      text: "طبق نظریه برخورد، واکنش‌های شیمیایی چگونه رخ می‌دهند؟",
      options: ["در اثر برخورد مولکول‌ها", "در اثر افزایش دما", "در اثر کاتالیزور", "خودبه‌خود"],
      correctIndex: 0,
      answer: "گزینه ۱: نظریه برخورد می‌گوید واکنش‌های شیمیایی در اثر برخورد مولکول‌ها با یکدیگر رخ می‌دهند."
    },
    {
      id: 3,
      text: "انرژی فعال‌سازی چیست؟",
      options: ["حداقل انرژی لازم برای شروع واکنش", "انرژی آزاد شده در واکنش", "انرژی جذب شده در واکنش", "انرژی کل واکنش"],
      correctIndex: 0,
      answer: "گزینه ۱: انرژی فعال‌سازی حداقل انرژی لازم برای شروع واکنش است."
    },
    {
      id: 4,
      text: "معادله آرنیوس چه رابطه‌ای را بیان می‌کند؟",
      options: ["k = A e^(-Ea/RT)", "k = A e^(Ea/RT)", "ln k = ln A - Ea/RT", "هر دو گزینه اول و سوم"],
      correctIndex: 3,
      answer: "گزینه ۴: معادله آرنیوس k = A e^(-Ea/RT) و شکل لگاریتمی آن ln k = ln A - Ea/RT است."
    },
    {
      id: 5,
      text: "کاتالیزور چه نقشی در واکنش دارد؟",
      options: ["سرعت واکنش را افزایش می‌دهد", "سرعت واکنش را کاهش می‌دهد", "در واکنش مصرف می‌شود", "تغییر نمی‌دهد"],
      correctIndex: 0,
      answer: "گزینه ۱: کاتالیزور سرعت واکنش را افزایش می‌دهد بدون اینکه خود مصرف شود."
    },
    {
      id: 6,
      text: "کدام یک از موارد زیر از راه‌های افزایش سرعت واکنش است؟",
      options: ["افزایش دما", "افزایش غلظت", "استفاده از کاتالیزور", "همه موارد"],
      correctIndex: 3,
      answer: "گزینه ۴: افزایش دما، افزایش غلظت و استفاده از کاتالیزور همگی سرعت واکنش را افزایش می‌دهند."
    },

    // ==================== فصل دوم: تعادل شیمیایی ====================
    {
      id: 7,
      text: "ثابت تعادل (Kc) به چه عواملی بستگی دارد؟",
      options: ["دما", "غلظت", "فشار", "همه موارد"],
      correctIndex: 0,
      answer: "گزینه ۱: ثابت تعادل فقط به دما بستگی دارد و به غلظت و فشار وابسته نیست."
    },
    {
      id: 8,
      text: "اصل لوشاتلیه چه می‌گوید؟",
      options: ["سیستم تعادل در برابر تغییرات، واکنش نشان می‌دهد", "سیستم تعادل ثابت می‌ماند", "سیستم تعادل به سمت محصولات می‌رود", "هیچکدام"],
      correctIndex: 0,
      answer: "گزینه ۱: اصل لوشاتلیه می‌گوید سیستم تعادل در برابر تغییرات، به گونه‌ای واکنش نشان می‌دهد که اثر تغییر را کاهش دهد."
    },
    {
      id: 9,
      text: "با افزایش دما در یک واکنش گرماده، تعادل به کدام سمت میل می‌کند؟",
      options: ["سمت واکنش‌دهنده‌ها", "سمت محصولات", "ثابت می‌ماند", "بستگی به واکنش دارد"],
      correctIndex: 0,
      answer: "گزینه ۱: در واکنش گرماده با افزایش دما، تعادل به سمت واکنش‌دهنده‌ها (سمت گرماگیر) میل می‌کند."
    },
    {
      id: 10,
      text: "PH یک محلول اسیدی چگونه است؟",
      options: ["کمتر از ۷", "بیشتر از ۷", "برابر ۷", "متفاوت"],
      correctIndex: 0,
      answer: "گزینه ۱: PH محلول اسیدی کمتر از ۷ است."
    },
    {
      id: 11,
      text: "ثابت یونش اسید (Ka) چه رابطه‌ای را بیان می‌کند؟",
      options: ["Ka = [H+][A-]/[HA]", "Ka = [HA]/[H+][A-]", "Ka = [H+][HA]/[A-]", "Ka = [A-]/[H+][HA]"],
      correctIndex: 0,
      answer: "گزینه ۱: Ka = [H+][A-]/[HA] رابطه ثابت یونش اسید است."
    },
    {
      id: 12,
      text: "در تعادل شیمیایی، سرعت واکنش رفت و برگشت چگونه است؟",
      options: ["برابر هستند", "سرعت رفت بیشتر است", "سرعت برگشت بیشتر است", "هیچکدام"],
      correctIndex: 0,
      answer: "گزینه ۱: در تعادل شیمیایی، سرعت واکنش رفت و برگشت برابر است."

    },

    // ==================== فصل سوم: الکتروشیمی ====================
    {
      id: 13,
      text: "در سلول گالوانی، آند چه نقشی دارد؟",
      options: ["محل اکسایش", "محل کاهش", "محل تولید الکترون", "گزینه ۱ و ۳"],
      correctIndex: 3,
      answer: "گزینه ۴: آند محل اکسایش و تولید الکترون است."
    },
    {
      id: 14,
      text: "در سلول گالوانی، کاتد چه نقشی دارد؟",
      options: ["محل کاهش", "محل اکسایش", "محل مصرف الکترون", "گزینه ۱ و ۳"],
      correctIndex: 3,
      answer: "گزینه ۴: کاتد محل کاهش و مصرف الکترون است."
    },
    {
      id: 15,
      text: "پتانسیل استاندارد الکترود چیست؟",
      options: ["پتانسیل الکترود در شرایط استاندارد", "پتانسیل الکترود در هر شرایطی", "نیروی محرکه سلول", "انرژی سلول"],
      correctIndex: 0,
      answer: "گزینه ۱: پتانسیل استاندارد الکترود، پتانسیل الکترود در شرایط استاندارد (دمای ۲۵ درجه، غلظت ۱ مولار) است."
    },
    {
      id: 16,
      text: "قانون فارادی در الکترولیز چه رابطه‌ای را بیان می‌کند؟",
      options: ["m = (M/ nF) × Q", "m = (nF/M) × Q", "m = MQ/nF", "m = nFQ/M"],
      correctIndex: 0,
      answer: "گزینه ۱: قانون فارادی: m = (M/ nF) × Q که m جرم رسوب کرده، M جرم مولی، n تعداد الکترون‌ها و Q بار الکتریکی است."
    },
    {
      id: 17,
      text: "کدام یک از موارد زیر یک باتری قابل شارژ است؟",
      options: ["باتری سرب-اسید", "باتری خشک", "باتری قلیایی", "همه موارد"],
      correctIndex: 0,
      answer: "گزینه ۱: باتری سرب-اسید یک باتری قابل شارژ است."
    },
    {
      id: 18,
      text: "پیل سوختی چگونه کار می‌کند؟",
      options: ["با اکسایش سوخت و تولید الکتریسیته", "با احتراق سوخت", "با گرما", "با نور"],
      correctIndex: 0,
      answer: "گزینه ۱: پیل سوختی با اکسایش سوخت (مانند هیدروژن) و تولید الکتریسیته کار می‌کند."
    },

    // ==================== فصل چهارم: شیمی آلی پیشرفته ====================
    {
      id: 19,
      text: "ترکیبات آروماتیک چه ویژگی خاصی دارند؟",
      options: ["حلقه بنزنی", "بوی خوش", "واکنش‌پذیری بالا", "همه موارد"],
      correctIndex: 0,
      answer: "گزینه ۱: ترکیبات آروماتیک دارای حلقه بنزنی هستند."
    },
    {
      id: 20,
      text: "واکنش‌های جانشینی در ترکیبات آروماتیک چه نوع واکنشی است؟",
      options: ["هیدروژن با گروه دیگر جایگزین می‌شود", "حلقه باز می‌شود", "پیوند دوگانه تشکیل می‌شود", "هیچکدام"],
      correctIndex: 0,
      answer: "گزینه ۱: در واکنش‌های جانشینی آروماتیک، یک اتم هیدروژن با گروه دیگری جایگزین می‌شود."
    },
    {
      id: 21,
      text: "کدام یک از موارد زیر یک پلیمر طبیعی است؟",
      options: ["سلولز", "نایلون", "پلی‌اتیلن", "PVC"],
      correctIndex: 0,
      answer: "گزینه ۱: سلولز یک پلیمر طبیعی است که در گیاهان یافت می‌شود."
    },
    {
      id: 22,
      text: "واکنش‌های پلیمریزاسیون به چند نوع اصلی تقسیم می‌شوند؟",
      options: ["دو نوع (افزایشی و تراکمی)", "سه نوع", "چهار نوع", "یک نوع"],
      correctIndex: 0,
      answer: "گزینه ۱: واکنش‌های پلیمریزاسیون به دو نوع افزایشی و تراکمی تقسیم می‌شوند."
    },
    {
      id: 23,
      text: "کربوهیدرات‌ها چه نوع ترکیباتی هستند؟",
      options: ["قندها", "چربی‌ها", "پروتئین‌ها", "اسیدهای نوکلئیک"],
      correctIndex: 0,
      answer: "گزینه ۱: کربوهیدرات‌ها قندها و ترکیبات مشابه هستند."
    },
    {
      id: 24,
      text: "پروتئین‌ها از چه واحدهایی ساخته شده‌اند؟",
      options: ["اسیدهای آمینه", "قندها", "اسیدهای چرب", "نوکلئوتیدها"],
      correctIndex: 0,
      answer: "گزینه ۱: پروتئین‌ها از واحدهای اسید آمینه ساخته شده‌اند."

    },

    // ==================== سوالات ترکیبی ====================
    {
      id: 25,
      text: "کدام یک از موارد زیر سرعت واکنش را افزایش می‌دهد؟",
      options: ["افزایش دمای واکنش", "افزایش غلظت واکنش‌دهنده‌ها", "استفاده از کاتالیزور", "همه موارد"],
      correctIndex: 3,
      answer: "گزینه ۴: افزایش دما، افزایش غلظت و استفاده از کاتالیزور همگی سرعت واکنش را افزایش می‌دهند."
    },
    {
      id: 26,
      text: "در یک واکنش تعادلی، اگر فشار افزایش یابد، تعادل به کدام سمت میل می‌کند؟",
      options: ["سمت با تعداد مول کمتر", "سمت با تعداد مول بیشتر", "ثابت می‌ماند", "بستگی به واکنش دارد"],
      correctIndex: 0,
      answer: "گزینه ۱: با افزایش فشار، تعادل به سمتی میل می‌کند که تعداد مول‌های گاز کمتر باشد."
    },
    {
      id: 27,
      text: "در سلول الکتروشیمیایی، جریان الکترون‌ها در مدار خارجی از کجا به کجا است؟",
      options: ["از آند به کاتد", "از کاتد به آند", "هر دو جهت", "هیچکدام"],
      correctIndex: 0,
      answer: "گزینه ۱: در مدار خارجی سلول الکتروشیمیایی، الکترون‌ها از آند به کاتد حرکت می‌کنند."
    },
    {
      id: 28,
      text: "کدام یک از موارد زیر یک ترکیب آروماتیک است؟",
      options: ["بنزن", "اتان", "اتن", "متان"],
      correctIndex: 0,
      answer: "گزینه ۱: بنزن یک ترکیب آروماتیک با حلقه شش کربنی است."
    },
    {
      id: 29,
      text: "در الکترولیز آب، چه گازهایی تولید می‌شوند؟",
      options: ["هیدروژن و اکسیژن", "هیدروژن و نیتروژن", "اکسیژن و نیتروژن", "هیدروژن و کلر"],
      correctIndex: 0,
      answer: "گزینه ۱: در الکترولیز آب، هیدروژن در کاتد و اکسیژن در آند تولید می‌شود."
    },
    {
      id: 30,
      text: "اسیدهای نوکلئیک شامل چه موادی هستند؟",
      options: ["DNA و RNA", "پروتئین‌ها", "قندها", "چربی‌ها"],
      correctIndex: 0,
      answer: "گزینه ۱: اسیدهای نوکلئیک شامل DNA و RNA هستند."
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
        backgroundColor: '#E65100',
        color: 'white',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '30px',
        textAlign: 'center',
        position: 'relative'
      }}>
        <button 
          onClick={() => router.push('/exam/davazdahom/riyazi/ghalamchi/second-half/shimi-3-riazi')}
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
            <h1 style={{ margin: 0, fontSize: '28px' }}>🧪 آزمون جامع شیمی (۳) - نیم‌سال دوم</h1>
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
                backgroundColor: '#E65100',
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
                      border: isSelected ? '3px solid #E65100' : '1px solid #dee2e6',
                      borderRadius: '10px',
                      backgroundColor: isSelected ? '#fff3e0' : '#fff',
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
                      backgroundColor: isSelected ? '#E65100' : '#fff',
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
                  backgroundColor: canCalculate ? '#E65100' : '#6c757d',
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
              <div style={{ fontSize: '22px', fontWeight: 'bold', color: '#E65100' }}>
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
            borderTop: '4px solid #E65100',
            paddingTop: '40px',
            backgroundColor: '#ffffff',
            padding: '40px',
            borderRadius: '12px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
            width: '100%'
          }}>
            <h2 style={{ 
              textAlign: 'center', 
              borderBottom: '3px solid #E65100', 
              paddingBottom: '20px', 
              marginBottom: '40px',
              fontSize: '26px',
              color: '#E65100'
            }}>
              📝 پاسخنامه تشریحی شیمی (۳) - نیم‌سال دوم
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
                      color: '#E65100',
                      backgroundColor: '#fff3e0',
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
                    <span style={{ fontWeight: 'bold', color: '#E65100' }}>📖 توضیح:</span> 
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

export default Shimi3SecondHalfFinalExam;