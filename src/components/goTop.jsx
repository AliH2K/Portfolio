import { useEffect, useState } from 'react';

const GoTop = () => {
  const [showGoTop, setShowGoTop] = useState(false);

  const handleVisibleButton = () => {
    setShowGoTop(window.pageYOffset > 50);
  };

  const handleScrollUp = () => {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleVisibleButton);
  }, []);

  return (
    <div className={showGoTop ? '' : 'goTopHidden'} onClick={handleScrollUp}>
      <button className="goTop"></button>
    </div>
  );
};
export default GoTop;
