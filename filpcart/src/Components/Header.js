import React from "react";
import { AppBar, Box, Toolbar, Typography, styled } from "@mui/material";
import Search from "./Search";
import CustomButtons from "./CustomButtons";

const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
  min-height: 0px;
`;
const Sublogo = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Toolbar style={{minHeight:"55px"}}>
        <Box style={{ marginLeft: "12%", "line-height": 0 }}>
          <img
            src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
            alt="logo"
            style={{
              width: 75,
            }}
          />

          <Box style={{ display: "flex" }}>
            <Sublogo>
              Explore&nbsp;
              <Box component="span" color="#ffE500">
                Plus
              </Box>
            </Sublogo>

            <img
              src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
              alt="sublogo"
              style={{
                height: 11.5,
                marginLeft: 3,
              }}
            />
          </Box>
        </Box>
        <Search/>
        
        <Box >
        <CustomButtons/>
        </Box>
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;
