"use client";

import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import 'katex/dist/katex.min.css';
import QuestionCard, { Question } from './QuestionCard';

const examData: Question[] = [
  {
    id: 1,
    text: "(0.2)^x \\le (0.7)^x",
    options: ["(1, \\infty)", "[0, 1]", "[0, \\infty)", "(\\infty, 1]"],
  },
  {
    id: 2,
    text: "a = \\log_2 2 \\text{ و } b = \\log_3 3 \\text{ باشد، حاصل } \\log 0.75",
    options: ["2a - b", "a - b", "2b - a", "2 - a - b"],
  },
  {
    id: 3,
    text: "f(x) = e^{x-5} + 5 \\text{ و } g(x) = 2 - \\log(x+1) \\text{ باشد، حاصل } f(g(2))",
    options: ["0.2", "0.3", "0.4", "0.6"],
  },
  {
    id: 4,
    text: "A = \\log_b B \\text{ و } B = \\log_A b",
    options: ["1 - \\sqrt{5}", "1 + \\sqrt{5}", "1 + \\sqrt{5}", "1 - \\sqrt{5}"],
  },
  {
    id: 5,
    text: "\\frac{1}{2} \\sin 2(\\frac{\\pi}{2}) - \\tan(\\frac{\\pi}{2}) + \\sin 210^\\circ",
    options: ["\\frac{1}{4}", "\\frac{1}{2}", "\\frac{3}{4}", "\\frac{1}{6}"],
  },
  {
    id: 6,
    text: "f(x) = \\cos 2x \\text{ در بازه } [\\frac{\\pi}{4}, 2\\pi] \\text{ اگر } f(\\alpha) = \\frac{1}{2}",
    options: ["4", "6", "8", "12"],
  },
  {
    id: 7,
    text: "\\frac{1}{\\sin x}",
    options: ["\\cot x", "\\csc x", "\\sin x", "\\cos x"],
  }
];

const ExamPage = () => {
  const methods = useForm({
    defaultValues: {
      q_1: "A",
    }
  });

  return (
    <div className="min-h-screen w-full bg-[#f0f2f5] flex justify-center" dir="rtl">
      <div className="w-full bg-white shadow-lg flex flex-col">
        
        {/* هدر */}
        <header className="bg-white px-4 sm:px-10 py-6 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors border border-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <span className="text-lg text-gray-800 font-bold">خانه</span>
          </div>
          <div className="flex-1 text-center px-4">
            <h1 className="text-3xl font-extrabold text-[#1e293b] tracking-tight">مرکز مشاوره پروتوا امید</h1>
          </div>
          <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
             <span className="text-white text-3xl font-bold">U</span>
          </div>
        </header>

        {/* نوار زمان */}
        <div className="bg-[#f8f9fa] py-2 px-10 border-b border-gray-200 flex justify-between items-center text-xs text-gray-600">
           <div className="flex items-center gap-2">
             <span>23:58</span>
             <span className="text-gray-300">|</span>
             <span>5 اسفند 1404</span>
           </div>
           <div><span>ساعت 12:0</span></div>
        </div>

        {/* بخش سوالات - نکته مهم: حذف کردن بردر بین کارت‌ها */}
        <FormProvider {...methods}>
          <div className="w-full">
            {examData.map((q) => (
              <QuestionCard 
                key={q.id} 
                q={q} 
              />
            ))}
          </div>
        </FormProvider>

        {/* فوتر */}
        <div className="bg-white py-4 px-10 flex items-center justify-between mt-auto border-t border-gray-200">
           <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
              <span className="text-sm text-gray-700 font-medium">2 times</span>
           </div>
           <div className="text-sm text-gray-500">
              💡 برای مشاهده پاسخ‌ها، گزینه‌ها را انتخاب کنید.
           </div>
        </div>

      </div>
    </div>
  );
};

export default ExamPage;