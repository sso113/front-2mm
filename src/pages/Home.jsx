import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import GroupItem from "./GroupItem";

const Container = styled.div`
  position: relative;
  margin: 30px 0;
  max-width: 375px;
  height: 740px;
  background: white;
  border: 1px solid gray;
  margin: auto;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const Mark = styled.div`
  position: relative;
  top: -200px;
  margin-left: 15px;
`;

const BluePoint = styled.div`
  position: relative;
  margin: auto;
`;
const BoxZone = styled.div`
  position: relative;
  max-width: 346px;
  height: 570px;
  margin: auto;
  margin-bottom: 0px;
  top: -150px;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    /* WebKit 브라우저의 스크롤바를 숨김 */
    width: 0;
    background: transparent;
  }
`;
const Box = styled.div`
  position: relative;
  margin: auto;
  margin-bottom: 10px;
  width: 346px;
  height: 175px;
  background: pink;
  border-radius: 17.76px;
`;
const AddBox = styled.div`
  position: relative;
  margin: auto;
  width: 346px;
  height: 175px;
  margin-bottom: 10px;
  border-radius: 17.76px;
  // border-radius: 17.76px;
  // border: 2px dashed #0057ff;
`;

const SettingBtn = styled.button``;

const Home = () => {
  const navigate = useNavigate();

  const gotoAdd = () => {
    navigate("/G");
  };
  return (
    <Container>
      <BluePoint>
        <img
          width="375px"
          src={`${process.env.PUBLIC_URL}/images/bluepoint.svg`}
        />
        <Mark>
          <img src={`${process.env.PUBLIC_URL}/images/heartmark.svg`} />
        </Mark>
      </BluePoint>
      <BoxZone>
        <GroupItem></GroupItem>
        <GroupItem></GroupItem>
        <GroupItem></GroupItem>
        <AddBox>
          <img src={`${process.env.PUBLIC_URL}/images/addbox.svg`} />
        </AddBox>
      </BoxZone>
    </Container>
  );
};

export default Home;
