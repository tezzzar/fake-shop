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
    text?: string
}

const Title = (props: TitleProps) => (
    <h1>
        {props.text} {props.title}
    </h1>
)

function App() {
    return (
        <div className="App">
            <Title title="app.js" />
            <Title title="Test.js" />
            <List />
            {10 + 5}
        </div>
    )
}
export default App
