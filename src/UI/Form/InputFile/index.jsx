import { useEffect, useRef, useState } from "react";
import toBase64 from "../../../utils/functions/base64";
import "./input.css";

function InputFile({ selectFile }) {
  const selectFileRef = useRef(selectFile);
  const [file, setFile] = useState({
    image: {},
    base64: "",
  });

  const [urlFile, setUrlFile] = useState("");

  const resetFile = () => {
    setFile({ image: {}, base64: "" });
    setUrlFile("");
  };

  const onDropHandler = async (e) => {
    e.preventDefault();

    const file = e.dataTransfer.files[0];

    const urlImage = URL.createObjectURL(file);
    const base64 = await toBase64(file);

    setUrlFile(urlImage);
    setFile((prev) => ({
      ...prev,
      image: { ...prev.image, ...file },
      base64: base64,
    }));
  };

  const onDragOverHandler = (e) => {
    e.preventDefault();
  };

  const selectFileWithClick = () => {
    const nodeInputFile = document.createElement("input");
    nodeInputFile.type = "file";

    nodeInputFile.addEventListener("change", async (e) => {
      e.preventDefault();

      const file = e.target.files[0];
      const urlImage = URL.createObjectURL(file);
      const base64 = await toBase64(file);

      setUrlFile(urlImage);
      setFile((prev) => ({
        ...prev,
        image: { ...prev.image, ...file },
        base64: base64,
      }));
    });

    nodeInputFile.click();
    nodeInputFile.remove();
  };

  useEffect(() => {
    selectFileRef.current(file.base64);
  }, [file.base64]);

  return (
    <button
      className="input-file"
      onDrop={onDropHandler}
      onDragOver={onDragOverHandler}
      onClick={selectFileWithClick}
    >
      {urlFile ? (
        <>
          <img
            src={urlFile}
            width={100}
            height={100}
            className="image_selected"
            alt="UploadImage"
          />
          <button type="button" className="btn" onClick={resetFile}>
            x
          </button>
        </>
      ) : (
        <p>Sube una imagen...</p>
      )}
    </button>
  );
}

export default InputFile;
