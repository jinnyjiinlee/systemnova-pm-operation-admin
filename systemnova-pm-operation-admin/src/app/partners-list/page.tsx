'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const partners = [
  { name: '인베이더스쿨', logo: '/partners_logos/invader.png', id: 'invader' },
  { name: '트렌더스클래스', logo: '/partners_logos/trenders.png', id: 'trenders' },
  { name: '부업의정석', logo: '/partners_logos/bueop.png', id: 'bueop' },
  { name: '부트스쿨', logo: '/partners_logos/boot.png', id: 'boot' },
  { name: '온부자', logo: '/partners_logos/onbuja.png', id: 'onbuja' },
  { name: '마브스쿨', logo: '/partners_logos/marb.png', id: 'marb' },
];

export default function PartnersPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#ffffff] flex flex-col items-center px-6 pt-24 pb-16">
      {/* 로고 */}
      <div className="mb-8">
        <Image
          src="/systemnova_logo_black_text.png"
          alt="Systemnova Logo"
          width={220}
          height={70}
          priority
        />
      </div>

      {/* 페이지 제목 */}
      <h1 className="text-3xl font-semibold text-[#3f433e] tracking-tight mb-14">
        Partners Company List
      </h1>

      {/* 파트너 카드 리스트 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-screen-lg w-full">
        {partners.map(({ id, name, logo }) => (
          <div
            key={id}
            onClick={() => router.push(`/partners/${id}`)}
            className="bg-white border border-gray-100 rounded-2xl 
                       shadow-[0px_1px_2px_rgba(0,0,0,0.07),0px_2px_4px_rgba(0,0,0,0.07),0px_4px_8px_rgba(0,0,0,0.07),0px_8px_16px_rgba(0,0,0,0.07),0px_16px_32px_rgba(0,0,0,0.07),0px_32px_64px_rgba(0,0,0,0.07)]
                       hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] 
                       transition-transform hover:scale-105 
                       cursor-pointer p-8 flex flex-col items-center"
          >
            <Image
              src={logo}
              alt={name}
              width={90}
              height={90}
              className="mb-4"
            />
            <h2 className="text-base font-medium text-gray-700 tracking-wide">{name}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}


// 'use client';

// import Image from 'next/image';
// import { useRouter } from 'next/navigation';

// const partners = [
//   { name: '인베이더스쿨', logo: '/partners_logos/invader.png', id: 'invader' },
//   { name: '트렌더스클래스', logo: '/partners_logos/trenders.png', id: 'trenders' },
//   { name: '부업의정석', logo: '/partners_logos/bueop.png', id: 'bueop' },
//   { name: '부트스쿨', logo: '/partners_logos/boot.png', id: 'boot' },
//   { name: '온부자', logo: '/partners_logos/onbuja.png', id: 'onbuja' },
//   { name: '마브스쿨', logo: '/partners_logos/marb.png', id: 'marb' },
// ];

// export default function PartnersPage() {
//   const router = useRouter();

//   return (
//     <main className="min-h-screen bg-[#f2f4f6] flex flex-col items-center px-6 pt-24 pb-16">
//       {/* Logo */}
//       <div className="mb-8">
//         <Image
//           src="/systemnova_logo_black_text.png"
//           alt="Systemnova Logo"
//           width={220}
//           height={70}
//           priority
//         />
//       </div>

//       {/* Page Title */}
//       <h1 className="text-3xl font-semibold text-[#3f433e] tracking-tight mb-14">
//         partners company list
//       </h1>

//       {/* Partner Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-screen-lg w-full">
//         {partners.map(({ id, name, logo }) => (
//           <div
//             key={id}
//             onClick={() => router.push(`/partners/${id}`)}
//             className="bg-white rounded-3xl shadow-md hover:shadow-lg transition-transform hover:scale-105 cursor-pointer p-8 flex flex-col items-center"
//           >
//             <Image
//               src={logo}
//               alt={name}
//               width={90}
//               height={90}
//               className="mb-4"
//             />
//             <h2 className="text-base font-medium text-gray-700 tracking-wide">{name}</h2>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }
