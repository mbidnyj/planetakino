import { useRef } from 'react';

import classes from './NewFilmForm.module.css';

function NewFilmForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const dateInputRef = useRef();
  const priceInputRef = useRef();
  const descriptionInputRef = useRef();
  const extendedInputRef = useRef();
  const directorInputRef = useRef();
  const starsInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredDate = dateInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredExtended = extendedInputRef.current.value;
    const enteredDirector = directorInputRef.current.value;
    const enteredStars = starsInputRef.current.value;

    const filmData = {
      title: enteredTitle,
      image: enteredImage,
      date: enteredDate,
      price: enteredPrice,
      description: enteredDescription,
      extended: enteredExtended,
      director: enteredDirector,
      stars: enteredStars
    };

    console.log(filmData)
  }

  return (
    
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Title</label>
          <input type='text' required id='title' ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Image</label>
          <input type='url' required id='image' ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='date'>Date</label>
          <input type='text' required id='date' ref={dateInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='price'>Price</label>
          <input type='text' required id='price' ref={priceInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='director'>Director</label>
          <input type='text' required id='director' ref={directorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            rows='5'
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.control}>
          <label htmlFor='extended'>Extended</label>
          <textarea
            id='extended'
            required
            rows='3'
            ref={extendedInputRef}
          ></textarea>
        </div>
        <div className={classes.control}>
          <label htmlFor='stars'>Stars</label>
          <textarea
            id='stars'
            required
            rows='2'
            ref={starsInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Film</button>
        </div>
      </form>
    
  );
}

export default NewFilmForm;
