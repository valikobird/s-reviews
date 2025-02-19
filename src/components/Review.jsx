import { FaQuoteRight } from 'react-icons/fa6';

const Review = ({ review }) => {
  const { name, job, image, text } = review;

  return (
    <article className='singleReview'>
      <div className='avatar'>
        <img src={image} alt={name} className='img' />
        <FaQuoteRight className='quoteIcon' />
      </div>
      <h4 className='name'>{name}</h4>
      <p className='jobTitle'>{job}</p>
      <p className='info'>{text}</p>
    </article>
  );
};

export default Review;
