// Static asset imports – all images served from local /src/assets/
import logoImg from '../assets/thermoscan-logo.svg';
import heroBgImg from '../assets/stock_thermovision_2.jpg';
import faviconImg from '../assets/favicon.svg';

import gallery1 from '../assets/defekty-paneloveho-domu_IRVIS-300x184.jpg';
import gallery2 from '../assets/nezatepleny_zatepleny-panelak_IR-1-300x184.jpg';
import gallery3 from '../assets/preklady-a-radiator-pod-oknom_IR-300x184.jpg';
import gallery4 from '../assets/preklady-a-radiator-pod-oknom_IRVIS-300x184.jpg';
import gallery5 from '../assets/radiatory-pod-oknom-a-tepelny-most-prekladmi-nad-oknami_IRVIS-300x184.jpg';
import gallery6 from '../assets/unik-vykurovacieho-media_IR-300x184.jpg';
import gallery7 from '../assets/uvolneny-spoj-v-istici_IR-300x184.jpg';

export { faviconImg };

export const NAV_LINKS = [
  { label: 'Domov', href: '#domov' },
  { label: 'Termovízia', href: '#termovizia' },
  { label: 'Prečo my', href: '#precomy' },
  { label: 'Kontakt', href: '#kontakt' },
];

export const SERVICES = [
  {
    id: 'kontrola',
    title: 'Kontrola kvality realizácie',
    description:
      'Aký je reálny stav nehnutelnosti? Sú okná nekvalitne osadené? Je dom zateplený spoľahlivo?',
    icon: '🏠',
  },
  {
    id: 'detekcia-mostov',
    title: 'Detekcia tepelných mostov',
    description:
      'Vysoký učet za vykurovanie? Vykurujem a napriek tomu pociťujem chlad. Kde je môže byť problém?',
    icon: '🌡️',
  },
  {
    id: 'detekcia-hygienickych',
    title: 'Detekcia hygienických problémov',
    description:
      'Obávam sa, že moja nehnuteľnosť je náchylná k tvorbe plesní? Mám plesne a potrebujem poradiť.',
    icon: '🔬',
  },
];

export const FAQ = [
  {
    question: 'Kedy je najvhodnejší čas na termovízne meranie?',
    answer:
      'Ideálne v chladnejších mesiacoch (jeseň až jar), keď je rozdiel medzi vnútornou a vonkajšou teplotou aspoň 10 °C. Vtedy sú tepelné úniky najlepšie viditeľné.',
  },
  {
    question: 'Koľko stoja naše služby?',
    answer:
      'Cena našich služieb závisí od typu objektu a rozsahu merania. Každý dom či budova je jedinečná, preto pripravujeme cenovú ponuku individuálne. Stačí nám napísať základné informácie o objekte (veľkosť, lokalita, typ stavby) a my vám obratom zašleme nezáväznú cenovú ponuku.',
  },
  {
    question: 'Ako dlho trvá termovízne meranie?',
    answer:
      'Bežný rodinný dom trvá približne 1–2 hodiny. Správa je hotová zvyčajne do 1–2 pracovných dní.',
  },
  {
    question: 'Ako prebieha meranie?',
    answer:
      'Technik príde na miesto, vykoná meranie pomocou termokamery a následne spracuje termogramy do prehľadnej správy s popisom zistených problémov a odporúčaniami na zlepšenie.',
  },
  {
    question: 'Robíte merania aj pre firmy alebo nové stavby?',
    answer:
      'Áno, vykonávame termovízne merania pre rodinné domy, bytové domy, kancelárske priestory aj nové stavby pred odovzdaním.',
  },
];

export const WHY_US_TEXT =
  'Naše termovízne merania vám pomôžu odhaliť tepelné úniky, ktoré zvyšujú náklady na energie a znižujú komfort bývania. Pracujeme s profesionálnou technikou, výsledky podrobne vyhodnocujeme a všetko vám zrozumiteľne vysvetlíme. Ku každému objektu pristupujeme individuálne – naším cieľom nie je len urobiť meranie, ale pomôcť vám nájsť reálne úspory a zvýšiť kvalitu bývania. Spoľahnite sa na presnosť, spoľahlivosť a ľudský prístup.';

export const WHY_US_POINTS = [
  { label: 'Presnosť', desc: 'Profesionálna termokamera s vysokým rozlíšením' },
  { label: 'Spoľahlivosť', desc: 'Podrobná správa s popisom každého problému' },
  { label: 'Ľudský prístup', desc: 'Individuálny prístup ku každému objektu' },
  { label: 'Rýchlosť', desc: 'Správa hotová do 1–2 pracovných dní' },
];

export const CONTACT = {
  email: 'thermoscan@thermoscan.sk',
  phone: '+421 918 977 913',
  address: 'Pod zlatým brehom 59',
  city: '94901 Nitra',
  country: 'Slovensko',
};

export const GALLERY_IMAGES = [
  { src: gallery1, alt: 'Defekty panelového domu – termovízny snímok' },
  { src: gallery2, alt: 'Nezateplený vs zateplený panelák – IR snímok' },
  { src: gallery3, alt: 'Preklady a radiátor pod oknom – IR snímok' },
  { src: gallery4, alt: 'Preklady a radiátor pod oknom – vizuálny snímok' },
  { src: gallery5, alt: 'Radiátory pod oknom a tepelný most – snímok' },
  { src: gallery6, alt: 'Únik vykurovacieho média – IR snímok' },
  { src: gallery7, alt: 'Uvoľnený spoj v istici – IR snímok' },
];

export const LOGO_URL = logoImg;
export const HERO_BG_URL = heroBgImg;
