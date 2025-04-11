import React, { useEffect, useState } from 'react';

function BreathingAnimation() {
  const [isInhale, setIsInhale] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsInhale((prev) => !prev);
    }, 5000); // 4s breathe cycle

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center my-8">
      <div
        className={`w-48 h-48 rounded-full flex items-center justify-center text-lg font-semibold transition-all duration-1000 ease-in-out shadow-lg ${
          isInhale
          ? 'bg-primary text-primary-content scale-100'
          : 'bg-white dark:bg-[#1a237e] text-black dark:text-white scale-110'
          
        }`}
      >
        {isInhale ? 'Breathe Out' : 'Breathe In'}
      </div>
    </div>
  );
}

export default BreathingAnimation;


