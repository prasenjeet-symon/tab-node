import { AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai';
import styles from './Session.module.css';

export default function SessionPage() {
  return (
    <section className={`${styles.sessionPage} `}>
      <div>
        <div> Sign up / Log in </div>
        <div>
          <div>
            <AiFillTwitterCircle size={25} /> <span>Continue with Twitter</span>
          </div>
          <div>
            <AiFillGithub size={25} /> <span>Continue with GitHub</span>
          </div>
        </div>
        <div></div>
        <div>
          <div>Or sign in using a magic link</div>
          <div><input placeholder="Email" type="text" /></div>
          <button type="button"> Submit </button>
        </div>
      </div>
      <div>
        <img src="/tabnode_header.jpg" alt="" />
        <div>
          Empowering Human Thought in <span>the Age of AI</span>
        </div>
      </div>
    </section>
  );
}
