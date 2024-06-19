const questions = [
    {
        id: 1,
        question: 'What is ReactJS?',
        answer: 'ReactJS is a JavaScript library used to build reusable components for the view layer in MVC architecture. It is highly efficient and uses a virtual DOM to render components. It works on the client side and is written in JSX.'
    },
    {
        id: 2,
        question: 'What is virtual DOM in React?',
        answer: 'React uses Virtual DOM which is like a lightweight copy of the actual DOM(a virtual representation of the DOM). So for every object that exists in the original DOM, there is an object for that in React Virtual DOM.'
    },
    {
        id: 3,
        question: 'What is JSX?',
        answer: 'JSX is basically a syntax extension of regular JavaScript and is used to create React elements. These elements are then rendered to the React DOM..'
    },
    {
        id: 4,
        question: 'What is a key in React?',
        answer: 'A “key” is a special string attribute you need to include when creating lists of elements in React.'
    },
    {
        id: 5,
        question: ' What is state in React?',
        answer: 'The state is an instance of React Component Class that can be defined as an object of a set of observable properties that control the behaviour of the component. '
    }
]

export default questions;