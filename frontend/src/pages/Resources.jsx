import React from 'react';

const resources = [
  {
    title: '🧠 Mental Health Info',
    url: 'https://www.mentalhealth.com/',
    description: 'Trusted mental health information and self-help guides.'
  },
  {
    title: '📄 WHO Mental Health PDF',
    url: 'https://www.who.int/publications/i/item/9789240003927',
    description: 'World Health Organization’s mental wellness handbook.'
  },
  {
    title: '📞 India Mental Health Helpline',
    url: 'https://www.vandrevalafoundation.com/helpline',
    description: 'Vandrevala Foundation: 24x7 helpline for emotional support.'
  },
  {
    title: '🎧 YouTube Calming Music',
    url: 'https://www.youtube.com/watch?v=2OEL4P1Rz04',
    description: '3-hour calming music for anxiety and stress relief.'
  },
  {
    title: '📘 Mental Health Journal Templates',
    url: 'https://www.sciencedirect.com/journal/mental-health-and-prevention',
    description: 'Printable journaling & reflection sheets.'
  }
];

function Resources() {
  return (
    <div className="pt-24 px-6 pb-16 min-h-screen  text-white">
      <h2 className="text-3xl font-bold text-cyan-400 mb-6 text-center">🌐 Helpful Resources</h2>
      <p className="text-center text-gray-400 mb-10">Curated list of websites, tools, and helplines to support your mental wellness journey.</p>
      
      <div className="grid gap-6 max-w-4xl mx-auto">
        {resources.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-[rgba(255,255,255,0.05)] backdrop-blur-md p-6 rounded-xl hover:bg-cyan-900/30 transition-all duration-300 border border-cyan-700"
          >
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">{item.title}</h3>
            <p className="text-sm text-gray-300">{item.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Resources;

