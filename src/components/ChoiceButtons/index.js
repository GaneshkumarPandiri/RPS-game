import {ListItem, ChoiceButton, ChoiceImage} from './styledComponents'

const ChoiceButtons = props => {
  const {choiceItem, onSelectChoice} = props
  const {id, imageUrl, data} = choiceItem
  const onChoice = () => {
    onSelectChoice(id)
  }

  return (
    <ListItem>
      <ChoiceButton type="button" onClick={onChoice} data-testid={data}>
        <ChoiceImage src={imageUrl} alt={id} />
      </ChoiceButton>
    </ListItem>
  )
}

export default ChoiceButtons
