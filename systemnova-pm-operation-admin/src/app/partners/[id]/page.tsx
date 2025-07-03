// app/lecture/page.tsx
'use client'; // 클라이언트 컴포넌트

import { useLectures } from '@/hooks/useLecturesManagement'; // 강의 상태 훅
import LectureInfoInputModal from '@/components/lectures/InputModal'; // 강의 입력 폼
import LectureManagementCard from '@/components/lectures/ManagementCard'; // 강의 카드 (체크리스트 포함)

export default function LecturePage() {
  const { lectures, createLectureCard } = useLectures(); // 강의 목록과 생성 함수 가져오기

  return (
    <main className="p-8 max-w-3xl mx-auto">
      {/* 페이지 제목 */}
      <h1 className="text-2xl font-bold mb-4">Lectures Task Management</h1>

      {/* 강의 생성 모달 */}
      <LectureInfoInputModal onSubmit={createLectureCard} />

      {/* 강의 카드 목록 */}
      <div className="grid gap-4">
        {lectures.map((lecture) => (
          <LectureManagementCard
            key={lecture.id}
            title={lecture.title}
            teacher={lecture.instructor}
            pm={lecture.pmName}
            createdAt={lecture.createdAt}
          />
        ))}
      </div>
    </main>
  );
}
