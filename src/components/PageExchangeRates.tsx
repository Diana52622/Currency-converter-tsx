import { useEffect, useState } from 'react';
import { fetchCurrencies } from '../services/api';
import RatesTable from './RatesTable'; 

const LOCAL_KEYS = {
  favorites : 'favorites',
}

const PageExchangeRates = () => {
  const [rates, setRates] = useState<Record<string, number>>({});
  const [error, setError] = useState<string>('');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showAll, setShowAll] = useState(false);

  const fetchData = async () => {
    try {
      const ratesData = await fetchCurrencies();
      setRates(ratesData);
    } catch (error:any) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const storedFavorites = localStorage.getItem(LOCAL_KEYS.favorites);
    if (storedFavorites) {
      try{
      setFavorites(JSON.parse(storedFavorites));
      }
      catch(error){
        console.error('Ошибка:', error)
      }
      setFavorites([])
    }
  }, []);

  const toggleFavorite = (currency: string) => {
    setFavorites((prevFavorites) => {
      const newFavorites = prevFavorites.includes(currency)
        ? prevFavorites.filter((fav) => fav !== currency)
        : [...prevFavorites, currency];

      localStorage.setItem(LOCAL_KEYS.favorites, JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <div className="container">
      <h1>Курсы валют</h1>
      {error && <p className="error">{error}</p>}
      <RatesTable 
        rates={rates} 
        favorites={favorites} 
        toggleFavorite={toggleFavorite} 
        showAll={showAll} 
      />
      <button className="button" onClick={toggleShowAll}>
        {showAll ? 'Скрыть' : 'Показать все'}
      </button>
    </div>
  );
};

export default PageExchangeRates;