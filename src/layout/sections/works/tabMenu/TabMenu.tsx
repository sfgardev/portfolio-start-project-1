import styled from "styled-components";
import { Link } from "../../../../components/Link";

export const TabMenu = (props: { menuItems: string[] }) => {
  return (
    <StyledTabMenu>
      <ul>
        {props.menuItems.map((item) => (
          <ListItem key={item}>
            <Link href={`#${item}`}>{item}</Link>
          </ListItem>
        ))}
      </ul>
    </StyledTabMenu>
  );
};

const StyledTabMenu = styled.nav`
  margin-bottom: 2.5rem;

  ul {
    display: flex;
    justify-content: center;
    gap: 1.25rem;
  }
`;

const ListItem = styled.li``;
