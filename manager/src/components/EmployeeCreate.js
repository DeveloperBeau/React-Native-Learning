import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component {
  state = {};
  render() {
    return (
      <Card>
        <CardSection>
          <Input label="Name" placeholder="Jane Harvey" />
        </CardSection>

        <CardSection>
          <Input label="Phone" placeholder="03 9999 9999" />
        </CardSection>

        <CardSection />

        <CardSection>
          <Button>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

export default EmployeeCreate;
