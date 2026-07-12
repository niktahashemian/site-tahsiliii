"use client";

import React from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { InlineMath } from 'react-katex';

export interface Question {
  id: number;
  text: string;
  options: string[];
}

interface QuestionCardProps {
  q: Question;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ q }) => {
  const { register, control } = useFormContext();
  const values = useWatch({ control });

  return (
    // حذف border-b از اینجا چون خط افقی را درون کارت می‌گذاریم
    <div className="w-full py-6 group border-b-[1.5px] border-gray-200 last:border-b-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 flex flex-col w-full gap-0">
        
        {/* ------------------ بخش سوال ------------------ */}
        <div className="w-full">
           {/* شماره و متن سوال در یک خط (راست‌چین) */}
           <div className="flex justify-end items-center gap-3 w-full mb-4">
              <span className="text-[#1e3a8a] font-extrabold text-xl">{q.id}.</span>
              <div className="text-[#1e293b] text-xl font-bold leading-9 text-right">
                 <InlineMath math={q.text} />
              </div>
           </div>

           {/* خط افقی جداکننده دقیقاً زیر سوال */}
           <div className="w-full h-[2px] bg-gray-200 mb-4"></div>
        </div>

        {/* ------------------ بخش گزینه‌ها ------------------ */}
        <div className="w-full pr-6 sm:pr-10">
           
           {/* عنوان "گزینه‌های پاسخ:" */}
           <div className="flex justify-end w-full mb-3">
              <span className="text-gray-500 text-xs sm:text-sm font-bold">گزینه‌های پاسخ:</span>
           </div>

           {/* لیست دو ستونه گزینه‌ها */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 w-full">
              {q.options.map((option, optIndex) => {
                const optionLabel = String.fromCharCode(65 + optIndex); // A, B, C, D
                const fieldName = `q_${q.id}`;
                const isSelected = values?.[fieldName] === optionLabel;
                
                return (
                  <label 
                    key={optIndex} 
                    className={`flex items-center gap-4 p-2 rounded-lg cursor-pointer transition-colors w-full hover:bg-gray-50 ${isSelected ? 'bg-gray-50' : ''}`}
                  >
                    <input 
                      type="radio" 
                      name={fieldName} 
                      value={optionLabel}
                      {...register(fieldName)}
                      className="hidden" 
                    />
                    
                    {/* دایره انتخاب */}
                    <div className={`w-5 h-5 min-w-[20px] rounded-full border-[2px] flex items-center justify-center transition-all bg-white ${isSelected ? 'border-[#1e3a8a]' : 'border-gray-400'}`}>
                       {isSelected && <div className="w-2.5 h-2.5 bg-[#1e3a8a] rounded-full"></div>}
                    </div>
                    
                    {/* متن گزینه */}
                    <div className="flex items-center gap-1 text-[17px] sm:text-lg text-gray-800 text-right w-full">
                      <span className="text-gray-400 font-bold min-w-[20px] text-right">{optionLabel}.</span>
                      <span className="break-words font-medium"><InlineMath math={option} /></span>
                    </div>
                  </label>
                );
              })}
           </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;