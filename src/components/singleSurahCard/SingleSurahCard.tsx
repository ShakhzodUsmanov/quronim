import { Card } from "antd";
import "./singleSurahCard.sass";

type Props = {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  numberOfAyahs: number;
};

export const SongleSurahCard = (props: Props) => {
  const { number, englishName, englishNameTranslation, name, numberOfAyahs } =
    props;
  return (
    <Card className="singleSurahCard" hoverable>
      <div className="singleSurahCard" key={number}>
        <div className="singleSurahCard__count">
          <span>{number}</span>
        </div>
        <div className="singleSurahCard__text">
          <div className="left">
            <div className="title">{englishName}</div>
            <div className="subtitle">{englishNameTranslation}</div>
          </div>
          <div className="right">
            <div className="title">{name}</div>
            <div className="ayahsCount">{numberOfAyahs} Ayahs</div>
          </div>
        </div>
      </div>
    </Card>
  );
};
