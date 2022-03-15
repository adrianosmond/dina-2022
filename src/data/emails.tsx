import Alice from './emails/Alice';
import Bob from './emails/Bob';
import Carl from './emails/Carl';
import Doris from './emails/Doris';

export type Email = {
  id: number;
  from: string;
  subject: string;
  time: string;
  isRead: boolean;
  content: JSX.Element;
};

const emails: Email[] = [
  {
    id: 4,
    from: 'Doris Dimbleby',
    subject: 'A slightly longer email subject',
    time: '06:02',
    isRead: false,
    content: <Doris />,
  },
  {
    id: 3,
    from: 'Carl Carruthers',
    subject:
      'An email subject that really is so long that it needs to be truncated for the good of all of us',
    time: '05:50',
    isRead: false,
    content: <Carl />,
  },
  {
    id: 2,
    from: 'Bob Brown',
    subject: 'A slightly longer email subject',
    time: '06:02',
    isRead: false,
    content: <Bob />,
  },
  {
    id: 1,
    from: 'Alice Abrahams',
    subject: 'An email subject',
    time: '05:50',
    isRead: false,
    content: <Alice />,
  },
];

export default emails;
