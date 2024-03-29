import React from "react";
import styled from "@emotion/styled";

const ResultBox = styled.div`
  border: #087f5b solid 5px;
  border-radius: 30px;
  font-size: 50px;
  padding: 10px;
  width: 300px;

  margin: 0 auto;
  margin-top: 50px;
  text-align: center;
`;

function ResultImage({ data }) {
  // mbti 계산 핸들러
  return <ResultBox>{data}</ResultBox>;
}

export default ResultImage;
