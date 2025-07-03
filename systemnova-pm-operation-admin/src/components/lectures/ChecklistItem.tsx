'use client';

interface ChecklistItemProps {
  title: string;
  completed: boolean;
  deadline: string;
  onToggle: () => void;
  onDateChange: (date: string) => void;
}

export default function ChecklistItem({
  title,
  completed,
  deadline,
  onToggle,
  onDateChange,
}: ChecklistItemProps) {
  return (
    <li
      className={`flex items-center justify-between p-3 rounded-xl transition ${
        completed ? 'bg-green-50 text-green-700 line-through' : 'bg-gray-50'
      }`}
    >
      <label className="flex items-center gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={completed}
          onChange={onToggle}
          className="w-4 h-4"
        />
        <span>{title}</span>
      </label>
      <input
        type="date"
        value={deadline}
        onChange={(e) => onDateChange(e.target.value)}
        className="text-sm border rounded px-2 py-1 bg-white"
      />
    </li>
  );
}
