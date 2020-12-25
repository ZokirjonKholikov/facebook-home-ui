import React from "react";
import styled from "styled-components/native";
import {
  Feather,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
  FontAwesome5,
  Entypo,
  Ionicons,
} from "@expo/vector-icons";

const Container = styled.View`
  width: 100%;
  height: 58px;
  padding: 0 11px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

const Text = styled.Text`
  color: #3a86e9;
  font-size: 25px;
  font-weight: bold;
  letter-spacing: -0.3px;
`;

const Row = styled.View`
  flex-direction: row;
`;
const Button = styled.View`
  width: 42px;
  height: 42px;
  border-radius: 21px;
  background-color: #eee;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
`;
const Menu = styled.View`
  width: 100%;
  padding: 10px 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
const Divider = styled.View`
  width: 100%;
  height: 1px;
  background: #e4e4e4;
`;
const AppBar = () => {
  return (
    <>
      <Container>
        <Text>facebook</Text>
        <Row>
          <Button>
            <FontAwesome5 name="search" size={24} color="black" />
          </Button>
          <Button>
            <Ionicons name="person-circle-outline" size={26} color="black" />
          </Button>
          <Button>
            <FontAwesome name="reorder" size={24} color="black" />
          </Button>
        </Row>
      </Container>
      <Container>
        <Menu>
          <Entypo name="home" size={26} color="#1666f2" />
          <Ionicons name="people-outline" size={26} color="#404242" />
          <MaterialCommunityIcons
            name="facebook-messenger"
            size={26}
            color="#404242"
          />
          <MaterialIcons name="queue-play-next" size={26} color="#404242" />
          <MaterialIcons name="notifications-none" size={26} color="#404242" />
          <MaterialCommunityIcons
            name="account-group-outline"  
            size={26}
            color="#404242"
          />
        </Menu>
      </Container>
      <Divider />
    </>
  );
};

export default AppBar;
