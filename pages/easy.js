import { FormEvent, useState } from 'react'
import { useRef, useEffect } from 'react'
import React from 'react';
import { useRouter } from "next/router";
import Head from "next/head"
import axios from 'axios'

export async function getServerSideProps() {

    const number1 = Math.floor(Math.random() * 10 + 1);
    const number2 = Math.floor(Math.random() * 10 + 1);
    const number3 = Math.floor(Math.random() * 10 + 1);
    const add = Math.floor(Math.random() * 5)

    return {
        props: { number1: String(number1), number2: String(number2), number3: String(number3), add: String(add) },
    };
}

export default function MentalArithmeticTaskEasy({ number1, number2, number3, add }) {
    const numbers = ["Add" + " " + add + " " + "to", number1, number2, number3]
    const addNumber1 = Number(add) + Number(number1)
    const addNumber2 = Number(add) + Number(number2)
    const addNumber3 = Number(add) + Number(number3)

    const [index, setIndex] = useState(0)

    const correctAudio = useRef()
    const wrongAudio = useRef()
    const audioElem = useRef()

    const [answer1, setAnswer1] = useState("")
    const [answer2, setAnswer2] = useState("")
    const [answer3, setAnswer3] = useState("")

    const router = useRouter()

    let [counter, setCounter] = useState(28);
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
        const id = setInterval(tick, 3500);
        return () => clearInterval(id);
    }, []);

    async function captureScreen(){
        await axios.get('http://localhost:8765/recording/capture/')
      }

    async function stopRecording(){
        await axios.get('http://localhost:8765/recording/stop/')
    }

    if (counter === 0) {
        router.push('/easy')
        setCounter(30)
        setIndex(-1)
    }

    if (counter === 1){
        //wrongAudio.current.play()
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
        router.push('/session5Instructions')
        captureScreen()
        stopRecording()
    }

    const submitContact = async (event) => {
        event.preventDefault()
        if ((addNumber1 == event.target.answer1.value) && (addNumber2 == event.target.answer2.value)
            && (addNumber3 == event.target.answer3.value)) {
            //correctAudio.current.play();
            alert(`CORRECT`)
            setCounter(30)
            setIndex(-1)
        }
        else {
            //wrongAudio.current.play();
            alert(`INCORRECT`)
            setCounter(30)
            setIndex(-1)
        }
        router.push('/easy')
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
                <audio src='/a-kitchen-timer-55420.mp3' ref={audioElem}></audio>
                
                <form onSubmit={submitContact}>
                    

                    { (counter >= 13) ?
                        <div> </div>
                        :
                        <>{((counter != 0) && (counter != 1))?
                            <><div className='box2'>
                                
                                <div className='box2'>
                                    Enter digit 1
                                    <input type="text" autoComplete="off" id="intext3" name="answer1" onChange={(e) => { setAnswer1(e); }} />
                                </div>
                                <div className='box2'>
                                    Enter digit 2
                                    <input type="text" autoComplete="off" id="intext3" name="answer2" onChange={(e) => { setAnswer2(e); }} />
                                </div>
                                <div className='box2'>
                                    Enter digit 3
                                    <input type="text" autoComplete="off" id="intext3" name="answer3" onChange={(e) => { setAnswer3(e); }} />
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
