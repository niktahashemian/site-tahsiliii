// components/QuestionCard.tsx

import React, { useState } from 'react';

// تعریف تایپ برای یک سوال
interface Question {
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

// تعریف تایپ برای props کامپوننت
interface QuestionCardProps {
    question: Question;
    index: number;
    selectedOption?: string;
    onOptionSelect: (questionId: number, optionValue: string) => void;
}

// تعریف تایپ برای لیبل‌ها
interface OptionLabels {
    A: string;
    B: string;
    C: string;
    D: string;
}

function QuestionCard({ question, index, selectedOption, onOptionSelect }: QuestionCardProps) {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const getOptionLabel = (optionKey: string): string => {
        const labels: OptionLabels = {
            A: 'گزینه ۱',
            B: 'گزینه ۲',
            C: 'گزینه ۳',
            D: 'گزینه ۴'
        };
        return labels[optionKey as keyof OptionLabels] || optionKey;
    };

    // تابع برای نمایش پاسخ صحیح بعد از اتمام آزمون
    const isCorrectAnswer = (optionKey: string): boolean => {
        return optionKey === question.correctAnswer;
    };

    // آیا پاسخ اشتباه انتخاب شده؟
    const isWrongAnswer = (optionKey: string): boolean => {
        return selectedOption === optionKey && selectedOption !== question.correctAnswer;
    };

    return (
        <div className={`question-card ${selectedOption ? 'answered' : ''}`}>
            <div className="question-header" onClick={() => setIsExpanded(!isExpanded)}>
                <div className="question-number">
                    <span className="number-badge">سوال {index}</span>
                    {selectedOption && (
                        <span className={`answered-badge ${selectedOption === question.correctAnswer ? 'correct' : 'wrong'}`}>
                            {selectedOption === question.correctAnswer ? '✓ پاسخ صحیح' : '✗ پاسخ اشتباه'}
                        </span>
                    )}
                </div>
                <div className="question-toggle">
                    {isExpanded ? '▲' : '▼'}
                </div>
            </div>
            
            <div className={`question-content ${isExpanded ? 'expanded' : ''}`}>
                <h3 className="question-text">{question.text}</h3>
                
                <div className="options-list">
                    {Object.entries(question.options).map(([key, value]) => {
                        const optionKey = key as keyof OptionLabels;
                        const isSelected = selectedOption === optionKey;
                        const isCorrect = isCorrectAnswer(optionKey);
                        const isWrong = isWrongAnswer(optionKey);
                        
                        let optionClassName = 'option-item';
                        if (isSelected) {
                            optionClassName += ' selected';
                        }
                        // اگر نتیجه نشان داده شده باشد
                        if (selectedOption) {
                            if (isCorrect) {
                                optionClassName += ' correct-answer';
                            } else if (isWrong) {
                                optionClassName += ' wrong-answer';
                            }
                        }
                        
                        return (
                            <label key={key} className={optionClassName}>
                                <input
                                    type="radio"
                                    name={`question-${question.id}`}
                                    value={key}
                                    checked={isSelected}
                                    onChange={() => onOptionSelect(question.id, key)}
                                    className="option-radio"
                                    disabled={!!selectedOption} // بعد از انتخاب غیرفعال می‌شود
                                />
                                <span className="option-letter">{getOptionLabel(key)}</span>
                                <span className="option-text">{value}</span>
                                {selectedOption && isCorrect && (
                                    <span className="result-icon correct-icon">✅</span>
                                )}
                                {selectedOption && isWrong && (
                                    <span className="result-icon wrong-icon">❌</span>
                                )}
                            </label>
                        );
                    })}
                </div>

                {/* نمایش توضیح بعد از پاسخ */}
                {selectedOption && (
                    <div className="explanation-box">
                        <h4>📝 پاسخنامه تشریحی:</h4>
                        <p>{question.explanation}</p>
                        <div className="answer-indicator">
                            <span className="correct-answer-text">
                                ✅ پاسخ صحیح: {getOptionLabel(question.correctAnswer)}
                            </span>
                        </div>
                    </div>
                )}
            </div>

            <style jsx>{`
                .question-card {
                    background: white;
                    border-radius: 0.75rem;
                    padding: 1rem;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
                    border-right: 4px solid #e2e8f0;
                    transition: border-color 0.2s;
                }
                .question-card.answered {
                    border-right-color: #48bb78;
                }
                .question-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    cursor: pointer;
                    padding: 0.25rem 0;
                }
                .question-number {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    flex-wrap: wrap;
                }
                .number-badge {
                    background: #edf2f7;
                    padding: 0.25rem 0.75rem;
                    border-radius: 1rem;
                    font-size: 0.85rem;
                    font-weight: bold;
                    color: #2d3748;
                }
                .answered-badge {
                    font-size: 0.8rem;
                    padding: 0.2rem 0.6rem;
                    border-radius: 1rem;
                }
                .answered-badge.correct {
                    background: #c6f6d5;
                    color: #22543d;
                }
                .answered-badge.wrong {
                    background: #fed7d7;
                    color: #9b2c2c;
                }
                .question-toggle {
                    font-size: 0.8rem;
                    color: #a0aec0;
                }
                .question-content {
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.3s ease, padding 0.3s ease;
                }
                .question-content.expanded {
                    max-height: 2000px;
                    padding-top: 1rem;
                }
                .question-text {
                    font-size: 1rem;
                    color: #2d3748;
                    margin: 0 0 1rem 0;
                    line-height: 1.6;
                }
                .options-list {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                }
                .option-item {
                    display: flex;
                    align-items: center;
                    padding: 0.5rem 0.75rem;
                    border-radius: 0.5rem;
                    border: 2px solid #e2e8f0;
                    cursor: pointer;
                    transition: border-color 0.2s, background 0.2s;
                    position: relative;
                }
                .option-item:hover:not(.correct-answer):not(.wrong-answer) {
                    border-color: #4299e1;
                    background: #ebf8ff;
                }
                .option-item.selected {
                    border-color: #4299e1;
                    background: #ebf8ff;
                }
                .option-item.correct-answer {
                    border-color: #48bb78;
                    background: #f0fff4;
                }
                .option-item.wrong-answer {
                    border-color: #fc8181;
                    background: #fff5f5;
                }
                .option-radio {
                    margin-left: 0.75rem;
                    accent-color: #4299e1;
                    cursor: pointer;
                    width: 1rem;
                    height: 1rem;
                }
                .option-radio:disabled {
                    cursor: not-allowed;
                }
                .option-letter {
                    font-weight: bold;
                    color: #4a5568;
                    margin-left: 0.5rem;
                    min-width: 3.5rem;
                }
                .option-text {
                    color: #2d3748;
                    flex: 1;
                }
                .result-icon {
                    margin-right: 0.5rem;
                    font-size: 1.1rem;
                }
                .correct-icon {
                    color: #48bb78;
                }
                .wrong-icon {
                    color: #fc8181;
                }
                .explanation-box {
                    margin-top: 1rem;
                    padding: 1rem;
                    background: #f7fafc;
                    border-radius: 0.5rem;
                    border-right: 4px solid #4299e1;
                }
                .explanation-box h4 {
                    margin: 0 0 0.5rem 0;
                    font-size: 0.95rem;
                    color: #2d3748;
                }
                .explanation-box p {
                    margin: 0 0 0.75rem 0;
                    font-size: 0.9rem;
                    color: #4a5568;
                    line-height: 1.6;
                }
                .answer-indicator {
                    margin-top: 0.5rem;
                }
                .correct-answer-text {
                    display: inline-block;
                    background: #c6f6d5;
                    color: #22543d;
                    padding: 0.25rem 0.75rem;
                    border-radius: 1rem;
                    font-size: 0.85rem;
                    font-weight: bold;
                }
                @media (max-width: 640px) {
                    .question-number {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 0.25rem;
                    }
                    .option-item {
                        flex-wrap: wrap;
                    }
                    .option-letter {
                        min-width: 2.5rem;
                    }
                }
            `}</style>
        </div>
    );
}

export default QuestionCard;