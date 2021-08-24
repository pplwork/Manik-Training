import React from 'react';
import Counter from '../Counter';
import {render,fireEvent, cleanup} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
beforeEach(()=>{
    // const {getByTestId} = render(<Counter/>);
})
afterEach(()=>{
    cleanup()
})
test("header renders with correct text",()=>{
    const {getByTestId} = render(<Counter/>);
    const headerEle = getByTestId("header");
    expect(headerEle.textContent).toBe("My Counter")
})

test("counter initially zero" ,()=>{
    const {getByTestId} = render(<Counter/>);
    const counterEle = getByTestId("counter");

    expect(counterEle.textContent).toBe("0");
})
test("input initially 1" ,()=>{
    const {getByTestId} = render(<Counter/>);
    const inputEle = getByTestId("input");

    expect(inputEle.value).toBe("1");
})
test("add button +" ,()=>{
    const {getByTestId} = render(<Counter/>);
    const addBtn = getByTestId("add-btn");

    expect(addBtn.textContent).toBe("+");
})
test("subtract button -" ,()=>{
    const {getByTestId} = render(<Counter/>);
    const subtractBtn = getByTestId("subtract-btn");

    expect(subtractBtn.textContent).toBe("-");
})
test("changing value of input",()=>{
    const {getByTestId} = render(<Counter/>);
    const inputEle = getByTestId("input");
    expect(inputEle.value).toBe("1")
    fireEvent.change(inputEle,{
        target:{
            value: "5"
        }
    })
    expect(inputEle.value).toBe("5")
})

test("click on plus btn add to counter",()=>{
    const {getByTestId} = render(<Counter/>);
    const addBtn = getByTestId("add-btn");
    const counterEle = getByTestId("counter");
    expect(counterEle.textContent).toBe('0')
    
    fireEvent.click(addBtn);
    expect(counterEle.textContent).toBe('1')
})
test("change input and press plus button",()=>{
    const {getByTestId} = render(<Counter/>);
    const addBtn = getByTestId("add-btn");
    const counterEle = getByTestId("counter");
    const inputEle = getByTestId("input")
    fireEvent.change(inputEle,{
        target:{
            value: "5"
        }
    })
    fireEvent.click(addBtn);
    expect(counterEle.textContent).toBe('5')
})
test("click on subtract btn sub to counter",()=>{
    const {getByTestId} = render(<Counter/>);
    const subtractBtn = getByTestId("subtract-btn");
    const counterEle = getByTestId("counter");
    expect(counterEle.textContent).toBe('0')
    
    fireEvent.click(subtractBtn);
    expect(counterEle.textContent).toBe('-1')
})

test("counter contains correct classname",()=>{
    const {getByTestId} = render(<Counter/>);
    const counterEle = getByTestId("counter");
    const inputEle = getByTestId("input")
    const addBtn = getByTestId("add-btn");
    const subtractBtn = getByTestId("subtract-btn");
    expect(counterEle.className).toBe("");

    fireEvent.change(inputEle,{
        target:{
            value: "50"
        }
    })
    fireEvent.click(addBtn);

    expect(counterEle.className).toBe("");
    fireEvent.click(addBtn);
    expect(counterEle.className).toBe("green");
    fireEvent.click(subtractBtn);
    fireEvent.click(subtractBtn);
    expect(counterEle.className).toBe("");

    fireEvent.click(subtractBtn);
    fireEvent.click(subtractBtn);
    fireEvent.click(subtractBtn);
    expect(counterEle.className).toBe("red");

})