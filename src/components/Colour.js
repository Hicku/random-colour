export default function Colour({ curColour, isRGB }) {
  return (
    <div className="colour-container">
      <div className="colour-type-container">
        <div>{isRGB ? "RGB" : "HEX"}</div>
      </div>
      <div className="random-colour-container">
        <div>{`${curColour}`}</div>
      </div>
    </div>
  );
}
