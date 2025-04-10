import axios from 'axios';

type AxiosGet = {
  conversion_rates:{
    [key:string]:number;
  }
}

const exchangeRates = 'exchangeRates';
const exchangeRatesTime = 'exchangeRatesTime';

export const fetchCurrencies = async (): Promise<{[key:string]:number}> => {
  try {
    const response = await axios.get<AxiosGet>(import.meta.env.VITE_API_URL);
    const rates = response.data.conversion_rates;

    localStorage.setItem(exchangeRates, JSON.stringify(rates));
    localStorage.setItem(exchangeRatesTime, String(new Date().getTime()));

    return rates;
  } catch (error) {
    throw new Error('Ошибка при загрузке курсов валют.');
  }
}; 