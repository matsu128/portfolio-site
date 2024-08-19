import React from 'react';
import { useInView } from 'react-intersection-observer';

// スキル情報: スキル名と経験年数を定義
const skills = [
  { name: 'JavaScript', years: 1.5 },
  { name: 'Java', years: 1.5 },
  { name: 'Python', years: 1 },
  { name: 'React', years: 1.5 },
  { name: 'Next', years: 1.5 },
  { name: 'Spring Boot', years: 1.5 },
  { name: 'Tailwind CSS', years: 1 },
];

// ツール情報: ツール名と熟練度を定義
const tools = [
  { name: 'VSCode', level: 90 },
  { name: 'Git', level: 85 },
  { name: 'Eclipse', level: 85 },
];

// ホームページ開発情報
const homepageDevelopment = [
  { name: '基本機能', duration: '1ヶ月', color: 'bg-green-500' },
  { name: 'デザインカスタマイズ', duration: '2ヶ月', color: 'bg-green-500' },
  { name: 'SEO対策', duration: '1.5ヶ月', color: 'bg-green-500' },
];

// DX化支援情報
const dxSupport = [
  { name: '勤怠管理システム', duration: '1.5ヶ月', color: 'bg-blue-500' },
  { name: '予約注文システム', duration: '2ヶ月', color: 'bg-blue-500' },
  { name: '在庫管理システム', duration: '1ヶ月', color: 'bg-blue-500' },
];

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      id="skills"
      className={`py-16 bg-gray-50 transition-all duration-1000 ease-in-out transform ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      ref={ref}
    >
      <div className="max-w-5xl mx-auto px-4">

        {/* 対応可能なプロジェクト */}
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
          対応可能なプロジェクト
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center">
          {/* ホームページ開発 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-700 mb-4">ホームページ開発</h3>
            <p className="text-gray-600 mb-4">
              様々な業態に対応可能なホームページやデザインの作成を行います。短期間で魅力的なデザインを提供し、顧客のビジネスをサポートします。
            </p>
            <p className="text-gray-600 font-semibold mb-4">
              以下は開発期間の例です:
            </p>
            <div className="grid grid-cols-3 gap-4">
              {homepageDevelopment.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center cursor-pointer hover:opacity-75 transition duration-300"
                >
                  <span className="text-gray-800 font-semibold mb-2 h-10 flex items-center justify-center">{item.name}</span>
                  <div className="w-24 h-24 bg-gray-200 rounded-full relative mt-2 flex items-end justify-center"> {/* 丸いデザインに変更 */}
                    <div
                      className={`${item.color} w-full rounded-full transition-all duration-1000`}
                      style={{ height: inView ? '100%' : '0%', borderRadius: '50%', position: 'absolute', bottom: '0' }}
                    >
                      <span className="absolute inset-0 flex items-center justify-center text-black text-xs font-bold">
                        {item.duration}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DX化の支援 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-700 mb-4">DX化の支援</h3>
            <p className="text-gray-600 mb-4">
              勤怠管理システム、予約注文システムなどの開発を通じて、ビジネスのデジタル化をサポートします。
            </p>
            <p className="text-gray-600 font-semibold mb-4">
              以下は開発期間の例です:
            </p>
            <div className="grid grid-cols-3 gap-4">
              {dxSupport.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center cursor-pointer hover:opacity-75 transition duration-300"
                >
                  <span className="text-gray-800 font-semibold mb-2 h-10 flex items-center justify-center whitespace-pre-line text-center">{item.name}</span>
                  <div className="w-24 h-24 bg-gray-200 rounded-full relative mt-2 flex items-end justify-center"> {/* 丸いデザインに変更 */}
                    <div
                      className={`${item.color} w-full rounded-full transition-all duration-1000`}
                      style={{ height: inView ? '100%' : '0%', borderRadius: '50%', position: 'absolute', bottom: '0' }}
                    >
                      <span className="absolute inset-0 flex items-center justify-center text-black text-xs font-bold">
                        {item.duration}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 私のスキル */}
        <h2 className="text-3xl font-semibold text-gray-800 text-center mt-16 mb-8">
          スキル(実務経験)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-700 mb-4">{skill.name}</h3>
              <div className="w-full bg-gray-200 rounded-full h-6 relative">
                <div
                  className={`bg-blue-500 h-6 rounded-full transition-all duration-1000 delay-${index * 200}ms`}
                  style={{ width: inView ? `${(skill.years / 3) * 100}%` : '0%' }}
                >
                  <span className="absolute right-2 top-0 text-gray-600 text-sm">
                    {inView ? `${skill.years} 年` : '0 年'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 使用しているツール */}
        <h2 className="text-3xl font-semibold text-gray-800 text-center mt-16 mb-8">
          使用しているツール
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-700 mb-4">{tool.name}</h3>
              <div className="w-full bg-gray-200 rounded-full h-6 relative">
                <div
                  className={`bg-green-500 h-6 rounded-full transition-all duration-1000 delay-${index * 200}ms`}
                  style={{ width: inView ? `${tool.level}%` : '0%' }}
                >
                  <span className="absolute right-2 top-0 text-gray-600 text-sm">
                    {inView ? `${tool.level}%` : '0%'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
