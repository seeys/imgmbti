import styled from "@emotion/styled";
import axios from "axios";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { BsPlusSquare } from "react-icons/bs";
import { ID, SECRET } from "../secret";

const BoxContainer = styled.div`
  border: #087f5b solid 5px;
  border-radius: 15px;
  width: 20vw;
  height: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 10px;

  .test:hover {
    color: #96f2d7;
  }
`;

const InputImageBox = () => {
  const [file, setFile] = useState(null);
  const selectFile = useRef("");

  // 파일 변경 감지 핸들러
  const onChaneFile = () => {
    selectFile.current.click();
  };

  // 파일 post
  const onClickImg = async () => {
    let _formData = new FormData();

    _formData.append("test", "idx");
    let api_url = "https://openapi.naver.com/v1/vision/celebrity";

    const res = await axios.post(
      api_url,
      { formData: _formData },
      { headers: { "X-Naver-Client-Id": ID, "X-Naver-Client-Secret": SECRET } }
    );

    console.log(res);
  };

  return (
    <BoxContainer>
      <BsPlusSquare
        size="100"
        onClick={onChaneFile}
        className="test"
        htmlFor="input_file"
      />
      <input type="file" style={{ display: "none" }} ref={selectFile} />
    </BoxContainer>
  );
};

export default InputImageBox;
