import swal from 'sweetalert';


// STRINGS CONSTANTS
export const editButtonStyle = {
    background: 'linear-gradient(0deg, rgba(242,15,15,1) 0%, rgba(132,162,255,1) 0%, rgba(132,162,255,1) 100%)'
}
export const viewDatilsButtonStyle = {
    background: 'linear-gradient(0deg, rgba(242,15,15,1) 0%, rgba(121,247,0,1) 0%, rgba(132,162,255,1) 100%)'
}

export const ROUTE_API = 'https://jsonplaceholder.typicode.com';
export const linkedinLink = 'https://www.linkedin.com/in/martin-cumpe-77736a198/'
export const githubLink = "https://github.com/Tincho3604"
export const instagramLink = "https://www.instagram.com/clave_code/?hl=es"
export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        cName: 'nav-text',
    },
    {
        title: 'Register',
        path: '/register',
        cName: 'nav-text',
    },
];


export const titleColumn = ["ID", "User Id", "Title", "Body"];



// OBJECTS
export const fieldsForm = [
    {type:"text", 
    inputType:"input",
    name:"title", 
    id:"title", 
    labelText:"Title",
    placeHolder:"Ingress title", 
    htmlFor:"title", 
    required: {
        value: true,
        message:'title is required'
    },
    maxLength:{
        value: 20,
        message:'Maximum 20 characters'
    },
    minLength: {
        value: 5,
        message: 'Minimum 5 characters'
    },
},

{type:"text", 
inputType:"input",
name:"body", 
id:"body", 
placeHolder:"Ingress body", 
htmlFor:"body", 
labelText:"Body",
required: {
    value: true,
    message:'body is required'
},
maxLength:{
    value: 20,
    message:'Maximum 20 characters'
},
minLength: {
    value: 5,
    message: 'Minimum 5 characters'
        },
    },
]

// FUNCTIONS
export const customAlerts = (title, textAlert, typeButton) => swal(title, textAlert, typeButton);
export const checkfields = value => {
    if(value === ""){
        customAlerts("Complete Form", "Fill all fields", "warning")
    }
}
