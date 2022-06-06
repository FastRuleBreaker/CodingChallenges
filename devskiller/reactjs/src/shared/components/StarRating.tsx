import React from 'react';

import { range } from 'lang';

const width = 110;

interface classesType {
    [className: string]: React.CSSProperties
}

const styles: classesType = {
  starsInner: {
    width: `${width}px`,
  },
  starsEmptyInner: {
    position: 'absolute',
    width: `${width}px`,
  },
  starsOuter: {
    overflow: 'hidden',
  },
  star: {
    padding: '1px',
  },
};

const cropWidth = (rating: number) => {
  return Math.floor((rating * width) / 5);
};

interface StarRatingProps {
  rating: number
  onRate: (rating: number) => void
}

export const StarRating = ({ rating, onRate }: StarRatingProps) => {
  const containerStyle = { width: `${cropWidth(rating)}px` };

  return (
    <div>
      <div style={styles.starsOuter}>
        <div id="rate-container" style={containerStyle}>
          <div style={styles.starsEmptyInner}>
            {range(5, 1).map(i => <i key={i} className="fa fa-star-o fa-lg" onClick={() => onRate(i)} style={styles.star}></i>)}
          </div>
          <div style={styles.starsInner}>
            {range(5, 1).map(i => <i key={i} className="fa fa-star fa-lg" data-testid="star-item" onClick={() => onRate(i)} style={styles.star}></i>)}
          </div>
        </div>
      </div>
    </div>
  );
};
