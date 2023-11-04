import React, { useState, useEffect } from "react";

const TypeWriter = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(200);

  const toRotate = ["BackEnd", "FrontEnd"];

  useEffect(() => {
    let timer;

    const tick = () => {
      const i = loopNum % toRotate.length;
      const fullTxt = toRotate[i];

      let newText = "";
      if (isDeleting) {
        newText = fullTxt.substring(0, text.length - 1);
      } else {
        newText = fullTxt.substring(0, text.length + 1);
      }

      let newDelta = 200 - Math.random() * 100;

      if (isDeleting) {
        newDelta /= 2;
      }

      if (!isDeleting && newText === fullTxt) {
        newDelta = 2000; // Adjust this value as needed
        setIsDeleting(true);
      } else if (isDeleting && newText === "") {
        setIsDeleting(false);
        setLoopNum((prevLoopNum) => prevLoopNum + 1);
        newDelta = 500;
      }

      setText(newText);
      setDelta(newDelta);
    };

    timer = setTimeout(tick, delta);

    return () => {
      clearTimeout(timer);
    };
  }, [text, isDeleting, loopNum, delta]);

  return (
    <span className="typewriter">
      {text}
      <div id="cursor"></div>
    </span>
  );
};

export default TypeWriter;
