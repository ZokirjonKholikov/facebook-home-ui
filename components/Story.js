import React from "react";
import styled from "styled-components/native";
import { ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Avatar from "./Avatar";

const Container = styled.View`
  width: 100%;
  height: 192px;
  flex-direction: row;
  align-items: center;
`;
const Card = styled.View`
  width: 106px;
  height: 170px;
  position: relative;
  margin-right: 8px;
`;
const CardStory = styled.Image`
  width: 100%;
  height: 170px;
  border-radius: 12px;
`;
const CardUser = styled.View`
  position: absolute;
  top: 8px;
  left: 8px;
  background-color: #fff;
  border-radius: 20px;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
`;
const CardFooter = styled.View`
  width: 100%;
  position: absolute;
  bottom: 12px;
  left: 9px;
`;
const Text = styled.Text`
  font-size: 13px;
  font-weight: bold;
  color: #fff;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);
`;
const BottomDivider = styled.View`
  width: 100%;
  height: 9px;
  background: #afafaf;
`;
const Story = () => {
  return (
    <>
      <Container>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ paddingLeft: 11 }}
        >
          <Card>
            <CardStory source={require("../assets/images/01.jpg")} />
            <CardUser>
              <AntDesign name="plus" size={24} color="#1777f2" />
            </CardUser>
            <CardFooter>
              <Text>Add To Story</Text>
            </CardFooter>
          </Card>
          <Card>
            <CardStory source={require("../assets/images/02.jpg")} />
            <CardUser>
              <Avatar
                source={require("../assets/images/02.jpg")}
                story={true}
              />
            </CardUser>
            <CardFooter>
              <Text>Gabriel J</Text>
            </CardFooter>
          </Card>
          <Card>
            <CardStory source={require("../assets/images/03.jpg")} />
            <CardUser>
              <Avatar
                source={require("../assets/images/03.jpg")}
                story={true}
              />
            </CardUser>
            <CardFooter>
              <Text>John Doe</Text>
            </CardFooter>
          </Card>
          <Card>
            <CardStory source={require("../assets/images/04.jpg")} />
            <CardUser>
              <Avatar
                source={require("../assets/images/04.jpg")}
                story={true}
              />
            </CardUser>
            <CardFooter>
              <Text>John Doe</Text>
            </CardFooter>
          </Card>
        </ScrollView>
      </Container>
      <BottomDivider />
    </>
  );
};

export default Story;
