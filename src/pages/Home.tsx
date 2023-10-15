import './Home.scss'
import { useRef, useState } from 'react';
const Home = () => {
  const eventSectionRef = useRef<null | HTMLElement>(null);
  const [shownEvents, setShownEvents] = useState<number[]>([]);

  const showEventContent = (index:number) => {
    if (shownEvents.includes(index)) {
      setShownEvents(shownEvents.filter((i) => i !== index));
    } else {
      setShownEvents([...shownEvents, index]);
    }
  };
  

  const events: { date: string; title: string; content?: { participants?: string; description?: string; }; }[] = [
    {
      date: '17:30',
      title: "Introduzione all'evento",
      content: {
        description: "Benvenuto dell'azienda ospitante, introduzione alle tematiche dell'evento e presentazione delle ospiti.",
      },
    },
    {
      date: '17.50',
      title: 'Leaky Pipeline: ricerca e parità di genere',
      content: {
        participants: 'Michela Natilli - Ricercatrice presso il KDDlab, CNR Pisa',
        description: 'La presenza di un maggior numero di donne nell\'IA e nella scienza dei dati, in particolare nei ruoli tecnici e di leadership, contribuirà a ridurre i pregiudizi di genere (World Economic Forum). È quindi necessario analizzare la situazione attuale per quantificare la presenza di donne in IA e nelle materie STEM in generale. La mia presentazione si focalizza su una prima analisi della parità di genere tra il personale della ricerca nel panorama universitario italiano.',
      },
    },
    {
      date: '18.00',
      title: 'Research Like a Steminist',
      content: {
        participants: 'Jasmine Lanza e Alessia Terzano - Research like a steminist, Roma Tor Vergata',
        description: 'Il nostro progetto Research Like a Steminist, vincitore del bando per le iniziative culturali studentesche indotto dall’Università di Roma Tor Vergata, ci ha permesso di scoprire e di capire più a fondo da dove nasce e come combattere il divario di genere nell’ambito delle discipline STEM. Nel nostro intervento ci focalizzeremo sul gender gap e sulla leaky pipeline, in particolare nel mondo delle scienze biologiche e biotecnologiche.',
      },
    },
    {
      date: '18.10',
      title: 'Esiste un gender gap nella competitività?',
      content: {
        participants: 'Francesca Randone, dottoranda presso la Scuola IMT Alti Studi Lucca',
        description: 'Siciliana di nascita, sono attualmente una dottoranda in Informatica presso la Scuola IMT Alti Studi di Lucca, ma ho studiato Matematica prima all\'università di Catania e poi a quella di Trieste. Pur non amando la competizione, mi sono spesso trovata a confrontarmi con essa nell\'ambito delle discipline STEM, prima per manifestazioni come le Olimpiadi di Matematica, poi per accedere a borse di studio o di dottorato. Comune a tutte queste esperienze è la domanda che guiderà anche il mio intervento: esiste un gender gap anche nella competitività?',
      },
    },
    {
      date: '18.20',
      title: 'Anche le traduzioni hanno un pregiudizio?',
      content: {
        participants: 'Beatrice Savoldi, dottoranda in Linguistica presso l\'Università di Trento.',
        description: 'Sebbene spesso considerate delle macchine obiettive e neutrali, le tecnologie con cui interagiamo quotidianamente possono riflettere disparità e bias sociali. In questo intervento discuterò in particolare di come i bias di genere impattino tecnologie del linguaggio quali la traduzione automatica, e in più in generale varie applicazioni d\'Intelligenza Artificiale (AI). Tali bias invitano riflessioni sul rapporto che esiste tra la partecipazione delle donne nell\'ambito scientifico e tecnologico, e sul modo stesso di fare scienza e sviluppo tecnologico.',
      },
    },
    {
      date: '18.30',
      title: 'Discussione con il pubblico e i moderatori',
    },
    {
      date: '19.30',
      title: 'Fine',
    },
  ];
  

  const scrollToEventSection = () => {
    if (eventSectionRef.current) {
      eventSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="page-home">
      <section className="heading-image-section">
          <h1>Picture a <span>Scientist</span></h1>
          <h2>Un dialogo su stereotipi e gender gap nelle discipline STEM</h2>
          <div className='svg-bg'>
            <svg width="100%" height="100%" viewBox="0 0 1231 474" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.6">
                <path d="M1173.77 425.84C1204.55 425.84 1229.51 400.884 1229.51 370.1C1229.51 339.316 1204.55 314.36 1173.77 314.36C1142.99 314.36 1118.03 339.316 1118.03 370.1C1118.03 400.884 1142.99 425.84 1173.77 425.84Z" fill="#F73C5C" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
                <path d="M1148.06 403.62C1179.35 403.62 1204.72 378.252 1204.72 346.96C1204.72 315.668 1179.35 290.3 1148.06 290.3C1116.77 290.3 1091.4 315.668 1091.4 346.96C1091.4 378.252 1116.77 403.62 1148.06 403.62Z" fill="#F33B5F" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
                <path d="M1122.56 382.38C1154.36 382.38 1180.13 356.605 1180.13 324.81C1180.13 293.015 1154.36 267.24 1122.56 267.24C1090.77 267.24 1064.99 293.015 1064.99 324.81C1064.99 356.605 1090.77 382.38 1122.56 382.38Z" fill="#EF3A62" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
                <path d="M1097.27 362.15C1129.57 362.15 1155.76 335.963 1155.76 303.66C1155.76 271.357 1129.57 245.17 1097.27 245.17C1064.97 245.17 1038.78 271.357 1038.78 303.66C1038.78 335.963 1064.97 362.15 1097.27 362.15Z" fill="#EA3965" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
                <path d="M1072.19 342.89C1105 342.89 1131.6 316.291 1131.6 283.48C1131.6 250.669 1105 224.07 1072.19 224.07C1039.38 224.07 1012.78 250.669 1012.78 283.48C1012.78 316.291 1039.38 342.89 1072.19 342.89Z" fill="#E63868" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
                <path d="M1047.32 324.62C1080.64 324.62 1107.65 297.609 1107.65 264.29C1107.65 230.971 1080.64 203.96 1047.32 203.96C1014 203.96 986.99 230.971 986.99 264.29C986.99 297.609 1014 324.62 1047.32 324.62Z" fill="#E2376B" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
                <path d="M1022.65 307.33C1056.48 307.33 1083.9 279.907 1083.9 246.08C1083.9 212.253 1056.48 184.83 1022.65 184.83C988.823 184.83 961.4 212.253 961.4 246.08C961.4 279.907 988.823 307.33 1022.65 307.33Z" fill="#DE366E" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
                <path d="M998.19 291.01C1032.53 291.01 1060.36 263.176 1060.36 228.84C1060.36 194.504 1032.53 166.67 998.19 166.67C963.854 166.67 936.02 194.504 936.02 228.84C936.02 263.176 963.854 291.01 998.19 291.01Z" fill="#DA3571" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
                <path d="M973.94 275.66C1008.78 275.66 1037.03 247.414 1037.03 212.57C1037.03 177.726 1008.78 149.48 973.94 149.48C939.096 149.48 910.85 177.726 910.85 212.57C910.85 247.414 939.096 275.66 973.94 275.66Z" fill="#D53474" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
                <path d="M949.88 261.28C985.232 261.28 1013.89 232.622 1013.89 197.27C1013.89 161.918 985.232 133.26 949.88 133.26C914.528 133.26 885.87 161.918 885.87 197.27C885.87 232.622 914.528 261.28 949.88 261.28Z" fill="#D13377" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
                <path d="M926.03 247.85C961.89 247.85 990.96 218.78 990.96 182.92C990.96 147.06 961.89 117.99 926.03 117.99C890.17 117.99 861.1 147.06 861.1 182.92C861.1 218.78 890.17 247.85 926.03 247.85Z" fill="#CD327A" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
                <path d="M902.38 235.39C938.748 235.39 968.23 205.908 968.23 169.54C968.23 133.172 938.748 103.69 902.38 103.69C866.012 103.69 836.53 133.172 836.53 169.54C836.53 205.908 866.012 235.39 902.38 235.39Z" fill="#C9317D" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
                <path d="M878.92 223.87C915.796 223.87 945.69 193.976 945.69 157.1C945.69 120.224 915.796 90.33 878.92 90.33C842.044 90.33 812.15 120.224 812.15 157.1C812.15 193.976 842.044 223.87 878.92 223.87Z" fill="#C53080" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
                <path d="M855.66 213.3C893.044 213.3 923.35 182.994 923.35 145.61C923.35 108.226 893.044 77.92 855.66 77.92C818.276 77.92 787.97 108.226 787.97 145.61C787.97 182.994 818.276 213.3 855.66 213.3Z" fill="#C03083" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
                <path d="M832.6 203.68C870.492 203.68 901.21 172.962 901.21 135.07C901.21 97.1777 870.492 66.46 832.6 66.46C794.708 66.46 763.99 97.1777 763.99 135.07C763.99 172.962 794.708 203.68 832.6 203.68Z" fill="#BC2F86" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
                <path d="M809.73 195C848.13 195 879.26 163.87 879.26 125.47C879.26 87.0696 848.13 55.94 809.73 55.94C771.33 55.94 740.2 87.0696 740.2 125.47C740.2 163.87 771.33 195 809.73 195Z" fill="#B82E89" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
                <path d="M787.05 187.25C825.958 187.25 857.5 155.708 857.5 116.8C857.5 77.8915 825.958 46.35 787.05 46.35C748.142 46.35 716.6 77.8915 716.6 116.8C716.6 155.708 748.142 187.25 787.05 187.25Z" fill="#B42D8C" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
                <path d="M764.57 180.43C803.987 180.43 835.94 148.477 835.94 109.06C835.94 69.6434 803.987 37.69 764.57 37.69C725.153 37.69 693.2 69.6434 693.2 109.06C693.2 148.477 725.153 180.43 764.57 180.43Z" fill="#B02C8F" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
                <path d="M742.27 174.54C782.195 174.54 814.56 142.175 814.56 102.25C814.56 62.3253 782.195 29.96 742.27 29.96C702.345 29.96 669.98 62.3253 669.98 102.25C669.98 142.175 702.345 174.54 742.27 174.54Z" fill="#AB2B92" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
                <path d="M720.16 169.58C760.593 169.58 793.37 136.803 793.37 96.37C793.37 55.9372 760.593 23.16 720.16 23.16C679.727 23.16 646.95 55.9372 646.95 96.37C646.95 136.803 679.727 169.58 720.16 169.58Z" fill="#A72A95" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
                <path d="M698.24 165.53C739.181 165.53 772.37 132.341 772.37 91.4C772.37 50.4591 739.181 17.27 698.24 17.27C657.299 17.27 624.11 50.4591 624.11 91.4C624.11 132.341 657.299 165.53 698.24 165.53Z" fill="#A32998" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
                <path d="M676.51 162.4C717.959 162.4 751.56 128.799 751.56 87.35C751.56 45.901 717.959 12.3 676.51 12.3C635.061 12.3 601.46 45.901 601.46 87.35C601.46 128.799 635.061 162.4 676.51 162.4Z" fill="#9F289B" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
                <path d="M654.96 160.17C696.917 160.17 730.93 126.157 730.93 84.2C730.93 42.2429 696.917 8.23 654.96 8.23C613.003 8.23 578.99 42.2429 578.99 84.2C578.99 126.157 613.003 160.17 654.96 160.17Z" fill="#9B279E" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
                <path d="M633.59 158.86C676.055 158.86 710.48 124.435 710.48 81.97C710.48 39.5048 676.055 5.08 633.59 5.08C591.125 5.08 556.7 39.5048 556.7 81.97C556.7 124.435 591.125 158.86 633.59 158.86Z" fill="#9626A1" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
                <path d="M612.4 158.44C655.373 158.44 690.21 123.603 690.21 80.63C690.21 37.6567 655.373 2.82 612.4 2.82C569.427 2.82 534.59 37.6567 534.59 80.63C534.59 123.603 569.427 158.44 612.4 158.44Z" fill="#9225A4" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
                <path d="M591.39 158.93C634.871 158.93 670.12 123.681 670.12 80.2C670.12 36.7186 634.871 1.47 591.39 1.47C547.909 1.47 512.66 36.7186 512.66 80.2C512.66 123.681 547.909 158.93 591.39 158.93Z" fill="#8E24A7" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
                <path d="M570.56 160.3C614.549 160.3 650.21 124.639 650.21 80.65C650.21 36.6605 614.549 1 570.56 1C526.571 1 490.91 36.6605 490.91 80.65C490.91 124.639 526.571 160.3 570.56 160.3Z" fill="#8A23A9" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
                <path d="M549.91 162.57C594.408 162.57 630.48 126.498 630.48 82C630.48 37.5024 594.408 1.43 549.91 1.43C505.412 1.43 469.34 37.5024 469.34 82C469.34 126.498 505.412 162.57 549.91 162.57Z" fill="#8622AC" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
                <path d="M529.43 165.72C574.436 165.72 610.92 129.236 610.92 84.23C610.92 39.2243 574.436 2.74 529.43 2.74C484.424 2.74 447.94 39.2243 447.94 84.23C447.94 129.236 484.424 165.72 529.43 165.72Z" fill="#8221AF" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
                <path d="M509.13 169.75C554.644 169.75 591.54 132.854 591.54 87.34C591.54 41.8262 554.644 4.93 509.13 4.93C463.616 4.93 426.72 41.8262 426.72 87.34C426.72 132.854 463.616 169.75 509.13 169.75Z" fill="#7D20B2" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
                <path d="M489 174.66C535.022 174.66 572.33 137.352 572.33 91.33C572.33 45.3081 535.022 8 489 8C442.978 8 405.67 45.3081 405.67 91.33C405.67 137.352 442.978 174.66 489 174.66Z" fill="#791FB5" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
                <path d="M469.04 180.44C515.57 180.44 553.29 142.72 553.29 96.19C553.29 49.66 515.57 11.94 469.04 11.94C422.51 11.94 384.79 49.66 384.79 96.19C384.79 142.72 422.51 180.44 469.04 180.44Z" fill="#751EB8" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
                <path d="M449.25 187.09C496.288 187.09 534.42 148.958 534.42 101.92C534.42 54.8819 496.288 16.75 449.25 16.75C402.212 16.75 364.08 54.8819 364.08 101.92C364.08 148.958 402.212 187.09 449.25 187.09Z" fill="#711DBB" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
                <path d="M429.63 194.6C477.176 194.6 515.72 156.056 515.72 108.51C515.72 60.9638 477.176 22.42 429.63 22.42C382.084 22.42 343.54 60.9638 343.54 108.51C343.54 156.056 382.084 194.6 429.63 194.6Z" fill="#6D1CBE" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
                <path d="M410.17 202.97C458.224 202.97 497.18 164.014 497.18 115.96C497.18 67.9057 458.224 28.95 410.17 28.95C362.116 28.95 323.16 67.9057 323.16 115.96C323.16 164.014 362.116 202.97 410.17 202.97Z" fill="#681BC1" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
                <path d="M390.89 212.2C439.452 212.2 478.82 172.832 478.82 124.27C478.82 75.7076 439.452 36.34 390.89 36.34C342.328 36.34 302.96 75.7076 302.96 124.27C302.96 172.832 342.328 212.2 390.89 212.2Z" fill="#641AC4" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
                <path d="M371.76 222.28C420.831 222.28 460.61 182.5 460.61 133.43C460.61 84.3595 420.831 44.58 371.76 44.58C322.69 44.58 282.91 84.3595 282.91 133.43C282.91 182.5 322.69 222.28 371.76 222.28Z" fill="#6019C7" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
                <path d="M352.8 233.2C402.379 233.2 442.57 193.009 442.57 143.43C442.57 93.8514 402.379 53.66 352.8 53.66C303.221 53.66 263.03 93.8514 263.03 143.43C263.03 193.009 303.221 233.2 352.8 233.2Z" fill="#5C18CA" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
                <path d="M334 244.97C384.087 244.97 424.69 204.367 424.69 154.28C424.69 104.193 384.087 63.59 334 63.59C283.913 63.59 243.31 104.193 243.31 154.28C243.31 204.367 283.913 244.97 334 244.97Z" fill="#5817CD" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
                <path d="M315.36 257.58C365.955 257.58 406.97 216.565 406.97 165.97C406.97 115.375 365.955 74.36 315.36 74.36C264.765 74.36 223.75 115.375 223.75 165.97C223.75 216.565 264.765 257.58 315.36 257.58Z" fill="#5317D0" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
                <path d="M296.88 271.02C347.983 271.02 389.41 229.593 389.41 178.49C389.41 127.387 347.983 85.96 296.88 85.96C245.777 85.96 204.35 127.387 204.35 178.49C204.35 229.593 245.777 271.02 296.88 271.02Z" fill="#4F16D3" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
                <path d="M278.56 285.29C330.171 285.29 372.01 243.451 372.01 191.84C372.01 140.229 330.171 98.39 278.56 98.39C226.949 98.39 185.11 140.229 185.11 191.84C185.11 243.451 226.949 285.29 278.56 285.29Z" fill="#4B15D6" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
                <path d="M260.39 300.39C312.509 300.39 354.76 258.139 354.76 206.02C354.76 153.901 312.509 111.65 260.39 111.65C208.271 111.65 166.02 153.901 166.02 206.02C166.02 258.139 208.271 300.39 260.39 300.39Z" fill="#4714D9" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
                <path d="M242.37 316.31C294.997 316.31 337.66 273.647 337.66 221.02C337.66 168.393 294.997 125.73 242.37 125.73C189.743 125.73 147.08 168.393 147.08 221.02C147.08 273.647 189.743 316.31 242.37 316.31Z" fill="#4313DC" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
                <path d="M224.51 333.05C277.645 333.05 320.72 289.975 320.72 236.84C320.72 183.705 277.645 140.63 224.51 140.63C171.375 140.63 128.3 183.705 128.3 236.84C128.3 289.975 171.375 333.05 224.51 333.05Z" fill="#3E12DF" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
                <path d="M206.8 350.6C260.443 350.6 303.93 307.113 303.93 253.47C303.93 199.827 260.443 156.34 206.8 156.34C153.157 156.34 109.67 199.827 109.67 253.47C109.67 307.113 153.157 350.6 206.8 350.6Z" fill="#3A11E2" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
                <path d="M189.24 368.96C243.392 368.96 287.29 325.062 287.29 270.91C287.29 216.758 243.392 172.86 189.24 172.86C135.088 172.86 91.19 216.758 91.19 270.91C91.19 325.062 135.088 368.96 189.24 368.96Z" fill="#3610E5" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
                <path d="M171.83 388.13C226.49 388.13 270.8 343.82 270.8 289.16C270.8 234.5 226.49 190.19 171.83 190.19C117.17 190.19 72.86 234.5 72.86 289.16C72.86 343.82 117.17 388.13 171.83 388.13Z" fill="#320FE8" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
                <path d="M154.57 408.09C209.738 408.09 254.46 363.368 254.46 308.2C254.46 253.032 209.738 208.31 154.57 208.31C99.4023 208.31 54.68 253.032 54.68 308.2C54.68 363.368 99.4023 408.09 154.57 408.09Z" fill="#2E0EEB" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
                <path d="M137.45 428.86C193.126 428.86 238.26 383.726 238.26 328.05C238.26 272.374 193.126 227.24 137.45 227.24C81.7742 227.24 36.64 272.374 36.64 328.05C36.64 383.726 81.7742 428.86 137.45 428.86Z" fill="#290DEE" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
                <path d="M120.48 450.41C176.664 450.41 222.21 404.864 222.21 348.68C222.21 292.496 176.664 246.95 120.48 246.95C64.2961 246.95 18.75 292.496 18.75 348.68C18.75 404.864 64.2961 450.41 120.48 450.41Z" fill="#250CF1" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
                <path d="M103.65 472.75C160.342 472.75 206.3 426.792 206.3 370.1C206.3 313.408 160.342 267.45 103.65 267.45C46.958 267.45 1 313.408 1 370.1C1 426.792 46.958 472.75 103.65 472.75Z" fill="#210BF4" stroke="white" strokeWidth="2" strokeMiterlimit="10"></path>
              </g>
          </svg>
          </div>
      </section>
      <div className='spacer'></div>
      <div className="arrow-spacer" onClick={scrollToEventSection}>
        <svg width="30" height="69" viewBox="0 0 30 69" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5858 68.4142C14.3668 69.1953 15.6332 69.1953 16.4142 68.4142L29.1421 55.6863C29.9232 54.9052 29.9232 53.6389 29.1421 52.8579C28.3611 52.0768 27.0948 52.0768 26.3137 52.8579L15 64.1716L3.68629 52.8579C2.90525 52.0768 1.63892 52.0768 0.857867 52.8579C0.0768179 53.6389 0.076818 54.9052 0.857867 55.6863L13.5858 68.4142ZM13 8.74228e-08L13 67L17 67L17 -8.74228e-08L13 8.74228e-08Z" fill="black"></path>
      </svg>
      </div>
      <div className='spacer'></div>

      <section className="event-section" ref={eventSectionRef} >
          <h4 className="program-date">03.02.2023<br/>Borgo Stretto 3, Pisa</h4>
          <div className="divider"></div>
          <div className="program-text">
            <h3>PROGRAMMA</h3>
            <h5>La sala dove si svolgerà l’evento ha capienza limitata,<br/>prenota gratuitamente un posto a questo</h5>
          </div>
          <a href="https://www.eventbrite.it/e/biglietti-picture-a-scientist-515224328837" target="_blank">
            <button className='btn-home'>link</button>
          </a>
      </section>
      <section className="grid-section">
        <table border={0} cellSpacing={0} cellPadding={0}>
          <thead className='first-line'>
            <tr>
              <th>ORA</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {events.map((event, index) => (
            <tr key={index} className="event">
              <td>{event.date}</td>
              <td>{event.title}
                {shownEvents.includes(index) && (
                  <div className="event-content">
                    {event.content && (
                      <>
                        <h5>{event.content?.participants}</h5>
                        <p>{event.content?.description}</p>
                      </>
                    )}
                  </div>
                )}
              </td>
              
              <td className="event-header" onClick={() => showEventContent(index)}>
                {shownEvents.includes(index) ? (
                  <span>{event.content? '-' : ''}</span>
                ) : (
                  <span>{event.content? '+' : ''}</span>
                )}
              </td>
              
            </tr>
          ))}
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default Home