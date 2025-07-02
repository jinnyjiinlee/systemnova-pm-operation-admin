'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const handleLogin = () => {
    setLoading(true);
    // 나중에 supabase 연동 후 로그인 로직 호출
    setTimeout(() => {
      alert('로그인 성공!'); // 임시 알림
      setLoading(false);
    }, 1500);
  };

  return (
    <main className='min-h-screen bg-gradient-to-b from-white to-gray-100 flex flex-col items-center justify-center px-4'>
      {/* 로고 */}
      <div className='mb-4'>
        <Image src='/systemnova_logo_black_text.png' alt='systemnova logo' width={220} height={80} />
      </div>
      <p className='text-gray-500 mb-10 text-sm'>Education Operation Admin Page</p>

      {/* 로그인 박스 */}
      <div className='w-full max-w-sm bg-white p-8 rounded-xl shadow-xl border border-gray-100'>
        <h1 className='text-2xl font-bold mb-6 text-center text-gray-800'>관리자 로그인</h1>

        <input
          type='text'
          placeholder='아이디'
          className='w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400'
        />
        <input
          type='password'
          placeholder='비밀번호'
          className='w-full px-4 py-3 mb-6 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400'
        />
        <button
          onClick={handleLogin}
          disabled={loading}
          className='w-full text-black font-semibold py-3 rounded-lg hover:opacity-90 transition'
          style={{ backgroundColor: '#d6ff00' }}
        >
          {loading ? (
            <span className='animate-spin inline-block w-5 h-5 border-2 border-black border-t-transparent rounded-full'></span>
          ) : (
            '로그인'
          )}
        </button>
      </div>
    </main>
  );
}
