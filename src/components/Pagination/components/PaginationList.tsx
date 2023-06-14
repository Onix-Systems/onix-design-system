import React, { FC } from 'react';
import { IPaginationPage } from '../interfaces/IPaginationPage';
import Button from '../../Button/Button';
import {
  ONE_PAGE, PAGE_DELIMITER, THREE_PAGES_DELIMITER, ENTRY_DELIMITER,
} from '../../../constants/values';
import {
  calcPage, add, lesser, reduce, bigger,
} from '../../../utils/pagination';
import styles from '../sass/PaginationList.module.scss';

const PaginationList: FC<IPaginationPage> = ({
  currentPage, lastPage, perPage, total, setPage,
}) => {
  let firstPaginationPage = calcPage(currentPage, perPage, ONE_PAGE, perPage, reduce, bigger);
  let lastPaginationPage = calcPage(currentPage, perPage, ENTRY_DELIMITER, total, add, lesser);
  if (currentPage === PAGE_DELIMITER) {
    firstPaginationPage = calcPage(currentPage, perPage, PAGE_DELIMITER, perPage, reduce, bigger);
    lastPaginationPage = calcPage(currentPage, perPage, THREE_PAGES_DELIMITER, total, add, lesser);
  } else if (currentPage > PAGE_DELIMITER && currentPage <= lastPage - PAGE_DELIMITER) {
    firstPaginationPage = calcPage(currentPage, perPage, PAGE_DELIMITER, perPage, reduce, bigger);
    lastPaginationPage = calcPage(currentPage, perPage, PAGE_DELIMITER, total, add, lesser);
  } else if (currentPage > lastPage - PAGE_DELIMITER) {
    firstPaginationPage = calcPage(lastPage, perPage, ENTRY_DELIMITER, perPage, reduce, bigger);
    lastPaginationPage = lastPage;
  }

  const links = new Array(lastPaginationPage - firstPaginationPage + 1).fill(null);

  return (
    <>
      {links.map((item, index) => (
        <Button
          className={styles.button}
          key={[firstPaginationPage, index].join('_')}
          text={`${firstPaginationPage + index}`}
          disabled={firstPaginationPage + index === currentPage}
          onClick={() => setPage(firstPaginationPage + index)}
        />
      ))}
    </>
  );
};

export default PaginationList;
