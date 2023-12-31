import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Input = () => {
  const [carId, setCarId] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCarId(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/car/${carId}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={carId}
          onChange={handleInputChange}
          placeholder="Search by ID (1-15)"
        />
        <button type="submit">Car Info</button>
      </form>
    </div>
  );
};

export default Input;
