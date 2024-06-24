import classes from 'D:\\Murali\\React-Learning\\12-adv-starting-project\\frontend\\src\\components\\NewsLetter.module.css';

function NewsletterSignup() {
  return (
    <form method="post" className={classes.newsletter}>
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </form>
  );
}

export default NewsletterSignup;