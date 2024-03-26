import { useEffect, useState } from "react";
import viteLogo from "/vite.svg";
const Demo = () => {
  const [Imgwidth, setImgwidth] = useState(200);
  const [isDoubleClicked, setisDoubleClicked] = useState(false);
  const [singleClicked, setsingleClicked] = useState(0);
  useEffect(() => {
    if (isDoubleClicked) {
      alert("Button Double Clicked!");
    }
  }, [isDoubleClicked]);
  useEffect(() => {
    console.log("Single Clicked for ", singleClicked, " times.");
  }, [singleClicked]);
  return (
    <>
      <div className="row">
        <div className="col">
          <img
            className="border"
            onMouseOver={() => setImgwidth(220)}
            onMouseOut={() => setImgwidth(200)}
            src={viteLogo}
            style={{ width: Imgwidth }}
          ></img>
        </div>
        <div className="col">
          <button
            type="button"
            onDoubleClick={() => setisDoubleClicked(true)}
            onClick={() => setsingleClicked((curr) => curr + 1)}
            className="btn btn-primary"
          >
            Click
          </button>
        </div>
        <div className="col">
          <input
            type="text"
            className="input"
            onFocus={() => console.log("focused on the textbox")}
            onBlur={() => console.log("out of textbox")}
          ></input>
        </div>
      </div>
      <div
        className="col"
        onCopy={() => alert("Paragraph copy!")}
        onCut={() => alert("Paragraph cut!")}
        onPaste={() => alert("Paragraph paste!")}
      >
        <p>This is Paragraph!</p>
      </div>
    </>
  );
};

export default Demo;
