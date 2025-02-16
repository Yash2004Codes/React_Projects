import styles from './App.module.css';


export default function Upper(){
    return(
        <>
        <div className={styles.uppercompo}>
            <h1 className={styles.myh1}>Level Up Your FrontEnd Skills</h1>
            <p className={styles.myp}>Sign up for our free newsletter to receive weekly coding 
                challenges that will help you improve your front end 
                development skills.
            </p>
        </div>
        </>
    );
}