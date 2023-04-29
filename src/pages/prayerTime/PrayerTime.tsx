import "./prayerTime.sass";
import { Card } from "antd";
import { useGetDataTime } from "../../utils/useGetData";

type Time = {
  asr: string;
  hufton: string;
  peshin: string;
  quyosh: string;
  shom_iftor: string;
  tong_saharlik: string;
};

const Time = () => {
  const currentTime = new Date().getHours().toString();

  const timeData = useGetDataTime(["time"], "/present/day?region=Toshkent");
  const data = timeData?.data;
  console.log(data);

  return (
    <div className="prayerTime">
      <h1 className="prayerTime__title">{data?.region}</h1>
      <div className="prayerTime__cards">
        <Card
          className={`prayerTime__card${
            currentTime < data?.times.tong_saharlik.slice(0, 2)
              ? "__active"
              : ''
          }`}
        >
          <h1>
            <span>Tong: </span>
            {data?.times.tong_saharlik}
          </h1>
        </Card>

        <Card
          className={`prayerTime__card${
            data?.times.tong_saharlik.slice(0, 2) < currentTime &&
            currentTime <= data?.times.quyosh.slice(0, 2)
              ? "__active"
              : ''
          }`}
        >
          <h1>
            <span>Quyoush: </span>
            {data?.times.quyosh}
          </h1>
        </Card>

        <Card
          className={`prayerTime__card${
            data?.times.quyosh.slice(0, 2) < currentTime &&
            currentTime <= data?.times.peshin.slice(0, 2)
              ? "__active"
              : ''
          }`}
        >
          <h1>
            <span>Peshin:</span> {data?.times.peshin}
          </h1>
        </Card>

        <Card
          className={`prayerTime__card${
            data?.times.peshin.slice(0, 2) < currentTime &&
            currentTime < data?.times.asr.slice(0, 2)
              ? "__active"
              : ''
          }`}
        >
          <h1>
            <span>Asr: </span>
            {data?.times.asr}
          </h1>
        </Card>

        <Card
          className={`prayerTime__card${
            data?.times.asr.slice(0, 2) < currentTime &&
            currentTime < data?.times.shom_iftor.slice(0, 2)
              ? "__active"
              : ''
          }`}
        >
          <h1>
            <span>Shom: </span>
            {data?.times.shom_iftor}
          </h1>
        </Card>

        <Card
          className={`prayerTime__card${
            data?.times.shom_iftor.slice(0, 2) < currentTime ? "__active" : ''
          }`}
        >
          <h1>
            <span>Hufton:</span> {data?.times.hufton}
          </h1>
        </Card>
      </div>
    </div>
  );
};

export default Time;
