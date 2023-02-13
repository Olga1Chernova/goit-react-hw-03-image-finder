import css from './Button.module.scss';

const Button = ({ text }) => {
    return <button className={css.Button}>{text}</button>;
}
export default Button;
