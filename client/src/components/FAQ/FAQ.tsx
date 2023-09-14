/* React */
import { useState } from 'react';
import {BiSolidDownArrow, BiSolidUpArrow} from "react-icons/bi"

/* CSS */
import styles from './FAQ.module.css';

/* Utils */
import { questionsAndAnswers } from '../../utils/constants';

export default function FAQ () {
  const [isOpen, setIsOpen] = useState<boolean[]>([false, false, false, false, false]);

  const toggleAnswer = (index: number) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };

  return (
    <div 
      id='faq'
      className={styles.div_global}
    >
      <div className={styles.div_title}>
        <h3>FAQ</h3>
      </div>

      <div className={styles.div_qa}>
        {questionsAndAnswers.map((qa, index) => (
          <div key={index}>
            <div
              className={styles.faqItem}
              onClick={() => toggleAnswer(index)}
            >
              {
                isOpen[index]
                ? <BiSolidUpArrow className={styles.icon_arrow}/>
                : <BiSolidDownArrow className={styles.icon_arrow}/>
              }
              <span>{qa.question}</span>
            </div>
            <div
              className={isOpen[index] ? styles.question__open : styles.question__close}
            >
              <hr/>
              <span>{qa.answer}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

