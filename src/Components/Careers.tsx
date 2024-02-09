import { Link, useLoaderData } from "react-router-dom";

export interface CareerType {
  id:  string ;
  jobTitle: string;
  company: { companyId: number; companyName: string };
  skills: string[];
  formattedAddress ?: string;
}

const Careers = () => {
  const careers = useLoaderData() as CareerType[];
  return (
    <div className="">
      <h1 className="text-center font-medium text-indigo-500 text-4xl mb-4">Users </h1>
      <div className="flex flex-col gap-4 mb-10">

        {careers.map((career) => (
          <Link to={career.id.toString()} key={career.id}>
            <div className="p-5 border-white  rounded-lg hover:bg-indigo-50 shadow-xl  cursor-pointer ">
              <p className="py-1"><span className="text-indigo-500  font-medium">Job Title: </span>{career.jobTitle}</p>
              <p className="py-1"><span className="text-indigo-500  font-medium">Company:</span> {career.company.companyName}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Careers;


// eslint-disable-next-line react-refresh/only-export-components
export const carrersLoader = async () => {
  const res = await fetch("http://localhost:4000/careers");
  return res.json()
}