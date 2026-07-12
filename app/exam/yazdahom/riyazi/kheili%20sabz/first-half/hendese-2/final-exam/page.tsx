'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import QuestionCard from './QuestionCard';

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

const questionsData: QuestionType[] = [
  {
    id: 1,
    text: 'مجموعهٔ جواب نامعادله <span style="font-family: monospace; font-size: 1.1rem;">(0.7)ˣ ≤ (0.2)ˣ</span> کدام است؟',
    options: {
      A: '<span style="font-family: monospace;">(1, ∞)</span>',
      B: '<span style="font-family: monospace;">(-∞, 1]</span>',
      C: '<span style="font-family: monospace;">(0, ∞)</span>',
      D: '<span style="font-family: monospace;">(-∞, 0]</span>',
    },
    correctAnswer: 'C',
    explanation: 'از آنجایی که 0.7 > 0.2 و هر دو بین 0 و 1 هستند، برای x > 0 داریم (0.7)ˣ < (0.2)ˣ. پس پاسخ (0, ∞) است.',
  },
  {
    id: 2,
    text: 'اگر <span style="font-family: monospace; font-size: 1.1rem;">a = log 2</span> و <span style="font-family: monospace; font-size: 1.1rem;">b = log 3</span>، مقدار <span style="font-family: monospace; font-size: 1.1rem;">log 12</span> کدام است؟',
    options: {
      A: '<span style="font-family: monospace;">2b - a</span>',
      B: '<span style="font-family: monospace;">2 - a - b</span>',
      C: '<span style="font-family: monospace;">2a - b</span>',
      D: '<span style="font-family: monospace;">a - b</span>',
    },
    correctAnswer: 'A',
    explanation: 'log 12 = log(4 × 3) = log 4 + log 3 = log 2² + log 3 = 2 log 2 + log 3 = 2a + b',
  },
  {
    id: 3,
    text: 'اگر <span style="font-family: monospace; font-size: 1.1rem;">f(x) = x⁻¹⁵</span> و <span style="font-family: monospace; font-size: 1.1rem;">g(x) = log_c(x + b)</span> و نمودارهای آنها مطابق شکل باشد، مقدار <span style="font-family: monospace; font-size: 1.1rem;">a + b + c</span> کدام است؟',
    options: {
      A: '<span style="font-family: monospace;">0.3</span>',
      B: '<span style="font-family: monospace;">0.4</span>',
      C: '<span style="font-family: monospace;">0.2</span>',
      D: '<span style="font-family: monospace;">0.6</span>',
    },
    correctAnswer: 'B',
    explanation: 'از روی نمودار، a = 0.2، b = 0.1 و c = 0.1 است. بنابراین a + b + c = 0.2 + 0.1 + 0.1 = 0.4',
  },
  {
    id: 4,
    text: 'مقدار <span style="font-family: monospace; font-size: 1.1rem;">sin 75° + sin 15°</span> کدام است؟',
    options: {
      A: '<span style="font-family: monospace;">(1 + √5)/4</span>',
      B: '<span style="font-family: monospace;">(1 + √3)/2</span>',
      C: '<span style="font-family: monospace;">(√6 + √2)/4</span>',
      D: '<span style="font-family: monospace;">(√6 - √2)/4</span>',
    },
    correctAnswer: 'C',
    explanation: 'sin 75° + sin 15° = 2 sin 45° cos 30° = 2 × (√2/2) × (√3/2) = (√6 + √2)/4',
  },
  {
    id: 5,
    text: 'مقدار <span style="font-family: monospace; font-size: 1.1rem;">cos 15° - cos 75°</span> کدام است؟',
    options: {
      A: '<span style="font-family: monospace;">(1 - √5)/4</span>',
      B: '<span style="font-family: monospace;">(√6 - √2)/4</span>',
      C: '<span style="font-family: monospace;">(1 - √3)/2</span>',
      D: '<span style="font-family: monospace;">(√2 - √6)/4</span>',
    },
    correctAnswer: 'B',
    explanation: 'cos 15° - cos 75° = -2 sin 45° sin(-30°) = 2 sin 45° sin 30° = 2 × (√2/2) × (1/2) = (√6 - √2)/4',
  },
  {
    id: 6,
    text: 'اگر <span style="font-family: monospace; font-size: 1.1rem;">f(x) = tan x</span>، مقدار <span style="font-family: monospace; font-size: 1.1rem;">tan 75° + tan 15°</span> کدام است؟',
    options: {
      A: '<span style="font-family: monospace;">4</span>',
      B: '<span style="font-family: monospace;">6</span>',
      C: '<span style="font-family: monospace;">8</span>',
      D: '<span style="font-family: monospace;">2</span>',
    },
    correctAnswer: 'A',
    explanation: 'tan 75° + tan 15° = (2 + √3) + (2 - √3) = 4',
  },
  {
    id: 7,
    text: 'حد <span style="font-family: monospace; font-size: 1.1rem;">lim<sub>x→0</sub> (sin x)/x</span> کدام است؟',
    options: {
      A: '<span style="font-family: monospace;">0</span>',
      B: '<span style="font-family: monospace;">1</span>',
      C: '<span style="font-family: monospace;">-1</span>',
      D: '<span style="font-family: monospace;">∞</span>',
    },
    correctAnswer: 'B',
    explanation: 'حد معروف (sin x)/x وقتی x→0 برابر 1 است. این یکی از حدهای مهم در حسابان است.',
  },
  {
    id: 8,
    text: 'مشتق <span style="font-family: monospace; font-size: 1.1rem;">f(x) = x² + 3x - 2</span> در نقطه <span style="font-family: monospace; font-size: 1.1rem;">x = 1</span> کدام است؟',
    options: {
      A: '<span style="font-family: monospace;">4</span>',
      B: '<span style="font-family: monospace;">5</span>',
      C: '<span style="font-family: monospace;">3</span>',
      D: '<span style="font-family: monospace;">6</span>',
    },
    correctAnswer: 'B',
    explanation: 'f\'(x) = 2x + 3، f\'(1) = 2(1) + 3 = 5',
  },
  {
    id: 9,
    text: '<span style="font-family: monospace; font-size: 1.1rem;">cos z - sin z</span> کدام است؟',
    options: {
      A: '<span style="font-family: monospace;">1</span>',
      B: '<span style="font-family: monospace;">-1</span>',
      C: '<span style="font-family: monospace;">cos z</span>',
      D: '<span style="font-family: monospace;">sin z</span>',
    },
    correctAnswer: 'C',
    explanation: 'با استفاده از اتحادهای مثلثاتی، cos z - sin z به فرم مناسب تبدیل می‌شود.',
  },
  {
    id: 10,
    text: '<span style="font-family: monospace; font-size: 1.1rem;">cot z - sin z</span> کدام است؟',
    options: {
      A: '<span style="font-family: monospace;">1</span>',
      B: '<span style="font-family: monospace;">-1</span>',
      C: '<span style="font-family: monospace;">cot z</span>',
      D: '<span style="font-family: monospace;">sin z</span>',
    },
    correctAnswer: 'C',
    explanation: 'با استفاده از اتحادهای مثلثاتی، cot z - sin z به فرم مناسب تبدیل می‌شود.',
  },
];

