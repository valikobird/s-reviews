import { useState } from 'react';
import data from './data';
import Review from './components/Review';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

const App = () => {
  const [reviews, setReviews] = useState(data);
  const [displayedIndex, setDisplayedIndex] = useState(0);

  const showPrev = () => {
    const nextIndex = !displayedIndex ? reviews.length - 1 : displayedIndex - 1;
    setDisplayedIndex(nextIndex);
  };

  const showNext = () => {
    let nextIndex = displayedIndex + 1;
    if (nextIndex === reviews.length) {
      nextIndex = 0;
    }
    setDisplayedIndex(nextIndex);
  };

  const showRandom = () => {
    let nextIndex = displayedIndex;
    while (nextIndex === displayedIndex) {
      nextIndex = Math.floor(Math.random() * reviews.length);
    }
    setDisplayedIndex(nextIndex);
  };

  return (
    <main>
      <Review review={reviews[displayedIndex]} />
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
