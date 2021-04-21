export const editButtonStyle = {
    background: 'linear-gradient(0deg, rgba(242,15,15,1) 0%, rgba(132,162,255,1) 0%, rgba(132,162,255,1) 100%)'
}

export const viewDatilsButtonStyle = {
    background: 'linear-gradient(0deg, rgba(242,15,15,1) 0%, rgba(121,247,0,1) 0%, rgba(132,162,255,1) 100%)'
}

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





export const fieldsForm = [
    {type:"text", 
    inputType:"input",
    name:"Title", 
    id:"Title", 
    placeHolder:"Ingress Title", 
    htmlFor:"Title", 
    registerInfo:{ required: {
        value: true,
        message:'Title is required'
    },
    maxLength:{
        value: 20,
        message:'Maximum 20 characters'
    },
    minLength: {
        value: 5,
        message: 'Minimum 5 characters'
    },
    validate: (value) => {
        return [
            /^[A-Za-z\s]+$/ 
        ].every((pattern) => pattern.test(value)) || "Only letters"
        }
    }
},

{type:"text", 
inputType:"input",
name:"Body", 
id:"Body", 
placeHolder:"Ingress Body", 
htmlFor:"Body", 
registerInfo:{ required: {
    value: true,
    message:'Body is required'
},
maxLength:{
    value: 20,
    message:'Maximum 20 characters'
},
minLength: {
    value: 5,
    message: 'Minimum 5 characters'
},
validate: (value) => {
    return [
        /^[A-Za-z\s]+$/ 
    ].every((pattern) => pattern.test(value)) || "Only letters"
    }
}
},

]