import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import API from '../../utils/API';

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
        const userEmail = localStorage.getItem("LoginEmail");
        const { question1, question2, question3, question4 } = this.state
        const prefs = {
            "question1": question1,
            "question2": question2,
            "question3": question3,
            "question4": question4
        }
    
        this.setState({ subQuestion1: question1, subQuestion2: question2, subQuestion3: question3, subQuestion4: question4 })
        API.postPreferences(userEmail,prefs)
            .then(localStorage.setItem("LoginPrefs", JSON.stringify(prefs)))
            .catch(err => {console.log(err.response)});
        console.log(userEmail,prefs);
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render () {
    const {subQuestion1, subQuestion2, subQuestion3, subQuestion4} = this.state
    return (    
          <div className="container">
            <h5>Fill out the survey below to update your Charity Match preferences.</h5>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <label>Which charitable cause are you most interested in supporting?</label>
                            <Form.Radio
                                label='Animals and Wildlife'
                                value='1'
                                name='radio1'
                                checked={this.state.question1 === '1'}
                                onChange={this.handleQ1Change}
                            />
                            <Form.Radio
                                label='Community Development'
                                value='10'
                                name='radio1'
                                checked={this.state.question1 === '10'}
                                onChange={this.handleQ1Change}
                            />
                            <Form.Radio
                                label='Education'
                                value='3'
                                name='radio1'
                                checked={this.state.question1 === '3'}
                                onChange={this.handleQ1Change}
                            />
                            <Form.Radio
                                label='Environment'
                                value='4'
                                name='radio1'
                                checked={this.state.question1 === '4'}
                                onChange={this.handleQ1Change}
                            />
                            <Form.Radio
                                label='Health and Wellness'
                                value='5'
                                name='radio1'
                                checked={this.state.question1 === '5'}
                                onChange={this.handleQ1Change}
                            />
                            <Form.Radio
                                label='Human Services'
                                value='6'
                                name='radio1'
                                checked={this.state.question1 === '6'}
                                onChange={this.handleQ1Change}
                            />
                            <Form.Radio
                                label='Research and Public Policy'
                                value='11'
                                name='radio1'
                                checked={this.state.question1 === '11'}
                                onChange={this.handleQ1Change}
                            />
                    </Form.Field>
                    <Form.Field>
                        <label>I want to help a fundraising only organization.</label>
                            <Form.Radio
                                label='True'
                                value='TRUE'
                                name='radio2'
                                checked={this.state.question2 === 'TRUE'}
                                onChange={this.handleQ2Change}
                            />
                            <Form.Radio
                                label='False'
                                value='FALSE'
                                name='radio2'
                                checked={this.state.question2 === 'FALSE'}
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
                                value='TRUE'
                                name='radio4'
                                checked={this.state.question4 === 'TRUE'}
                                onChange={this.handleQ4Change}
                            />
                            <Form.Radio
                                label='False'
                                value='FALSE'
                                name='radio4'
                                checked={this.state.question4 === 'FALSE'}
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
