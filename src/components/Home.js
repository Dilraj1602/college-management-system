import { NavLink } from 'react-router-dom';
import CreateForm from './CreateForm';
import { useState } from 'react';
import {Showdata} from './Showdata';

function Home() {
    const [numberOfCourses, setNumberOfCourses] = useState('');
    const [courseForms, setCourseForms] = useState([]); // New state to hold the forms

    function handleNumberOfCourses(e) {
        const numCourses = parseInt(e.target.value) || ''; 
        if(numCourses>7){
            alert("You can't select more than 7 courses");
            return
        }
        setNumberOfCourses(numCourses);

        if (numCourses) {
            const forms = Array.from({ length: numCourses }, (_, i) => <CreateForm key={i} id={i + 1} />);
            setCourseForms(forms);
        } else {
            setCourseForms([]);
        }
    }

    return (
        <div>
            <div className="w-[100vw] h-[100vh] flex justify-center items-center relative">
                <div className="w-[30%] border-2 py-10 px-10 space-y-4 rounded-lg">
                    <h1 className="text-center text-2xl font-bold pb-4 font-serif">Student Details</h1>
                    <div className="flex flex-col space-y-2 relative">
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="email" className="text-xl font-medium font-serif">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="border-none outline-none px-3 py-2 rounded-md w-full"
                                style={{ border: '1px solid #000', borderRadius: '8px' }}
                            />
                        </div>

                        <div className="flex flex-col space-y-1 relative">
                            <label htmlFor="enrollmentnumber" className="text-xl font-medium font-serif">Enrollment number</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="enrollmentnumber"
                                    name="enrollmentnumber"
                                    className="border-none outline-none px-3 py-2 rounded-md w-full pr-10"
                                    style={{ border: '1px solid #000', borderRadius: '8px' }}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="number_of_courses" className="text-xl font-medium font-serif">Number of Courses</label>
                        <input
                            type="text"
                            id="number_of_courses"
                            name="number_of_courses"
                            value={numberOfCourses}
                            className="border-none outline-none px-3 py-2 rounded-md w-full pr-10"
                            style={{ border: '1px solid #000', borderRadius: '8px' }}
                            onChange={handleNumberOfCourses}
                        />
                    </div>
                    <div className="pt-4">
                        {courseForms}
                    </div>
                    <div className="pt-4">
                        <NavLink to="/showdata" >
                            <button className="border-2 rounded-md w-[100%] py-2 font-bold text-xl font-serif">Continue</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
