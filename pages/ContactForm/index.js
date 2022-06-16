import { useRef } from 'react';
import { useRouter } from 'next/router';

import classes from './ContactForm.module.css';

function NewTicketForm(props) {
  const NameInputRef = useRef();
  const EmailInputRef = useRef();

  async function submitHandler(event) {
    event.preventDefault();

    const enteredName = NameInputRef.current.value;
    const enteredEmail = EmailInputRef.current.value;

    const UserData = {
      name: enteredName,
      email: enteredEmail,
      title: title,
      price: price,
      date: date,
      format: format,
      place: place
    };

    // console.log(UserData)
    fetch('/api/contactUser',{
        method: "post",
        body: JSON.stringify(UserData)
    })

    router.push('/')
  }

  const router = useRouter()
  const title = router.query.title
  const price = router.query.price
  const date = router.query.date
  const format = router.query.format
  const place = router.query.place

  return (
    <div className={classes.container}>
      <h2 className={classes.header}>Chech information about film and enter your contacts to buy ticket (ticket for film will be send to your email)</h2>
      <div className={classes.info}>
        <p className={classes.infoPoint}><strong>Film:</strong> <br/> {title}</p>
        <p className={classes.infoPoint}><strong>Format:</strong> <br/> {format}</p>
        <p className={classes.infoPoint}><strong>Price:</strong> <br/> {price}</p>
        <p className={classes.infoPoint}><strong>Date:</strong> <br/> {date}</p>
        <p className={classes.infoPoint}><strong>Place:</strong> <br/> {place}</p>
      </div>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='name'>Name</label>
          <input type='text' required id='name' ref={NameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='email'>Email</label>
          <input type='text' required id='email' ref={EmailInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Submit</button>
        </div>
      </form>
    </div>
    
  );
}

export default NewTicketForm;
