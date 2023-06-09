
import { FormEvent, useState } from 'react'
import { useRef, useEffect } from 'react'
import React from 'react';
import { useRouter } from "next/router";
import Head from "next/head"
import axios from 'axios'

export async function getServerSideProps() {

    const number1 = Math.floor(Math.random() * 13);
    const number2 = Math.floor(Math.random() * 13);
    const number3 = Math.floor(Math.random() * 13);
    const number4 = Math.floor(Math.random() * 13);
    const number5 = Math.floor(Math.random() * 13);
    const mul = Math.floor(Math.random() * (5 - 2 + 1) + 2)

    return {
        props: { number1: String(number1), number2: String(number2), number3: String(number3), number4: String(number4), number5: String(number5), mul: String(mul) },
    };
}

export default function MentalArithmeticTaskHard({ number1, number2, number3, number4, number5, mul }) {
    const numbers = ["Multiply" + " " + mul + " " + "to", number1, number2, number3, number4, number5]
    const addNumber1 = Number(number1) * Number(mul)
    const addNumber2 = Number(number2) * Number(mul)
    const addNumber3 = Number(number3) * Number(mul)
    const addNumber4 = Number(number4) * Number(mul)
    const addNumber5 = Number(number5) * Number(mul)

    const [index, setIndex] = useState(0)

    const correctAudio = useRef()
    const wrongAudio = useRef()

    const [answer1, setAnswer1] = useState("")
    const [answer2, setAnswer2] = useState("")
    const [answer3, setAnswer3] = useState("")
    const [answer4, setAnswer4] = useState("")
    const [answer5, setAnswer5] = useState("")

    const router = useRouter()
    const clockTick = useRef()

    let [counter, setCounter] = useState(24);
    const intervalRef = useRef();
    intervalRef.current = counter

    let [timecounter, setTimeCounter] = useState(300);
    const timeintervalRef = useRef();
    timeintervalRef.current = timecounter

    useEffect(() => {
        const _timer = setInterval(() => {
            if (intervalRef.current == 0) {
                clearInterval(_timer);
            } else {
                setCounter(intervalRef.current - 1);
            }
        }, 1000);
        return () => clearInterval(_timer);
    }, []);

    useEffect(() => {
        const tick = () => setIndex(i => i + 1);
        const id = setInterval(tick, 2000);
        //setStarted(true)
        return () => clearInterval(id);
    }, []);

    async function captureScreen(){
        await axios.get('http://localhost:8765/recording/capture/')
      }

    async function stopRecording(){
        await axios.get('http://localhost:8765/recording/stop/')
    }

    if (counter === 0) {
        router.push('/hard')
        setCounter(25)
        setIndex(-1)
    }

    if (counter === 1){
        wrongAudio.current.play();
        clockTick.current.play()
    }

    useEffect(() => {
        const _timetimer = setInterval(() => {
          if (timeintervalRef.current == 0) {
            clearInterval(_timetimer);
          } else {
            setTimeCounter(timeintervalRef.current - 1);
          }
        }, 1000);
        return () => clearInterval(_timetimer);
    }, []);

    if (timecounter === 0) {
        router.push('/session7Instructions')
        captureScreen()
        stopRecording()
    }

    const submitContact = async (event) => {
        event.preventDefault()
        if ((addNumber1 == event.target.answer1.value) && (addNumber2 == event.target.answer2.value)
            && (addNumber3 == event.target.answer3.value) && (addNumber4 == event.target.answer4.value) && (addNumber5 == event.target.answer5.value)) {
            correctAudio.current.play();
            alert(`CORRECT`)
            setCounter(26)
            setIndex(-1)
        }
        else {
            wrongAudio.current.play();
            alert(`INCORRECT`)
            setCounter(26)
            setIndex(-1)
        }
        clockTick.current.play()
        router.push('/hard')
    }

    return (
        <div className="main-container">
            <Head>
                <title>Mental Arithmetic Task</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="main">
                <div className='main-box'>
                <div className='main-elements'>
                    <h1>{numbers[index]}</h1>
                </div>

                <audio src='/Error-beep-sound-effect.mp3' ref={correctAudio}></audio>
                <audio src='/Game-show-buzzer-sound.mp3' ref={wrongAudio}></audio>
                <audio src='/clock-ticking-53528.mp3' ref={clockTick}></audio>
                
                <form onSubmit={submitContact}>
                    

                    { (counter >= 11) ?
                        <div> </div>
                        :
                        <>{((counter != 0) && (counter != 1))?
                            <><div className='box2'>
                                
                                <div className='box2'>
                                    Enter digit 1
                                    <input type="text" autocomplete="off" id="intext3" name="answer1" onChange={(e) => { setAnswer1(e); }} />
                                </div>
                                <div className='box2'>
                                    Enter digit 2
                                    <input type="text" autocomplete="off" id="intext3" name="answer2" onChange={(e) => { setAnswer2(e); }} />
                                </div>
                                <div className='box2'>
                                    Enter digit 3
                                    <input type="text" autocomplete="off" id="intext3" name="answer3" onChange={(e) => { setAnswer3(e); }} />
                                </div>
                                <div className='box2'>
                                    Enter digit 4
                                    <input type="text" autocomplete="off" id="intext3" name="answer4" onChange={(e) => { setAnswer4(e); }} />
                                </div>
                                <div className='box2'>
                                    Enter digit 5
                                    <input type="text" autocomplete="off" id="intext3" name="answer5" onChange={(e) => { setAnswer5(e); }} />
                                </div>
                            </div>
                            <div className='box2'>
                                <button className='btn'> Submit </button>
                            </div></>
                            :
                            <div className='digitSpanTimeout'>Timeout!⏰</div>
                        }</>
                }
                </form>
                </div>
            </div>
        </div>
    )
}