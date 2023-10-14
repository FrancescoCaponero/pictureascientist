import './About.scss'
const About = () => {
  const authors: Array<{ name: string, description: string }> = [
    {
      name:'Alessandro Berti',
      description:'Dottorando in Computer Science @ Università di Pisa. alessandro.berti@phd.unipi.it'
    },
    {
      name:'Eleonora Cappuccio',
      description:'Dottoranda in Artificial Intelligence @Università di Pisa e @Università di Bari eleonora.cappuccio@phd.unipi.it'
    },
    {
      name:'Andrea Guerra',
      description:'dottorando in Computer Science @ Università di Pisa andrea.guerra[at]phd.unipi.it'
    },
    {
      name:'Marta Marchiori Manerba',
      description:'Dottoranda in Artificial Intelligence @Università di Pisa marta.marchiori[at]phd.unipi.it'
    },
    {
      name:'Chiara Pugliese',
      description:'Dottoranda in Computer Science @ Università di Pisa chiara.pugliese[at]phd.unipi.it'
    },
    {
      name:'Laura State',
      description:'Dottoranda in Data Science @Scuola Normale Superiore laura.state@sns.it'
    },
  ]
  return (
    <div className="page-about">
      <h1 className='about-heading'>Chi Siamo</h1>
      <div className='divider'></div>
      <div className='authors-section'>
        <ul>
          {authors.map((author, index) => (
            <li key={index}>
              <h3>{author.name}</h3>
              <p>{author.description}</p>
              <div className='divider'></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default About