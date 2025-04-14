import React, { useState, useEffect } from 'react';
import './DogJoke.css';

const DogJoke = () => {
  const [dogImage, setDogImage] = useState('');
  const [joke, setJoke] = useState(null);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(data => setDogImage(data.message));

    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(res => res.json())
      .then(data => setJoke(data));
  }, []);

  return (
    <div className="dog-container">
      <div className="dog-box">
        <img src={dogImage} alt="Dog" className="img" />
      </div>
      {joke && (
        <div className="joke-container">
          <h3 className="joke-setup">{joke.setup}</h3>
          <p className="exact-joke">{joke.punchline}</p>
        </div>
      )}
    </div>
  );
};

export default DogJoke;