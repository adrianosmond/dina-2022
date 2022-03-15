import classNames from 'classnames';
import { useCallback, useState } from 'react';
import { ReactComponent as CloseIcon } from 'assets/icons/close.svg';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete.svg';
import { ReactComponent as InboxIcon } from 'assets/icons/inbox.svg';
import { ReactComponent as Logo } from 'assets/images/logo.svg';
import EmptyInbox from 'components/EmptyInbox';
import data, { Email } from './data/emails';
import './style/style.css';

const App = () => {
  const [emails, setEmails] = useState<Email[]>(data);
  const [email, setEmail] = useState<Email | null>(null);
  const markAsRead = useCallback((id: number) => {
    setEmails((mails) =>
      mails.map((e) => {
        if (e.id === id) {
          return {
            ...e,
            isRead: true,
          };
        }
        return e;
      }),
    );
  }, []);

  const deleteEmail = useCallback((id: number) => {
    setEmails((mails) => mails.filter((e) => e.id !== id));
    setEmail(null);
  }, []);

  const openEmail = useCallback(
    (id) => {
      markAsRead(id);
      setEmail(emails.find((e) => e.id === id) || null);
    },
    [emails, markAsRead],
  );

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <div className="w-48 py-4 flex justify-center">
        <Logo className="w-24 fill-teal-800" />
      </div>
      <div className="flex flex-grow">
        <div className="w-48">
          <div className="p-4 text-white bg-teal-800 flex items-center gap-2 font-semibold">
            <InboxIcon className="w-6 h-6 fill-current" /> Inbox
          </div>
        </div>
        <div className="flex-grow flex flex-col">
          <div className="flex-grow flex-shrink pr-2 flex flex-col">
            <div className="flex px-4 gap-4 text-sm text-gray-700 border-gray-300 border border-b-0 bg-white">
              <span className="w-40">From</span>
              <span className="flex-grow">Subject</span>
              <span className="w-12">Time</span>
            </div>
            <ul
              className="bg-white border border-gray-300 flex-grow overflow-y-scroll relative"
              onClick={() => setEmail(null)}
            >
              {emails.map((mail, idx) => (
                <li key={mail.id}>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openEmail(mail.id);
                    }}
                    className={classNames({
                      'flex gap-4 py-3 px-4 w-full border-b border-gray-200 hover:bg-blue-50 text-left':
                        true,
                      'font-semibold': !mail.isRead,
                      'bg-teal-600 hover:bg-teal-600 text-white':
                        mail.id === email?.id,
                      'bg-gray-50': mail.id !== email?.id && idx % 2 === 1,
                    })}
                  >
                    <div className="w-40 h-6 relative">
                      <span className="absolute inset-0 truncate">
                        {mail.from}
                      </span>
                    </div>
                    <div className="h-6 flex-grow relative">
                      <span className="absolute inset-0 truncate">
                        {mail.subject}
                      </span>
                    </div>
                    <div className="w-12 h-6 relative">
                      <span className="absolute inset-0 truncate">
                        {mail.time}
                      </span>
                    </div>
                  </button>
                </li>
              ))}
              {emails.length === 0 && (
                <div className="absolute inset-0 flex justify-center items-center">
                  <EmptyInbox />
                </div>
              )}
            </ul>
          </div>
          {email && (
            <div
              className="flex-grow pr-2 pb-2 flex flex-col"
              style={{ minHeight: '60vh' }}
            >
              <div className="flex-shrink-0 py-2 pt-6 font-semibold px-2 text-xl">
                {email.subject}
              </div>
              <div className="relative flex-grow bg-white border border-gray-300 flex flex-col">
                <div className="flex justify-end items-center gap-2 p-2 border-b border-gray-300">
                  <button
                    className="flex gap-2 items-center py-1 px-2 rounded-sm text-teal-800 font-semibold hover:bg-gray-100"
                    onClick={() => deleteEmail(email.id)}
                  >
                    Delete <DeleteIcon className="w-5 h-5 fill-current" />
                  </button>
                  <button
                    className="flex gap-2 items-center py-1 px-2 rounded-sm text-teal-800 font-semibold hover:bg-gray-100"
                    onClick={() => setEmail(null)}
                  >
                    Close <CloseIcon className="w-5 h-5 fill-current" />
                  </button>
                </div>
                <div className="absolute inset-0 top-12 p-4 overflow-y-scroll">
                  {email.content}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default App;
