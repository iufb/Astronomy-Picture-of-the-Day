import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useGetData } from "../helpers/context/nasaApi.context";
import { Button } from "../ui";

export const GetPictureForm = (): JSX.Element => {
  const { date, updateDate, setCustomDate } = useGetData((state) => ({
    date: state.date,
    updateDate: state.updateDate,
    setCustomDate: state.setCustomDate,
  }));
  const navigate = useNavigate();
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setCustomDate();
    navigate("picture");
  };
  return (
    <form className="flex flex-col items-center gap-3" onSubmit={onSubmit}>
      <h2 className="text-4xl  ">Get Picture by date :</h2>
      <input
        id="date"
        type="date"
        color="secondary"
        value={date}
        onChange={(e) => updateDate(e.target.value)}
      />
      <Button>GET IT</Button>
    </form>
  );
};
