import { Label,Input } from './Filter.styled';
import { AiOutlineFileSearch } from 'react-icons/ai';

export const Filter = ({ onChange, filter }) => {
  return (
    <Label>
      Find contacts by name <AiOutlineFileSearch size={30}/>
      <Input
        type="text"
        value={filter}
        onChange={evt => onChange(evt.target.value)}
      />
    </Label>
  );
};
