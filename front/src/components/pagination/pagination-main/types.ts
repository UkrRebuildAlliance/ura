import { PaginationComponentsCommonProps } from '../types';

export interface PaginationMainProps extends PaginationComponentsCommonProps {
  siblingCount?: number;
  onPageChange(page: number): void;
}
