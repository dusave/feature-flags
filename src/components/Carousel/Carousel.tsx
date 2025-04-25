import { ReactElement, useState } from "react";
import styles from "./Carousel.module.css";

type CarouselProps = {
  elements: ReactElement[];
};

export default function Carousel({ elements }: CarouselProps) {
  const [currentElement, setCurrentElement] = useState(0);

  function prevElement() {
    setCurrentElement(currentElement - 1);
  }

  function nextElement() {
    setCurrentElement(currentElement + 1);
  }

  if (elements.length > 0)
    return (
      <div className={styles.container}>
        <button
          className={styles.button}
          onClick={prevElement}
          disabled={elements.length <= 1 || currentElement === 0}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        {elements[currentElement]}
        <button
          className={styles.button}
          onClick={nextElement}
          disabled={
            elements.length <= 1 || currentElement === elements.length - 1
          }
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    );

  return <></>;
}
