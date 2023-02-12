import styled from "styled-components";

export const LoginCard = styled.div`
  max-width: 70rem;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0 5px #ddd;
`;

export const LoginBorder = styled.div`
  box-shadow: 0 0 5px #ddd;
  padding: 6rem 1rem;
`;

export const LoginInsideGrid = styled.div`
  justify-content: space-between;
  max-width: 100%;
  margin: 0 auto;
  @media (min-width: 600px) {
    display: flex;
    max-width: 45rem;
  }
`;

export const LeftBox = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-inline: auto;
  @media (min-width: 600px) {
    padding-right: 3rem;
    width: 100%;
  }
`;

export const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin-inline: auto;
  row-gap: 1rem;

  @media (min-width: 600px) {
    padding-left: 3rem;
    width: 100%;
  }
`;

export const LoginText = styled.h1`
  margin: 0;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.6;
  letter-spacing: 0.0075em;
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const TrustDeviceText = styled.h1`
  margin: 0;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  line-height: 1.43;
  letter-spacing: 0.01071em;
  color: #5e5b5d;
  font-size: 0.8rem;
  font-weight: 400;
`;

export const BottomLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 3rem;
  text-align: center;
`;

type LinkTextInput = {
  margin?: string;
};

export const LinkText = styled.h1<LinkTextInput>`
  margin: 0;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  line-height: 1.43;
  letter-spacing: 0.01071em;
  font-size: 0.9rem;
  font-weight: 400;
  margin-bottom: ${({ margin }) => (margin ? margin : 0)};
`;
