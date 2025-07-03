'use client';

import { useState } from 'react';
import ChecklistItem from './ChecklistItem';

const CHECKLIST_TEMPLATE = [
  { title: 'OT 일정 확정', offsetDays: 3 },
  { title: '강의 자료 제출', offsetDays: 7 },
  { title: '강사 사전 미팅', offsetDays: 10 },
  { title: '수강생 명단 확보', offsetDays: 14 },
  { title: '최종 리허설', offsetDays: 18 },
];

function calculateDeadline(baseDate: Date, offset: number) {
  const date = new Date(baseDate);
  date.setDate(date.getDate() + offset);
  return date.toISOString().split('T')[0]; // YYYY-MM-DD
}

interface LectureCardProps {
  title: string;
  teacher: string;
  pm: string;
  createdAt: string;
}

export default function LectureCard({ title, teacher, pm, createdAt }: LectureCardProps) {
  const [checklist, setChecklist] = useState(
    CHECKLIST_TEMPLATE.map((item) => ({
      ...item,
      completed: false,
      deadline: calculateDeadline(new Date(createdAt), item.offsetDays),
    }))
  );

  const toggleItem = (index: number) => {
    const updated = [...checklist];
    updated[index].completed = !updated[index].completed;
    setChecklist(updated);
  };

  const updateDeadline = (index: number, date: string) => {
    const updated = [...checklist];
    updated[index].deadline = date;
    setChecklist(updated);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 mb-6 w-full">
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">강사: {teacher} / PM: {pm}</p>
      </div>
      <ul className="space-y-3">
        {checklist.map((item, idx) => (
          <ChecklistItem
            key={idx}
            title={item.title}
            completed={item.completed}
            deadline={item.deadline}
            onToggle={() => toggleItem(idx)}
            onDateChange={(date) => updateDeadline(idx, date)}
          />
        ))}
      </ul>
    </div>
  );
}
