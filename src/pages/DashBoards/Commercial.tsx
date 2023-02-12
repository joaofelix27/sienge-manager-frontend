import InsideContainer from "../../components/InsideContainer";
import Container from "../../components/OutsideContainer";

export function Commercial() {
  return (
    <Container>
      <InsideContainer>
        <iframe
          title="Dashboard Comercial"
          width="100%"
          height="373.5"
          src="https://app.powerbi.com/view?r=eyJrIjoiMTViMjg4ZmMtMzI4MC00MWVhLTk5MzMtYzBkZDZhZjU3MTU2IiwidCI6IjVhM2UxZWI5LWM3NzctNDQ1YS04MjQyLWQ4MjVhNDYxYjEyYiJ9"
          allowFullScreen={true}
        ></iframe>
      </InsideContainer>
    </Container>
  );
}
