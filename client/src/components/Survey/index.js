import React from 'react';

function Survey() {
    return (
      <div>
          <div className="container">
              <h2>Charity Match Survey</h2>
                <form>
                    <h4>Which charitable cause are you most interested in supporting?</h4>
                        <input type="radio">Education</input>
                        <input type="radio">Environment</input>
                        <input type="radio">Health and Wellness</input>
                        <input type="radio">Human Services and Welfare</input>
                        <input type="radio">Wildlife</input>
                    <h4>Question 2</h4>
                        <input type="radio">Answer 1</input>
                        <input type="radio">Answer 2</input>
                        <input type="radio">Answer 3</input>
                        <input type="radio">Answer 4</input>
                    <h4>Question 3</h4>
                        <input type="radio">Answer 1</input>
                        <input type="radio">Answer 2</input>
                        <input type="radio">Answer 3</input>
                        <input type="radio">Answer 4</input>
                    <h4>Question 4</h4>
                        <input type="radio">Answer 1</input>
                        <input type="radio">Answer 2</input>
                        <input type="radio">Answer 3</input>
                        <input type="radio">Answer 4</input>
                    <h4>Question 5</h4>
                        <input type="radio">Answer 1</input>
                        <input type="radio">Answer 2</input>
                        <input type="radio">Answer 3</input>
                        <input type="radio">Answer 4</input>
                </form>
          </div>
      </div>
    )
};

export default Survey;