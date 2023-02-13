import css from './Button.module.scss';

const Button = ({ text, loadMore }) => {
    return <button onClick={()=>loadMore()} className={css.Button}>{text}</button>;
}
export default Button;
