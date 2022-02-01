import React from 'react'
import { createTheme, Pagination } from '@mui/material'
import { ThemeProvider } from '@material-ui/core';

const darkTheme = createTheme({
    palette: {
      type: "dark",
    },
  });

export const CustomPagination = ({setPage, numofpages=10}) => {

    const handlePageChange=(page)=>{
        setPage(page);
        window.scroll(0,0)
    };

    return (
        <div
        style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: 10,
          }}
          >
              <ThemeProvider theme={darkTheme}>
            <Pagination count={numofpages} onChange={(e)=>handlePageChange(e.target.textContent)} color="primary"
          hideNextButton
          hidePrevButton/>
          </ThemeProvider>
        </div>
    )
}
