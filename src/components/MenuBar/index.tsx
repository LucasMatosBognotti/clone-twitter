import React from 'react';

import Button from '../../components/Button';

import { Container, Topside, Logo, MenuButton, HomeIcon, BellIcon, EmailIcon, FavoriteIcon, ProfileIcon, Botside, Avatar, ProfileData, ExitIcon } from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Topside>
        <Logo />

        <MenuButton>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>

        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>

        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>

        <MenuButton>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButton>

        <MenuButton>
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>

        <Button>
          <span>Tweetar</span>
        </Button>
      </Topside>

      <Botside>
        <Avatar />

        <ProfileData>
          <strong>Lucas Matos</strong>
          <span>@lucas_matos</span>
        </ProfileData>

        <ExitIcon />
      </Botside>

    </Container>
  );
}

export default MenuBar;