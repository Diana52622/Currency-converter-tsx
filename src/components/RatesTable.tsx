import './main.css'; 
import { FC } from 'react';

type RatesTableProps = {
  rates: Record<string, number>;
  favorites: string[];
  toggleFavorite: (currency:string) => void;
  showAll: boolean;
}

const countRates = 10

const sortRates = (rates: Record<string, number>, favorites: string[]) => 
  Object.entries(rates).sort((a, b) => {
  const [keyA] = a;
  const [keyB] = b;

  const isAFavorite = favorites.includes(keyA);
  const isBFavorite = favorites.includes(keyB);

  if (isAFavorite && !isBFavorite) return -1;
  if (!isAFavorite && isBFavorite) return 1;

  return 0;
});

const RatesTable: FC<RatesTableProps> = ({ rates = {}, favorites, toggleFavorite, showAll }) => {

  const sortedRates = sortRates(rates, favorites)

  const countShow = showAll ? sortedRates.length : countRates
  const currenciesShow = sortedRates.slice(0, countShow)
  
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Валюта</th>
          <th>Курс</th>
          <th>Избранное</th>
        </tr>
      </thead>
      <tbody>
        { currenciesShow.map(([currency, rate]) => (
          <tr key={currency}>
            <td>{currency}</td>
            <td>{rate}</td>
            <td>
              <button
                className={`button ${favorites.includes(currency) ? 'favorite' : 'add'}`}
                onClick={() => toggleFavorite(currency)}
              >
                {favorites.includes(currency) ? 'Убрать из избранного' : 'Добавить в избранное'}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RatesTable;