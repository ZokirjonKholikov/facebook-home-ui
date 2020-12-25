import React from "react";
import { ScrollView, View } from "react-native";
import styled from "styled-components/native";
import Avatar from "./Avatar";
import { Entypo, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
const Container = styled.View`
  flex: 1;
`;
const Header = styled.View`
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 6px;
  padding: 0 11px;
`;
const Row = styled.View`
  align-items: center;
  flex-direction: row;
`;
const User = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #222121;
`;
const Time = styled.Text`
  font-size: 9px;
  color: #747476;
`;
const Post = styled.Text`
  font-size: 12px;
  color: #222121;
  line-height: 16px;
  padding: 0 11px;
`;
const Photo = styled.Image`
  width: 100%;
  height: 300px;
  margin-top: 9px;
`;
const Footer = styled.View`
  padding: 0 11px;
`;
const FooterCount = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 9px 0;
`;
const IconCount = styled.View`
  background-color: #1878f3;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;
const IconCountHeart = styled.View`
  background-color: red;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  align-items: center;
  margin-left: -2px;
  justify-content: center;
  border-color: #fff;
`;
const TextCount = styled.Text`
  font-size: 11px;
  color: #424040;
  margin-left: 2px;
`;

const Separator = styled.View`
  width: 100%;
  height: 1px;
  background-color: #f9f9f9;
`;
const FooterMenu = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 9px 0;
`;
const Button = styled.TouchableOpacity`
  flex-direction: row;
  background-color: #f0f2f5;
  width: 100px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 20px;
`;
const Icon = styled.View`
  margin-right: 6px;
`;
const Text = styled.Text`
  font-size: 14px;
  color: #424040;
  margin-top: 2px;
`;
const BottomDivider = styled.View`
  width: 100%;
  height: 10px;
  background: #afafaf;
`;
const Feed = () => {
  return (
    <>
      <Container>
        <Header>
          <Row>
            <Avatar source={require("../assets/images/03.jpg")} />
            <View style={{ paddingLeft: 10 }}>
              <User>John Doe</User>
              <Row>
                <Time>9m ago</Time>
                <Entypo name="dot-single" size={12} color="#747476" />
                <Entypo name="globe" size={10} color="#747476" />
              </Row>
            </View>
          </Row>
          <Entypo name="dots-three-horizontal" size={12} color="#222121" />
        </Header>
        <Post>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas,
          adipisci.
        </Post>
        <Photo source={require("../assets/images/02.jpg")} />
        <Footer>
          <FooterCount>
            <Row>
              <IconCount>
                <AntDesign name="like1" color="#fff" size={12} />
              </IconCount>
              <IconCountHeart>
                <AntDesign name="heart" color="#fff" size={12} />
              </IconCountHeart>
              <TextCount>88</TextCount>
            </Row>
          </FooterCount>
          <Separator />
          <FooterMenu>
            <Button>
              <Icon>
                <AntDesign name="like2" color="#424040" size={22} />
              </Icon>
              <Text>80K</Text>
            </Button>
            <Button>
              <Icon>
                <MaterialCommunityIcons
                  name="comment-outline"
                  color="#424040"
                  size={22}
                />
              </Icon>
              <Text>22K</Text>
            </Button>
            <Button>
              <Icon>
                <MaterialCommunityIcons
                  name="share-outline"
                  color="#424040"
                  size={22}
                />
              </Icon>
              <Text>1.5K</Text>
            </Button>
          </FooterMenu>
        </Footer>
      </Container>
      <BottomDivider />
      <Container>
        <Header>
          <Row>
            <Avatar source={require("../assets/images/04.jpg")} />
            <View style={{ paddingLeft: 10 }}>
              <User>John Doe</User>
              <Row>
                <Time>9m ago</Time>
                <Entypo name="dot-single" size={12} color="#747476" />
                <Entypo name="globe" size={10} color="#747476" />
              </Row>
            </View>
          </Row>
          <Entypo name="dots-three-horizontal" size={12} color="#222121" />
        </Header>
        <Post>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          laudantium necessitatibus accusantium animi, eius deleniti esse earum
          consequuntur quas architecto ab mollitia alias, iusto distinctio, a
          veritatis? Nam, reprehenderit assumenda.
        </Post>
        <Photo source={require("../assets/images/04.jpg")} />
        <Footer>
          <FooterCount>
            <Row>
              <IconCount>
                <AntDesign name="like1" color="#fff" size={12} />
              </IconCount>
              <IconCountHeart>
                <AntDesign name="heart" color="#fff" size={12} />
              </IconCountHeart>
              <TextCount>8K</TextCount>
            </Row>
          </FooterCount>
          <Separator />
          <FooterMenu>
            <Button>
              <Icon>
                <AntDesign name="like2" color="#424040" size={22} />
              </Icon>
              <Text>25K</Text>
            </Button>
            <Button>
              <Icon>
                <MaterialCommunityIcons
                  name="comment-outline"
                  color="#424040"
                  size={22}
                />
              </Icon>
              <Text>20</Text>
            </Button>
            <Button>
              <Icon>
                <MaterialCommunityIcons
                  name="share-outline"
                  color="#424040"
                  size={22}
                />
              </Icon>
              <Text>1K</Text>
            </Button>
          </FooterMenu>
        </Footer>
      </Container>
    </>
  );
};

export default Feed;
