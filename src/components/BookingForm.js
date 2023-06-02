import { useState } from 'react';

const BookingForm = () => {
  const [date, setDate] = useState(new Date());
  const [availableTimes, setAvailableTimes] = useState([
    '12:00',
    '12:30',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
  ]);
  const [guest, setGuest] = useState(1);
  const [occasion, setOccasion] = useState('birthday');

  return (
    <>
      <form>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <label htmlFor="time">Time</label>
        <select id="time">
          <option value="12:00">12:00</option>
          <option value="12:30">12:30</option>
          <option value="13:00">13:00</option>
          <option value="13:30">13:30</option>
          <option value="14:00">14:00</option>
          <option value="14:30">14:30</option>
        </select>
        <label htmlFor="guests">Guests</label>
        <input type="number" id="guests" name="guests" min="1" max="10" />
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion">
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
          <option value="business">Business</option>
          <option value="other">Other</option>
        </select>
        <button type="submit">Make your reservation</button>
      </form>
    </>
  );
};

export default BookingForm;
