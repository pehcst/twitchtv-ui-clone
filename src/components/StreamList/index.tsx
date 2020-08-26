import React from "react";

import streamImg from "../../images/itsme.jpeg";

import {
  List,
  StreamContainer,
  StreamThumbnail,
  StreamColumn,
  StreamRow,
  StreamHeader,
  StreamAvatar,
  StreamUser,
  StreamDescription,
  StreamCategory,
  TagRow,
  TagView,
  TagText,
} from "./styles";

const StreamList: React.FC = () => {
  const StreamItem = () => (
    <StreamContainer>
      <StreamThumbnail source={streamImg}></StreamThumbnail>
      <StreamColumn>
        <StreamRow>
          <StreamHeader>
            <StreamAvatar />
            <StreamUser>pehcst</StreamUser>
          </StreamHeader>
          <StreamDescription numberOfLines={1}>
            Awesome text here
          </StreamDescription>
          <StreamCategory numberOfLines={1}>Awesome Category</StreamCategory>
        </StreamRow>
        <TagRow>
          <TagView>
            <TagText>Title</TagText>
          </TagView>
          <TagView>
            <TagText>Awesome Title</TagText>
          </TagView>
        </TagRow>
      </StreamColumn>
    </StreamContainer>
  );
  return (
    <List>
      <StreamItem />
      <StreamItem />
      <StreamItem />
      <StreamItem />
    </List>
  );
};

export default StreamList;
