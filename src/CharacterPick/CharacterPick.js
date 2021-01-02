import React, { useState, useReducer } from 'react';
import CharacterPickValue from './CharacterPickValue.js';
import './CharacterPick.css';

import healer from './images/healer.png';
import mechanic from './images/mechanic.png';
import solo from './images/solo.png';
import trooper from './images/trooper.png';

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

    return (
        <div className="wrapper">
            <div className="characterInformation">
                <h2>Create your own character:</h2>
                <label htmlFor="name">Character name: </label>
                <input id="name" name="name" type="text" maxlength="20" autoComplete="off"></input>
                <br />
                <div className="characterGraphicalIcons">
                    <button className="characterButton"><img alt="Healer" src={healer}></img></button>
                    <button className="characterButton"><img alt="Mechanic" src={mechanic}></img></button>
                    <button className="characterButton"><img alt="Solo" src={solo}></img></button>
                    <button className="characterButton"><img alt="Trooper" src={trooper}></img></button>
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
                            }}>-</button>
                            <button className="characterButton dec" onClick={() => {
                                changeCharStats(skillSet.type, skillSet.value, true);
                            }}>+</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}