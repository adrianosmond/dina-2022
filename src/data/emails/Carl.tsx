import i03 from 'assets/images/03.png';
import schematic from 'assets/images/schematic.png';
import Email from 'components/Email';

const Carl = () => (
  <Email>
    <p>To whom it may concern</p>
    <p>
      The position in which my email should be deleted wouldn't be a number if
      you displayed it on a seven-segment display and turned it upside down.
    </p>
    <p>
      I've attached a schematic of what a seven-segment display is just in case
      you don't know:
    </p>
    <p>
      <img src={schematic} alt="seven-segment display" />
    </p>
    <p>
      Yours sincerely,
      <br />
      Carl
    </p>
    <p>
      <img src={i03} alt="" />
    </p>
  </Email>
);

export default Carl;
