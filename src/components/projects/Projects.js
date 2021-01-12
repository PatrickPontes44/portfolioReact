import './main.css';
import barber from '../../images/projects/barbershop.PNG';
import rolex from '../../images/projects/rolex.PNG';
import pixage from '../../images/projects/pixage.PNG';




const projects = [
    {
        id: 1,
        name: "Rolex Landing Page",
        url: "https://patrickpontes44.github.io/RolexLandingPage/",
        img: barber
    },
    {
        id: 2,
        name: "Barber Shop Landing Page",
        url: "https://patrickpontes44.github.io/barbearia-landingpage/",
        img: rolex
    },
    {
        id: 3,
        name: "Image Gallery",
        url: "https://patrickpontes44.github.io/Pixage/",
        img: pixage
    }
]

export const Projects = () =>{
    return(
        <section className="section-projects" id="Projects">
            <header>
                <h2>Meus Projetos</h2>
            </header>  
            <div className="projects-container">
                {
                    projects.map((item)=>{
                        return (<div className="project" key={item.id}>
                            <div className="image-container">
                                <img src={item.img} alt={item.name} />
                            </div>
                            <div className="info-container">
                                <h3>{item.name}</h3>
                                <a href={item.url} target="_blank" rel="noreferrer">Acessar Projeto</a>
                            </div>
                        </div>
                        )
                    })
                }
            </div>
        </section>
    )
}