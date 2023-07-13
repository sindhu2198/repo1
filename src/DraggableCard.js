import React, { useEffect, useState } from 'react';
import { useDrag } from 'react-dnd';
import { CSSTransition } from 'react-transition-group';

const DraggableCard = ({ id, title, image }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [{ opacity }, dragRef] = useDrag(() => ({
    type: 'CARD',
    item: { id },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  }));

  useEffect(() => {
    const timer = setTimeout(() => {
      // Automatically change to the next card after 2 seconds
      // Implement your logic to determine the next card
      // For simplicity, I'm assuming the card IDs are sequential numbers
      const nextCardId = id === 3 ? 1 : id + 1;
      // Trigger the drag event to simulate dragging to the next card
      setIsDragging(true);
      setTimeout(() => {
        setIsDragging(false);
      }, 500); // Adjust the duration as needed
    }, 2000); // Adjust the interval as needed

    return () => clearTimeout(timer);
  }, [id]);

  return (
    <CSSTransition in={!isDragging} timeout={500} classNames="card-transition" unmountOnExit>
      <div ref={dragRef} className="card" style={{ opacity }}>
        <h2>{title}</h2>
        <img src={image} alt={title} />
      </div>
    </CSSTransition>
  );
};

export default DraggableCard;
