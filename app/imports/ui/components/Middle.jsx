import React from 'react';
import { Grid, Header, Image } from 'semantic-ui-react';

export default class Middle extends React.Component {
  render() {
    return (
        <div className='murphys-background'>
          <Grid container verticalAlign='middle' style={{ height: '500px' }}>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Image src='http://murphyshawaii.com/media/2014/04/murphyshawaiilogo.png'/>
              </Grid.Column>
              <Grid.Column textAlign='center'>
                <Header as='h3' style={{ color: 'white' }}>
                  A traditional downtown saloon and eatery located in the Honolulu Financial District,
                   just one block off the waterfront, Murphy’s has been a haven for mariners, businessmen
                   and locals since 1891.</Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    );
  }
}
