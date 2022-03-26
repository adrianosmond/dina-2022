import i02 from 'assets/images/02.png';
import Email from 'components/Email';

const Bob = () => (
  <Email>
    <p>Dear Dina</p>
    <p>
      By this time you've hopefully heard from Alice. One thing she usually
      forgets to mention is that deleting the emails in the correct order isn't
      quite enough to qualify for your free gift. You'll know you've got the
      order right if your email inbox asks you for a 3 digit code once you've
      emptied it. If you can get the code right THEN you'll qualify for the free
      gift. I think the emails should give you all the information you need to
      find the code.
    </p>
    <p>
      Oh, and before I forget, the position in which my message should be
      deleted is a prime number.
    </p>
    <p>
      Yours,
      <br />
      Bob
    </p>
    <p>
      <img src={i02} alt="" />
    </p>
  </Email>
);

export default Bob;
