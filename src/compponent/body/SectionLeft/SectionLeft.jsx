import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import DensitySmallSharpIcon from "@mui/icons-material/DensitySmallSharp";

import { Chip } from "@mui/material";
import Populate from "./Populate";
import Cloud from "./Cloud";
const SectionLeft = () => {
  return (
    <div className="sticky-top">
      <div className=" rounded bg-white">
        <div className="d-flex align-items-center">
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon color="warning"/>}
              aria-controls="panel1-content"
              id="panel1-header"
             
              style={{backgroundColor:"#072541" ,cursor: "pointer"}}
            >
              <Typography className="text-light fw-bolder">
                <DensitySmallSharpIcon />
                Category
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>



       <Populate/>
      </div>

     <Cloud/>
    </div>
  );
};

export default SectionLeft;
