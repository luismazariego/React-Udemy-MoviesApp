import { useEffect, useState } from 'react';
export default function Pagination(props: paginationProps) {
  const [linksList, setLinksList] = useState<linkModel[]>([]);
  useEffect(() => {
    const previousEnabledPage = props.currentPage !== 1;
    const previousPage = props.currentPage - 1;
    const links: linkModel[] = [
      {
        text: 'Previous',
        enabled: previousEnabledPage,
        page: previousPage,
        active: false,
      },
    ];

    for (let i = 1; i <= props.totalPages; i++) {
      if (
        i >= props.currentPage - props.radio &&
        i <= props.currentPage + props.radio
      ) {
        links.push({
          text: `${i}`,
          active: props.currentPage === i,
          enabled: true,
          page: i,
        });
      }
    }

    const nextEnabledPage =
      props.currentPage !== props.totalPages && props.totalPages !== 0;
    const nextPage = props.currentPage + 1;
    links.push({
      text: 'Next',
      page: nextPage,
      enabled: nextEnabledPage,
      active: false,
    });

    setLinksList(links);
  }, [props.currentPage, props.totalPages, props.radio]);

  const getClass = (link: linkModel) => {
    if (link.active) {
      return 'active pointer';
    }
    if (!link.enabled) {
      return 'disabled';
    }
    return 'pointer';
  };

  const selectPage = (link: linkModel) => {
    if (link.page === props.currentPage) {
      return;
    }
    if (!link.enabled) {
      return;
    }
    props.onChange(link.page);
  };

  return (
    <nav>
      <ul className='pagination justify-content-center'>
        {linksList.map((link) => 
          <li
            key={link.text}
            onClick={() => selectPage(link)}
            className={`page-item cursor ${getClass(link)}`}
          >
            <span className='page-link'>{link.text}</span>
          </li>
        )}
      </ul>
    </nav>
  );
}

interface linkModel {
  page: number;
  enabled: boolean;
  text: string;
  active: boolean;
}

interface paginationProps {
  currentPage: number;
  totalPages: number;
  radio: number;
  onChange(page: number): void;
}

Pagination.defaultProps = {
    radio: 3 
}