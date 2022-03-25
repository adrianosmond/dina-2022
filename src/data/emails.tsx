import Alice from './emails/Alice';
import Bob from './emails/Bob';
import Carl from './emails/Carl';
import Doris from './emails/Doris';
import Eddie from './emails/Eddie';
import Francis from './emails/Francis';
import Gloria from './emails/Gloria';
import Harriet from './emails/Harriet';
import Ian from './emails/Ian';

export type Email = {
  id: number;
  from: string;
  subject: string;
  time: string;
  isRead: boolean;
  content: JSX.Element;
  onOpened?: () => void;
};

const deliverMail = (id: number) => {
  const mailEvent = new CustomEvent('mail-delivered', { detail: id });
  window.dispatchEvent(mailEvent);
};

const emails: Email[] = [
  {
    id: 9,
    from: 'Ian Ince',
    subject: 'This ought to wrap it up',
    time: '',
    isRead: false,
    content: <Ian />,
  },
  {
    id: 8,
    from: 'Harriet Hemsworth',
    subject: 'Have a wonderful day',
    time: '',
    isRead: false,
    content: <Harriet />,
  },
  {
    id: 7,
    from: 'Gloria Greene',
    subject: 'I wish I could be 35 again',
    time: '',
    isRead: false,
    content: <Gloria />,
    onOpened: () => {
      setTimeout(() => deliverMail(9), 18000);
      setTimeout(() => deliverMail(8), 2000);
    },
  },
  {
    id: 6,
    from: 'Francis Fairbrace',
    subject: 'Best wishes on your birthday',
    time: '',
    isRead: false,
    content: <Francis />,
    onOpened: () => {
      setTimeout(() => deliverMail(7), 12000);
    },
  },
  {
    id: 5,
    from: 'Eddie Evans',
    subject: 'Congratulations',
    time: '',
    isRead: false,
    content: <Eddie />,
    onOpened: () => {
      setTimeout(() => deliverMail(6), 7000);
    },
  },
  {
    id: 4,
    from: 'Doris Dimbleby',
    subject: 'Birthday greetings',
    time: '',
    isRead: false,
    content: <Doris />,
    onOpened: () => {
      setTimeout(() => deliverMail(5), 9000);
    },
  },
  {
    id: 3,
    from: 'Carl Carruthers',
    subject: 'Many happy returns!',
    time: '',
    isRead: false,
    content: <Carl />,
  },
  {
    id: 2,
    from: 'Bob Brown',
    subject: 'My sincerest congratulations!',
    time: '',
    isRead: false,
    content: <Bob />,
    onOpened: () => {
      setTimeout(() => deliverMail(3), 3000);
      setTimeout(() => deliverMail(4), 7000);
    },
  },
  {
    id: 1,
    from: 'Alice Abrahams',
    subject: 'Happy Birthday!',
    time: '',
    isRead: false,
    content: <Alice />,
    onOpened: () => {
      setTimeout(() => deliverMail(2), 5000);
    },
  },
];

export default emails;
