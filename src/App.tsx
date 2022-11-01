import React, { Component } from 'react'

// React Component

// const title = <h1>Hello React.js</h1>
// const title = React.createElement('h1', null, 'React')

const List = () => {
    let a = 10
    return (
        <>
            <ul>
                <li>list item {a + 1}</li>
                <li>list item 2</li>
                <li>list item 3</li>
            </ul>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laboriosam soluta repellat aspernatur blanditiis sint
                exercitationem ad. Eligendi hic impedit adipisci odit et
                accusantium. Fuga minus, illum doloribus perspiciatis sint
                asperiores?
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Laboriosam soluta repellat aspernatur blanditiis sint
                exercitationem ad. Eligendi hic impedit adipisci odit et
                accusantium. Fuga minus, illum doloribus perspiciatis sint
                asperiores?
            </p>
        </>
    )
}

// React Component

type TitleProps = {
    title: string
    text: string
    num: number
}

const Title = (props: TitleProps) => (
    <>
        <h1>
            {props.text} {props.title}
        </h1>
        <p>{props.num}</p>
    </>
)

function App() {
    return (
        <div className="App">
            <Title title="app.js" text="Hi" num={15} />
            <Title title="Test.js" text="Hello" num={25} />
            <List />
        </div>
    )
}
export default App
