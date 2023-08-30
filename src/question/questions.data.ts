import { v4 as uuidv4 } from 'uuid';
export const questionsWithAnswers = [
{   id: uuidv4(),
	question: "Какой тип данных используется для обозначения чисел в JavaScript?",
	options: [
	{ id: 1, answer: "string", correct: false },
	{ id: 2, answer: "number", correct: true },
	{ id: 3, answer: "boolean", correct: false }
]
},
{
	id: uuidv4(),
		question: "Что такое JSX в React?",
	options: [
	{ id: 1, answer: "Модульный синтаксис JavaScript", correct: false },
	{
		id: 2,
		answer: "Расширение синтаксиса JavaScript, позволяющее использовать HTML-подобный синтаксис в React",
		correct: true
	},
	{ id: 3, answer: "Функция в React, которая отвечает за вывод компонентов", correct: false }
]
},
{
	id: uuidv4(),
		question: "Как создать функциональный компонент в React?",
	options: [
	{ id: 1, answer: "class MyComponent extends React.Component", correct: false },
	{ id: 2, answer: "const MyComponent = () => {...}", correct: true },
	{ id: 3, answer: "const MyComponent = React.createFunctionComponent(...)", correct: false }
]
},
{
	id: uuidv4(),
		question: "Что такое props в React?",
	options: [
	{ id: 1, answer: "Стандартные свойства HTML-элементов", correct: false },
	{
		id: 2,
		answer: "Объект, содержащий свойства, переданные компоненту из родительского компонента",
		correct: true
	},
	{ id: 3, answer: "Названия классов CSS", correct: false }
]
},
{
	id: uuidv4(),
		question: "Как добавить класс к элементу в React?",
	options: [
	{ id: 1, answer: "const element = <div class='my-class' /> ", correct: false },
	{ id: 2, answer: "const element = <div className='my-class' />", correct: true },
	{ id: 3, answer: "const element = <div class='my-class'></div>", correct: false }
]
},
{
	id: uuidv4(),
		question: "6. Что такое state в React?",
	options: [
	{ id: 1, answer: "Объект, содержащий состояние компонента", correct: true },
	{ id: 2, answer: "Функция, которая обрабатывает изменения состояния", correct: false },
	{ id: 3, answer: "Свойство, которое определяет, должен ли компонент рендериться", correct: false }
]
},
{
	id: uuidv4(),
		question: "Как изменить состояние компонента в React?",
	options: [
	{ id: 1, answer: "this.props.state = {...}", correct: false },
	{ id: 2, answer: "const newState = {...}; this.state = newState;", correct: false },
	{ id: 3, answer: "this.setState({...})", correct: true }
]
},
{
	id: uuidv4(),
		question: "Что такое useEffect в React?",
	options: [
	{ id: 1, answer: "Функция, которая вызывается при каждом рендере компонента", correct: false },
	{
		id: 2,
		answer: "Хук, который позволяет добавлять эффекты (например, загрузку данных) при монтировании, обновлении и размонтировании компонента",
		correct: true
	},
	{ id: 3, answer: "Метод, который вызывается перед рендерингом компонента", correct: false }
]
},
{
	id: uuidv4(),
		question: "Что такое TypeScript?",
	options: [
	{
		id: 1,
		answer: "Статически типизированный язык программирования, который является надмножеством JavaScript",
		correct: true
	},
	{ id: 2, answer: "База данных, используемая для хранения данных веб-приложений", correct: false },
	{ id: 3, answer: "Библиотека для работы с асинхронными операциями", correct: false }
]
},
{
	id: uuidv4(),
		question: "Как объявить переменную в TypeScript?",
	options: [
	{ id: 1, answer: "var myVar: number = 10;", correct: false },
	{ id: 2, answer: "let myVar = 10;", correct: false },
	{ id: 3, answer: "const myVar: number = 10;", correct: true }
]
},
{
	id: uuidv4(),
		question: "Что такое интерфейс в TypeScript?",
	options: [
	{ id: 1, answer: "Описание формата объекта или класса", correct: true },
	{ id: 2, answer: "Функция, которая выполняет определенную задачу", correct: false },
	{ id: 3, answer: "Структура данных, используемая для хранения списков", correct: false }
]
},
{
	id: uuidv4(),
		question: "Как указать тип переменной в TypeScript?",
	options: [
	{ id: 1, answer: "let myVar = 10;", correct: false },
	{ id: 2, answer: "let myVar: number = 10;", correct: true },
	{ id: 3, answer: "const myVar = (num: number) => {...}", correct: false }
]
},
{
	id: uuidv4(),
		question: "Что такое дженерики (generics) в TypeScript?",
	options: [
	{
		id: 1,
		answer: "Обобщенные типы данных, которые позволяют создавать универсальные функции и классы",
		correct: true
	},
	{ id: 2, answer: "Библиотека для работы с HTTP-запросами", correct: false },
	{ id: 3, answer: "Специальные типы данных, используемые для определения массивов", correct: false }
]
},
{
	id: uuidv4(),
		question: "Как указать тип аргументов и возвращаемого значения функции в TypeScript?",
	options: [
	{ id: 1, answer: "const myFunc = (arg1, arg2) => {...}", correct: false },
	{ id: 2, answer: "const myFunc = (arg1: number, arg2: string): boolean => {...}", correct: true },
	{ id: 3, answer: "function myFunc(arg1, arg2) {...}", correct: false }
]
},
{
	id: uuidv4(),
		question: "Что такое массивы в JavaScript?",
	options: [
	{ id: 1, answer: "Структура данных, которая хранит ключ-значение", correct: false },
	{ id: 2, answer: "Структура данных, которая хранит набор элементов", correct: true },
	{ id: 3, answer: "Функция, которая выполняет определенную задачу", correct: false }
]
},
{
	id: uuidv4(),
		question: "Как добавить элемент в конец массива в JavaScript?",
	options: [
	{ id: 1, answer: "myArray.add(element);", correct: false },
	{ id: 2, answer: "myArray.push(element);", correct: true },
	{ id: 3, answer: "myArray.append(element);", correct: false }
]
},
{
	id: uuidv4(),
		question: "Как удалить элемент из массива в JavaScript?",
	options: [
	{ id: 1, answer: "myArray.splice(index, 1);", correct: true },
	{ id: 2, answer: "myArray.remove(element);", correct: false },
	{ id: 3, answer: "myArray.pop(element);", correct: false }
]
},
{
	id: uuidv4(),
		question: "Как отсортировать массив в JavaScript?",
	options: [
	{ id: 1, answer: "myArray.sort();", correct: true },
	{ id: 2, answer: "myArray.orderBy();", correct: false },
	{ id: 3, answer: "myArray.filter();", correct: false }
]
},
{
	id: uuidv4(),
		question: "Что такое метод map в JavaScript?",
	options: [
	{
		id: 1,
		answer: "Метод массива, который позволяет преобразовать каждый элемент массива с помощью функции",
		correct: true
	},
	{ id: 2, answer: "Метод массива, который возвращает первый элемент массива", correct: false },
	{ id: 3, answer: "Метод массива, который удаляет последний элемент массива", correct: false }
]
},
{
	id: uuidv4(),
		question: "Как создать объект в JavaScript?",
	options: [
	{ id: 1, answer: "object myObj = new Object();", correct: false },
	{ id: 2, answer: "const myObj = {key1: value1, key2: value2};", correct: false },
	{ id: 3, answer: "const myObj = new Object({key1: value1, key2: value2});", correct: true }
]
},
{
	id: uuidv4(),
		question: "Что такое методы объекта в JavaScript?",
	options: [
	{
		id: 1,
		answer: "Функции, которые объявлены внутри объекта и могут использоваться для выполнения определенных действий с объектом",
		correct: true
	},
	{ id: 2, answer: "Свойства объекта, которые содержат значения", correct: false },
	{ id: 3, answer: "Структуры данных, которые хранят ключ-значение", correct: false }
]
},
{
	id: uuidv4(),
		question: "Как получить значение свойства объекта в JavaScript?",
	options: [
	{ id: 1, answer: "myObj.getValue(property);", correct: false },
	{ id: 2, answer: "myObj.property;", correct: true },
	{ id: 3, answer: "myObj.getPropertyValue(property);", correct: false }
]
},
{
	id: uuidv4(),
		question: "Что такое функции обратного вызова (callback) в JavaScript?",
	options: [
	{
		id: 1,
		answer: "Функции, которые передаются в качестве аргументов другим функциям и вызываются внутри этих функций",
		correct: true
	},
	{ id: 2, answer: "Функции, которые вызываются автоматически при определенных событиях", correct: false },
	{ id: 3, answer: "Функции, которые вызывают другие функции", correct: false }
]
},
{
	id: uuidv4(),
		question: "Как создать функцию обратного вызова в JavaScript?",
	options: [
	{ id: 1, answer: "const myCallback = (arg1, arg2) => {...}", correct: true },
	{ id: 2, answer: "function myCallback(arg1, arg2) {...}", correct: false },
	{ id: 3, answer: "const myCallback = new Function(arg1, arg2, {...})", correct: false }
]
},
{
	id: uuidv4(),
		question: 'Что такое методы массива в JavaScript?',
	options: [
	{
		id: 1,
		answer: 'Функции, которые объявлены внутри массива и могут использоваться для выполнения определенных действий с массивом',
		correct: true
	},
	{ id: 2, answer: 'Свойства массива, которые содержат значения', correct: false },
	{ id: 3, answer: 'Структуры данных, которые хранят ключ-значение', correct: false }
]
},
{
	id: uuidv4(),
		question: 'Как получить длину массива в JavaScript?',
	options: [
	{ id: 1, answer: 'myArray.getLength();', correct: false },
	{ id: 2, answer: 'myArray.length;', correct: true },
	{ id: 3, answer: 'myArray.size();', correct: false }
]
},
{
	id: uuidv4(),
		question: 'Что такое метод filter в JavaScript?',
	options: [
	{
		id: 1,
		answer: 'Метод массива, который возвращает новый массив, содержащий элементы, прошедшие проверку с помощью функции',
		correct: true
	},
	{
		id: 2,
		answer: 'Метод массива, который удаляет элементы, прошедшие проверку с помощью функции',
		correct: false
	},
	{ id: 3, answer: 'Метод массива, который сортирует элементы по заданному критерию', correct: false }
]
},
{
	id: uuidv4(),
		question: 'Как добавить элемент в начало массива в JavaScript?',
	options: [
	{ id: 1, answer: 'myArray.unshift(element);', correct: true },
	{ id: 2, answer: 'myArray.addFirst(element);', correct: false },
	{ id: 3, answer: 'myArray.prepend(element);', correct: false }
]
},
{
	id: uuidv4(),
		question: 'Что такое метод reduce в JavaScript?',
	options: [
	{
		id: 1,
		answer: 'Метод массива, который применяет функцию к каждому элементу массива, последовательно уменьшая массив до одного значения',
		correct: true
	},
	{ id: 2, answer: 'Метод массива, который объединяет два массива в один', correct: false },
	{ id: 3, answer: 'Метод массива, который возвращает случайный элемент массива', correct: false }
]
},
{
	id: uuidv4(),
		question: 'Как объединить два массива в JavaScript?',
	options: [
	{ id: 1, answer: 'myArray.join(otherArray);', correct: false },
	{ id: 2, answer: 'myArray.concat(otherArray);', correct: false },
	{ id: 3, answer: '[...myArray, ...otherArray];', correct: true }
]
}
];