import { useGetData } from "../../utils/useGetData";
import { useParams } from "react-router-dom";
import { SingleAyah } from "../../components/singleAyah/SingleAyah";
import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import "./singleSurah.sass";

type SingleAyah = {
  number: number;
  text: string;
};

type SingleAyahTrnas = {
  number: number;
  text: string;
}[];

export const SingleSurah = () => {
  const { id } = useParams();
  const { language } = useContext(LanguageContext);

  const dataFull = useGetData(
    ["singleSurah"],
    `/surah/${id}/editions/quran-uthmcani,en.pickthall,ru.kuliev,ar.alafasy`
  );
  const data = useGetData(["get"], `/surah/${id}`);
  const ayahsAr = dataFull?.data?.data[0]?.ayahs;
  let ayahsTrans: SingleAyahTrnas;

  switch (language) {
    case "en":
      ayahsTrans = dataFull?.data?.data[1]?.ayahs;
      break;
    case "ru":
      ayahsTrans = dataFull?.data?.data[2]?.ayahs;
      break;
    case "uz":
      ayahsTrans = dataFull?.data?.data[1]?.ayahs;
      break;
    default:
      ayahsTrans = dataFull?.data?.data[1]?.ayahs;
  }

  return (
    <div className="singleSurah">
      <h1 className="singleSurah__title">{data?.data?.data?.name}</h1>
      {ayahsAr?.map((elem: SingleAyah, i: number) => {
        return (
          <SingleAyah
            key={elem.number}
            number={elem.number}
            arText={elem.text}
            transText={ayahsTrans?.[i]?.text}
          />
        );
      })}
    </div>
  );
};
