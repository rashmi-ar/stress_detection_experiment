import React, { useState } from 'react'
import utilStyles from '../styles/utils.module.css'
import Head from 'next/head'
import { useRef } from 'react'

export default function PreQuestionnaireform() {

  const [next, setNext] = useState(false)
  const divRef = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const form = e.target

    // Get data from the form.
    const data = {
      full_name: form.full_name.value,
      age: form.age.value,
      sex: form.sex.value,
      listenToMusic: form.listenToMusic.value,
      mentallyAlert: form.mentallyAlert.value,
      focused: form.focused.value,
      soothing: form.soothing.value,
      math: form.math.value,
      memoryGame: form.memoryGame.value,
    }

    const response = await fetch('http://localhost:3000/api/pre_form', {
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
      <Head>
        <title>Pre-questionnaire form</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={utilStyles.heading2Xl}>Session 1</section>
      <h1><u>Pre-questionnaire form</u></h1>
      <p className={utilStyles.headingLg}> <b>
        Please feel relaxed. Try to answer the following questions as sincerely as possible. In case of any doubt, contact the instructor.
      </b></p>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="full_name"><b>1. Full Name</b></label>
          <input type="text" id="full_name" name="full_name" autocomplete="off" required />
        </div>

        <label htmlFor="age"><b>2. Age</b></label>
        <input type="text" id="age" name="age" autocomplete="off" required />

        <label htmlFor="sex"><b>3. Sex</b></label>
        <select name="sex" id="sex" required >
          <option value="select">Select</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="others">Others</option>
          <option value="prefer_not_to_say">Prefer not to say</option>
        </select>
        <p>

        </p>

        <label htmlFor="listenToMusic"><b>4.	Do you listen to music?</b></label>
        <ul className={utilStyles.likert} >
          <li> <br />never</li>
          <li><input type="radio" name="listenToMusic" value="1" required /></li>
          <li><input type="radio" name="listenToMusic" value="2" required /></li>
          <li><input type="radio" name="listenToMusic" value="3" required /></li>
          <li><input type="radio" name="listenToMusic" value="4" required /></li>
          <li><input type="radio" name="listenToMusic" value="5" required /></li>
          <li><input type="radio" name="listenToMusic" value="6" required /></li>
          <li><input type="radio" name="listenToMusic" value="7" required /></li>
          <li> <br />very often</li>
        </ul>

        <label htmlFor="mentallyAlert"><b>5.	How mentally alert do you feel at the present time? </b></label>
        <ul className={utilStyles.likert}>
          <li> <br />not alert</li>
          <li><input type="radio" name="mentallyAlert" value="1" required /></li>
          <li><input type="radio" name="mentallyAlert" value="2" required /></li>
          <li><input type="radio" name="mentallyAlert" value="3" required /></li>
          <li><input type="radio" name="mentallyAlert" value="4" required /></li>
          <li><input type="radio" name="mentallyAlert" value="5" required /></li>
          <li><input type="radio" name="mentallyAlert" value="6" required /></li>
          <li><input type="radio" name="mentallyAlert" value="7" required /></li>
          <li> <br />very alert</li>
        </ul>

        <label htmlFor="focused"><b>6.	Does music help you to stay focused? </b></label>
        <ul className={utilStyles.likert}>
          <li> <br />not much</li>
          <li><input type="radio" name="focused" value="1" required /></li>
          <li><input type="radio" name="focused" value="2" required /></li>
          <li><input type="radio" name="focused" value="3" required /></li>
          <li><input type="radio" name="focused" value="4" required /></li>
          <li><input type="radio" name="focused" value="5" required /></li>
          <li><input type="radio" name="focused" value="6" required /></li>
          <li><input type="radio" name="focused" value="7" required /></li>
          <li> <br />very much</li>
        </ul>

        <label htmlFor="soothing"><b>7. Do repetitive soothing tracks make you fall asleep? </b></label>
        <ul className={utilStyles.likert}>
          <li> <br />not much</li>
          <li><input type="radio" name="soothing" value="1" required /></li>
          <li><input type="radio" name="soothing" value="2" required /></li>
          <li><input type="radio" name="soothing" value="3" required /></li>
          <li><input type="radio" name="soothing" value="4" required /></li>
          <li><input type="radio" name="soothing" value="5" required /></li>
          <li><input type="radio" name="soothing" value="6" required /></li>
          <li><input type="radio" name="soothing" value="7" required /></li>
          <li> <br />very much</li>
        </ul>

        <label htmlFor="math"><b>8.	How good are you at basic mathematics?</b></label>
        <ul className={utilStyles.likert}>
          <li> <br />very bad</li>
          <li><input type="radio" name="math" value="1" required /></li>
          <li><input type="radio" name="math" value="2" required /></li>
          <li><input type="radio" name="math" value="3" required /></li>
          <li><input type="radio" name="math" value="4" required /></li>
          <li><input type="radio" name="math" value="5" required /></li>
          <li><input type="radio" name="math" value="6" required /></li>
          <li><input type="radio" name="math" value="7" required /></li>
          <li> <br />very good</li>
        </ul>

        <label htmlFor="memoryGame"><b>9.	Have you ever played any memory game? </b></label>
        <ul className={utilStyles.likert}>
          <li> <br />never</li>
          <li><input type="radio" name="memoryGame" value="1" required /></li>
          <li><input type="radio" name="memoryGame" value="2" required /></li>
          <li><input type="radio" name="memoryGame" value="3" required /></li>
          <li><input type="radio" name="memoryGame" value="4" required /></li>
          <li><input type="radio" name="memoryGame" value="5" required /></li>
          <li><input type="radio" name="memoryGame" value="6" required /></li>
          <li><input type="radio" name="memoryGame" value="7" required /></li>
          <li> <br />very often</li>
        </ul>

        <button type="submit" onClick={() =>  divRef.current.scrollIntoView({ behavior: "smooth" })}>Submit</button>
        
        {next ?
          (<div>
            <a href='/audio'>Go to next session</a>
          </div>)
          :
          <div></div>
        }
        <div className='scrollDown' ref={divRef}></div>
      </form>
    </div>
  )
}

