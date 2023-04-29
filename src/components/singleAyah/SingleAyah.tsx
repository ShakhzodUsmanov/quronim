import { Card } from "antd";
import "./singleAyah.sass";

type Props = {
  arText: string;
  number: number;
  transText?: string;
};

export const SingleAyah = (props: Props) => {
  const { arText, number, transText } = props;
  return (
    <Card key={number} className="singleAyahCard">
      <div className="singleAyahCard__counter">
      {number}</div>
      <div className="singleAyahCard__text">
        <div className="transTitle">{transText}</div>
        <div className="arTitle">{arText}</div>
      </div>
    </Card>
  );
};
