import { FC } from 'react';

type ConversionResultProps = {
  convertedAmount: number | null;
  toCurrency: string;
  error?: string;
}

const ConversionResult: FC<ConversionResultProps> = ({ convertedAmount, toCurrency, error }) => {
  return (
    <div className="result-container">
      {error && <p className="error-message">{error}</p>}
      {convertedAmount !== null && (
        <p className="result-text">
          Результат конвертации: {convertedAmount} {toCurrency}
        </p>
      )}
    </div>
  );
};

export default ConversionResult;