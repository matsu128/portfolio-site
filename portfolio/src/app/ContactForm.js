import React from 'react';

const ContactForm = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-semibold text-gray-800 text-center mb-6">
          お問い合わせ
        </h2>
        <p className="text-center text-gray-600 mb-8">
          ご質問やご相談がございましたら、気軽にメッセージをお送りください。
        </p>
        <div className="bg-gray-100 shadow-md rounded-lg p-8 text-center transition duration-500 hover:shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            メールでのお問い合わせ
          </h3>
          <a
            href="mailto:soumatsumoto1282002@icloud.com"
            className="block text-purple-600 text-xl font-bold underline transition-colors duration-300 hover:text-purple-800 break-words"
          >
            メールはこちら
          </a>
          <div className="mt-6">
            <p className="text-gray-600 mb-2">または、以下のリンクからご連絡ください:</p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com/in/sou-m-868661276/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition duration-300 flex items-center space-x-2"
              >
                <i className="fab fa-linkedin fa-2x"></i>
                <span className="text-xl font-bold">LinkedIn</span>
              </a>
              <a
                href="https://x.com/jeibi155137"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition duration-300 flex items-center space-x-2"
              >
                <i className="fab fa-twitter fa-2x"></i>
                <span className="text-xl font-bold">X(Twitter)</span>
              </a>
              <a
                href="https://www.instagram.com/_.28__s/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition duration-300 flex items-center space-x-2"
              >
                <i className="fab fa-twitter fa-2x"></i>
                <span className="text-xl font-bold">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
