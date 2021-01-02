import React, { useState, useReducer } from 'react';
import CharacterPickValue from './CharacterPickValue.js';
import './CharacterPick.css';

import f_healer from './images/characters/female/f_healer.png';
import f_mechanic from './images/characters/female/f_mechanic.png';
import f_solo from './images/characters/female/f_solo.png';
import f_trooper from './images/characters/female/f_trooper.png';

import m_healer from './images/characters/male/m_healer.png';
import m_mechanic from './images/characters/male/m_mechanic.png';
import m_solo from './images/characters/male/m_solo.png';
import m_trooper from './images/characters/male/m_trooper.png';

import minus from './images/minus.png';
import plus from './images/plus.png';

const skillSets = [
    {
        type: 'stamina',
        name: 'Stamina',
        value: 1,
    },
    {
        type: 'strength',
        name: 'Strength',
        value: 1,
    },
    {
        type: 'intelligence',
        name: 'Intelligence',
        value: 1,
    },
    {
        type: 'accuracy',
        name: 'Accuracy',
        value: 1,
    }
];

export default function CharacterPick() {
    const [initialSkillpoints, setInitialSkillpoints] = useState(10);
    
    const [staminaPoints, setStaminaPoints] = useState(0);
    const [strengthPoints, setStrengthPoints] = useState(0);
    const [intelligencePoints, setIntelligencePoints] = useState(0);
    const [accuracyPoints, setAccuracyPoints] = useState(0);

    let characterClassChosen = false;
    let gender = 'male';
    let healer = m_healer;
    let mechanic = m_mechanic;
    let solo = m_solo;
    let trooper = m_trooper;

    function changeSkillpoints(inc) {
        if (inc === true) {
            setInitialSkillpoints(initialSkillpoints => initialSkillpoints + 1);
        } else if (inc === false) {
            if (initialSkillpoints >= 1) {
                setInitialSkillpoints(initialSkillpoints => initialSkillpoints - 1);
            }
        }
    }

    function changeCharStats(skilltype, skillValue, inc) {
        switch(skilltype) {
            case 'stamina':
                if (inc === true) {
                    if (initialSkillpoints >= 1) {
                        console.log(initialSkillpoints);
                        skillSets[0].value++;
                        changeSkillpoints(false);
                    }
                } else if (inc === false) {
                    if (skillSets[0].value > 1) {
                        changeSkillpoints(true);
                        skillSets[0].value--;
                    }
                }
                break;
            case 'strength':
                if (inc === true) {
                    if (initialSkillpoints >= 1) {
                        console.log('Strength changed!');
                        skillSets[1].value++;
                        changeSkillpoints(false);
                    }
                } else if (inc === false) {
                    if (skillSets[1].value > 1) {
                        changeSkillpoints(true);
                        skillSets[1].value--;
                    }
                }
                break;
            case 'intelligence':
                if (inc === true) {
                    if (initialSkillpoints >= 1) {
                        changeSkillpoints(false);
                        skillSets[2].value++;
                        console.log('Intelligence changed!');
                    }
                } else if (inc === false) {
                    if (skillSets[2].value > 1) {
                        changeSkillpoints(true);
                        skillSets[2].value--;
                    }
                }
                break;
            case 'accuracy':
                if (inc === true) {
                    if (initialSkillpoints >= 1) {
                        changeSkillpoints(false);
                        skillSets[3].value++;
                        console.log('Accuracy changed!');
                    }
                } else if (inc === false) {
                    if (skillSets[3].value > 1) {
                        changeSkillpoints(true);
                        skillSets[3].value--;
                    }
                }
                break;
            default:
                console.log('OK!');
        }
    }

    function displayCharacterClassOnHover(characterClass) {
        let text = document.getElementById('displayClassname');
        if (!characterClassChosen) {
            text.style.opacity = 0.3;
            text.innerHTML = characterClass;
        }
    }

    function hideCharacterClass() {
        let text = document.getElementById('displayClassname');
        if (!characterClassChosen) {
            text.style.opacity = 1;
            text.innerHTML = '';
        }
    }

    function chooseCharacterClass(characterClass) {
        let text = document.getElementById('displayClassname');
        text.style.opacity = 1;
        text.innerHTML = characterClass;
        characterClassChosen = true;
    }
    
    function defineGender(g) {
        gender = g;
        if (gender === 'male') {
            healer = m_healer;
            mechanic = m_mechanic;
            solo = m_solo;
            trooper = m_trooper;
        } else if (gender === 'female') {
            healer = f_healer;
            mechanic = f_mechanic;
            solo = f_solo;
            trooper = f_trooper;
        }
    }

    return (
        <div className="wrapper">
            <div className="characterInformation">
                <div className="characterInfoform">
                <h2>Create your own character:</h2>
                <br />
                <label htmlFor="name">Character name</label><br />
                <input className="contactInformation" id="name" name="name" type="text" maxLength="20" autoComplete="off"></input>
                <br />
                <label htmlFor="email">Email</label><br />
                <input className="contactInformation" id="email" name="email" type="email" autoComplete="off"></input>
                <br />
                <label htmlFor="password">Password</label><br />
                <input className="contactInformation" id="password" name="password" type="password"></input>
                <br />
                <label htmlFor="confirmPassword">Confirm password</label><br />
                <input className="contactInformation" id="confirmPassword" name="confirmPassword" type="password"></input>
                <br />
                <br />
                </div>
                <div className="genderRadioContainer">
                    <p>Choose gender</p>
                    <form id="genderForm">
                        <label htmlFor="male">Male: </label>
                        <input className="gender" type="radio" name="gender" value="male" checked="checked" onClick={() => {defineGender('male')}} />
                        <label htmlFor="female">Female: </label>
                        <input className="gender" type="radio" name="gender" value="female" onClick={() => {defineGender('female')}} />
                    </form>
                    <br />
                </div>
                <div className="characterGraphicalIcons">
                    <button className="characterButton"
                        onMouseOver={() => {displayCharacterClassOnHover("Healer")}}
                        onMouseLeave={() => {hideCharacterClass()}}
                        onClick={() => {chooseCharacterClass("Healer")}}
                    ><img src={healer}></img></button>
                    <button className="characterButton"
                        onMouseOver={() => {displayCharacterClassOnHover("Mechanic")}}
                        onMouseLeave={() => {hideCharacterClass()}}
                        onClick={() => {chooseCharacterClass("Mechanic")}}
                    ><img src={mechanic}></img></button>
                    <button className="characterButton"
                        onMouseOver={() => {displayCharacterClassOnHover("Solo")}}      
                        onMouseLeave={() => {hideCharacterClass()}}
                        onClick={() => {chooseCharacterClass("Solo")}}
                    ><img src={solo}></img></button>
                    <button className="characterButton"
                        onMouseOver={() => {displayCharacterClassOnHover("Trooper")}}   
                        onMouseLeave={() => {hideCharacterClass()}}
                        onClick={() => {chooseCharacterClass("Trooper")}}
                    ><img src={trooper}></img></button>
                </div>
                <div>  
                    <p className="characterClass">Class:  </p><p className="characterClass" id="displayClassname"></p>
                    <br />
                </div>
                <p>Available skillpoints: { initialSkillpoints }</p>
            </div>
            <div className="characterSkills">
                {skillSets.map(skillSet => (
                    <div id={skillSet.type} className="characterSkill">
                        <div className="skillButtons" key={skillSet.type}>
                            <CharacterPickValue name={skillSet.name} value={skillSet.value}/>
                            <button className="characterButton dec" onClick={() => {
                                changeCharStats(skillSet.type, skillSet.value, false);
                            }}><img src={minus}></img></button>
                            <button className="characterButton dec" onClick={() => {
                                changeCharStats(skillSet.type, skillSet.value, true);
                            }}><img src={plus}></img></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}