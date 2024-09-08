function customRender(reactElelment, container)
{
    // const domElement = document.createElement(reactElelment.type)
    // domElement.innerHTML=reactElelment.children
    // domElement.setAttribute('herf',reactElelment.props.href)
    // domElement.setAttribute('target',reactElelment.props.target)

    // container.appendChild(domElement)


       const domElement = document.createElement(reactElelment.type)
    domElement.innerHTML=reactElelment.children
    for(const prop in reactElelment.props)
    {
        if(prop==='children')
        domElement.setAttribute(prop,reactElelment.props[prop])
    }
    container.appendChild(domElement);

}
 
 const reactElelment ={
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_bank'
    },
    children: 'Click me to vivit google'
 }

const mainContainer = document.querySelector("#root");

customRender(reactElelment,mainContainer)


 