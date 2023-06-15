import styles from './NotFound.module.css';

export default function NotFound({ title, subTitle, actionName, action, image }: { image: string; title: string; subTitle: string; actionName: string; action: () => void }) {
    return (
        <section className={styles.notFound}>
            <div>
                <img src={image} alt="" />
            </div>
            <div>{!title ? '' : title}</div>
            <div>{subTitle ? subTitle : ''}</div>
            <div>
                {actionName === '' ? null : (
                    <button onClick={action} className="outlineButton">
                        {actionName ? actionName : ''}
                    </button>
                )}
            </div>
        </section>
    );
}
