import React, { useState } from 'react';

interface QuestionCardProps {
    question: {
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
    };
    index: number;
    selectedOption?: string;
    onOptionSelect: (questionId: number, optionValue: string) => void;
}

function QuestionCard({ question, index, selectedOption, onOptionSelect }: QuestionCardProps) {
    const [isExpanded, setIsExpanded] = useState<boolean>(true);

    return (
        <div style={styles.cardContainer}>
            <div style={styles.questionHeader} onClick={() => setIsExpanded(!isExpanded)}>
                <div style={styles.questionNumber}>
                    <span style={styles.numberBadge}>سوال {index}</span>
                    {selectedOption && (
                        <span style={styles.answeredBadge}>✓ پاسخ داده شده</span>
                    )}
                </div>
                <div style={styles.toggle}>
                    {isExpanded ? '▲' : '▼'}
                </div>
            </div>
            
            {isExpanded && (
                <div style={styles.questionContent}>
                    <div style={styles.questionText} dangerouslySetInnerHTML={{ __html: question.text }} />
                    
                    <div style={styles.optionsList}>
                        {Object.entries(question.options).map(([key, value]) => (
                            <label 
                                key={key} 
                                style={{
                                    ...styles.optionItem,
                                    ...(selectedOption === key ? styles.optionSelected : {})
                                }}
                                onMouseEnter={(e) => {
                                    if (selectedOption !== key) {
                                        e.currentTarget.style.backgroundColor = '#f7fafc';
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (selectedOption !== key) {
                                        e.currentTarget.style.backgroundColor = 'white';
                                    }
                                }}
                            >
                                <input
                                    type="radio"
                                    name={`question-${question.id}`}
                                    value={key}
                                    checked={selectedOption === key}
                                    onChange={() => onOptionSelect(question.id, key)}
                                    style={styles.radioInput}
                                />
                                <span style={styles.optionLetter}>گزینه {key}</span>
                                <span style={styles.optionText} dangerouslySetInnerHTML={{ __html: value }} />
                            </label>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

const styles: { [key: string]: React.CSSProperties } = {
    cardContainer: {
        backgroundColor: 'white',
        borderRadius: '16px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
        overflow: 'hidden',
        border: '1px solid #e8ecf1',
        transition: 'all 0.2s ease',
        marginBottom: '1.25rem',
        direction: 'rtl',
    },
    questionHeader: {
        padding: '1rem 1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer',
        backgroundColor: '#f8fafc',
        borderBottom: '1px solid #e8ecf1',
        transition: 'background-color 0.2s',
    },
    questionNumber: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        flexWrap: 'wrap',
    },
    numberBadge: {
        fontSize: '0.95rem',
        fontWeight: '600',
        color: '#1a202c',
    },
    answeredBadge: {
        fontSize: '0.75rem',
        color: '#38a169',
        backgroundColor: '#f0fff4',
        padding: '0.2rem 0.6rem',
        borderRadius: '1rem',
        border: '1px solid #c6f6d5',
    },
    toggle: {
        fontSize: '0.8rem',
        color: '#a0aec0',
        transition: 'transform 0.2s',
    },
    questionContent: {
        padding: '1.5rem',
    },
    questionText: {
        fontSize: '1.05rem',
        color: '#1a202c',
        marginBottom: '1.25rem',
        lineHeight: '1.8',
        fontWeight: '500',
        fontFamily: "'Vazir', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    optionsList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.6rem',
    },
    optionItem: {
        display: 'flex',
        alignItems: 'center',
        padding: '0.7rem 1rem',
        borderRadius: '10px',
        border: '1.5px solid #e8ecf1',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        backgroundColor: 'white',
        gap: '0.75rem',
    },
    optionSelected: {
        borderColor: '#4299e1',
        backgroundColor: '#ebf8ff',
        boxShadow: '0 0 0 2px rgba(66, 153, 225, 0.2)',
    },
    radioInput: {
        width: '18px',
        height: '18px',
        cursor: 'pointer',
        accentColor: '#4299e1',
        flexShrink: 0,
    },
    optionLetter: {
        fontSize: '0.85rem',
        fontWeight: '600',
        color: '#4a5568',
        minWidth: '55px',
        flexShrink: 0,
        backgroundColor: '#f0f4f8',
        padding: '0.2rem 0.6rem',
        borderRadius: '6px',
        textAlign: 'center',
    },
    optionText: {
        fontSize: '0.95rem',
        color: '#2d3748',
        lineHeight: '1.5',
        flex: 1,
    },
};

export default QuestionCard;