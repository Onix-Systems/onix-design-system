import React, { FC, useEffect } from 'react';
import IconButton from '../IconButton/IconButton';
import PaginationList from './components/PaginationList';
import { ArrowRightIcon, ArrowLeftIcon } from '../Icons';
import { IPagination } from './interfaces/IPagination';
import styles from './sass/Pagination.module.scss';

const Pagination: FC<IPagination> = ({
  currentPage, lastPage, total, setPage, perPage,
}) => {
  const prevPage = currentPage - 1;
  const prevPageActive = prevPage < 1;
  const nextPage = currentPage + 1;
  const nextPageActive = nextPage > lastPage;

  const handleSetPage = (page: number) => {
    setPage(page);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (currentPage > lastPage) {
      setPage(lastPage);
    }
  }, [setPage, currentPage, lastPage]);

  return (
    perPage < total ? (
      <div className={styles.container}>
        <IconButton
          disabled={prevPageActive}
          onClick={() => handleSetPage(prevPage)}
          icon={<ArrowLeftIcon />}
        />
        <PaginationList
          currentPage={currentPage}
          lastPage={lastPage}
          perPage={perPage}
          total={total}
          setPage={(page) => handleSetPage(page)}
        />
        <IconButton
          disabled={nextPageActive}
          onClick={() => handleSetPage(nextPage)}
          icon={<ArrowRightIcon />}
        />
      </div>
    ) : (
      <div />
    )
  );
};

export default Pagination;
