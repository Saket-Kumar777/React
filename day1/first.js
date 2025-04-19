const react = 
{
    createElement:function(tag,styles,children){
         const element = document.createElement(tag);
         if(typeof children === 'object'){
            for(let val of children)
             element.append(val);
         }
         else
         element.innerText = children;
            for (let key in styles)
            {
                element.style[key] = styles[key] ;
            }

        return element;
    }
}

const reactDOM =
{
    render:function(element,root){
        root.append(element);
    }
}

const header1 = react.createElement('h1',{fontSize:"30px", backgroundColor:"blue", color:"white"},"Hello Coder Army");
const header2 = react.createElement('h2', {fontsize:"20px", backgroundColor:"black", color:"white"},"Kaise ho aap sab log");

const li1 = react.createElement('li',{},"HTML");
const li2 = react.createElement('li',{},"CSS");    
const li3 = react.createElement('li',{},"JS");

const ul = react.createElement('ul', {fontSize:"30px", backgroundColor:"red", color:"white"}, [li1,li2,li3] );

const root = document.getElementById('root');
reactDOM.render(header1,root);
reactDOM.render(header2,root);

reactDOM.render(ul,root);