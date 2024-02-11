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
  ul {
    display: flex;
    justify-content: space-between;
    max-width: 22rem;
    width: 100%;
    margin: 0 auto 2.5rem;
  }
`;

const ListItem = styled.li``;
