import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Accardion = ({instructions}) => {
    const renderAcc = instructions?.map((el, index) => {
      const shit = el.slice(0,1).map(el=>{
       return el.replace('strInstructions','')
      }).join('')
      return(
        <Accordion key={index}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >

          <Typography sx={{ width: '33%', flexShrink: 0 }}>
          {shit?shit:'ENG'}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {el.slice(1)}
          </Typography>
        </AccordionDetails>
      </Accordion>
      )
       
})


    return (
        <div>
           {renderAcc}
        </div>
    );
};

export default Accardion;