import DisplayData from "./components/DisplayData";

export default function Page() {
    return (
        <>
            <main>
                <div className="flex flex-col mt-16">
                    <h1 className="text-center text-3xl font-bold">
                        Welcome to CNC Shop
                    </h1>
                    <DisplayData />
                </div>
            </main>
        </>
    );
}
