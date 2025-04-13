import { FC } from 'react';

type Props = {
  onClick: () => void; 
}

const ConvertButton: FC<Props> = ({ onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      Конвертировать
    </button>
  );
};

export default ConvertButton;