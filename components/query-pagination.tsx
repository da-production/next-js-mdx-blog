"use client"

import { usePathname, useSearchParams } from "next/navigation";
import { Pagination, PaginationContent, PaginationItem, PaginationLink , PaginationPrevious, PaginationNext } from "./ui/pagination";
import { cn } from "@/lib/utils";

interface QueryPaginationProps{
    totalPages: number;
    className?: string;
}

function QueryPagination({totalPages, className}:QueryPaginationProps) {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const currentPage = Number(searchParams.get("page")) || 1;

    const prevPage = currentPage -1;
    const nextPage = currentPage + 1;

    const createPageURL = (pageNumber: number | string) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", pageNumber.toString());
        return `${pathname}?${params.toString()}`;
    }

    return (
        <Pagination className="max-w-screen-lg w-full mt-10">
            <PaginationContent className={cn('flex justify-between max-w-screen-lg w-full',className)}>
                {
                    prevPage >= 1 ? (
                        <PaginationItem>
                            <PaginationPrevious href={createPageURL(prevPage)} />
                        </PaginationItem>
                    ) : <div></div>
                }

                <div>
                {
                    Array(totalPages)
                    .fill("")
                    .map((_,index)=>(
                        <PaginationItem className="hidden sm:inline-block" key={`page-button-${(index+1)}`}>
                            <PaginationLink isActive={currentPage === (index+1)} href={createPageURL(index+1)} >
                                {index+1}
                            </PaginationLink>
                        </PaginationItem>
                    ))
                }
                </div>

                {
                    nextPage <= totalPages  ? (
                        <PaginationItem>
                            <PaginationNext href={createPageURL(nextPage)} />
                        </PaginationItem>
                    ) : <div></div>
                }
            </PaginationContent>
        </Pagination>
    )
}

export default QueryPagination