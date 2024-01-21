// QuestionnairePage.js
import React, { useState } from 'react';
import '../css/Preference.css';
import Layout from './Layout';

const QuestionnairePage = () => {
  const [courseName, setCourseName] = useState('');
  const [level, setLevel] = useState('beginner');
  const [time, setTime] = useState('1-10');
  const [isPaid, setIsPaid] = useState(false);

  const handleSubmit = () => {
    // Handle form submission logic
    console.log('Form submitted:', { courseName, level, time, isPaid });
  };

  return (
    <Layout>
    <div className="questionnaire-container">
      <form onSubmit={handleSubmit}>
        <label>
          Enter Course Name:
          <input type="text" value={courseName} onChange={(e) => setCourseName(e.target.value)} />
        </label>

        <div className="label-group">
          <label>Level of Course:</label>
          <label>
            <input type="radio" value="beginner" checked={level === 'beginner'} onChange={() => setLevel('beginner')} />
            Beginner
          </label>
          <label>
            <input type="radio" value="intermediate" checked={level === 'intermediate'} onChange={() => setLevel('intermediate')} />
            Intermediate
          </label>
          <label>
            <input type="radio" value="advance" checked={level === 'advance'} onChange={() => setLevel('advance')} />
            Advance
          </label>
        </div>

        <label>
          Time:
          <select value={time} onChange={(e) => setTime(e.target.value)}>
            <option value="1-10">1-10 hours</option>
            <option value="10-20">10-20 hours</option>
            <option value="more-than-20">More than 20 hours</option>
          </select>
        </label>

        <div className="label-group">
          <label>Paid or Unpaid:</label>
          <label>
            <input type="radio" value="paid" checked={isPaid} onChange={() => setIsPaid(true)} />
            Paid
          </label>
          <label>
            <input type="radio" value="unpaid" checked={!isPaid} onChange={() => setIsPaid(false)} />
            Unpaid
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  </Layout>
  );
};

export default QuestionnairePage;
