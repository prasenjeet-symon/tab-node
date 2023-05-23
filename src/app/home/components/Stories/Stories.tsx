import StoryItem from '../StoryItem/StoryItem';
import styles from './Stories.module.css';

export default function Stories() {

  return (
    <div className={styles.stories}>
      {/* list all the stories here */}
      <StoryItem/>
      <StoryItem/>
      <StoryItem/>
      <StoryItem/>
      <StoryItem/>
      <StoryItem/>
      <StoryItem/>
      <StoryItem/>
      <StoryItem/>
      <StoryItem/>
      <StoryItem/>
    </div>
  );
}
