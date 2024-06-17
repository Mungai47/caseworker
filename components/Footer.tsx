function getCurrentYear(): number {
    const currentDate = new Date();
    return currentDate.getFullYear();
}
  

export default function Footer() {
    return (
        <div className="content-end">
            <div className="bg-[#f6f6f6] py-5 justify-center text-center font-medium">
                <p>CaseWorker Copyright  &copy; {getCurrentYear()}</p>
            </div>
        </div>
    );
}