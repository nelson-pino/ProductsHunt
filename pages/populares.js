import styled from "@emotion/styled";
import Layout from "../components/layout/Layout";

const Heading = styled.h1`
  color: blue;
`;

export default function populares() {
  return (
    <div>
      <Layout>
        <Heading>Populares</Heading>
      </Layout>
    </div>
  );
}
