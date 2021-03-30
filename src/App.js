import styled, { ThemeProvider } from "styled-components";
import CommentListContainer from "./containers/CommentListContainers";
import FormContainer from "./containers/FormContainer";

const Wrap = styled.div`
  max-width: 700px;
  margin: 100px auto;
  border: 1px solid #1376be;
  border-radius: 7px;
`;

function App() {
  return (
    <ThemeProvider
      theme={{
        palette: {
          blue: "#228be6",
          pink: "#f06595",
          gray: "#878887",
        },
      }}
    >
      <Wrap>
        <CommentListContainer></CommentListContainer>
        <FormContainer></FormContainer>
      </Wrap>
    </ThemeProvider>
  );
}

export default App;
