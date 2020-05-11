// sb3.js
// The verse1(), verse2(), chorus1() and chorus2() are provided to you. You can change the function names and add additonal ones as needed. Be sure to follow the starter code that has been supplied.

function verse1() {
    let output = ''
    // your code here
    output = '<P>This is verse one</p>'

    return output
}

function verse2() {
    let output = ''
    // your code here
    output = '<P>This is verse two</p>'
    return output
}

function chorus1() {
    let output = ''
    // your code here
    output = '<P>This is chorus 1</p>'
    return output
}

function chorus2() {
    let output = ''
    // your code here
    output = '<P>This is chorus 2</p>'
    return output
}



function main() {
    let finalOutput = '' // used to build lyrics string
    // call verse and chorus functions
    finalOutput = verse1() + verse2() + chorus1() + chorus2()

    // each verse/chorus should return text including HTML paragraph tags

    // do not modify the statement below
    // it will take 
    document.getElementById('lyrics').innerHTML = finalOutput
}

window.onload = function () {
    main()
}