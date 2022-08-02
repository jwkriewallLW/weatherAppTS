//import CatFactComponent from "../components/catFactComponent/CatFactComponent";

import { Grid } from "@material-ui/core";
import { Button, ButtonGroup } from "@mui/material";
import { CatFact } from "../models/CatFactModel";


export const CatFactPage = () => {
    // return (
    //     <div>
    //         {/* <CatFactComponent/> */}
    //         <h1>Title</h1>
    //     </div>
    // )

    let catFact: CatFact = {
    fact: "Some fact",
    length: 4
  }

    return (
    <Grid container className="CatFactComponent_Container">
      <div>
      <ButtonGroup orientation="vertical">    
            <Button
              onClick={() => {
                alert('clicked');
                // requestCatFactContent();
                // addFact();
                
              }}            
              variant="contained"
              color="primary"
            >
              Request New Cat Fact
            </Button>
                      
          </ButtonGroup> 
          
      <p>Fact:</p><p>{catFact.fact}</p>
      <p>Length:</p><p>{catFact.length}</p>
      {/* <p>Cat Fact List:</p><ul>{catFactList.map((fact) => <div>{fact}</div>)}</ul> */}
      
        </div>
    </Grid>
    
  );

}

export default CatFactPage;

