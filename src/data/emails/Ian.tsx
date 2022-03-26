import i09 from 'assets/images/09.png';
import Email from 'components/Email';

const Uab = () => (
  <Email>
    <p>Dina,</p>
    <p>
      This should be the last message you receive from us. If you use your wits
      you should be able to deduce the correct order to delete the messages.
    </p>
    <p>
      I think that{' '}
      <a
        href="https://docs.google.com/presentation/d/1YvzI96xrHNN9oVLL_kbQ771e8xpMG6LkejtkzooKVOU/edit?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        this link
      </a>{' '}
      might help in working out the code at the end.
    </p>
    <p>
      It remains only for me to tell you that the first message you should
      delete is Alice's.
    </p>
    <p>
      Good luck!
      <br />
      Ian
    </p>
    <p>
      <img src={i09} alt="" />
    </p>
  </Email>
);

export default Uab;
