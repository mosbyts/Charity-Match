import React from "react";
import { List } from 'semantic-ui-react';

export function resultList({ children }) {
  return (
    <List divided verticalAlign='middle'>
        <List.Item>
            <List.Content>
                <List.Header>{children}</List.Header>
            </List.Content>
        </List.Item>
    </List>
  );
}

