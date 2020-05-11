import React, { useState, useEffect } from 'react';
import './Chatbot.css';
import Fade from 'react-reveal/Fade';
import Select from './Select/Select';
import { doing, aboutMe } from '../data/Actions';

import cat from '../assets/images/cat.PNG';
import user from '../assets/images/womanUser.png';

import CAT_A from '../assets/images/a.png';
import CAT_B from '../assets/images/b.jpg';
import CAT_C from '../assets/images/c.webp';

const CatItem = ({ text }) => {

    let image = ''
    if(text[0] === 'ig') {
        image = text[1]
    }

    return (
        <div className='cat-item-container'>
            { text.length > 0  &&
            <>
                <img src={cat} alt='cat' />
                <div className='cat-item-messages'>
                    { image === '' && text.map((t, index) =>
                        <Fade left>
                            <label key={index} > {t} </label> 
                        </Fade>
                    )}
                    { image !== '' && 
                        <div className='img-container-cat'>
                            <img src={image} alt='' /> 
                        </div>
                    }
                </div>
            </>
            }
        </div>
    )
};

const UserItem = ({ text }) => {
    return (
        <>
        { text && 
            <div className='user-item-container'>
                <div className='user-item-messages'>
                    <Fade right>
                        <label> {text} </label> 
                    </Fade>
                </div>
                <img src={user} alt='user' />
            </div>
        }
        </>
    )
};

const Chatbot = () => {

    let idCounter = 0;

    const [ msg, setMsg ] = useState({});

    const [ chat, setChat ] = useState([
        {
            id: 0,
            emmiter: 'Cat',
            msg: [ '¡Hola!', '¿Cómo es tu nombre?' ]
        }
    ]);

    const [ openSelect, setOpenSelect ] = useState(false);

    function firstResponse(name) {
        let newChat = { 
            id: idCounter + 2, 
            emmiter: 'Cat', 
            msg: [ 
                '¡Mucho gusto, ' + name + '!', 
                'Mi nombre es Demitri, soy un catbot aún en desarrollo',
                'Eso quiere decir que aún no estoy preparado para tus preguntas específicas 😓',
                '¡Lo que no significa que no podamos interactuar! 😊',
                'Haceme una pregunta de la lista, y con gusto respondo...'
            ]  
        }
        if(newChat) {
            setChat([ ...chat, newChat ])
        }
    }

    useEffect(() => {
        switch(chat.length) {
            case 2:
                setTimeout(() => firstResponse(msg.msg), 500);
                setMsg({ ...msg, msg: '' });
                setTimeout(() => setOpenSelect(true), 600)
                break;
        }
    }, [chat])

    function getMeMessage(value) {
        idCounter = idCounter + 1
        setMsg({
            id: idCounter,
            emmiter: 'User',
            msg: value
        })
    }

    function sendMessage(e) {
        e.preventDefault();
        setChat([ ...chat, msg ])
    }

    let selectedOptions = [
        {
            id: 'What are you doing?',
            text: '¿Qué hacés?'
        },
        {
            id: 'Send me a meme',
            text: 'Mandame un meme'
        },
        {
            id: 'Tell me about you',
            text: 'Contame sobre vos'
        } 
    ];

    let memes = [
        {
            img: [ 'ig', CAT_A ]
        },
        {
            img: [ 'ig', CAT_B ]
        },
        {
            img: [ 'ig', CAT_C ]
        }
    ];

    const [ interactions, setInteractions ] = useState([]);

    function handleSelectedOptions(value) {
        let result;
        switch(value) {
            case 'What are you doing?':
                result = doing[Math.floor(Math.random() * doing.length)]
                if(result) {
                    setInteractions([ ...interactions, result.msg])
                }
                break;
            case 'Tell me about you':
                result = aboutMe[Math.floor(Math.random() * aboutMe.length)]
                if(result) {
                    setInteractions([ ...interactions, result.msg])
                }
                break;
            case 'Send me a meme':
                result = memes[Math.floor(Math.random() * memes.length)]
                if(result) {
                    setInteractions([ ...interactions, result.img])
                }
                break;
        }
    }

    return (
        <div className='chatbox-chat-container'>
            <div className='chatbox-chat-content'>
                <div className='chatbox-chat'>
                    <div className='chatbox-chat-container-body'>
                        <div className='chatbox-chat-body'>
                            { chat.map((message, index) =>
                                message.emmiter === 'Cat' ?
                                    <CatItem key={index} text={message.msg} />
                                : 
                                    <UserItem key={index} text={message.msg} />
                            )}
                            { openSelect &&
                                <Fade right>
                                    <div className='chatbot-chat-select-container'>
                                        <Select 
                                        options={selectedOptions} 
                                        handleSelectedOptions={handleSelectedOptions} />
                                        <img src={user} alt='user' />
                                    </div>
                                </Fade>
                            }
                            { interactions.length > 0 && interactions.map((interaction, index) => 
                                <>
                                    <Fade left>
                                        <CatItem key={index} text={interaction} />
                                    </Fade>
                                    <Fade right>
                                        <div className='chatbot-chat-select-container'>
                                            <Select options={selectedOptions} 
                                            handleSelectedOptions={handleSelectedOptions} />
                                            <img src={user} alt='user' />
                                        </div>
                                    </Fade>
                                </>
                                )
                            }
                        </div>
                        <form className='chatbox-chat-input-container' onSubmit={ (e) => sendMessage(e) }>
                            <input disabled={ chat.length === 3 ? true : false } 
                            placeholder={ chat.length === 3 ? 'Ya no podés escribir...' : 'Escribí tu nombre'}
                            type='text' 
                            value={msg.msg} 
                            onChange={ (e) => getMeMessage(e.target.value) } />
                            <button type='submit'/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Chatbot;