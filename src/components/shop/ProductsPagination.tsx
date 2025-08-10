import Link from 'next/link';

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious
} from '@/components/ui/pagination';

import { PaginationWithLinks } from '../ui/pagination-with-links';
import type { FieldValues } from 'react-hook-form';

interface Props {
    meta: FieldValues;
}

export default function ProductsPagination({ meta }: Props) {
    const currentPage = meta.current_page;
    const pageSize = meta.per_page;
    const total = meta.total;

    return (
        <>
            <PaginationWithLinks page={currentPage} pageSize={pageSize} totalCount={total} />
        </>
    );
}
