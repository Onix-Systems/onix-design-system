import React, { FC } from 'react';
import Button from '../Button/Button';
import { IFile, IUploadFilesProps } from './interfaces/IUploadFiles';
import DocumentIcon from '../Icons/Document';
import { Colors, Sizes, Variants } from '../../constants/general';
import styles from './sass/UploadFiles.module.scss';

const UploadFiles: FC<IUploadFilesProps> = ({
  files = [],
  title = 'Upload Files',
  onChange = () => {},
  isShowUploadBtn = true,
  className = '',
  onDelete = () => {},
  isMultiple = false,
  accept = undefined,
}) => {
  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files: uploadedFiles } = event.target;
    const selectedFiles = uploadedFiles as FileList;
    const tempFiles = [...Array.from(selectedFiles)].map((file) => {
      const reader = new FileReader();
      return new Promise((resolve) => {
        reader.onload = () => {
          resolve({ file, src: reader.result, name: file.name });
        };
        reader.readAsDataURL(file);
      });
    });
    const res = await Promise.all(tempFiles) as IFile[];

    onChange(isMultiple ? [...files, ...res] : res[0], event);
  };

  const handleRemove = (removeIndex: number) => {
    if (isMultiple) {
      const tempFiles = [...files];

      tempFiles.splice(removeIndex, 1);
      onDelete(tempFiles);
    } else {
      onDelete(null);
    }
  };

  return (
    <div className={`${styles.wrapper} ${className}`}>
      {files?.length > 0 && files[0] && (
      <ul>
        {files.map(({ name }, index) => (
          <li key={`${name}_${index.toString()}`} className={styles.file}>
            <span className={styles.icon}><DocumentIcon /></span>
            <span className={styles.fileName}>{name}</span>
            <Button
              size={Sizes.Small}
              color={Colors.Error}
              variant={Variants.Outlined}
              onClick={() => handleRemove(index)}
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
      )}
      {isShowUploadBtn && (
      <>
        <input
          id="fileUpload"
          type="file"
          onChange={handleChange}
          multiple={isMultiple}
          accept={accept}
          hidden
        />
        <label htmlFor="fileUpload" className={styles.uploadBtn}>
          {title}
        </label>
      </>
      )}
    </div>
  );
};

export default UploadFiles;
