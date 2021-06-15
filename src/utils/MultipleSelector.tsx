import './SelectorMultiple.css';

export default function MultipleSelector(props: multipleSelectorProps) {
  function select(item: multipleSelectorModel) {
    const selected = [...props.selected, item];
    const notSelected = props.notSelected.filter((val) => val !== item);
    props.onChange(selected, notSelected);
  }
  function unSelect(item: multipleSelectorModel) {
    const selected = props.selected.filter((val) => val !== item);
    const notSelected = [...props.notSelected, item];
    props.onChange(selected, notSelected);
  }
  function selectAll() {
    const selected = [...props.selected, ...props.notSelected];
    const notSelected: multipleSelectorModel[] = [];
    props.onChange(selected, notSelected);
  }
  function unSelectAll() {
    const notSelected = [...props.notSelected, ...props.selected];
    const selected: multipleSelectorModel[] = [];
    props.onChange(selected, notSelected);
  }
  return (
    <div className='selector-multiple'>
      <ul>
        {props.notSelected.map((item) => (
          <li
            key={item.key}
            onClick={() => {
              select(item);
            }}
          >
            {item.value}
          </li>
        ))}
      </ul>
      <div className='selector-multiple-buttons'>
        <button type='button' onClick={selectAll}>
          {'>>'}
        </button>
        <button type='button' onClick={unSelectAll}>
          {'<<'}
        </button>
      </div>
      <ul>
        {props.selected.map((item) => (
          <li
            key={item.key}
            onClick={() => {
              unSelect(item);
            }}
          >
            {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
}

interface multipleSelectorProps {
  selected: multipleSelectorModel[];
  notSelected: multipleSelectorModel[];
  onChange(
    selected: multipleSelectorModel[],
    notSelected: multipleSelectorModel[]
  ): void;
}

export interface multipleSelectorModel {
  key: number;
  value: string;
}
