import { useState } from 'react';
import people from './data';
import Review from './components/Review';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

const App = () => {
  const [displayedIndex, setDisplayedIndex] = useState(0);

  const showPrev = () => {
    setDisplayedIndex((currentIndex) => {
      const nextIndex = (currentIndex + people.length - 1) % people.length;
      return nextIndex;
    });
  };

  const showNext = () => {
    setDisplayedIndex((currentIndex) => {
      const nextIndex = (currentIndex + 1) % people.length;
      return nextIndex;
    });
  };

  const showRandom = () => {
    let nextIndex = displayedIndex;
    while (nextIndex === displayedIndex) {
      nextIndex = Math.floor(Math.random() * people.length);
    }
    setDisplayedIndex(nextIndex);
  };

  return (
    <main>
      <Review review={people[displayedIndex]} />
      <div className='navButtons'>
        <FaAngleLeft className='navButton' onClick={showPrev} />
        <FaAngleRight className='navButton' onClick={showNext} />
      </div>
      <button type='button' className='btn' onClick={showRandom}>
        Surprise Me
      </button>
    </main>
  );
};

export default App;
