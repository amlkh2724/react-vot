import React, { useState, useEffect } from 'react';
import { PAGES } from '../constants';
// import { Logo } from '../components';
// import main from '../assets/images/main.svg';
// import Wrapper from '../styles/styled/Landing.styled';

const VotingPage = ({ user, setUser, setPage }) => {
  const [votes, setVotes] = useState({
    option1: 0,
    option2: 0,
    option3: 0,
    option4: 0,
  });

  const [selectedOption, setSelectedOption] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);

  const handleVote = (option) => {
    setSelectedOption(option);
  };

  const handleChangeVote = (option) => {
    setVotes((prevState) => {
      const newVotes = { ...prevState };
      if (selectedOption !== option) {
        newVotes[selectedOption] -= 1;
      }
      if (newVotes[option] >= 0) {
        newVotes[option] += 1;
      }
      return newVotes;
    });
    setSelectedOption(null);
  };

  const handleDone = () => {
    setHasVoted(true);
  };


  useEffect(() => {
    const savedVotes = JSON.parse(localStorage.getItem('votes'));
    if (savedVotes) {
      setVotes(savedVotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('votes', JSON.stringify(votes));
  }, [votes]);

  if (hasVoted) {
    return (
      <div>
        <h2>Thank you for voting!</h2>

      </div>
    );
  }

  return (
    <div>
      <h2>Voting Page</h2>
      <p>Select an option to vote:</p>
      <div>
        {!selectedOption && (
          <>
            <button onClick={() => handleVote('option1')}>Option 1</button>
            <button onClick={() => handleVote('option2')}>Option 2</button>
            <button onClick={() => handleVote('option3')}>Option 3</button>
            <button onClick={() => handleVote('option4')}>Option 4</button>
          </>
        )}
        {selectedOption && (
          <>
            <p>You have selected {selectedOption}. Are you sure?</p>
            <button onClick={() => handleChangeVote('option1')}>
              Change Vote to Option 1
            </button>
            <button onClick={() => handleChangeVote('option2')}>
              Change Vote to Option 2
            </button>
            <button onClick={() => handleChangeVote('option3')}>
              Change Vote to Option 3
            </button>
            <button onClick={() => handleChangeVote('option4')}>
              Change Vote to Option 4
            </button>
            <button onClick={handleDone}>Done</button>
          </>
        )}
      </div>
      <p>Current Votes:</p>
      <ul>
        <li>Option 1: {votes.option1}</li>
        <li>Option 2: {votes.option2}</li>
        <li>Option 3: {votes.option3}</li>
        <li>Option 4: {votes.option4}</li>
      </ul>
    </div>
  );
};


export default VotingPage;