export default function LessonPage() {
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
        <div style={styles.headerTop}>
          <span style={styles.headerTitle}>📚 مرکز مشاورهٔ پرتو امید</span>
          <span style={styles.headerTime}>۲۲:۲۵</span>
        </div>
        <div style={styles.headerProgress}>
          <span style={styles.progressText}>سخ ثبت شده</span>
          <span style={styles.progressCount}>از {questionsData.length}</span>
          <button onClick={() => router.back()} style={styles.backButton}>
            ←
          </button>
        </div>
      </div>

      {!submitted ? (
        <>
          <div style={styles.questionsList}>
            {questionsData.map((q, idx) => (
              <div key={q.id}>
                <QuestionCard
                  question={q}
                  index={idx + 1}
                  selectedOption={userAnswers[q.id]}
                  onOptionSelect={handleOptionSelect}
                />
                {idx < questionsData.length - 1 && <hr style={styles.dividerLine} />}
              </div>
            ))}
          </div>
          <div style={styles.submitContainer}>
            <button 
              onClick={handleSubmit} 
              style={styles.submitButton}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#38a169';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#48bb78';
              }}
            >
              ثبت پاسخ‌ها و مشاهده نتیجه
            </button>
          </div>
        </>
      ) : (
        <div style={styles.resultContainer}>
          <div style={styles.resultCard}>
            <h2 style={styles.resultTitle}>نتیجه آزمون</h2>
            <div style={styles.scoreCircle}>
              <span style={styles.scoreNumber}>{score.correct}</span>
              <span style={styles.scoreTotal}>از {score.total}</span>
            </div>
            <p style={styles.scorePercentage}>
              درصد: {((score.correct / score.total) * 100).toFixed(1)}%
            </p>
            <div style={styles.resultDetails}>
              <p style={styles.resultCorrect}>✅ پاسخ‌های صحیح: {score.correct}</p>
              <p style={styles.resultWrong}>❌ پاسخ‌های غلط: {score.total - score.correct}</p>
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

          <div style={styles.explanations}>
            <h3 style={styles.explanationsTitle}>پاسخنامه تشریحی</h3>
            {questionsData.map((q, idx) => {
              const isCorrect = userAnswers[q.id] === q.correctAnswer;
              return (
                <div key={q.id}>
                  <div style={styles.explanationItem}>
                    <p style={styles.explanationQuestion}>
                      <strong>سوال {idx + 1}:</strong> 
                      <span dangerouslySetInnerHTML={{ __html: q.text }} />
                    </p>
                    <p style={styles.explanationCorrect}>
                      <strong>پاسخ صحیح:</strong> گزینه {q.correctAnswer} –{' '}
                      <span dangerouslySetInnerHTML={{ __html: q.options[q.correctAnswer as keyof typeof q.options] }} />
                    </p>
                    <p style={styles.explanationText}>
                      <strong>توضیح:</strong> {q.explanation}
                    </p>
                    <p style={isCorrect ? styles.explanationUserCorrect : styles.explanationUserWrong}>
                      <strong>پاسخ شما:</strong>{' '}
                      {userAnswers[q.id] ? `گزینه ${userAnswers[q.id]}` : 'پاسخ نداده‌اید'}
                      {userAnswers[q.id] && (
                        <span style={{ marginRight: '0.5rem' }}>
                          {isCorrect ? ' ✅' : ' ❌'}
                        </span>
                      )}
                    </p>
                  </div>
                  {idx < questionsData.length - 1 && <hr style={styles.dividerLine} />}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: '100vh',
    padding: '1rem',
    backgroundColor: '#f0f2f5',
    fontFamily: "'Vazir', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    direction: 'rtl',
  },
  header: {
    backgroundColor: '#1a2a3a',
    color: 'white',
    padding: '1rem 1.5rem',
    borderRadius: '16px',
    marginBottom: '1.5rem',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  headerTop: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.5rem',
  },
  headerTitle: {
    fontSize: '1rem',
    fontWeight: '600',
  },
  headerTime: {
    fontSize: '0.9rem',
    color: '#a0aec0',
  },
  headerProgress: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '0.5rem',
    borderTop: '1px solid rgba(255,255,255,0.1)',
  },
  progressText: {
    fontSize: '0.85rem',
    color: '#a0aec0',
  },
  progressCount: {
    fontSize: '0.85rem',
    color: '#48bb78',
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: 'transparent',
    border: '1px solid rgba(255,255,255,0.2)',
    color: 'white',
    padding: '0.3rem 0.8rem',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  questionsList: {
    maxWidth: '900px',
    margin: '0 auto',
  },
  dividerLine: {
    border: 'none',
    borderTop: '2px solid #e2e8f0',
    margin: '0.5rem 0',
    opacity: 0.5,
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
    padding: '0.75rem 2.5rem',
    borderRadius: '50px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 12px rgba(72, 187, 120, 0.3)',
  },
  resultContainer: {
    maxWidth: '900px',
    margin: '0 auto',
  },
  resultCard: {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '2rem',
    textAlign: 'center',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    marginBottom: '2rem',
  },
  resultTitle: {
    fontSize: '1.5rem',
    color: '#1a202c',
    marginBottom: '0.5rem',
  },
  scoreCircle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1.5rem auto',
    padding: '1rem',
    borderRadius: '50%',
    backgroundColor: '#e2e8f0',
    width: '120px',
    height: '120px',
  },
  scoreNumber: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#2c5282',
    lineHeight: 1,
  },
  scoreTotal: {
    fontSize: '1rem',
    color: '#4a5568',
    marginTop: '0.25rem',
  },
  scorePercentage: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    margin: '0.5rem 0',
    color: '#2d3748',
  },
  resultDetails: {
    margin: '1rem 0',
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    flexWrap: 'wrap',
  },
  resultCorrect: {
    color: '#38a169',
    fontWeight: 'bold',
    fontSize: '1rem',
  },
  resultWrong: {
    color: '#e53e3e',
    fontWeight: 'bold',
    fontSize: '1rem',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    marginTop: '1.5rem',
    flexWrap: 'wrap',
  },
  retryButton: {
    backgroundColor: '#ed8936',
    color: 'white',
    border: 'none',
    padding: '0.6rem 1.5rem',
    borderRadius: '50px',
    cursor: 'pointer',
    fontSize: '0.95rem',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 8px rgba(237, 137, 54, 0.3)',
  },
  chaptersButton: {
    backgroundColor: '#4299e1',
    color: 'white',
    border: 'none',
    padding: '0.6rem 1.5rem',
    borderRadius: '50px',
    cursor: 'pointer',
    fontSize: '0.95rem',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 8px rgba(66, 153, 225, 0.3)',
  },
  explanations: {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '1.5rem',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  },
  explanationsTitle: {
    fontSize: '1.3rem',
    color: '#1a202c',
    marginBottom: '1.5rem',
    textAlign: 'center',
    borderBottom: '2px solid #e2e8f0',
    paddingBottom: '0.5rem',
  },
  explanationItem: {
    marginBottom: '1.5rem',
    textAlign: 'right',
  },
  explanationQuestion: {
    fontSize: '1rem',
    color: '#1a202c',
    marginBottom: '0.25rem',
  },
  explanationCorrect: {
    color: '#38a169',
    fontSize: '0.95rem',
    marginBottom: '0.25rem',
  },
  explanationText: {
    color: '#4a5568',
    fontSize: '0.95rem',
    marginBottom: '0.25rem',
    backgroundColor: '#f7fafc',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
  },
  explanationUserCorrect: {
    color: '#38a169',
    fontWeight: 'bold',
    fontSize: '0.95rem',
    marginTop: '0.25rem',
  },
  explanationUserWrong: {
    color: '#e53e3e',
    fontWeight: 'bold',
    fontSize: '0.95rem',
    marginTop: '0.25rem',
  },
};