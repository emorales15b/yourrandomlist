'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const FormContent = () => {

    const [stateYourRandomList, setStateYourRandomList] = useState<any>();
    const [stateYourRandomWord, setStateYourRandomWord] = useState<any>('Bienvenido');
    const [valueCheckBox, setValueCheckBox] = useState<any>('word');
  
    const handleSubmit= (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const optionCheckbox = e.currentTarget.option_random.value;
      const valueTextArea = e.currentTarget.valueTextArea.value;
  
      setValueCheckBox(optionCheckbox);
  
      const lines = valueTextArea.split(/\r|\r\n|\n/);
      const totalLines = lines.length;
  
      if(optionCheckbox === 'list'){
        const arrayValuesTextArea = valueTextArea.split('\n');
        shuffleArray(arrayValuesTextArea);
  
        setStateYourRandomList(arrayValuesTextArea)
        
      }else{
        const positionNumberWord = Math.floor(Math.random() * totalLines);
        setStateYourRandomWord(valueTextArea.split('\n')[positionNumberWord])
      }
      
    }
  
    const shuffleArray = (arr : any) => {
      arr.sort(() => Math.random() - 0.5);
    }
  

  return (
    <div className="flex flex-col p-[40px] md:h-screen md:flex-row md:pt-[40px] md:pl-[50px] md:pr-[50px]">
      <div className="md:w-[35%] md:pr-[70px] flex flex-col">
        <div>
          <Image
            src={"/images/logo.png"}
            width={200}
            height={200}
            alt={"logo"}
          />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="yrl__left-body-section">
            <div className="mt-[80px] mb-[20px] text-[16px] text-[#ffffff]">
              Escribe cada palabra en una línea separada
            </div>
            <div>
              <textarea
                className="w-[100%] mb-[10px] h-[150px] rounded-[10px] resize-none p-[10px] outline-none textarea-shadow"
                name="valueTextArea"
                id=""
                defaultValue="Bienvenido"
              ></textarea>
            </div>

            <div className="yrl__div-main-checkbox">
              <div className="yrl__div-group-checkbox">
                <input type="radio" name="option_random" value="list" />
                <label className="yrl__label-checkbox">
                  Mostrar lista aleatoria
                </label>
              </div>
              <div className="yrl__div-group-checkbox">
                <input
                  type="radio"
                  name="option_random"
                  value="word"
                  defaultChecked
                />
                <label className="yrl__label-checkbox">
                  Mostrar una sola palabra aleatoria
                </label>
              </div>
            </div>

            <div>
              <button className="w-[100%] bg-[#ca3596] rounded-[10px] text-[#ffffff] p-[10px] text-center hover:bg-[#FE05A5]">
                Generar Lista Aleatoria
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="mt-[50px] md:mt-[0px] md:w-[65%] flex justify-center items-center div-line flex-col">
        <div
          className={`text-[30px] h-[500px] md:h-auto w-[100%] p-[30px] overflow-y-auto text-center text-[#ffffff] ${valueCheckBox}`}
        >
          {valueCheckBox == "word"
            ? stateYourRandomWord
            : stateYourRandomList.map((value: any) => {
                return <div key={value}>{value}</div>;
              })}
        </div>
      </div>
    </div>
  );
};

export default FormContent;
