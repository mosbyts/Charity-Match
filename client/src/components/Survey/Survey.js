import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class Survey extends Component {
    state = {
        question1: " ",
        question2: " ",
        question3: " ",
        question4: " ",
        subQuestion1: " ",
        subQuestion2: " ",
        subQuestion3: " ",
        subQuestion4: " "
    }
    handleQ1Change = (e, { value }) => {
        this.setState({question1: value});
    };
    handleQ2Change = (e, { value }) => {
        this.setState({question2: value});
    };
    handleQ3Change = (e, { value }) => {
        this.setState({question3: value});
    };
    handleQ4Change = (e, { value }) => {
        this.setState({question4: value});
    };
    handleSubmit = () => {
        const { question1, question2, question3, question4 } = this.state
    
        this.setState({ subQuestion1: question1, subQuestion2: question2, subQuestion3: question3, subQuestion4: question4 })
    }
    
    render () {
    const {subQuestion1, subQuestion2, subQuestion3, subQuestion4} = this.state
    return (    
          <div className="container">
            <h2>Find your charity match!</h2>
            <h5>Fill out the survey below.</h5>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <label>Which charitable cause are you most interested in supporting?</label>
                            <Form.Radio
                                label='Animals and Wildlife'
                                value='AW'
                                name='radio1'
                                checked={this.state.question1 === 'AW'}
                                onChange={this.handleQ1Change}
                            />
                            <Form.Radio
                                label='Community Development'
                                value='CD'
                                name='radio1'
                                checked={this.state.question1 === 'CD'}
                                onChange={this.handleQ1Change}
                            />
                            <Form.Radio
                                label='Education'
                                value='Ed'
                                name='radio1'
                                checked={this.state.question1 === 'Ed'}
                                onChange={this.handleQ1Change}
                            />
                            <Form.Radio
                                label='Environment'
                                value='Env'
                                name='radio1'
                                checked={this.state.question1 === 'Env'}
                                onChange={this.handleQ1Change}
                            />
                            <Form.Radio
                                label='Health and Wellness'
                                value='HW'
                                name='radio1'
                                checked={this.state.question1 === 'HW'}
                                onChange={this.handleQ1Change}
                            />
                            <Form.Radio
                                label='Human Services'
                                value='HS'
                                name='radio1'
                                checked={this.state.question1 === 'HS'}
                                onChange={this.handleQ1Change}
                            />
                            <Form.Radio
                                label='Research and Public Policy'
                                value='RPP'
                                name='radio1'
                                checked={this.state.question1 === 'RPP'}
                                onChange={this.handleQ1Change}
                            />
                    </Form.Field>
                    <Form.Field>
                        <label>I want to help a fundraising only organization.</label>
                            <Form.Radio
                                label='True'
                                value='true'
                                name='radio2'
                                checked={this.state.question2 === 'true'}
                                onChange={this.handleQ2Change}
                            />
                            <Form.Radio
                                label='False'
                                value='false'
                                name='radio2'
                                checked={this.state.question2 === 'false'}
                                onChange={this.handleQ2Change}
                            />
                    </Form.Field>
                    <Form.Field>
                        <label>Where will your organization operate?</label>
                            <Form.Radio
                                label='Regionally'
                                value='REGIONAL'
                                name='radio3'
                                checked={this.state.question3 === 'REGIONAL'}
                                onChange={this.handleQ3Change}
                            />
                            <Form.Radio
                                label='Nationally'
                                value='NATIONAL'
                                name='radio3'
                                checked={this.state.question3 === 'NATIONAL'}
                                onChange={this.handleQ3Change}
                            />
                            <Form.Radio
                                label='Internationally'
                                value='INTERNATIONAL'
                                name='radio3'
                                checked={this.state.question3 === 'INTERNATIONAL'}
                                onChange={this.handleQ3Change}
                            />
                    </Form.Field>
                    <Form.Field>
                        <label>I would like an organization that is supported by the government.</label>
                            <Form.Radio
                                label='True'
                                value='true'
                                name='radio4'
                                checked={this.state.question4 === 'true'}
                                onChange={this.handleQ4Change}
                            />
                            <Form.Radio
                                label='False'
                                value='false'
                                name='radio4'
                                checked={this.state.question4 === 'false'}
                                onChange={this.handleQ4Change}
                            />
                    </Form.Field>
                    <Form.Button>Submit</Form.Button>
                </Form>
                <pre>{JSON.stringify({ subQuestion1, subQuestion2, subQuestion3, subQuestion4 }, null, 2)}</pre>
          </div>
    )}
}

export default Survey;
