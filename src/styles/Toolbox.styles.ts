import styled from "styled-components";

const SkillsListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75em;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const Skill = styled.li`
  padding: 0.4em;
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: 4px;
  margin: 0;
  font-size: 1rem;
  font-weight: 400;
`;

export {Skill, SkillsListContainer}