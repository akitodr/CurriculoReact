function Button(props) {
    return (
        <a href={props.value.link} target="_blank">
            <img src={props.value.image} width="50px"/>
        </a>
    )
}

function ButtonsArea() {
    return (
        <div className="buttons-field">
            <Button value={{
                link: "https://www.linkedin.com/in/marina-lara/", 
                image: "./icons/linkedin.png"
            }}/>
        </div>
    )
}

function AboutMe() {
    
}

function Education() {
    
}

function Courses() {
    
}

function Languages() {
    
}

function Footer() {
    
}

function Page() {
    return(
        <div className="main-content">
            <img src="./profile.png" />
            <h1>Insira Seu Nome Aqui</h1>

            <ButtonsArea />
            <AboutMe />
            <Education />
            <Courses />
            <Languages />
            <Footer />
        </div>
    )
}

//Aqui pegamos a nossa div com id "root" para inserir os elementos html dentro da tag
const root = ReactDOM.createRoot(document.getElementById("root"))
//Aqui desenhamos nossa UI na tela
root.render(<Page />)