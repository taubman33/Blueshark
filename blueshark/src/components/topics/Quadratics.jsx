import React from 'react'

function Quadratics () {
return (
    <div className="Math-container">
            <div className="question-container">
                <h1> Question 1</h1>
                        <div className="question">
                            <h2> 
                                What is the quadratic equation form of (X + 7) (X - 6)? 
                            </h2>
                        </div>
                        <div className="answers">
                            <ul>
                               <li>a. X<sup>2</sup> + x + 42 </li> 
                               <li>b. X<sup>2</sup> + x - 42</li> 
                               <li>c. X<sup>2</sup> - x - 1 </li> 
                               <li>d .X<sup>2</sup> + x + 1</li> 
                            </ul>
                            </div>   
            </div>

            <div className="question-container">
                <h1> Question 2</h1>
                        <div className="question">
                            <h2> 
                              What are the solutions to quadratic equation 2x<sup>2</sup> +3x - 2 ?
                            </h2>
                        </div>
                        <div className="answers">
                            <ul>
                               <li>a. 2 & -.5 </li> 
                               <li>b. 2 & .5</li> 
                               <li>c. -2 & .5</li> 
                               <li>d. -2 & -5. </li> 
                            </ul>
                            </div>
            </div>

            <div className="question-container">
                <h1> Question 3</h1>
                        <div className="question">
                            <h2> 
                                Which of the following is true about a parabola with the equation 2x<sup>2</sup> + 4x - 6 = 0 ?
                            </h2>
                        </div>
                        <div className="answers">
                            <ul>
                               <li>a. Its vertex will be at its minimum point and it will have -3 as one of its solutions </li> 
                               <li>b. Its vertex will be at its minimum point and it will have 3 as one of its solutions</li> 
                               <li>c. Its vertex will be at its maximum point and it will have -3 as one of its solutions</li> 
                               <li>d. Its vertex will be at its maximum point and it will have 3 as one of its solutions</li> 
                            </ul>
                        </div>   
      
                    
            </div>

            <div className= "answer-container">
                <h2> Answers</h2>
                <div className="explanation">
                        <h2>Question 1</h2>
                            <p> Choice B is correct <br/>
                            We can use our simple FOIL (First, Outer, Inner, Last) method to solve this. Once all like-terms are combined, we are left with the equation of
                            X<sup>2</sup> + x - 42. Note that the answer choices have many similarities; the test expects you to know your math, but they also expect you to be drained, tired, and prone to making careless mistakes. Always double check that you are putting in the right answer! </p>
                        </div>
                <div className="explanation">
                        <h2>Question 2</h2>
                            <p> Choice C is correct <br/>
                            Using our quadratic formula, we find that the solutions to this equation are -2 and .5 The other solution sets will not work if plugged in.
                            As you may have noticed, the digits in each answer were the same, but + and - were different in each. The test makers expect you to understand the math,
                            they also expect you to get tripped up by details, especially as the test goes on. Expect to see answer choices like this, and stay vigilant to avoid careless errors.
                            </p>
                            </div>
                <div className="explanation">
                        <h2>Question 3</h2>
                            <p> Choice A is correct <br/>
                            This type of question, which you can absolutely expect to see on the test, has four answer choices that are very similar. 
                            To solve this, we will need to know our basic math skills, but also some vocabulary. First, we know that if the lead variable is positive, the parabola will be positive, meaning its vertex will be at the bottom, its minimal value.
                            </p>
                            </div>

    </div>
    </div>
)
}

export default Quadratics