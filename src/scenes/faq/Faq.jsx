import { Accordion, AccordionDetails, AccordionSummary, Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import React from "react";
import { ExpandMore } from "@mui/icons-material";

const Faq = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Question" />
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography color={colors.greenAccent[500]} variant="h5">
          An Important Question
        </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolorem, natus modi ex illum minima, tenetur eaque accusamus veniam ratione repudiandae explicabo magni fugit. Molestias iste distinctio nesciunt saepe incidunt.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography color={colors.greenAccent[500]} variant="h5">
          An Important Question
        </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolorem, natus modi ex illum minima, tenetur eaque accusamus veniam ratione repudiandae explicabo magni fugit. Molestias iste distinctio nesciunt saepe incidunt.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography color={colors.greenAccent[500]} variant="h5">
          An Important Question
        </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolorem, natus modi ex illum minima, tenetur eaque accusamus veniam ratione repudiandae explicabo magni fugit. Molestias iste distinctio nesciunt saepe incidunt.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography color={colors.greenAccent[500]} variant="h5">
          An Important Question
        </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolorem, natus modi ex illum minima, tenetur eaque accusamus veniam ratione repudiandae explicabo magni fugit. Molestias iste distinctio nesciunt saepe incidunt.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography color={colors.greenAccent[500]} variant="h5">
          An Important Question
        </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolorem, natus modi ex illum minima, tenetur eaque accusamus veniam ratione repudiandae explicabo magni fugit. Molestias iste distinctio nesciunt saepe incidunt.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Faq;
