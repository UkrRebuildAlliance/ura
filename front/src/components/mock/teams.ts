import babich from './img/I.Babich.png';
import kastelboim from './img/M.Kestelboim.png';
import kytsak from './img/M.Kytsak.png';
import perevalova from './img/N.Perevalova.png';
import kanska from './img/O.Kanska.png';
import unguryan1 from './img/P.Unguryan.png';
import unguryan2 from './img/V.Unguryan.png';
import maslov from './img/Y.Maslov.png';

export interface TeamMember {
  id: string;
  src: string;
  name: string;
  about: string[];
  job_title: string;
}

const duplicateArray = (originalArray: TeamMember[], times: number) => {
  const newArray = [];

  for (let i = 0; i < times; i++) {
    newArray.push(...originalArray);
  }

  return newArray;
};

export const teams = [
  {
    id: '1',
    name: 'Ігор Бабич',
    src: babich,
    job_title: `Міжнародні відносини та фінанси`,
    about: [''],
  },
  {
    id: '2',
    name: 'Марк Кестельбойм',
    src: kastelboim,
    job_title: `Член правління. Стратегії та маркетинг.`,
    about: [''],
  },
  {
    id: '3',
    name: 'Микола Куцак',
    src: kytsak,
    job_title: `Член правління. Будівництво та розвиток`,
    about: [''],
  },
  {
    id: '4',
    name: 'Ольга Канська',
    src: kanska,
    job_title: `Радник Голови правління. PR та комунікації`,
    about: [''],
  },
  {
    id: '5',
    name: 'Наталія Перевалова',
    src: perevalova,
    job_title: `Член правління. Керівник проектів`,
    about: [''],
  },
  {
    id: '6',
    name: 'Павло Унгурян',
    src: unguryan1,
    job_title: `Голова наглядової ради`,
    about: [''],
  },
  {
    id: '7',
    name: 'Веніамін Унгурян',
    src: unguryan2,
    job_title: `Заступник Голови Правління, Депутат Одеської обласної ради`,
    about: [''],
  },
  {
    id: '8',
    name: 'Юрій Маслов',
    src: maslov,
    job_title: `Голова правління, Доктор політичних наук, професор, заслужений економіст України`,
    about: [''],
  },
];

export const teamsById = {
  name: 'Анатолій Пінчук',
  img: babich,
  job_title: `Директор та співзасновник Бюро, економіст.`,
  about: [
    `Європейська комісія дала «зелене світло» Україні на початок переговорів про вступ до Євросоюзу. Це рішення мають ще затвердити лідери ЄС на саміті в середині грудня. І хоча Київ має ще трохи підтягнутись, але, вочевидь, в березні 2024 року Україна почне переговори про вступ до Євросоюзу. Але як довго триватиме шлях до членства? Прозвучала дата – 2030 рік. Чи справді Україна може стати членом Європейської унії у 2030 році?`,
    '',
    'У політологічних колах існує навіть спеціальна наука щодо термінів, які потрібні країнам щоби стати членом ЄС і які чинники на це впливають.',
    '',
    'Рекорд швидкості встановила Фінляндія – від заявки до членства якої в ЄС (в 1995 році) минуло три з половиною роки',
    '',
    '«Анти-рекорд» тут тримає Туреччина, – вона стала кандидатом на членство в ЄС в 1999 році і ще й донині не має реальних перспектив на членство. А асоціацію з Європейською спільнотою (прообразом Євросоюзу) Туреччина підписала аж в 1963 році',
    '',
    'У середньому від початку переговорів до членства в ЄС минає сім років. Принаймні це було характерно для великої групи посткомуністичних країн, яка приєдналася до ЄС у 2004 під час найбільшої хвилі розширення.',
    '',
    'Та ж Польща, яку географічно, територіально та за розміром населення порівнюють з Україною, почала переговори про вступ в 1997 році, а стала членом ЄС 1 травня 2004 року. Тобто – посткомуністичні країни подолали переговорних шлях до членства ЄС за сім років',
    '',
    '«Я прошу не цитувати, що Мезенцева сказала, що ми будемо в ЄС 2030-му році. Але я прошу наголосити, що є політичні цикли, але я вірю, що в 2029 році українські політики зможуть бути представлені в євроінституціях», – каже в інтерв’ю Радіо Свобода депутатка від «Слуги народу» Марія Мезенцева, заступниця голови Комітету Верховної Ради з питань інтеграції України до ЄС.',
    '',
    '«Ми ж не хочемо, щоб повторилось так, як з Туреччиною, правда? Тому важливо фіксувати! Якщо цього не відбудеться – це не катастрофа. Але якщо можна зафіксувати дату – то бажано її таки зафіксувати», – зауважує Мовчан.',
  ],
};

export const teams_for_page = duplicateArray(teams, 5);
