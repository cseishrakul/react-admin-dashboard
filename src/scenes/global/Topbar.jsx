import { useTheme } from "@emotion/react";
import React, { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import { Box, IconButton, InputBase } from "@mui/material";
import {
  DarkModeOutlined,
  LightModeOutlined,
  Notifications,
  PersonOutlined,
  Settings,
} from "@mui/icons-material";
import { GridSearchIcon } from "@mui/x-data-grid";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={2}
      width="100%"
    >
      {/* Search Box */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <GridSearchIcon />
        </IconButton>
      </Box>

      {/* Icons */}
      <Box display="flex" alignItems="center">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlined />
          ) : (
            <LightModeOutlined />
          )}
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
        <IconButton>
          <Settings />
        </IconButton>
        <IconButton>
          <PersonOutlined />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
