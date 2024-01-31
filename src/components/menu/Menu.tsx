import styled from "styled-components";

// type MenuProps = {
//   menuItems: string[]
// }

export const Menu = (props: { menuItems: string[] }) => {
  return (
    <StyledMenu>
      <ul>
        {props.menuItems.map((item) => (
          <li key={item}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
  }
`;
