import React from "react";
import { Entypo, Feather, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

import styled from "styled-components/native";
import Avatar from "./Avatar";
import { View } from "react-native";

const Container = styled.View`
  width: 100%;
  padding-top: 10px;
`;
const Row = styled.View`
  flex-direction: row;
  background-color: #fff;
  width: 100%;
  padding: 0 11px;
  align-items: center;
`;
const Input = styled.TextInput`
  height: 50px;
  width: 60%;
  padding: 0 8px;
`;
const Divider = styled.View`
  width: 100%;
  height: 1px;
  background: #f0f0f0;
`;
const Menu = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 42px;
`;
const MenuText = styled.Text`
  padding-left: 4px;
  font-weight: 600;
  font-size: 12px;
`;
const Separator = styled.View`
  width: 1px;
  height: 26px;
  background: #f0f0f0;
`;
const BottomDivider = styled.View`
  width: 100%;
  height: 9px;
  background: #e9e9e9;
`;
const ChildRow = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
`;
const SeparatorRow = styled.View`
  width: 1px;
  height: 40px;
  background: #f0f0f0;
`;
const Photo = styled.View`
  width: 50px;
  flex-direction: column;
`;
const PhotoText = styled.Text`
    font-size: 12px;
    color: #9f9f9f;
`;

const ToolBar = () => {
  return (
    <>
      <Container>
        <Row>
          <ChildRow>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Avatar source={require("../assets/images/01.jpg")} />
              <Input placeholder="What's your mind?" />
            </View>
            <SeparatorRow />
            <Photo>
              <Ionicons name="ios-images-outline" size={30} color="#9f9f9f"/>
              <PhotoText>Photo</PhotoText>
            </Photo>
          </ChildRow>
        </Row>
        <Divider />
        <Row>
          <Menu>
            <Feather name="edit" size={20} color="#1777f2" />
            <MenuText>Text</MenuText>
          </Menu>
          <Menu>
            <Entypo name="video-camera" size={20} color="#f44337" />
            <MenuText>Live Video</MenuText>
          </Menu>
          <Separator />
          <Separator />
          <Menu>
            <MaterialCommunityIcons
              name="video-plus"
              size={20}
              color="#e141fc"
            />
            <MenuText>Room</MenuText>
          </Menu>
        </Row>
      </Container>
      <BottomDivider />
    </>
  );
};

export default ToolBar;
