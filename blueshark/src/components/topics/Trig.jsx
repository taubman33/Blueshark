import React from 'react'

export default function Trig () {
return (
    <div className="Math-container">
           
                        <div className="question-container">
                            <h1> Question 1</h1>
                                    <div className="question">
                                        <h2> 
                                            Two sides of a right triangle are 120,000 and 130,000, what is the length of the other side?
                                        </h2>
                                    </div>
                                    <div className="answers">
                                        <ul>
                                        <li>a. 110,000 </li> 
                                        <li>b. 100,000</li> 
                                        <li>c. 80,000</li> 
                                        <li>d. 50,000</li> 
                                        </ul>
                                        
                                        
                                        
                                        </div>   
                                    <div className="explanation">
                                        <p> Choice D is correct. <br/>
                                            There are two seperate ways to solve this question. The first is through the Pythagoream theorum:
                                            We know that a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>, so we can plug in 120,000<sup>2</sup>  + X<sup>2</sup>  = 130,000<sup>2</sup> to find the answer.
                                            The simpler way to solve this question is by remembering our "magic" Pythagorean Triplets. There are many (literally infinite) of these, but the 3 sets to remember are: <br />
                                             [3, 4 & 5], [5, 12 & 13], [8, 15 &  17] 
                                            These are handy to remember and can save you a few valuble seconds if you recognize the pattern of the triples. 
                                            As you can see, 130,000, 120,000 and 60,000 are just large mulitples of 13, 12, and 6, with all of the additional 0's there as a way to confuse you the test taker.
                                            Expect to see multiples of these used (6, 8, 10 or 15, 36, 39 for example) in at least 3 questions across the test. 
                                            If you feel more comfortable simply doing the equations, go for it, but taking the time to recognize these triplets and seeing how they relate can be beneficial in the end. 

                                         
                                        </p>
                                    </div>
                                
                        </div>

                    <div className="question-container">
                        <h1> Question 2 </h1>
                                <div className="question">
                                    <h2> 
                                        In equilateral trangle ABC, line BC is bisected by line AD. If line BD is 3', what is the perimeter of triangle ABC?
                                    </h2>
                                </div>
                                <div className="answers">
                                    <ul>
                                    <li>a. 20' </li> 
                                    <li>b. 18' </li> 
                                    <li>c. 9'</li> 
                                    <li>d. 6'</li> 
                                    </ul>
                                    
                                    
                                    
                                    </div>   
                                <div className="explanation">
                                    <p> Choice A is correct. <br />
                                        As we know, when a line is bisected, it is cut into two equal halves. So if BD is 3', we can infer that line BC is 6'. 
                                        We know the perimieter of a triangle is the sum of its 3 sides. Becuase triangle ABC is equilateral, all we have to do is multiply 6' by 3 sides, putting the perimeter to 18'.
                                        Remember that in addition to your math skills, the SAT will be testing you on your vocabulary as well. 
                                        
                                         </p>
                                </div>
                                </div>
       <div className="question-container">
                        <h1> Question 3 </h1>
                                <div className="question">
                                    <h2> 
                                   Triangle MOE is a right, isoceles triangle. </h2>
                                </div>
                                <div className="answers">
                                    <ul>
                                    <li>a. 20' </li> 
                                    <li>b. 18' </li> 
                                    <li>c. 9'</li> 
                                    <li>d. 6'</li> 
                                    </ul>
                                    
                                    
                                    
                                    </div>   
                                <div className="explanation">
                                    <p> Choice A is correct. <br />
                                        As we know, when a line is bisected, it is cut into two equal halves. So if BD is 3', we can infer that line BC is 6'. 
                                        We know the perimieter of a triangle is the sum of its 3 sides. Becuase triangle ABC is equilateral, all we have to do is multiply 6' by 3 sides, putting the perimeter to 18'.
                                        Remember that in addition to your math skills, the SAT will be testing you on your vocabulary as well. 
                                        
                                         </p>
                                </div>



                </div>

        

         </div>

)

}