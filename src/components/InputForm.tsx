import FromToCurrency from './FromToCurrency';
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
        <FromToCurrency
        value={fromCurrency}
        onChange={setFromCurrency}
        currencies={currencies}
        />
        <span className="span"> в </span>
        <FromToCurrency
        value={toCurrency}
        onChange={setToCurrency}
        currencies={currencies}
        />
      </div>
    </div>
  );
};

export default InputForm;