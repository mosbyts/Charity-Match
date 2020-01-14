import React from "react";
import { Segment } from 'semantic-ui-react';

const ResultList = ({ children }) => {
  return (
    // <List divided verticalAlign='middle'>
    //     <List.Item>
    //         <List.Content>
    //             <List.Header>{children}</List.Header>
    //         </List.Content>
    //     </List.Item>
    // </List>
    <Segment>
        {children}
    </Segment>
  );
}
export default ResultList;
