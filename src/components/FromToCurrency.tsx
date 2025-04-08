import { FC } from 'react';

type FromToCurrencyProps ={
    value: string;
    onChange: (value: string) =>void;
    currencies:string[];
}

const FromToCurrency: FC<FromToCurrencyProps> = ({value, onChange, currencies}) =>{
    return (
        <select value={value} onChange={(e) => onChange (e.target.value)} className="select">
          {currencies.map((currency) => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
    )

}

export default FromToCurrency;