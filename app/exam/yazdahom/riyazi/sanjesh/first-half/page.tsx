
'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';

interface Lesson {
  id: number;
  name: string;
  icon: string;
  color: string;
  description: string;
  questionCount: number;
}

export default function FirstHalfLessonsPage() {
  const params = useParams();
  const router = useRouter();
  const grade = params.grade as string;
  const field = params.field as string;
  const exam = params.exam as string;
  const semester = params.semester as string;

  // دریافت نام فارسی پایه
  const getGradeName = (gradePath: string): string => {
    const gradeMap: Record<string, string> = {
      'dahom': 'دهم',
      'yazdahom': 'یازدهم',
      'davazdahom': 'دوازدهم'
    };
    return gradeMap[gradePath] || gradePath;
  };

  // دریافت نام فارسی رشته
  const getFieldName = (fieldPath: string): string => {
    const fieldMap: Record<string, string> = {
      'ensani': 'انسانی',
      'riyazi': 'ریاضی',
      'tajrobi': 'تجربی'
    };
    return fieldMap[fieldPath] || fieldPath;
  };

  // دریافت نام فارسی آزمون
  const getExamName = (examPath: string): string => {
    const examMap: Record<string, string> = {
      'maz': 'قلمچی',
      'gozine2': 'گزینه دو',
      'sanjesh': 'سنجش'
    };
    return examMap[examPath] || examPath;
  };

  // دریافت نام فارسی نیم سال
  const getSemesterName = (semesterPath: string): string => {
    const semesterMap: Record<string, string> = {
      'first-half': 'نیم سال اول',
      'second-half': 'نیم سال دوم'
    };
    return semesterMap[semesterPath] || semesterPath;
  };

  // ======================== لیست دروس نیم سال اول یازدهم ریاضی ========================
  const lessons: Lesson[] = [
    
    { 
      id: 2, 
      name: 'فیزیک (2)', 
      icon: '⚡', 
      color: '#FF9800', 
      description: 'الکتریسیته، مغناطیس، دینامیک',
      questionCount: 10
    },
    { 
      id: 3, 
      name: 'شیمی (2)', 
      icon: '🧪', 
      color: '#00BCD4', 
      description: 'تعادل شیمیایی، اسید و باز، هیدروکربن‌ها',
      questionCount: 10
    },
    { 
      id: 4, 
      name: 'هندسه (2)', 
      icon: '🔺', 
      color: '#4CAF50', 
      description: 'استدلال، قضایای هندسی، تشابه',
      questionCount: 8
    },
    { 
      id: 5, 
      name: 'حسابان (1)', 
      icon: '∫', 
      color: '#9C27B0', 
      description: 'حد و پیوستگی',
      questionCount: 10
    },
    { 
      id: 6, 
      name: 'آمار و احتمال', 
      icon: '📊', 
      color: '#2196F3', 
      description: 'آمار توصیفی، نمودارها، شاخص‌ها',
      questionCount: 8
    },
    { 
      id: 7, 
      name: 'فارسی (2)', 
      icon: '📖', 
      color: '#9C27B0', 
      description: 'ادبیات فارسی پایه یازدهم',
      questionCount: 8
    },
    { 
      id: 8, 
      name: 'عربی (2)', 
      icon: '🕌', 
      color: '#2196F3', 
      description: 'عربی، زبان قرآن پایه یازدهم',
      questionCount: 8
    },
    { 
      id: 9, 
      name: 'دین و زندگی (2)', 
      icon: '🕌', 
      color: '#FF9800', 
      description: 'دینی پایه یازدهم',
      questionCount: 8
    },
    { 
      id: 10, 
      name: 'زبان انگلیسی (2)', 
      icon: '🇬🇧', 
      color: '#F44336', 
      description: 'زبان عمومی پایه یازدهم',
      questionCount: 8
    }
  ];
  // اضافه کردن این آبجکت در بالای کامپوننت (بعد از lesson ها)
  // اضافه کردن این آبجکت در بالای کامپوننت (بعد از lesson ها)
const getLessonSlug = (lessonName: string): string => {
  const slugMap: Record<string, string> = {
    'ریاضی (2)': 'riyazi-2',
    'فیزیک (2)': 'fizik-2',
    'شیمی (2)': 'shimi-2',
    'هندسه (2)': 'hendese-2',
    'حسابان (1)': 'hesaban-1',
    'آمار و احتمال': 'amar-va-ehtemal',
    'فارسی (2)': 'farsi-2',
    'عربی (2)': 'arabi-2',
    'دین و زندگی (2)': 'din-va-zendegi-2',
    'زبان انگلیسی (2)': 'english-2'
  };
  return slugMap[lessonName] || lessonName.replace(/ /g, '-').toLowerCase();
};

// سپس تابع handleLessonClick را اصلاح کنید:
const handleLessonClick = (lessonName: string) => {
  const lessonSlug = getLessonSlug(lessonName);
  // آدرس به این شکل می‌شود: /exam/kheili-sabz/hesaban-1
  router.push(`/exam/yazdahom/riyazi/sanjesh/first-half/${lessonSlug}`);
};
  return (
    <div className="exam-lessons-container">
      <div className="exam-header">
        {/* لینک بازگشت به صفحه اصلی (localhost:3000) */}
        <Link href="/" className="back-to-home">
          ← بازگشت به صفحه اصلی
        </Link>
        <h1 className="exam-title">
          📚 {getExamName(exam)} - {getGradeName(grade)} {getFieldName(field)}
        </h1>
        <p className="exam-subtitle">
          {getSemesterName(semester)} - درس مورد نظر خود را انتخاب کنید:
        </p>
      </div>

      <div className="lessons-grid">
        {lessons.map((lesson) => (
          <div
            key={lesson.id}
            className="lesson-card"
            onClick={() => handleLessonClick(lesson.name)}
            style={{ cursor: 'pointer' }}
          >
            <div className="lesson-icon">{lesson.icon}</div>
            <h3 className="lesson-name">{lesson.name}</h3>
            <p className="lesson-description">{lesson.description}</p>
            <div className="lesson-stats">
              <span className="question-count">📝 {lesson.questionCount} سوال</span>
            </div>
            <div className="lesson-button" style={{ backgroundColor: lesson.color }}>
              شروع آزمون {lesson.name}
            </div>
          </div>
        ))}
      </div>

      <div className="info-box">
        <p>💡 هر آزمون شامل سوالات تخصصی نیم سال اول {getGradeName(grade)} {getFieldName(field)} می‌باشد.</p>
        <p>📊 پس از اتمام آزمون، درصد شما به همراه پاسخنامه تشریحی نمایش داده می‌شود.</p>
      </div>
    </div>
  );
}