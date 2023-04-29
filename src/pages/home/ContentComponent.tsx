import "./contentComponent.sass";
import { SongleSurahCard } from "../../components/singleSurahCard/SingleSurahCard";
import { Link } from "react-router-dom";
import { useGetData } from "../../utils/useGetData";


type Surahs = SingleSurah[];
type SingleSurah = {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  numberOfAyahs: number;
};

export const ContentComponent = () => {
  const data = useGetData(["surahs"], "/surah");
  const surahs: Surahs = data?.data?.data;

  return (
    <div className="cards-grid">
      {surahs?.map((elem: SingleSurah) => {
        return (
          <Link key={elem.number} to={`surahs/${elem.number}`}>
            <SongleSurahCard
              number={elem.number}
              name={elem.name}
              englishName={elem.englishName}
              englishNameTranslation={elem.englishNameTranslation}
              numberOfAyahs={elem.numberOfAyahs}
            />
          </Link>
        );
      })}
    </div>
  );
};
