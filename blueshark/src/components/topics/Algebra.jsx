import React from 'react'

export default function Algebra () {
return (



    <div className="Math-container">
            <div className="question-container">
                <h1> Question 1</h1>
                        <div className="question">
                            <h2> 
                                If 4X = 48, what is 1/2 of (3X + 4)?
                            </h2>
                        </div>
                        <div className="answers">
                            <ul>
                               <li>a. 20 </li> 
                               <li>b. 18 </li> 
                               <li>c. 12 </li> 
                               <li>d. 6</li> 
                            </ul>
                            
                            
                            
                            </div>   
                        <div className="explanation">
                            <p> Choice A is correct <br />

                            We can expect the SAT math to be not difficult in the depth of its questions, but moreso tricky about how their wording and content.
                            One thing to recognize in this question is that as we go through the different parts of the question, we will see some of the numbers we are working with in the answer choices.
                            This is a trap used by the SAT question writers to try and trick the student, especially as the test goes on and students get more tired and less focus. 



                            </p>
                        </div>
                    
            </div>


            <div className="question-container">
                <h1> Question 2</h1>
                        <div className="question">
                         
                        <h2> 
                             At his side job editing papers, Frank charges $60 for the first 2 hours and $30 per hour after the first 2 hours. 
                             Which of the following expresses the amount, N, in dollars, Frank charges if it takes him x hours to edit a manuscript, 
                             where x > 2?

                            </h2>
                        </div>
                        <div className="answers">
                            <ul>
                               <li>a. N = $30x - $75 </li> 
                               <li>b.  N = $30x + $10 </li> 
                               <li>c.  N = $30x + $75 </li> 
                               <li>d . N = $20x + $75</li> 
                            </ul>
                            
                            
                            
                            </div>   
                        <div className="explanation">
                            <p> Choice C is correct. <br />
                            Because there is a set rate of $60 for the first 2 hours, and $30 for each additional, 
                                we are looking for an answer that has $75 and increases by $30 for each hour (x). 
                                This allows us to eliminate choice B. Because we do not have $10 anywhere in the question. It also allows us to eliminate choice D because
                                we are increasing by $30/hour, not $20. Finally, as the end price will include the inital $75, not reduced, we can remove choice A. 
                                This leaves choice C to be correct, as $30 per hour will be added to the initial $75 charge  </p>
                        </div>
                    
            </div>

            <div className="question-container">
                <h1> Question 3</h1>
                        <div className="question">
                            <h2>  −2x = 4y + 6 < br />
                                   2(2y + 3) = 3x − 5 <br />

                                   What is the solution (x, y) to the system of equations above?

              </h2>
                        </div>
                        <div className="answers">
                            <ul>
                               <li>a (1 , 2) </li> 
                               <li>b. (1, -2) </li> 
                               <li>c. (-1, -1) </li> 
                               <li>d. (-1, 1) </li> 
                            </ul>
                            
                            
                            
                            </div>   
                        <div className="explanation">
                            <p> Choice B is correct.  <br />
                            This is an example of a system you can solve more efficiently by
                            substitution. Since −2x = 4y + 6, it follows that −x = 2y + 3. Now you can substitute −x for 2y + 3 in the second equation. This gives you
                            2(−x) = 3x − 5, which simplifies to 5x = 5, or x = 1. Substituting 1 for x in the first equation gives you −2 = 4y + 6, which simplifies to 4y = −8,or y = −2. Therefore, the solution to the system is (1, −2)</p>
                        </div>
                    
            </div>

    </div>
)

}