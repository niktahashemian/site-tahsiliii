'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import QuestionCard from './QuestionCard'; // مسیر را بر اساس پروژه خود تنظیم کنید

// تعریف تایپ سوال
interface QuestionType {
  id: number;
  text: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  correctAnswer: string;
  explanation: string;
}

// دیتابیس سوالات درس اول (نمونه)
const questionsData: QuestionType[] = [
  {
    id: 1,
    text: 'مجموع جملات دنبالهٔ حسابی ۵، ۹، ۱۳، ... تا ۲۰ جمله اول کدام است؟',
    options: {
      A: '۸۰۰',
      B: '۸۲۰',
      C: '۸۴۰',
      D: '۸۶۰',
    },
    correctAnswer: 'D',
    explanation: 'فرمول مجموع جملات حسابی: Sn = n/2[2a1 + (n-1)d] = 10[10 + 19×4] = 10×86 = 860',
  },
  {
    id: 2,
    text: 'در یک دنبالهٔ هندسی، جملهٔ اول ۳ و نسبت مشترک ۲ است. مجموع ۸ جملهٔ اول برابر است با:',
    options: {
      A: '۷۶۵',
      B: '۷۶۸',
      C: '۷۷۰',
      D: '۷۷۲',
    },
    correctAnswer: 'A',
    explanation: 'فرمول مجموع دنباله هندسی: Sn = a1(r^n -1)/(r-1) = 3(256-1)/(2-1)=3×255=765',
  },
  {
    id: 3,
    text: 'حاصل عبارت ۲ + ۴ + ۶ + ... + ۱۰۰ کدام است؟',
    options: {
      A: '۲۵۵۰',
      B: '۲۵۲۵',
      C: '۲۵۷۵',
      D: '۲۶۰۰',
    },
    correctAnswer: 'A',
    explanation: 'این یک دنباله حسابی با a1=2, d=2, n=50 است. مجموع = 50/2 × (2+100) = 25×102=2550',
  },
];

export default function Lesson1Page() {
  const router = useRouter();
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleOptionSelect = (questionId: number, optionValue: string) => {
    setUserAnswers((prev) => ({ ...prev, [questionId]: optionValue }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleReset = () => {
    setUserAnswers({});
    setSubmitted(false);
  };

  const calculateScore = () => {
    let correct = 0;
    questionsData.forEach((q) => {
      if (userAnswers[q.id] === q.correctAnswer) correct++;
    });
    return { correct, total: questionsData.length };
  };

  const score = calculateScore();

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <button onClick={() => router.back()} style={styles.backButton}>
          ← بازگشت به فصل‌های کتاب
        </button>
        <h1 style={styles.title}>📘 درس اول: مجموع جملات دنباله‌های حسابی و هندسی</h1>
        <p style={styles.subtitle}>به سوالات زیر پاسخ دهید</p>
      </div>

      {!submitted ? (
        <>
          <div style={styles.questionsList}>
            {questionsData.map((q, idx) => (
              <QuestionCard
                key={q.id}
                question={q}
                index={idx + 1}
                selectedOption={userAnswers[q.id]}
                onOptionSelect={handleOptionSelect}
              />
            ))}
          </div>
          <div style={styles.submitContainer}>
            <button onClick={handleSubmit} style={styles.submitButton}>
              ثبت پاسخ‌ها و مشاهده نتیجه
            </button>
          </div>
        </>
      ) : (
        <div style={styles.resultContainer}>
          <div style={styles.resultCard}>
            <h2>نتیجه آزمون</h2>
            <div style={styles.scoreCircle}>
              <span style={styles.scoreNumber}>{score.correct}</span>
              <span style={styles.scoreTotal}>از {score.total}</span>
            </div>
            <p style={styles.scorePercentage}>
              درصد: {((score.correct / score.total) * 100).toFixed(1)}%
            </p>
            <div style={styles.resultDetails}>
              <p>✅ پاسخ‌های صحیح: {score.correct}</p>
              <p>❌ پاسخ‌های غلط: {score.total - score.correct}</p>
            </div>
            <div style={styles.buttonGroup}>
              <button onClick={handleReset} style={styles.retryButton}>
                ↺ دوباره امتحان کن
              </button>
              <button onClick={() => router.back()} style={styles.chaptersButton}>
                📚 بازگشت به فصل‌ها
              </button>
            </div>
          </div>

          {/* نمایش پاسخنامه تشریحی */}
          <div style={styles.explanations}>
            <h3>پاسخنامه تشریحی</h3>
            {questionsData.map((q, idx) => (
              <div key={q.id} style={styles.explanationItem}>
                <p>
                  <strong>سوال {idx + 1}:</strong> {q.text}
                </p>
                <p>
                  <strong>پاسخ صحیح:</strong> گزینه {q.correctAnswer} –{' '}
                  {q.options[q.correctAnswer as keyof typeof q.options]}
                </p>
                <p>
                  <strong>توضیح:</strong> {q.explanation}
                </p>
                <p>
                  <strong>پاسخ شما:</strong>{' '}
                  {userAnswers[q.id] ? `گزینه ${userAnswers[q.id]}` : 'پاسخ نداده‌اید'}
                </p>
                <hr />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: '100vh',
    padding: '2rem',
    backgroundColor: '#f0f2f5',
    fontFamily: 'inherit',
  },
  header: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  backButton: {
    backgroundColor: '#4a5568',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    fontSize: '0.9rem',
    marginBottom: '1rem',
  },
  title: {
    fontSize: '1.8rem',
    color: '#1a202c',
    margin: '0.5rem 0',
  },
  subtitle: {
    color: '#4a5568',
    fontSize: '1rem',
  },
  questionsList: {
    maxWidth: '800px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  submitContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2rem',
  },
  submitButton: {
    backgroundColor: '#48bb78',
    color: 'white',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '2rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background 0.2s',
  },
  resultContainer: {
    maxWidth: '900px',
    margin: '0 auto',
  },
  resultCard: {
    backgroundColor: 'white',
    borderRadius: '1rem',
    padding: '2rem',
    textAlign: 'center',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    marginBottom: '2rem',
  },
  scoreCircle: {
    display: 'inline-block',
    margin: '1rem auto',
    padding: '1rem',
    borderRadius: '50%',
    backgroundColor: '#e2e8f0',
    width: '100px',
    height: '100px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scoreNumber: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#2c5282',
  },
  scoreTotal: {
    fontSize: '0.9rem',
    color: '#4a5568',
  },
  scorePercentage: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    margin: '0.5rem 0',
  },
  resultDetails: {
    margin: '1rem 0',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginTop: '1.5rem',
  },
  retryButton: {
    backgroundColor: '#ed8936',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '2rem',
    cursor: 'pointer',
  },
  chaptersButton: {
    backgroundColor: '#4299e1',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '2rem',
    cursor: 'pointer',
  },
  explanations: {
    backgroundColor: 'white',
    borderRadius: '1rem',
    padding: '1.5rem',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  },
  explanationItem: {
    marginBottom: '1.5rem',
    textAlign: 'right',
  },
};