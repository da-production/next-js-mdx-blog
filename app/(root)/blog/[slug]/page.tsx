import MaxWidthWrapper from "@/components/MaxWidthWrapper";



async function page(props:any) {
    return (
        <MaxWidthWrapper>
            {props.params.slug}
        </MaxWidthWrapper>
    )
}

export default page