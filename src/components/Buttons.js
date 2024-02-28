import Button from "./Button";

export default function Buttons({
  onGetColour,
  onHandleRGBFalse,
  onHandleRGBTrue,
}) {
  return (
    <div className="buttons">
      <div>
        <Button onClick={onHandleRGBFalse}>Create HEX colour</Button>
      </div>
      <div>
        <Button onClick={onHandleRGBTrue}>Create RGB colour</Button>
      </div>
      <div>
        <Button onClick={onGetColour}>Generate random colour</Button>
      </div>
    </div>
  );
}
