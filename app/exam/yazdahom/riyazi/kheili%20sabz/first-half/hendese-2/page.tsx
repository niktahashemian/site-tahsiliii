'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Lesson {
  id: number;
  name: string;
  description: string;
  questionCount: number;
  slug: string;
}

interface Chapter {
  id: number;
  name: string;
  icon: string;
  color: string;
  lessons: Lesson[];
  examSlug: string;
  examName: string;
  examQuestionCount: number;
}

export default function Hesaban1ChaptersPage() {
  const router = useRouter();
  const [openChapter, setOpenChapter] = useState<number | null>(null);

  const chapters: Chapter[] = [
    {
      id: 1,
      name: 'فصل اول: جبر و معادله',
      icon: '📐',
      color: '#9C27B0',
      examSlug: 'chapter1-exam',
      examName: 'آزمون جامع فصل اول: جبر و معادله',
      examQuestionCount: 30,
      lessons: [
        { id: 1, name: 'درس اول: معادله درجه دوم', description: 'حل معادله درجه دوم، دلتا، ریشه‌ها', questionCount: 15, slug: 'lesson1' },
        { id: 2, name: 'درس دوم: تعیین علامت', description: 'تعیین علامت عبارات جبری، نامعادله', questionCount: 12, slug: 'lesson2' },
        { id: 3, name: 'درس سوم: نامعادلات گویا و گنگ', description: 'حل نامعادلات گویا و گنگ', questionCount: 10, slug: 'lesson3' },
        { id: 4, name: 'درس چهارم: قدر مطلق', description: 'ویژگی‌های قدر مطلق و حل معادلات', questionCount: 10, slug: 'lesson4' },
        { id: 5, name: 'درس پنجم: هندسه تحلیلی', description: 'مختصات، فاصله، معادله خط', questionCount: 10, slug: 'lesson5' },
      ]
    },
    {
      id: 2,
      name: 'فصل دوم: تابع',
      icon: '📊',
      color: '#2196F3',
      examSlug: 'chapter2-exam',
      examName: 'آزمون جامع فصل دوم: تابع',
      examQuestionCount: 28,
      lessons: [
        { id: 6, name: 'درس اول: آشنایی با تابع', description: 'تعریف تابع، دامنه و برد', questionCount: 10, slug: 'lesson6' },
        { id: 7, name: 'درس دوم: انواع توابع', description: 'نمودار توابع خطی و درجه دوم', questionCount: 12, slug: 'lesson7' },
        { id: 8, name: 'درس سوم: وارون تابع', description: 'نقاط بحرانی، اکسترمم', questionCount: 8, slug: 'lesson8' },
        { id: 9, name: 'درس چهارم: اعمال روی توابع', description: 'ترکیب توابع، جمع و ضرب', questionCount: 8, slug: 'lesson9' },
      ]
    },
    {
      id: 3,
      name: 'فصل سوم: توابع نمایی و لگاریتمی',
      icon: '📈',
      color: '#FF9800',
      examSlug: 'chapter3-exam',
      examName: 'آزمون جامع فصل سوم: توابع نمایی و لگاریتمی',
      examQuestionCount: 32,
      lessons: [
        { id: 10, name: 'درس اول: تابع نمایی', description: 'ویژگی‌ها و نمودار تابع نمایی', questionCount: 12, slug: 'lesson10' },
        { id: 11, name: 'درس دوم: تابع لگاریتمی', description: 'تعریف لگاریتم، خواص لگاریتم', questionCount: 15, slug: 'lesson11' },
        { id: 12, name: 'درس سوم: معادلات نمایی و لگاریتمی', description: 'حل معادلات نمایی و لگاریتمی', questionCount: 10, slug: 'lesson12' },
      ]
    },
    {
      id: 4,
      name: 'فصل چهارم: مثلثات',
      icon: '🔺',
      color: '#4CAF50',
      examSlug: 'chapter4-exam',
      examName: 'آزمون جامع فصل چهارم: مثلثات',
      examQuestionCount: 28,
      lessons: [
        { id: 13, name: 'درس اول: رادیان و دایره مثلثاتی', description: 'نسبت‌های مثلثاتی، دایره واحد', questionCount: 12, slug: 'lesson13' },
        { id: 14, name: 'درس دوم: نسبت‌های مثلثاتی زاویه‌ها', description: 'نسبت‌های مثلثاتی برخی زاویه‌ها', questionCount: 10, slug: 'lesson14' },
        { id: 15, name: 'درس سوم: توابع مثلثاتی', description: 'حل معادلات مثلثاتی', questionCount: 8, slug: 'lesson15' },
        { id: 16, name: 'درس چهارم: روابط مثلثاتی', description: 'روابط مجموع و تفاضل زاویه‌ها', questionCount: 8, slug: 'lesson16' },
      ]
    },
    {
      id: 5,
      name: 'فصل پنجم: حد و پیوستگی',
      icon: '∫',
      color: '#F44336',
      examSlug: 'chapter5-exam',
      examName: 'آزمون جامع فصل پنجم: حد و پیوستگی',
      examQuestionCount: 35,
      lessons: [
        { id: 17, name: 'درس اول: مفهوم حد', description: 'حد توابع، حد یک طرفه', questionCount: 15, slug: 'lesson17' },
        { id: 18, name: 'درس دوم: قضایای حد', description: 'محاسبه حد با استفاده از قضایا', questionCount: 12, slug: 'lesson18' },
        { id: 19, name: 'درس سوم: حد توابع مثلثاتی', description: 'حد توابع مثلثاتی و سینوس', questionCount: 10, slug: 'lesson19' },
        { id: 20, name: 'درس چهارم: پیوستگی', description: 'شرط پیوستگی، نقاط ناپیوستگی', questionCount: 10, slug: 'lesson20' },
      ]
    },
    {
      id: 6,
      name: '🎯 آزمون جامع کل کتاب حسابان (1)',
      icon: '🏆',
      color: '#FF6B6B',
      examSlug: 'final-exam',
      examName: 'آزمون جامع کل کتاب حسابان (1)',
      examQuestionCount: 50,
      lessons: [
        { id: 21, name: '📚 کل دروس کتاب حسابان (1)', description: 'شامل تمام مباحث: جبر و معادله، تابع، نمایی و لگاریتمی، مثلثات، حد و پیوستگی', questionCount: 50, slug: 'final-exam' },
      ]
    }
  ];

  const handleChapterClick = (chapterId: number) => {
    setOpenChapter(openChapter === chapterId ? null : chapterId);
  };

  const handleLessonClick = (lessonSlug: string) => {
    router.push(`/exam/yazdahom/riyazi/kheili%20sabz/first-half/hesaban-1/${lessonSlug}`);
  };

  const handleChapterExamClick = (examSlug: string) => {
    router.push(`/exam/yazdahom/riyazi/kheili%20sabz/first-half/hesaban-1/chapter-exam/${examSlug}`);
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <Link href="/exam/yazdahom/riyazi/kheili%20sabz/first-half" style={styles.backButtonLink}>
          ← بازگشت به لیست دروس
        </Link>
        <h1 style={styles.title}>📚 حسابان (1) - انتخاب فصل و درس</h1>
        <p style={styles.subtitle}>برای شروع، روی هر فصل کلیک کنید و سپس درس یا آزمون جامع مورد نظر را انتخاب نمایید</p>
      </div>

      <div style={styles.chaptersContainer}>
        {chapters.map((chapter) => (
          <div key={chapter.id} style={styles.chapterWrapper}>
            <button
              onClick={() => handleChapterClick(chapter.id)}
              style={{
                ...styles.chapterButton,
                backgroundColor: openChapter === chapter.id ? chapter.color : '#4a5568',
              }}
            >
              <span style={styles.chapterIcon}>{chapter.icon}</span>
              <span style={styles.chapterName}>{chapter.name}</span>
              <span style={styles.chapterArrow}>{openChapter === chapter.id ? '▲' : '▼'}</span>
            </button>

            {openChapter === chapter.id && (
              <div style={styles.lessonsContainer}>
                <div
                  style={styles.chapterExamCard}
                  onClick={() => handleChapterExamClick(chapter.examSlug)}
                >
                  <div style={styles.chapterExamIcon}>🎯</div>
                  <div style={styles.lessonInfo}>
                    <h3 style={styles.chapterExamTitle}>{chapter.examName}</h3>
                    <p style={styles.lessonDescription}>آزمون جامع تمام دروس این فصل</p>
                    <div style={styles.lessonStats}>
                      <span style={styles.questionCount}>📝 {chapter.examQuestionCount} سوال</span>
                      <span style={styles.durationBadge}>⏱️ {Math.floor(chapter.examQuestionCount * 1.5)} دقیقه</span>
                    </div>
                  </div>
                  <div style={styles.examButton}>شروع آزمون جامع →</div>
                </div>

                <div style={styles.divider}>
                  <span style={styles.dividerText}>📖 دروس فصل</span>
                </div>

                {chapter.lessons.map((lesson) => (
                  <div
                    key={lesson.id}
                    style={styles.lessonCard}
                    onClick={() => handleLessonClick(lesson.slug)}
                  >
                    <div style={styles.lessonIcon}>📘</div>
                    <div style={styles.lessonInfo}>
                      <h3 style={styles.lessonName}>{lesson.name}</h3>
                      <p style={styles.lessonDescription}>{lesson.description}</p>
                      <div style={styles.lessonStats}>
                        <span style={styles.questionCount}>📝 {lesson.questionCount} سوال</span>
                      </div>
                    </div>
                    <div style={styles.lessonButton}>شروع آزمون →</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div style={styles.infoBox}>
        <p>💡 نکته: برای شروع آزمون هر درس یا آزمون جامع فصل، روی آن کلیک کنید.</p>
        <p>📊 پس از اتمام هر آزمون، درصد شما به همراه پاسخنامه تشریحی نمایش داده می‌شود.</p>
        <p>🏆 آزمون‌های جامع شامل سوالات ترکیبی از تمام دروس آن فصل می‌باشند.</p>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: '100vh',
    padding: '2rem',
    backgroundColor: '#f0f2f5',
    fontFamily: "'Vazir', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    direction: 'rtl',
  },
  header: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  backButtonLink: {
    display: 'inline-block',
    backgroundColor: '#4a5568',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    fontSize: '0.9rem',
    marginBottom: '1rem',
    textDecoration: 'none',
  },
  title: {
    fontSize: '2rem',
    color: '#1a202c',
    margin: '0.5rem 0',
  },
  subtitle: {
    color: '#4a5568',
    fontSize: '1rem',
  },
  chaptersContainer: {
    maxWidth: '900px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  chapterWrapper: {
    backgroundColor: 'white',
    borderRadius: '1rem',
    overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
  },
  chapterButton: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1.2rem 1.5rem',
    border: 'none',
    color: 'white',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  chapterIcon: {
    fontSize: '1.5rem',
  },
  chapterName: {
    flex: 1,
    textAlign: 'right',
    marginRight: '1rem',
  },
  chapterArrow: {
    fontSize: '0.9rem',
  },
  lessonsContainer: {
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem',
    backgroundColor: '#f8fafc',
  },
  chapterExamCard: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem',
    backgroundColor: '#e8f5e9',
    borderRadius: '0.75rem',
    cursor: 'pointer',
    transition: 'all 0.2s',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    border: '1px solid #81c784',
  },
  chapterExamIcon: {
    fontSize: '2rem',
    marginRight: '1rem',
  },
  chapterExamTitle: {
    margin: 0,
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#2e7d32',
  },
  divider: {
    textAlign: 'center',
    margin: '0.5rem 0',
    position: 'relative',
  },
  dividerText: {
    backgroundColor: '#f8fafc',
    padding: '0.2rem 1rem',
    borderRadius: '1rem',
    fontSize: '0.75rem',
    color: '#888',
  },
  lessonCard: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem',
    backgroundColor: 'white',
    borderRadius: '0.75rem',
    cursor: 'pointer',
    transition: 'all 0.2s',
    boxShadow: '0 2px 4px rgba(0,0,0,0.06)',
  },
  lessonIcon: {
    fontSize: '1.8rem',
    marginRight: '1rem',
  },
  lessonInfo: {
    flex: 1,
  },
  lessonName: {
    margin: 0,
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#333',
  },
  lessonDescription: {
    margin: '0.25rem 0',
    fontSize: '0.75rem',
    color: '#666',
  },
  lessonStats: {
    marginTop: '0.25rem',
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap',
  },
  questionCount: {
    backgroundColor: '#f0f0f0',
    padding: '0.2rem 0.6rem',
    borderRadius: '1rem',
    fontSize: '0.7rem',
    color: '#555',
  },
  durationBadge: {
    backgroundColor: '#e3f2fd',
    padding: '0.2rem 0.6rem',
    borderRadius: '1rem',
    fontSize: '0.7rem',
    color: '#1565c0',
  },
  lessonButton: {
    backgroundColor: '#9C27B0',
    color: 'white',
    padding: '0.4rem 0.8rem',
    borderRadius: '2rem',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
    transition: 'all 0.2s',
  },
  examButton: {
    backgroundColor: '#4caf50',
    color: 'white',
    padding: '0.4rem 0.8rem',
    borderRadius: '2rem',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    whiteSpace: 'nowrap',
    transition: 'all 0.2s',
  },
  infoBox: {
    backgroundColor: '#ebf8ff',
    borderRadius: '1rem',
    padding: '1.5rem',
    marginTop: '2rem',
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
    color: '#2b6cb0',
    border: '1px solid #bee3f8',
  },
};