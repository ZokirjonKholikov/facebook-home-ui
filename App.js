import React from "react";
import { StatusBar, ScrollView } from "react-native";
import styled from "styled-components/native";
import AppBar from "./components/AppBar";
import Feed from "./components/Feed";
import Story from "./components/Story";
import ToolBar from "./components/ToolBar";
import Users from "./components/Users";

const Conttainer = styled.View`
  flex: 1;
`;

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Conttainer>
        <AppBar />
        <ScrollView>
          <ToolBar />
          <Users />
          <Story />
          <Feed />
        </ScrollView>
      </Conttainer>
    </>
  );
};

export default App;
