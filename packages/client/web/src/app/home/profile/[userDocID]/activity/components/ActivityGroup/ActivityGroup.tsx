import { MUserActivity, getHumanReadableDate } from '@tabnode/utils';
import styles from './ActivityGroup.module.css';
import {FaBaby, FaComment, FaPenAlt} from 'react-icons/fa';
import { AiFillLike } from 'react-icons/ai';

export default function ActivityGroup({activities }: { activities: MUserActivity.IUserActivity[] }) {
   const getProperIcon = (group: string)=>{
       switch(group){
         case MUserActivity.ENUM_activityAction.COMMENT:
            return { icon: <FaComment/>, title: 'Wrote a comment' }

         case MUserActivity.ENUM_activityAction.CREATE:
            return { icon: <FaPenAlt/>, title: 'Wrote an article' }

         case MUserActivity.ENUM_activityAction.LIKE:
            return { icon: <AiFillLike/>, title: 'Liked an article'}

         case MUserActivity.ENUM_activityAction.JOINED:
            return { icon: <FaBaby/>, title: 'Joined the group' }

         default:
            return { icon: <FaComment/>, title: 'Wrote a comment'}
       }
   }

  return <section className={styles.activityGroup}>
     <div>
        <div>{getHumanReadableDate(activities[0].doc.createdAt)}</div>
        <div><hr /></div>
     </div>
     <div>
         { activities.map((p)=>{
             return <div key={p.id} className={styles.activityGroupItem}>
             <div> {getProperIcon(p.doc.action).icon} <span> {getProperIcon(p.doc.action).title} </span> </div>
             <div>{p.doc.article.title}</div>
          </div>
         }) }
     </div>
  </section>;
}
