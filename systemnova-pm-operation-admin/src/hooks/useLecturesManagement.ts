import { useState } from 'react';

// Lecture 타입 정의
export interface Lecture {
  id: string;
  title: string;
  instructor: string;
  pmName: string;
  createdAt: string;
}

export interface NewLectureManagementCardInput {
  title: string;
  instructor: string;
  pmName: string;
}

// useLectures 훅 정의
export function useLectures() {
  const [lectures, setLectures] = useState<Lecture[]>([]);

  const createLectureCard = (data: NewLectureManagementCardInput) => {
    const newLecture: Lecture = {
      id: crypto.randomUUID(),
      ...data,
      createdAt: new Date().toISOString(),
    };
    setLectures((prev) => [newLecture, ...prev]);
  };

  return {
    lectures,
    createLectureCard,
  };
}
