import styled from "@emotion/styled";
import Layout from "../components/layout/Layout";

const Heading = styled.h1`
  color: blue;
`;

export default function Home() {
  return (
    <div>
      <Layout>
        <Heading>Body App</Heading>
      </Layout>
    </div>
  );
}
