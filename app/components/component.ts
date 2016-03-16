function greet(name: string) {
    const element = document.createElement('h1');
    element.innerHTML = 'Hello ' + name;
    return element;
}

export = greet;
