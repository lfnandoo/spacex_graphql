import React from "react";

import * as Styles from "./styles";

import { gql, useQuery } from "@apollo/client";

const GET_MISSIONS = gql`
  query Missions {
    missions {
      name
      description
      id
    }
  }
`;

interface IMission {
  name: string;
  description: string;
  id: string;
}

interface IMissionsData {
  missions: IMission[];
}

const Home: React.FC = () => {
  const { loading, error, data } = useQuery<IMissionsData | null>(GET_MISSIONS);

  if (loading) return <p>Carregando...</p>;

  if (error) return <p>Ocorreu um erro</p>;

  return (
    <Styles.Container>
      {data?.missions.map(({ name, description, id }: IMission) => (
        <Styles.Card key={id}>
          <h1>{name}</h1>
          <p>{description}</p>
        </Styles.Card>
      ))}
    </Styles.Container>
  );
};

export default Home;
