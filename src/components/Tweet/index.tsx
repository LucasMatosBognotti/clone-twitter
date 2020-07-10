import React from 'react';

import { Container, Retweeted, AndroidIcon, Body, Avatar, Content, Header, Dot, Description, ImageContent, Icons, Status, CommentIcon, RetweetIcon, LikeIcon } from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <AndroidIcon />
        Voce retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Rocketseat</strong>
            <span>@rocketseat</span>
            <Dot />
            <time> 8/de jun</time>
          </Header>

          <Description>Foguete não tem ré</Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              181
            </Status>
            <Status>
              <RetweetIcon />
              134
            </Status>
            <Status>
              <LikeIcon />
              153
            </Status>
          </Icons>

        </Content>
      </Body>

    </Container>
  );
}

export default Tweet;