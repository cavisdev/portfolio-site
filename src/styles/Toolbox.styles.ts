import styled from "styled-components";

const SkillsListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75em;
`;

const Skill = styled.div`
  padding: 0.4em;
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 4px;
  margin: 0;
  font-size: 1rem;
  font-weight: 400;
`;

export {Skill, SkillsListContainer}