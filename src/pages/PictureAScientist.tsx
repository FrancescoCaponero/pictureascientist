import './PictureAScientist.scss'

const PictureAScientist = () => {
  const participations: Array<{ name: string, description: string }> = [
    {
      name:'Jasmine Lanza e Alessia Terzano',
      description:'Noi siamo Jasmine Lanza e Alessia Terzano, entrambe studentesse di Biotecnologie presso l’Università di Roma Tor Vergata, rappresentanti degli studenti in Dipartimento, ma prima di tutto migliori amiche. Non potevo immaginare persona migliore di Alessia per supportarmi (e sopportarmi) nella realizzazione di questo progetto. Insieme siamo riuscite a fargli prendere forma e non vediamo l’ora di scoprire dove ci porterà con le sue nuove sfaccettature.'
    },
    {
      name:'Michela Natilli',
      description:'Sono una ricercatrice presso l’Istituto di Scienze e Tecnologie dell’Informazione (ISTI) del CNR di Pisa. Mi occupo di vari temi legati alla applied data science con particolare interesse alla progettazione e allo sviluppo di esperimenti di Big Data Analytics per la definizione e il monitoraggio di indicatori statistici per fenomeni sociali complessi, anche in una prospettiva di genere. Faccio parte del team di gestione di SoBigData RI, l’infrastruttura di ricerca europea per i Big Data e il Social Mining.'
    },
    {
      name:'Francesca Randone',
      description:'Siciliana di nascita, sono attualmente una dottoranda in Informatica presso la Scuola IMT Alti Studi Lucca, ma ho studiato Matematica prima all’università di Catania e poi a quella di Trieste.'
    },
    {
      name:'Beatrice Savoldi',
      description:'Con una formazione in lingue e traduzione, sono ora una dottoranda all’Università di Trento con la co-supervisione del gruppo di Machine Translation (MT) alla fondazione Bruno Kessler. Mi occupo principalmente di bias di genere nella traduzione automatica.'
    },
  ];

  return (
    <div className='picture-page'>
      <h1>Un dialogo su stereotipi e gender gap nelle discipline STEM</h1>
      <h2>Cosa è picture a scientist:</h2>
      <p>
      Il titolo è ripreso dal <strong>documentario omonimo</strong> che narra l'esperienza accademica di diverse ricercatrici, mettendo in luce le difficoltà e le discriminazioni subite nel corso della loro carriera. Picture a Scientist significa “disegna uno scienziato”, una parola che in inglese è neutra. Tuttavia, quando si chiede a dei bambini di disegnare unə “scientist”, la maggior parte delle volte il disegno rappresenterà un uomo, anche se negli ultimi anni pare <strong>ci sia un miglioramento.</strong>
      </p>
      <p>
      L'idea di <span>Picture a Scientist</span> è partita dalle chiacchiere tra noi dottorandi e dottorande del dipartimento di informatica durante le pause caffè, qualche tempo dopo l’inizio del nuovo ciclo di dottorato. Ciò che ci ha spinto inizialmente a discutere di queste tematiche, è stato il gap di genere già evidente durante le fasi di selezione dellə nuovə dottorandə. 
      </p>
      <p>
      La struttura dell'evento vedrà delle relatrici intervenire su dei temi riguardanti la loro esperienza personale e ricerca in ambito STEM( Science, Technology, Engineering and Math)a partire dalle quali si svilupperà un dibattito.  
      </p>
      <h2>Interverranno:</h2>
      <div className='participant-section'>
        {
          participations.map((participant, i) => {
            return (
              <li key={i}>
                <h4>{participant.name}</h4>
                <p>{participant.description}</p>
              </li>
            );
          })
        }
      </div>
    </div>
  )
}

export default PictureAScientist