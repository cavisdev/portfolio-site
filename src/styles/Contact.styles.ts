import styled from "styled-components";

const ContactContainer = styled.div`
  ${({ theme }) => theme.mainDisplay};
  justify-content: center;
  margin: 0 auto;
  min-height: 302px;
  gap: 2rem;
`;

const Text = styled.p`
  margin: 0;
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  line-height: 3.5rem;
  width: 100%;

  .green {
    color: ${({ theme }) => theme.colors.green};
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 4rem;
`;

const SocialLink = styled.a`
  opacity: 0.5;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  & img {
    height: 64px;
    stroke: ${({ theme }) => theme.colors.green};
  }
`;

const ContactButton = styled.a`
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    opacity: 0.75;
  }

  @media only screen and (min-width: 680px) {
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

export { ContactContainer, Text, ContactButton, Socials, SocialLink };
