import i04 from 'assets/images/04.png';
import Email from 'components/Email';

const Doris = () => (
  <Email>
    <p>Dear Sir/Madam</p>
    <p>
      The position in which my email should be deleted would have 5 of the 7
      segments illuminated on a seven-segment display.
    </p>
    <p>
      Kind regards,
      <br />
      Doris
    </p>
    <p>
      <img src={i04} alt="" />
    </p>
  </Email>
);

export default Doris;
