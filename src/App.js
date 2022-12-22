import React from "react";
import party from "./img/party.png";

import "./Components/styles/questions-styles.scss";
import "./Components/styles/_base.scss";

const questions = [
  {
    title: "От какого класса идет наследование всех компонентов?",
    variants: ["ComponentReact", "ReactJS.Component", "React.Component"],
    correct: 2,
  },
  {
    title: "Куда можно встроить готовый код из метода render()?",
    variants: [
      "Только в div",
      "В любой тег",
      "Только в тег, у которого есть id",
    ],
    correct: 1,
  },
  {
    title: "React JS – это ...",
    variants: [
      "JavaScript библиотека",
      "Фреймворк",
      "MVC-фреймворк",
      "Back-end платформа",
    ],
    correct: 0,
  },
  {
    title: "Где правильно создан компонент?",
    variants: [
      "class App {}",
      "class App extends Component {}",
      "class App extends React.Component ({})",
      "React.Component {}",
    ],
    correct: 2,
  },
  {
    title:
      "Сколько родительских HTML тегов может быть выведено в React JS компоненте?",
    variants: [
      "Неограниченное количество",
      "Не более 5",
      "Всегда 1",
      "Не более 10",
    ],
    correct: 2,
  },
  {
    title: "Можно ли писать не используя Babel?",
    variants: ["Нет, нельзя", "Да, можно"],
    correct: 1,
  },
  {
    title: "Где правильно передена функция в качестве свойства?",
    variants: [
      "argument={this.someFunction {}}",
      "argument={this.someFunction}",
      "argument={someFunction}",
    ],
    correct: 1,
  },
  {
    title: "Чем свойства отличаются от состояний?",
    variants: [
      "Состояния можно изменять, свойства нельзя",
      "Свойства можно изменять, состояния нельзя",
      "Состояния для работы со значениями, свойства для работы с функциями",
      "Свойства для работы со значениями, состояния для работы с функциями",
    ],
    correct: 0,
  },
  {
    title: "Где правильно выведен компонент через рендер?",
    variants: ["<Test />", "<Test>", "</Test>", "</ Test>"],
    correct: 0,
  },
  {
    title: "Какая компания разработала React JS?",
    variants: ["Google", "Facebook", "GitHub", "Oracle"],
    correct: 1,
  },
];

function Result({ correct }) {
  return (
    <div className="result">
      <img src={party} alt="party" />
      <h1>
        Вы дали правильных ответов {correct} из {questions.length}
      </h1>
      <a href="/">
        <button className="restart-game">Попробовать снова</button>
      </a>
    </div>
  );
}

function Game({ step, question, onClickVariant }) {
  const scroll = Math.round((step / questions.length) * 100);

  return (
    <div className="questions">
      <div className="progress">
        <div style={{ width: `${scroll}%` }} className="progress__value"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
          <li onClick={() => onClickVariant(index)} key={text}>
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };

  return (
    <>
      {step != questions.length ? (
        <Game step={step} question={question} onClickVariant={onClickVariant} />
      ) : (
        <Result correct={correct} />
      )}
    </>
  );
}

export default App;
