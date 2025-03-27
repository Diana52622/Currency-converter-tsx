import './main.css';
import { FC } from 'react';

type InputFormProps ={
  amount:string; 
  setAmount: (value: string) => void;
  fromCurrency: string;
  setFromCurrency: (value: string) => void; 
  toCurrency: string;
  setToCurrency: (value: string) => void;
  currencies: string[];
}

const InputForm: FC<InputFormProps> = ({ amount, setAmount, fromCurrency, setFromCurrency, toCurrency, setToCurrency, currencies }) => {
  return (
    <div className="input-container">
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Введите сумму"
        className="input"
      />
      <div>
        <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)} className="select">
          {currencies.map((currency) => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
        <span className="span"> в </span>
        <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)} className="select">
          {currencies.map((currency) => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputForm;