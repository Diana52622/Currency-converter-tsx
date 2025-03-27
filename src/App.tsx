import { useState, useEffect } from 'react';
import { fetchCurrencies } from './services/api'; 
import InputForm from './components/InputForm';
import ConvertButton from './components/ConvertButton';
import ConversionResult from './components/ConversionResult';
import PageExchangeRates from './components/PageExchangeRates';

const App = () => {
  const [amount, setAmount] = useState<string>('');
  const [fromCurrency, setFromCurrency] = useState<string>('USD');
  const [toCurrency, setToCurrency] = useState<string>('EUR');
  const [currencies, setCurrencies] = useState<string[]>([]);
  const [convertedAmount, setConvertedAmount] = useState<number|null>(null);
  const [error, setError] = useState<string>('');
  const [rates, setRates] = useState<Record<string, number>>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rates = await fetchCurrencies();
        setRates(rates);
        setCurrencies(['USD', ...Object.keys(rates)]);
      } catch (error:any) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  const convertCurrency = () => {
    if (amount && !isNaN(Number(amount))) {
      const rate = rates[toCurrency] / rates[fromCurrency];
      setConvertedAmount(Number((Number(amount) * rate).toFixed(2)));
      setError('');
    } else {
      setError('Введите корректную сумму.');
      setConvertedAmount(null);
    }
  };

  return (
    <div className="app-container">
      <h1>Конвертер валют</h1>
      <InputForm 
        amount={amount} 
        setAmount={setAmount} 
        fromCurrency={fromCurrency} 
        setFromCurrency={setFromCurrency} 
        toCurrency={toCurrency} 
        setToCurrency={setToCurrency} 
        currencies={currencies.filter((currency, index, self) => self.indexOf(currency) === index)}
      />
      <ConvertButton onClick={convertCurrency} />
      <ConversionResult 
        convertedAmount={convertedAmount} 
        toCurrency={toCurrency} 
        error={error} 
      />
      <PageExchangeRates/>
    </div>
  );
};

export default App;