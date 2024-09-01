import React from 'react';

function CreateForm({ id }) {
    return (
        <div className="mb-4">
            <div className="flex flex-col space-y-1">
                <label htmlFor={`course-${id}`} className="text-xl font-medium font-serif">Course {id}</label>
                <input
                    type="text"
                    id={`course-${id}`}
                    name={`course-${id}`}
                    className="border-none outline-none px-3 py-2 rounded-md w-full"
                    style={{ border: '1px solid #000', borderRadius: '8px' }}
                />
            </div>
        </div>
    );
}

export default CreateForm;
