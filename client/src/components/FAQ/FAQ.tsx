import { useState } from 'react';
import styles from './FAQ.module.css';


export default function FAQ () {
  const [isOpen, setIsOpen] = useState<boolean[]>([false, false, false, false, false]);

  const questionsAndAnswers = [
    {
      question: 'Question 1',
      answer: 'Answer to Question 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      question: 'Question 2',
      answer: 'Answer to Question 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      question: 'Question 3',
      answer: 'Answer to Question 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      question: 'Question 4',
      answer: 'Answer to Question 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      question: 'Question 5',
      answer: 'Answer to Question 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];

  const toggleAnswer = (index: number) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };

  return (
    <div>
      <div>
        <h3>FAQ</h3>
      </div>

      <div>
        {questionsAndAnswers.map((qa, index) => (
          <div key={index}>
            <div
              className={styles.faqItem}
              onClick={() => toggleAnswer(index)}
            >
              {qa.question}
            </div>
            <div
              className={`${styles.answer} ${isOpen[index] ? styles.open : ''}`}
            >
              {qa.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

