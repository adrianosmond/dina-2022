import i01 from 'assets/images/01.png';
import Email from 'components/Email';

const Alice = () => (
  <Email>
    <p>Hey Dina!</p>
    <p>
      I understand it's your birthday so let me start by wishing you my
      congratulations! I hope this is a wonderful day for you.
    </p>
    <p>
      First of all let me introduce myself. My name is Alice Abrahams and I'm
      part of a collective who follow the Inbox Zero methodology. I've heard
      that this is something that you've been dabbling with... We're always
      looking for new members and are willing to reward those who pass our
      entrance test with membership and a free gift.
    </p>
    <p>
      You will receive 9 emails from our collective - this one and 1 each from 8
      other members. If you'd like to join us and receive your free gift you
      must not only delete them all and return your inbox to its empty state,
      but also delete them in the correct order. Each member will give you a
      hint about what that order should be.
    </p>
    <p>
      All the best!
      <br />
      Alice
    </p>
    <p>
      <img src={i01} alt="" />
    </p>
  </Email>
);

export default Alice;
