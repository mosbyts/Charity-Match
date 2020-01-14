import React from 'react';
import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

class Survey extends Components {
    state = {}
    handleChange = (e, { value }) => this.setState({ value })
    
    return (
      <div>
          <div className="container">
              <h2>Find your charity match!</h2>
                <h5>Fill out the survey below.</h5>
                <Form>
                    <Form.Group>
                        <label>Which charitable cause are you most interested in supporting?</label>
                            <Form.radio
                                label='Animals and Wildlife'
                                value='XXX'
                                checked={value === 'XXX'}
                                onChange={this.handleChange}
                            />
                            <Form.radio
                                label='Community Development'
                                value='XXX'
                                checked={value === 'XXX'}
                                onChange={this.handleChange}
                            />
                            <Form.radio
                                label='Education'
                                value='XXX'
                                checked={value === 'XXX'}
                                onChange={this.handleChange}
                            />
                            <Form.radio
                                label='Environment'
                                value='XXX'
                                checked={value === 'XXX'}
                                onChange={this.handleChange}
                            />
                            <Form.radio
                                label='Health and Wellness'
                                value='XXX'
                                checked={value === 'XXX'}
                                onChange={this.handleChange}
                            />
                            <Form.radio
                                label='Human Services'
                                value='XXX'
                                checked={value === 'XXX'}
                                onChange={this.handleChange}
                            />
                            <Form.radio
                                label='Research and Public Policy'
                                value='XXX'
                                checked={value === 'XXX'}
                                onChange={this.handleChange}
                            />
                    </Form.Group>
                    <Form.Group>
                        <label>I want to help a fundraising only organization.</label>
                            <Form.radio
                                label='True'
                                value='True'
                                checked={value === 'TRUE'}
                                onChange={this.handleChange}
                            />
                            <Form.radio
                                label='False'
                                value='FALSE'
                                checked={value === 'FALSE'}
                                onChange={this.handleChange}
                            />
                    </Form.Group>
                    <Form.Group>
                        <label>Where will your organization operate?</label>
                            <Form.radio
                                label='Regionally'
                                value='REGIONAL'
                                checked={value === 'REGIONAL'}
                                onChange={this.handleChange}
                            />
                            <Form.radio
                                label='Nationally'
                                value='NATIONAL'
                                checked={value === 'NATIONAL'}
                                onChange={this.handleChange}
                            />
                            <Form.radio
                                label='Internationally'
                                value='INTERNATIONAL'
                                checked={value === 'INTERNATIONAL'}
                                onChange={this.handleChange}
                            />
                    </Form.Group>
                    <Form.Group>
                        <label>I would like an organization that is supported by the government.</label>
                            <Form.radio
                                label='True'
                                value='True'
                                checked={value === 'TRUE'}
                                onChange={this.handleChange}
                            />
                            <Form.radio
                                label='False'
                                value='FALSE'
                                checked={value === 'FALSE'}
                                onChange={this.handleChange}
                            />
                    </Form.Group>
                    <Form.Button>Submit</Form.Button>
                </Form>
          </div>
      </div>
    )
};

export default Survey;
