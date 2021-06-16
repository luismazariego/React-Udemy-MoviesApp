import { ReactElement } from 'react';
import Loading from './Loading';
export default function GenericList(props: genericListProps) {
  if (!props.list) {
    if (props.loadingUI) {
      return props.loadingUI;
    }
    return <Loading />;
  } else if (props.list.length === 0) {
    if (props.emptyListUI) {
      return props.emptyListUI;
    }
    return <>There is no elements to show</>;
  } else {
    return props.children;
  }
}

interface genericListProps {
  list: any;
  children: ReactElement;
  loadingUI?: ReactElement;
  emptyListUI?: ReactElement;
}
