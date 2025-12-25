import { useState, useEffect } from 'react';
import axios from 'axios';

const DataFetcher = ({ userId = 1 }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        // Використовуємо axios для запиту до JSONPlaceholder API
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);

        // axios автоматично парсить JSON і кладе дані в response.data
        setData(response.data);
      } catch (err) {
        setError(err.message || 'Виникла помилка при завантаженні даних');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]); // Рефетч даних при зміні userId

  // Стан завантаження
  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Завантаження даних...</p>
      </div>
    );
  }

  // Стан помилки
  if (error) {
    return (
      <div className="error-container">
        <h3>❌ Помилка</h3>
        <p>{error}</p>
      </div>
    );
  }

  // Стан успішного завантаження
  return (
    <div className="data-container">
      <h2>✅ Дані користувача</h2>
      <div className="user-info">
        <p><strong>Ім'я:</strong> {data.name}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Телефон:</strong> {data.phone}</p>
        <p><strong>Веб-сайт:</strong> {data.website}</p>
        <p><strong>Компанія:</strong> {data.company.name}</p>
        <p><strong>Місто:</strong> {data.address.city}</p>
      </div>
    </div>
  );
};

export default DataFetcher;