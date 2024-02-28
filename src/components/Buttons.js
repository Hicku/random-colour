import Button from "./Button";

export default function Buttons() {
  return (
    <div className="buttons">
      <div>
        <Button>Create HEX colour</Button>
      </div>
      <div>
        <Button>Create RGB colour</Button>
      </div>
      <div>
        <Button>Generate random colour</Button>
      </div>
    </div>
  );
}
