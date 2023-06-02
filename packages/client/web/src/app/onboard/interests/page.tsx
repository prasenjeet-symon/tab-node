import { AiOutlineRight } from 'react-icons/ai';
import styles from './Interests.module.css';

export default function InterestsPage() {
  return (
    <section className={`${styles.interestPage}`}>
      <div> Select upto 5 interests </div>
      <div>
        {/* list all the interest here to choose from */}
        <button type="button"> Programming languages </button>
        <button type="button"> Web development </button>
        <button type="button"> Mobile app development </button>
        <button type="button"> Artificial intelligence </button>
        <button type="button"> Machine learning </button>
        <button type="button"> Data analysis </button>
        <button type="button"> Big data </button>
        <button type="button"> Cloud computing </button>
        <button type="button"> DevOps </button>
        <button type="button"> Internet of Things (IoT) </button>
        <button type="button"> Cybersecurity </button>
        <button type="button"> Blockchain </button>
        <button type="button"> Virtual and augmented reality </button>
        <button type="button"> Robotics </button>
        <button type="button"> 3D printing </button>
      </div>
      <div>
        <button type="button">
          Submit <AiOutlineRight />
        </button>
      </div>
    </section>
  );
}
