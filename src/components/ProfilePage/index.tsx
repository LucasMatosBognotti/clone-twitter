import React from 'react';

import Feed from '../Feed';

import { Container, Banner, Avatar, ProfileData, EditButton, LocationIcon, CakeIcon, Followage } from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      
      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
      
        <h1>Lucas Matos</h1>
        <h2>@lucas_matos</h2>

        <p>
          Developer at Arroz
        </p>

        <ul>
          <li>
            <LocationIcon />
            Franca, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 4 de outubro de 1997
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>100</strong>
          </span>
          <span>
            <strong>672 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
}

export default ProfilePage;