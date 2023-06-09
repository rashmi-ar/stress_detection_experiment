import React, { useState } from 'react';
import utilStyles from '../styles/utils.module.css'
import { useRouter } from 'next/router'
import { useRef } from 'react'

export default function PostQuestionnaireForm() {

    const [next, setNext] = useState(false)
    const divRef = useRef()
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = {
            attentive: e.target.attentive.value,
            distract: e.target.distract.value,
            physicallyRelaxed: e.target.physicallyRelaxed.value,
            mentallyRelaxed: e.target.mentallyRelaxed.value,
            physicallyStressed: e.target.physicallyStressed.value,
            mentallyStressed: e.target.mentallyStressed.value,
            disturbing: e.target.disturbing.value,
            concentrate: e.target.concentrate.value,
            holdAttention: e.target.holdAttention.value,
            effort: e.target.effort.value,
            relaxedGame4: e.target.relaxedGame4.value,
            relaxedGame5: e.target.relaxedGame5.value,
            relaxedGame6: e.target.relaxedGame6.value,
            stressedGame4: e.target.stressedGame4.value,
            stressedGame5: e.target.stressedGame5.value,
            stressedGame6: e.target.stressedGame6.value,
            easier: e.target.easier.value,
            difficult: e.target.difficult.value,
            anxious: e.target.anxious.value,
        }

        const response = await fetch('http://localhost:3000/api/post_form', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.text())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        setNext(true)
    }

    return (
        <div className="form_container">
            <section className={utilStyles.heading2Xl}>Session 7</section>
            <h1><u>Post-questionnaire form</u></h1>
            <p className={utilStyles.headingLg}> <b>
                Please try to answer the following questions as sincerely as possible. In case of any doubt, contact the instructor.
            </b></p>

            <form onSubmit={handleSubmit}>

                <label htmlFor="attentive"><b>1. How attentive were you while listening to the music?</b></label>
                <ul className={utilStyles.likert}>
                    <li> <br />not much</li>
                    <li><input type="radio" name="attentive" value="1" required /></li>
                    <li><input type="radio" name="attentive" value="2" required /></li>
                    <li><input type="radio" name="attentive" value="3" required /></li>
                    <li><input type="radio" name="attentive" value="4" required /></li>
                    <li><input type="radio" name="attentive" value="5" required /></li>
                    <li><input type="radio" name="attentive" value="6" required /></li>
                    <li><input type="radio" name="attentive" value="7" required /></li>
                    <li> <br />very much </li>
                </ul>

                <label htmlFor="distract"><b>2. To what extent did the music help you to distract from the surroundings?</b></label>
                <ul className={utilStyles.likert}>
                    <li> <br />not much</li>
                    <li><input type="radio" name="distract" value="1" required /></li>
                    <li><input type="radio" name="distract" value="2" required /></li>
                    <li><input type="radio" name="distract" value="3" required /></li>
                    <li><input type="radio" name="distract" value="4" required /></li>
                    <li><input type="radio" name="distract" value="5" required /></li>
                    <li><input type="radio" name="distract" value="6" required /></li>
                    <li><input type="radio" name="distract" value="7" required /></li>
                    <li> <br />very much </li>
                </ul>

                <p>

                </p>
                <label htmlFor="physicallyRelaxed"><b>3. To what extent did the music help you to physically relax?  </b></label>
                <ul className={utilStyles.likert}>
                    <li> <br />not much</li>
                    <li><input type="radio" name="physicallyRelaxed" value="1" required /></li>
                    <li><input type="radio" name="physicallyRelaxed" value="2" required /></li>
                    <li><input type="radio" name="physicallyRelaxed" value="3" required /></li>
                    <li><input type="radio" name="physicallyRelaxed" value="4" required /></li>
                    <li><input type="radio" name="physicallyRelaxed" value="5" required /></li>
                    <li><input type="radio" name="physicallyRelaxed" value="6" required /></li>
                    <li><input type="radio" name="physicallyRelaxed" value="7" required /></li>
                    <li> <br />very much</li>
                </ul>

                <label htmlFor="mentallyRelaxed"><b>4.	To what extent did the music help you to mentally relax? </b></label>
                <ul className={utilStyles.likert}>
                    <li> <br />not much</li>
                    <li><input type="radio" name="mentallyRelaxed" value="1" required /></li>
                    <li><input type="radio" name="mentallyRelaxed" value="2" required /></li>
                    <li><input type="radio" name="mentallyRelaxed" value="3" required /></li>
                    <li><input type="radio" name="mentallyRelaxed" value="4" required /></li>
                    <li><input type="radio" name="mentallyRelaxed" value="5" required /></li>
                    <li><input type="radio" name="mentallyRelaxed" value="6" required /></li>
                    <li><input type="radio" name="mentallyRelaxed" value="7" required /></li>
                    <li> <br />very much</li>
                </ul>

                <label htmlFor="physicallyStressed"><b>5.	To what extent did the music make you physically stressed? </b></label>
                <ul className={utilStyles.likert}>
                    <li> <br />not much</li>
                    <li><input type="radio" name="physicallyStressed" value="1" required /></li>
                    <li><input type="radio" name="physicallyStressed" value="2" required /></li>
                    <li><input type="radio" name="physicallyStressed" value="3" required /></li>
                    <li><input type="radio" name="physicallyStressed" value="4" required /></li>
                    <li><input type="radio" name="physicallyStressed" value="5" required /></li>
                    <li><input type="radio" name="physicallyStressed" value="6" required /></li>
                    <li><input type="radio" name="physicallyStressed" value="7" required /></li>
                    <li> <br />very much</li>
                </ul>

                <label htmlFor="mentallyStressed"><b>6. To what extent did the music make you mentally stressed?</b></label>
                <ul className={utilStyles.likert}>
                    <li> <br />not much</li>
                    <li><input type="radio" name="mentallyStressed" value="1" required /></li>
                    <li><input type="radio" name="mentallyStressed" value="2" required /></li>
                    <li><input type="radio" name="mentallyStressed" value="3" required /></li>
                    <li><input type="radio" name="mentallyStressed" value="4" required /></li>
                    <li><input type="radio" name="mentallyStressed" value="5" required /></li>
                    <li><input type="radio" name="mentallyStressed" value="6" required /></li>
                    <li><input type="radio" name="mentallyStressed" value="7" required /></li>
                    <li> <br />very much</li>
                </ul>

                <label htmlFor="disturbing"><b>7. To what extent did the music feel disturbing or sleepy? </b></label>
                <ul className={utilStyles.likert}>
                    <li> <br />not much</li>
                    <li><input type="radio" name="disturbing" value="1" required /></li>
                    <li><input type="radio" name="disturbing" value="2" required /></li>
                    <li><input type="radio" name="disturbing" value="3" required /></li>
                    <li><input type="radio" name="disturbing" value="4" required /></li>
                    <li><input type="radio" name="disturbing" value="5" required /></li>
                    <li><input type="radio" name="disturbing" value="6" required /></li>
                    <li><input type="radio" name="disturbing" value="7" required /></li>
                    <li> <br />very much</li>
                </ul>

                <br></br>
                <br></br>

                <label htmlFor="concentrate"><b>8. To what extent did the music help you to concentrate on the games?</b></label>
                <ul className={utilStyles.likert}>
                    <li> <br />not much</li>
                    <li><input type="radio" name="concentrate" value="1" required /></li>
                    <li><input type="radio" name="concentrate" value="2" required /></li>
                    <li><input type="radio" name="concentrate" value="3" required /></li>
                    <li><input type="radio" name="concentrate" value="4" required /></li>
                    <li><input type="radio" name="concentrate" value="5" required /></li>
                    <li><input type="radio" name="concentrate" value="6" required /></li>
                    <li><input type="radio" name="concentrate" value="7" required /></li>
                    <li> <br />very much</li>
                </ul>

                <label htmlFor="holdAttention"><b>9.	To what extent did the games hold your attention? </b></label>
                <ul className={utilStyles.likert}>
                    <li> <br />not much</li>
                    <li><input type="radio" name="holdAttention" value="1" required /></li>
                    <li><input type="radio" name="holdAttention" value="2" required /></li>
                    <li><input type="radio" name="holdAttention" value="3" required /></li>
                    <li><input type="radio" name="holdAttention" value="4" required /></li>
                    <li><input type="radio" name="holdAttention" value="5" required /></li>
                    <li><input type="radio" name="holdAttention" value="6" required /></li>
                    <li><input type="radio" name="holdAttention" value="7" required /></li>
                    <li> <br />very much</li>
                </ul>

                <label htmlFor="effort"><b>10.	How much effort did you put into playing the games? </b></label>
                <ul className={utilStyles.likert}>
                    <li> <br />not much</li>
                    <li><input type="radio" name="effort" value="1" required /></li>
                    <li><input type="radio" name="effort" value="2" required /></li>
                    <li><input type="radio" name="effort" value="3" required /></li>
                    <li><input type="radio" name="effort" value="4" required /></li>
                    <li><input type="radio" name="effort" value="5" required /></li>
                    <li><input type="radio" name="effort" value="6" required /></li>
                    <li><input type="radio" name="effort" value="7" required /></li>
                    <li> <br />very much</li>
                </ul>

                <label htmlFor="relaxedGame4"><b>11.	To what extent did you feel relaxed while playing session 4 (addition)?</b></label>
                <ul className={utilStyles.likert}>
                    <li> <br />not much</li>
                    <li><input type="radio" name="relaxedGame4" value="1" required /></li>
                    <li><input type="radio" name="relaxedGame4" value="2" required /></li>
                    <li><input type="radio" name="relaxedGame4" value="3" required /></li>
                    <li><input type="radio" name="relaxedGame4" value="4" required /></li>
                    <li><input type="radio" name="relaxedGame4" value="5" required /></li>
                    <li><input type="radio" name="relaxedGame4" value="6" required /></li>
                    <li><input type="radio" name="relaxedGame4" value="7" required /></li>
                    <li> <br />very much</li>
                </ul>

                <label htmlFor="relaxedGame5"><b>12.	To what extent did you feel relaxed while playing session 5 (subtraction)?</b></label>
                <ul className={utilStyles.likert}>
                    <li> <br />not much</li>
                    <li><input type="radio" name="relaxedGame5" value="1" required /></li>
                    <li><input type="radio" name="relaxedGame5" value="2" required /></li>
                    <li><input type="radio" name="relaxedGame5" value="3" required /></li>
                    <li><input type="radio" name="relaxedGame5" value="4" required /></li>
                    <li><input type="radio" name="relaxedGame5" value="5" required /></li>
                    <li><input type="radio" name="relaxedGame5" value="6" required /></li>
                    <li><input type="radio" name="relaxedGame5" value="7" required /></li>
                    <li> <br />very much</li>
                </ul>

                <label htmlFor="relaxedGame6"><b>13.	To what extent did you feel relaxed while playing session 6 (multiplication)?</b></label>
                <ul className={utilStyles.likert}>
                    <li> <br />not much</li>
                    <li><input type="radio" name="relaxedGame6" value="1" required /></li>
                    <li><input type="radio" name="relaxedGame6" value="2" required /></li>
                    <li><input type="radio" name="relaxedGame6" value="3" required /></li>
                    <li><input type="radio" name="relaxedGame6" value="4" required /></li>
                    <li><input type="radio" name="relaxedGame6" value="5" required /></li>
                    <li><input type="radio" name="relaxedGame6" value="6" required /></li>
                    <li><input type="radio" name="relaxedGame6" value="7" required /></li>
                    <li> <br />very much</li>
                </ul>

                <label htmlFor="stressedGame4"><b>14.	To what extent did you feel stressed while playing session 4 (addition)? </b></label>
                <ul className={utilStyles.likert}>
                    <li> <br />not much</li>
                    <li><input type="radio" name="stressedGame4" value="1" required /></li>
                    <li><input type="radio" name="stressedGame4" value="2" required /></li>
                    <li><input type="radio" name="stressedGame4" value="3" required /></li>
                    <li><input type="radio" name="stressedGame4" value="4" required /></li>
                    <li><input type="radio" name="stressedGame4" value="5" required /></li>
                    <li><input type="radio" name="stressedGame4" value="6" required /></li>
                    <li><input type="radio" name="stressedGame4" value="7" required /></li>
                    <li> <br />very much</li>
                </ul>

                <label htmlFor="stressedGame5"><b>15.	To what extent did you feel stressed while playing session 5 (subtraction)? </b></label>
                <ul className={utilStyles.likert}>
                    <li> <br />not much</li>
                    <li><input type="radio" name="stressedGame5" value="1" required /></li>
                    <li><input type="radio" name="stressedGame5" value="2" required /></li>
                    <li><input type="radio" name="stressedGame5" value="3" required /></li>
                    <li><input type="radio" name="stressedGame5" value="4" required /></li>
                    <li><input type="radio" name="stressedGame5" value="5" required /></li>
                    <li><input type="radio" name="stressedGame5" value="6" required /></li>
                    <li><input type="radio" name="stressedGame5" value="7" required /></li>
                    <li> <br />very much</li>
                </ul>

                <label htmlFor="stressedGame6"><b>16.	To what extent did you feel stressed while playing session 6 (multiplication)? </b></label>
                <ul className={utilStyles.likert}>
                    <li> <br />not much</li>
                    <li><input type="radio" name="stressedGame6" value="1" required /></li>
                    <li><input type="radio" name="stressedGame6" value="2" required /></li>
                    <li><input type="radio" name="stressedGame6" value="3" required /></li>
                    <li><input type="radio" name="stressedGame6" value="4" required /></li>
                    <li><input type="radio" name="stressedGame6" value="5" required /></li>
                    <li><input type="radio" name="stressedGame6" value="6" required /></li>
                    <li><input type="radio" name="stressedGame6" value="7" required /></li>
                    <li> <br />very much</li>
                </ul>

                <label htmlFor="easier"><b>17.	Which gaming session was easier? </b></label>
                <select name="easier" id="easier" required >
                    <option value="select">Select</option>
                    <option value="session4">Session 4 (Addition)</option>
                    <option value="session5">Session 5 (Subtraction)</option>
                    <option value="session6">Session 6 (Multiplication)</option>
                </select>
                <p>

                </p>
                <label htmlFor="difficult"><b>18.	Which gaming session was more difficult? </b></label>
                <select name="difficult" id="easdifficultier" required >
                    <option value="select">Select</option>
                    <option value="session4">Session 4 (Addition)</option>
                    <option value="session5">Session 5 (Subtraction)</option>
                    <option value="session6">Session 6 (Multiplication)</option>
                </select>
                <p>

                </p>
                <label htmlFor="anxious"><b>19.	Did the time limit make you feel anxious?</b></label>
                <ul className={utilStyles.likert}>
                    <li> <br />not much</li>
                    <li><input type="radio" name="anxious" value="1" required /></li>
                    <li><input type="radio" name="anxious" value="2" required /></li>
                    <li><input type="radio" name="anxious" value="3" required /></li>
                    <li><input type="radio" name="anxious" value="4" required /></li>
                    <li><input type="radio" name="anxious" value="5" required /></li>
                    <li><input type="radio" name="anxious" value="6" required /></li>
                    <li><input type="radio" name="anxious" value="7" required /></li>
                    <li> <br />very much</li>
                </ul>

                <button type="submit" onClick={() => divRef.current.scrollIntoView({ behavior: "smooth" })}>Submit</button>

                {next ?
                    (<div>
                        <a href='/thankyou'>End experiment</a>
                    </div>)
                    :
                    <div></div>
                }
                <div className='scrollDown' ref={divRef}></div>

            </form>
        </div>
    )
}

