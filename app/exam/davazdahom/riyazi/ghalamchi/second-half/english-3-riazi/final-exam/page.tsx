"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';

const English3SecondHalfFinalExam = () => {
  const router = useRouter();
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const isTimeUpRef = useRef(false);
  const isCalculatedRef = useRef(false);

  // ================= سوالات زبان انگلیسی (۳) - جامع نیم‌سال دوم =================
  const questions = [
    // ==================== فصل اول: Grammar ====================
    {
      id: 1,
      text: "Which sentence is in Present Perfect tense?",
      options: ["I have visited Paris", "I visited Paris", "I am visiting Paris", "I will visit Paris"],
      correctIndex: 0,
      answer: "گزینه ۱: 'I have visited Paris' جمله‌ای در زمان حال کامل است."
    },
    {
      id: 2,
      text: "Which sentence is in Past Perfect tense?",
      options: ["I had finished my homework", "I finished my homework", "I have finished my homework", "I will finish my homework"],
      correctIndex: 0,
      answer: "گزینه ۱: 'I had finished my homework' جمله‌ای در زمان گذشته کامل است."
    },
    {
      id: 3,
      text: "Which sentence is in Future Perfect tense?",
      options: ["I will have completed the project by tomorrow", "I will complete the project tomorrow", "I am completing the project", "I have completed the project"],
      correctIndex: 0,
      answer: "گزینه ۱: 'I will have completed the project by tomorrow' جمله‌ای در زمان آینده کامل است."
    },
    {
      id: 4,
      text: "Which sentence is in Past Continuous tense?",
      options: ["I was reading a book at 8 PM", "I read a book at 8 PM", "I have read a book", "I am reading a book"],
      correctIndex: 0,
      answer: "گزینه ۱: 'I was reading a book at 8 PM' جمله‌ای در زمان گذشته استمراری است."
    },
    {
      id: 5,
      text: "Which sentence is a Mixed Conditional?",
      options: ["If I had studied, I would have passed", "If I study, I will pass", "If I studied, I would pass", "If I had studied, I would be rich now"],
      correctIndex: 3,
      answer: "گزینه ۴: 'If I had studied, I would be rich now' یک جمله شرطی مختلط است (گذشته-حال)."
    },
    {
      id: 6,
      text: "What is the past participle of 'write'?",
      options: ["wrote", "written", "writing", "writes"],
      correctIndex: 1,
      answer: "گزینه ۲: اسم مفعول (past participle) فعل 'write'، 'written' است."

    },

    // ==================== فصل دوم: Vocabulary ====================
    {
      id: 7,
      text: "What is the meaning of 'environment'?",
      options: ["محیط زیست", "انرژی", "آب و هوا", "جمعیت"],
      correctIndex: 0,
      answer: "گزینه ۱: 'Environment' به معنی محیط زیست است."
    },
    {
      id: 8,
      text: "What is the synonym of 'consequence'?",
      options: ["result", "cause", "beginning", "start"],
      correctIndex: 0,
      answer: "گزینه ۱: 'Result' مترادف 'consequence' به معنی نتیجه است."
    },
    {
      id: 9,
      text: "What does 'abundant' mean?",
      options: ["کم", "زیاد و فراوان", "نادر", "گران"],
      correctIndex: 1,
      answer: "گزینه ۲: 'Abundant' به معنی زیاد و فراوان است."
    },
    {
      id: 10,
      text: "What is the opposite of 'ancient'?",
      options: ["old", "modern", "historic", "traditional"],
      correctIndex: 1,
      answer: "گزینه ۲: متضاد 'ancient' (قدیمی)، 'modern' (مدرن) است."
    },
    {
      id: 11,
      text: "What does the phrasal verb 'give up' mean?",
      options: ["تسلیم شدن", "بخشیدن", "دست کشیدن", "تحویل دادن"],
      correctIndex: 2,
      answer: "گزینه ۳: 'Give up' به معنی دست کشیدن و تسلیم شدن است."
    },
    {
      id: 12,
      text: "What is the meaning of 'essential'?",
      options: ["غیرضروری", "ضروری و اساسی", "زیبا", "بزرگ"],
      correctIndex: 1,
      answer: "گزینه ۲: 'Essential' به معنی ضروری و اساسی است."

    },

    // ==================== فصل سوم: Reading Comprehension ====================
    {
      id: 13,
      text: "What is the main idea of a text usually about?",
      options: ["The title", "The conclusion", "The main subject", "The author"],
      correctIndex: 2,
      answer: "گزینه ۳: ایده اصلی یک متن معمولاً درباره موضوع اصلی آن است."
    },
    {
      id: 14,
      text: "What does 'topic sentence' mean?",
      options: ["جمله اصلی پاراگراف", "جمله آخر", "جمله اول", "عنوان"],
      correctIndex: 0,
      answer: "گزینه ۱: 'Topic sentence' جمله اصلی پاراگراف است که موضوع آن را مشخص می‌کند."
    },
    {
      id: 15,
      text: "What is critical reading?",
      options: ["Analyzing and evaluating text", "Reading quickly", "Memorizing text", "Reading aloud"],
      correctIndex: 0,
      answer: "گزینه ۱: خواندن انتقادی به معنی تحلیل و ارزیابی متن است."
    },
    {
      id: 16,
      text: "What is the purpose of summarizing a text?",
      options: ["To shorten it", "To highlight main points", "To memorize it", "To write a new text"],
      correctIndex: 1,
      answer: "گزینه ۲: هدف از خلاصه‌نویسی، برجسته کردن نکات اصلی متن است."
    },
    {
      id: 17,
      text: "What does 'inference' mean in reading comprehension?",
      options: ["Drawing conclusions from clues", "Reading the text", "Memorizing details", "Writing a summary"],
      correctIndex: 0,
      answer: "گزینه ۱: استنباط به معنی نتیجه‌گیری از نشانه‌ها و شواهد موجود در متن است."
    },
    {
      id: 18,
      text: "What is an argumentative text?",
      options: ["A text that presents arguments", "A text that tells a story", "A text that describes something", "A text that gives instructions"],
      correctIndex: 0,
      answer: "گزینه ۱: متن استدلالی متنی است که استدلال‌هایی را ارائه می‌دهد."

    },

    // ==================== فصل چهارم: Writing & Structure ====================
    {
      id: 19,
      text: "What is the correct word order in English sentences?",
      options: ["Subject + Verb + Object", "Verb + Subject + Object", "Object + Verb + Subject", "Subject + Object + Verb"],
      correctIndex: 0,
      answer: "گزینه ۱: ترتیب صحیح کلمات در جمله انگلیسی: Subject + Verb + Object است."
    },
    {
      id: 20,
      text: "What is the plural form of 'child'?",
      options: ["childs", "children", "childrens", "childes"],
      correctIndex: 1,
      answer: "گزینه ۲: جمع 'child'، 'children' است."
    },
    {
      id: 21,
      text: "Which sentence is grammatically correct?",
      options: ["She doesn't like coffee", "She don't like coffee", "She not like coffee", "She doesn't likes coffee"],
      correctIndex: 0,
      answer: "گزینه ۱: 'She doesn't like coffee' از نظر دستوری صحیح است."
    },
    {
      id: 22,
      text: "What is the correct spelling?",
      options: ["beautiful", "beautifull", "beutiful", "beutyful"],
      correctIndex: 0,
      answer: "گزینه ۱: 'Beautiful' املای صحیح کلمه است."
    },
    {
      id: 23,
      text: "What is academic writing?",
      options: ["Formal writing for academic purposes", "Informal writing", "Creative writing", "Journal writing"],
      correctIndex: 0,
      answer: "گزینه ۱: نوشتن آکادمیک به معنی نوشتن رسمی برای اهداف علمی و دانشگاهی است."
    },
    {
      id: 24,
      text: "What is the purpose of editing a text?",
      options: ["Correcting errors", "Improving clarity", "Checking grammar", "All of the above"],
      correctIndex: 3,
      answer: "گزینه ۴: هدف از ویرایش متن، اصلاح اشتباهات، بهبود وضوح و بررسی دستور زبان است."

    },

    // ==================== سوالات ترکیبی ====================
    {
      id: 25,
      text: "What is the meaning of 'global'?",
      options: ["محلی", "جهانی", "منطقه‌ای", "ملی"],
      correctIndex: 1,
      answer: "گزینه ۲: 'Global' به معنی جهانی است."
    },
    {
      id: 26,
      text: "Which one is an adjective?",
      options: ["quickly", "quick", "quicken", "quickness"],
      correctIndex: 1,
      answer: "گزینه ۲: 'Quick' یک صفت است که اسم را توصیف می‌کند."
    },
    {
      id: 27,
      text: "Which sentence uses Present Perfect correctly?",
      options: ["I have visited Paris", "I visited Paris", "I am visiting Paris", "I will visit Paris"],
      correctIndex: 0,
      answer: "گزینه ۱: 'I have visited Paris' جمله‌ای در زمان حال کامل است."
    },
    {
      id: 28,
      text: "What is the past tense of 'teach'?",
      options: ["teached", "taught", "teaching", "teaches"],
      correctIndex: 1,
      answer: "گزینه ۲: گذشته فعل 'teach'، 'taught' است."
    },
    {
      id: 29,
      text: "Which sentence is in Passive Voice?",
      options: ["The book was written by Ali", "Ali wrote the book", "Ali is writing the book", "Ali will write the book"],
      correctIndex: 0,
      answer: "گزینه ۱: 'The book was written by Ali' جمله‌ای در مجهول است."
    },
    {
      id: 30,
      text: "What is the meaning of 'improve'?",
      options: ["بدتر شدن", "بهتر شدن", "تغییر کردن", "توقف کردن"],
      correctIndex: 1,
      answer: "گزینه ۲: 'Improve' به معنی بهتر شدن است."
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
          onClick={() => router.push('/exam/davazdahom/riyazi/ghalamchi/second-half/english-3-riazi')}
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
            <h1 style={{ margin: 0, fontSize: '28px' }}>🌍 آزمون جامع زبان انگلیسی (۳) - نیم‌سال دوم</h1>
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
              📝 پاسخنامه تشریحی زبان انگلیسی (۳) - نیم‌سال دوم
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

export default English3SecondHalfFinalExam;