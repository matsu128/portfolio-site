import React from 'react';

const projects = [
  { title: 'ブログサイト', url: 'https://blog-site-two-pi.vercel.app/', description: '・ログイン機能・記事の投稿、編集、削除' },
  { title: 'カフェのホームページ', url: 'https://cafe-site-seven.vercel.app/', description: '・google map・メニュー' },
];

const ProjectList = () => {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-semibold text-gray-800 text-center mb-3">
          <span className="md:inline">過去に作成した</span>
          <span className="block md:inline">プロジェクト</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-800 text-white rounded-lg shadow-lg p-8 h-auto transition-transform transform hover:scale-105 hover:bg-gray-700 hover:shadow-2xl"
            >
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <p className="text-green-300">詳細を確認</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
