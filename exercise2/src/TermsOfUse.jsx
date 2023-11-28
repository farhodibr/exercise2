import { useState } from 'react'
import classes from './TermsOfUse.module.css'





 export default function TermsOfUse() {

  const [termsOfUse, setTermsOfUse] = useState('');
  const [termsOfUseSet, setTermsOfUseSet] = useState(false);

  function handleChange() {
    setTermsOfUseSet(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (termsOfUseSet) {
    setTermsOfUse('Form submitted');
    } else {
      setTermsOfUse('You must accept the terms of use');
    }
  }
  return (
    <div className={classes.scrollcontainer}>
        <section>
          <h1 className={classes.important}>Terms of Use</h1>
          <form onSubmit={handleSubmit}>
            <label>
              <input type="checkbox" onChange={handleChange} />
              
              <p className={classes.scrolltext}> I accept the terms of use</p>
              <br />
              {termsOfUseSet ? 'Terms of use are accepted' : 'Terms of use are not accepted'}
            </label>
            <br />
            <button type="submit">Submit</button>
          </form>
          <p>{termsOfUse}</p>
        </section>

    </div>

      
  )
}


