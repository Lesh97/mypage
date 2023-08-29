import React, { useState } from "react";
import { useParams } from "react-router-dom";
import outletData from "../OutletProps";

function PortfolioPage() {
  /**
   * css작업하고, 색상 조정하면 마무리될듯
   *  내일까지 마무리하자
   *
   *  클릭한 div의 id를 받아와서 해당 id와 일치하는 정보를 반환
   *  페이크 디비로 간단하게 설정하고 string으로만 설명
   *  홈으로 / 포트폴리오페이지로 두가지 버튼 만들기
   *  해당되는 베포페이지 링크걸기
   *  깃허브 링크 걸기
   *  복잡하지 않지만, 너무 사전식은 아니게끔 알잘딱하게 디자인
   *
   */
  const [outletIndex, setOutletIndex] = useState(outletData);
  const params = useParams() as {
    Id: any;
    params: string;
  };
  console.log(params);
  return (
    <>
      <div>{outletData[params.Id].title}</div>
      <div>
        스킬입니다
        {outletData[params.Id].skills}
      </div>
      <div>
        요약입니다
        {outletData[params.Id].summary}
      </div>
      <div>
        생각입니다
        {outletData[params.Id].thinking}
      </div>
      <div>
        타이틀입니다
        {outletData[params.Id].title}
      </div>
    </>
  );
}

export default PortfolioPage;
