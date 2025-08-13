import { memo } from 'react';

import { PaginationWithLinks } from '../ui/pagination-with-links';
import type { FieldValues } from 'react-hook-form';

interface Props {
    meta: FieldValues;
}

const ProductsPagination = ({ meta }: Props) => {
    const currentPage = meta.current_page;
    const pageSize = meta.per_page;
    const total = meta.total;

    return (
        <>
            <PaginationWithLinks page={currentPage} pageSize={pageSize} totalCount={total} />
        </>
    );
};

export default memo(ProductsPagination);
