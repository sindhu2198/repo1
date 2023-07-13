import React, { useState, useEffect } from 'react';
import { useSpring, animated, config } from '@react-spring/web';
import { useDrag } from 'react-use-gesture';

const CardSlider = ({ cards, setActiveCardIndex }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [springProps, set] = useSpring(() => ({
    x: 0,
    y: 0,
    rotation: 0,
    scale: 1,
    config: config.wobbly,
  }));

  const bind = useDrag(
    ({ down, movement: [x], direction: [dx], cancel }) => {
      const dir = dx < 0 ? -1 : 1;

      if (!down) {
        cancel();
        setActiveIndex((activeIndex + dir + cards.length) % cards.length);
        setActiveCardIndex((activeIndex + dir + cards.length) % cards.length); // Update the active card index in the Home component
      }

      set({
        x: down ? x : 0,
        rotation: down ? x / 10 : 0,
        scale: down ? 1.1 : 1,
      });
    },
    { filterTaps: true }
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex((activeIndex + 1) % cards.length);
      setActiveCardIndex((activeIndex + 1) % cards.length); // Update the active card index in the Home component
    }, 5000); // Change card every 5 seconds (adjust the delay as needed)

    return () => clearTimeout(timer);
  }, [activeIndex, setActiveCardIndex]);

  return (
    <>
      {cards.map((card, index) => {
        const isActiveCard = index === activeIndex;
        let angle;

        if (isActiveCard) {
          angle = 0; // No rotation for the active card
        } else {
          // Set different rotation angles for other cards
          if (index === 1) {
            angle = 10; // Rotation angle for Card 2
          } else if (index === 2) {
            angle = -10; // Rotation angle for Card 3
          } else {
            angle = 5; // Default rotation angle for other cards
          }
        }

        return (
          <animated.div
            key={index}
            {...bind()}
            style={{
              ...springProps,
              position: 'absolute',
              width: '30%',
              height: '75%',
              background: card.cardColor, // Use the card color for background
              borderRadius: '10px',
              boxShadow: '0px 10px 30px -5px rgba(0, 0, 0, 0.3)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-start',
              willChange: 'transform',
              transform: springProps.x.to((value) => `translateX(calc(100% - ${index * 20}%)) rotate(${angle}deg)`),
              zIndex: isActiveCard ? 1 : 0,
            }}
          >
            <div style={{ margin: '10px', fontWeight: 'bold' }}>{card.title}</div>
            <img src={card.image} alt={card.title} style={{ maxWidth: '100%', height: 'auto', flex: '1', objectFit: 'contain', alignSelf: 'center' }} />
  </animated.div>
);

        
      })}
    </>
  );
};

export default CardSlider;
