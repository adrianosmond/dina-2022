import Zero from 'assets/images/zero.png';

const EmptyInbox = () => (
  <div className="text-center text-teal-800">
    <h1 className="text-4xl font-semibold">An empty Inbox</h1>
    <p className="-mb-20 mt-4">Take a moment to celebrate the achievement</p>
    <img src={Zero} alt="Empty inbox" />
  </div>
);

export default EmptyInbox;
