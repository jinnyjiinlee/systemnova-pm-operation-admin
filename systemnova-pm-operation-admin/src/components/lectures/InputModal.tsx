'use client';

import { useState } from 'react';

interface LectureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (lecture: { title: string; teacher: string; pm: string }) => void;
}

export default function LectureModal({ isOpen, onClose, onSubmit }: LectureModalProps) {
  const [title, setTitle] = useState('');
  const [teacher, setTeacher] = useState('');
  const [pm, setPm] = useState('');

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!title || !teacher || !pm) return;
    onSubmit({ title, teacher, pm });
    setTitle('');
    setTeacher('');
    setPm('');
    onClose();
  };

  return (
    <div className='fixed inset-0 bg-black/30 flex items-center justify-center z-50'>
      <div className='bg-white p-6 rounded-xl shadow-xl w-full max-w-md'>
        <h2 className='text-xl font-semibold mb-4 text-gray-800'>강의 생성</h2>

        <input
          className='w-full border rounded p-2 mb-3'
          placeholder='강의명'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className='w-full border rounded p-2 mb-3'
          placeholder='강사명'
          value={teacher}
          onChange={(e) => setTeacher(e.target.value)}
        />
        <input
          className='w-full border rounded p-2 mb-4'
          placeholder='PM 이름'
          value={pm}
          onChange={(e) => setPm(e.target.value)}
        />

        <div className='flex justify-end gap-2'>
          <button onClick={onClose} className='text-sm px-4 py-2 rounded bg-gray-100'>
            취소
          </button>
          <button onClick={handleSubmit} className='text-sm px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700'>
            생성
          </button>
        </div>
      </div>
    </div>
  );
}
