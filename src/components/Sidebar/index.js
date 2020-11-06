import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SideBtnWrapper,
  SidebarRoute,
} from "./SidebarElements";

function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/">Pizzas</SidebarLink>
        <SidebarLink to="/">Desserts</SidebarLink>
        <SidebarLink to="/">Full Menu</SidebarLink>
      </SidebarMenu>
      <SideBtnWrapper>
        <SidebarRoute to="/">Order Now</SidebarRoute>
      </SideBtnWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;
