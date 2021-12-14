import React from 'react';
import Grid from '../elements/Grid';
import Button from '../elements/Button';
import { history } from '../redux/configureStore';

const Header = (props) =>{
    return(
        <Grid is_flex>
            <Grid padding="10px" borderBottom="1px solid #DBDBDB" ><img src = "insta.png" /></Grid>
           

        </Grid>
    )
}

export default Header;