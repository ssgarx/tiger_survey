import React, { useState } from 'react';
import DisplayAnswer from '../DisplayAnswer';
import Multiselect from '../Multiselect';
import Options from '../Options'
import Singleselect from '../Singleselect';
import './index.js';
const CreateSurvey = () => {

    const [selectOption,setSelectedOption] = useState();
    const [questionAnswers,setQuestionAnswers] = useState([]);
    const [question,setQuestion] = useState();
    const [answers,setAnswers] = useState([]);
    const [publishQuestions,setPublishQuestions] = useState(false);
        const getNewId = ()=>{
            let id = 0;
            questionAnswers.map((item) => {
                if (item.id > id)
                    id = item.id;
            })

            return id+1;
        }

    const addQuestionAnswers =()=>{
        const newObj = {
            id : getNewId(), 
            question :question,
            answer:answers
        }
        
        const updateQuestionAnswers = [...questionAnswers,newObj];
        setQuestionAnswers(updateQuestionAnswers);
        console.log(updateQuestionAnswers);
        setAnswers([]);
        setQuestion("");
        document.querySelector("#select").focus();
       
    }
    const deleteOptions = (clickedOption) =>{
        const newOptions = answers.filter((option) =>{
            console.log(option.id.slice(option.id.indexOf('_')+1),clickedOption.target.id,option.id.slice(option.id.indexOf('_')+1) != clickedOption.target.id);
            return (option.id.slice(option.id.indexOf('_')+1) != clickedOption.target.id)
        });
        setAnswers(newOptions);
        console.log(newOptions);
    }

   
    const addAnswers = (newAns,id)=>{
        console.log("answers are ",answers);
        const filterAnswers = answers.filter((ans) => ans.id !== id)
        const updateAnswers = [...filterAnswers,{id :id,ans : newAns}]
        setAnswers(updateAnswers);
     
    } 

    const select = (e) =>{
       setSelectedOption(e.target.value);       
    }

  
    const choices = ["Multiselect","Singleselect"] 
 
    const items = choices.map((choice)=>{
     
        return  <Options value = {choice} />
   
    })
    const updateQuestion = (e) =>{
        setQuestion(e.target.value);
    }
    const publish = () => {
        setPublishQuestions(true);
    }
    
    return (
        <>
        {publishQuestions 
        ? 
        (<>
            {questionAnswers.map((item) =>{
                return <>
                        <p>{item.question}</p>
                        {item.answer.map((option)=>{
                            return <DisplayAnswer option = {option}/>
                        })}
                        </>
            })}

            <button >Confirm</button>
         </>)
        :(
            <>
            <select onChange = {select} id= "select">
                <option>Select Question Type </option>
                    {items}     
            </select>
            <br/>

            {(selectOption === "Multiselect")
            ?
            <Multiselect questionAnswers = {questionAnswers} deleteOptions = {deleteOptions} publish = {publish} addAnswers = {addAnswers} updateQuestion = {updateQuestion} addQuestionAnswers = {addQuestionAnswers} answers = {answers} question = {question} />
            :
            (selectOption === "Singleselect")? <Singleselect publish = {publish} addAnswers = {addAnswers} updateQuestion = {updateQuestion} addQuestionAnswers = {addQuestionAnswers}/> :<></>
            }
            </>
            )}
            </>
        );
        };

export default CreateSurvey;
