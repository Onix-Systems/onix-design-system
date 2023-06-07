import React from 'react';

export interface IFile {
  file: File,
  src: string,
  name: string,
}

export interface IUploadFilesProps {
  files: IFile[],
  title: string,
  onChange: (files: IFile[] | IFile, event: React.ChangeEvent<HTMLInputElement>) => void,
  isShowUploadBtn: boolean,
  className: string,
  onDelete: (files: IFile[] | null) => void,
  isMultiple: boolean,
  accept: string,
}
