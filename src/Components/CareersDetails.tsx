import { useLoaderData, useParams } from "react-router-dom"
import { LoaderFunction } from "react-router-dom";
import { CareerType } from "./Careers";


const CareersDetails = () => {
    useParams();
    const career = useLoaderData() as CareerType;
    return (
        <div className="careers-details  bg-indigo-50 p-5">
            <div className="p-5">
                <h1 className="text-3xl text-indigo-500 text-center mb-3 ">More Deatils  </h1>
                <p className="py-1"><span className="text-indigo-500  font-medium">Job Title: </span>{career.jobTitle}</p>
                <p className="py-1"><span className="text-indigo-500  font-medium">Company:</span> {career.company.companyName}</p>
                <p className="py-1"><span className="text-indigo-500  font-medium">Skills: </span> {career.skills}</p>
                <p className="py-1"><span className="text-indigo-500  font-medium">Address </span> {career.formattedAddress}</p>
            </div>
        </div>
    )
}

export default CareersDetails



export const CareersDeailsLoader: LoaderFunction<{ id: string }> = async ({ params }) => {
    const { id } = params;
    const res = await fetch("http://localhost:4000/careers/" + id);
    return res.json();
};