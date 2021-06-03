import styled from "@emotion/styled";
import Layout from "../components/layout/Layout";

const Heading = styled.h1`
  color: blue;
`;

export default function Buscar() {
  return (
    <div>
      <Layout>
        <Heading>Buscar</Heading>
      </Layout>
    </div>
  );
}
