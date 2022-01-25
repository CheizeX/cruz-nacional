import { FileError } from 'react-dropzone';

export interface UploadableFile {
  name?: string | undefined;
  id?: number;
  file: File;
  errors: FileError[];
}
