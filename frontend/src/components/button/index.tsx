import './styles.scss';

interface IButton {
  text: string
} 

export function Button ({text}: IButton) {
  return (
    <button type="submit" className="buttonGenerate">{text}</button>
  )

}