import i05 from 'assets/images/05.png';
import Email from 'components/Email';

const Eddie = () => (
  <Email>
    <p>Hi there Dina!</p>
    <p>
      The position in which my email should be deleted is 1.5 times larger than
      Francis'.
    </p>
    <p>
      Best,
      <br />
      Eddie
    </p>
    <p>
      <img src={i05} alt="" />
    </p>
  </Email>
);

export default Eddie;
