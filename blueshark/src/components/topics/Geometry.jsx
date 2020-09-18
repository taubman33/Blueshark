import React from 'react'

export default function Geometry () {
return (
    <div className="Math-container">
            <div className="question-container">
                <h1> Question 1</h1>
                        <div className="question">
                            <h2> 
                                About how much larger is the volume of a basketball with a diameter of 11" than a baseball with a radius of 1.5"?
                            </h2>
                        </div>
                        <div className="answers">
                            <ul>
                               <li>a. 703.3" </li> 
                               <li>b. 682.8"</li> 
                               <li>c. 540.4"</li> 
                               <li>d. 230.5"</li> 
                            </ul>             
                            </div>   
                 
            </div>

            <div className="question-container">
                <h1> Question 2</h1>
                        <div className="question">
                            <h2> 
                                Farmer Green has a flat-topped grain silo that with a diameter of 10'.  
                                He wishes to expand its volume by adding a cone to the top of it with a height of 4'. 
                                If the original volume of the silo is 500 cubic ft, what is the volume of the silo with the coned top?
                            </h2>
                        </div>
                        <div className="answers">
                            <ul>
                               <li>a. 803.4' </li> 
                               <li>b. 604.7'</li> 
                               <li>c. 560.5'</li> 
                               <li>d. 104.2'</li> 
                            </ul>
                            
                            
                            
                            </div>   
                        
                    
            </div>

            <div className="question-container">
                <h1> Question 3</h1>
                        <div className="question">
                            <h2> 
                                For his cousin's Super Bowl party, Corey wants to bring over some pizzas. There will be about 6 people there, and he is not sure if he should bring one regular pizza with a 22" diameter, or two smaller pizzas with 14" diameters each?
                                Which of the two options will have a greater amount of pizza, based on the area of the pies, and by how much?
                            </h2>
                        </div>
                        <div className="answers">
                            <ul>
                               <li>a. The 22" Pizza will have more pizza, by 120 sq. inches </li> 
                               <li>b. The 22" Pizza will have more pizza, by 74 sq. inches </li> 
                               <li>c. The two 14" Pizzas will have more pizza, by 74 sq. inches</li> 
                               <li>d. The two 14" Pizzas will have more pizza, by 120 sq. inches</li> 
                            </ul>
 
                            </div>   
                     
                    
            </div>

            <div className= "answer-container">
            <h2> Answers</h2>
            <div className="explanation">
                <h2>Question 1 </h2>
                            <p> Choice B is correct <br />
                            One thing to remember when working with volume is that small changes can produce large differences. As we are cubing (to the 3rd power) the radius, we will see much larger volumes, even when the change in radius seems small. 
                            Of course, we do not have to memorize the equations for every shape, as these will be provided at the first page of the math sections.
                            The equation for the volume of a sphere is 4/3 π r<sup>3</sup>. So, our baseball with a radius of 1.5" will have a volume of 14.14"<sup>3</sup>,
                            while our basketball with a diameter of 11" (which means a radius of 6.5", always check to make sure which measurement the test is giving you - expect them to try and trick you with some!)
                            is going to have a substantially larger volume; 696.91"<sup>3</sup>. We can find the difference to be around 682. 
                            
                            </p>
                        </div>

                        <div className="explanation">
                        <h2>Question 2</h2>
                            <p> Choice B is correct <br/> 
                            The forumla for the volume of a cone is (πr<sup>2</sup>)*(h/3). If you think that is an annoying formula, you are correct. 
                            Once again, the SAT does not expect you to memorize every obscure geometric formula. 
                            It does however expect you to be sharp enough to go back and check the formulas they've given, rather than guessing, or giving up.
                            With the formula, we can deduct that the cone with a height of 4' and a radius of 5' (remember! Radius = 1/2 the Diameter!) will have a volume of
                            104.72'<sup>3</sup>. Adding this to our original 500 cubic ft, we end up with 604.72 as our final answer. Yes, the volume of the cone by itself was also an answer choice! 
                            Do not be surprised to see this happen on the test, they are testing your reading comprehension and attention to detail as much as they are testing your mathematical skills! </p>
                        </div>


                        <div className="explanation">
                        <h2>Question 3</h2>
                            <p> Choice B. is correct <br/>
                            You can expect to see a few questions about the area of circles on the test, and the "Two Pizzas vs One" is a classic.
                            As long as you dont confuse the variables (Radius vs Diameter being the main one) and equations, they should all be simple enough.
                            Using our "Apple Pie's Are Too" mnemonic, or just checking out the first page of the math section, we know our equation for area of a circle is A = π r<sup>2</sup>.
                            Since our Pizzas are measured in diameter, we just have to divide each by 2 to get the radius. Once we plug in our radii (thats the plural for radius, kids!) we see that the larger pizza has an area of 380 sq. inches, while the smaller has an area of 153 sq. inches. 
                            Even if two of the smaller pizzas were ordered, their combined area of 306 would still be about 74 sq inches less than one of the larger pizzas. Even moreso if you have someone who doesn't like the crusts!
                            </p>
                        </div>


    </div>

    </div>
)
}
