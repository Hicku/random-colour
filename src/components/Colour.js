export default function Colour({ curColour }) {
  return (
    <div className="colour-container">
      <div className="colour-type-container">
        <div>Colour type</div>
      </div>
      <div className="random-colour-container">
        <div>{`#${curColour}`}</div>
      </div>
    </div>
  );
}
