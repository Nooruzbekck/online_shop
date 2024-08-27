import { styled } from "@mui/material";
import LogoImage from "../../assets/images/logo.png";
import UserIcon from "../../assets/icons/user-icon.svg?react";
import FavoriteIcon from "../../assets/icons/favorite-icon.svg?react";
import CartIcon from "../../assets/icons/cart-icon.svg?react";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledLogoImage src={LogoImage} alt="logo online-shop" />

      <HeaderList>
        <HeaderListItem>
          <UserIcon />
          <span>Войти</span>
        </HeaderListItem>

        <HeaderListItem>
          <FavoriteIcon />
          <span>Избранные</span>
        </HeaderListItem>

        <HeaderListItem>
          <CartIcon />
          <span>Корзина</span>
        </HeaderListItem>
      </HeaderList>
    </StyledHeader>
  );
};

const StyledHeader = styled("header")({
  height: "123px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 122px 0 118px",
});

const StyledLogoImage = styled("img")({
  width: "255px",
  height: "55.55px",
});

const HeaderList = styled("ul")({
  listStyle: "none",
  display: "flex",
  gap: "4px",
  alignItems: "center",
});

const HeaderListItem = styled("li")({
  width: "78px",
  height: "64px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  svg: {
    height: "20px",
  },
});
