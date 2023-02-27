import { useState, useEffect } from "react";
import './game.css'
const allWords = [
  "valid",
  "crane",
  "smell",
  "spell",
  "brick",
  "movie",
  "radio",
  "print",
  "bloom",
  "scarf",
  "apply",
  "argue",
  "cheer",
  "again",
  "alert",
  "allow",
  "angle",
  "array",
]
const rightWord = allWords[Math.floor(Math.random() * allWords.length)].toLocaleUpperCase()
console.log('正确答案是：'+rightWord);

export default function Game() {
  const keys = [
    ['Q','W','E','R','T','Y','U','I','O','P'],
    ['A','S','D','F','G','H','J','K','L','Enter'],
    ['Z','X','C','V','B','N','M','Del']
  ]
  const [allGuess, setAllGuess] = useState([
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','','']
  ])
  let [currentGuessIndex, setCurrentGuessIndex] = useState(0)
  let [currentGuess, setCurrentGuess] = useState([])
  let temp = []
  const initTemp = () => {
    temp = JSON.parse(JSON.stringify(allGuess))
  }
  initTemp()

  useEffect(() => {
    console.log('currentGuess发生了变化，最新值：', currentGuess);
    if (currentGuess.join('') === rightWord) {
      alert('你赢了')
    }
}, [currentGuess]);

  const keyUp = (e, k) => {
    if (k === 'Enter') {
      if (currentGuess.length < 5) {
        alert('不足5个字母')
        return
      }
      currentGuessIndex+=1
      setCurrentGuessIndex(currentGuessIndex)
      setCurrentGuess([])
      initTemp()
    } else {
      if (k === 'Del') {
        currentGuess.pop()
      } else {
        if (currentGuess.length < 5) {
          currentGuess.push(k)
        }
      }
      setCurrentGuess([...currentGuess])
      temp[currentGuessIndex] = currentGuess
      setAllGuess(temp)
    }
  }
  return (
    <div className="container">
      <h1>wordle</h1>
      {allGuess.map((item, index) => {
        item.push(...new Array(5 - item.length).fill(''))
        return <div key={index} style={{display: 'flex', marginBottom: '4px'}}>
          {
            item.map((el, i) => {
              return <span className="letter" key={i} style={{backgroundColor: el ? (rightWord.includes(el) ? (el === rightWord[i] ? 'green' : 'yellow') : '#666') : ''}}>{el}</span>
            })
          }
        </div>
      })}
      {keys.map((item, index) => {
        return <div className={`row row-${index + 1}`} key={index}>
          {
            item.map(el => {
              return <span className={`key ${el}`} key={el} onClick={(e) => keyUp(e, el)}>{el}</span>
            })
          }
        </div>
      })}
    </div>
  )
};
