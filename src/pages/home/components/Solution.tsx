
import React from 'react';

export default function Solution() {
  const steps = [
    {
      number: '1',
      title: 'プランを契約する',
      description: '7日間無料でお試し',
      icon: 'ri-shopping-cart-line',
    },
    {
      number: '2',
      title: 'Discordに参加する',
      description: '通知を受け取る準備',
      icon: 'ri-discord-line',
    },
    {
      number: '3',
      title: '届いた通知から仕入れ',
      description: 'スマホで見て、そのまま仕入れ',
      icon: 'ri-notification-3-line',
    },
  ];

  return (
    <section className="py-10 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
            やることは、3つだけ。
          </h2>
        </div>

        {/* Mobile layout */}
        <div className="flex flex-col gap-3 md:hidden max-w-sm mx-auto">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center gap-4 bg-gray-50 rounded-xl px-4 py-3">
                <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center bg-teal-500 text-white rounded-full text-sm font-bold">
                  {step.number}
                </div>
                <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center">
                  <i className={`${step.icon} text-2xl text-teal-500`}></i>
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-gray-900 leading-tight">{step.title}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="flex justify-center">
                  <i className="ri-arrow-down-line text-lg text-gray-300"></i>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Desktop layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-gray-50 p-8 rounded-2xl text-center h-full flex flex-col items-center">
                <div className="w-14 h-14 flex items-center justify-center bg-teal-500 text-white rounded-full text-2xl font-bold mb-6">
                  {step.number}
                </div>
                <div className="w-14 h-14 flex items-center justify-center mb-4">
                  <i className={`${step.icon} text-4xl text-teal-500`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-base text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <i className="ri-arrow-right-line text-2xl text-gray-300"></i>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
