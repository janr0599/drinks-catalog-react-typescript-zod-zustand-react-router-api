import { useAppStore } from "../stores/useAppStore";

function IndexPage() {
    const { categories } = useAppStore();

    return (
        <>
            <div className="">Index</div>
        </>
    );
}

export default IndexPage;
