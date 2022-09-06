import React, { useState } from "react";

const AddForm = (props) => {
    const initialFormState = { id: null, name: "", email: ""  ,DOB: "" , Address: "",  NIC: "",  Gender: "" };
    const [user, setUser] = useState(initialFormState);
    const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
      };
  return (
    <form action="#" method="POST"  onSubmit={event => {
        event.preventDefault();
        // if (!user.name || !user.username) return;
        props.addUser(user);
        setUser(initialFormState);
      }}>
    <div class="shadow overflow-hidden sm:rounded-md">
      <div class="px-4 py-5 bg-white sm:p-6">
        <div class="grid grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-3">
                      <label
                        for="first_name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <input
                        placeholder={"Task Name"}
                        required
                        label={"Name"}
                        type="text"
                        name="name"
                        id="first_name"
                        autocomplete="given-name"
                        className="mt-1 mr-10 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        value={user.name}
        onChange={handleInputChange}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        for="email_address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <input
                       
                       type="email"
                       name="email"
                       required
                       
                       id="email_address"
                       autocomplete="email"
                       className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                       value={user.email}
                       onChange={handleInputChange}
                       />
                    </div>

          <div className="col-span-6 sm:col-span-3">
                      <label
                        for="last_name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        DOB
                      </label>
                      <input
                        // type="date"
                        type="text"
                        required
                        
                        id="birthday"
                        name="DOB"
                        autocomplete="family-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        value={user.DOB}
                        onChange={handleInputChange}
                        />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        for="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Gender
                      </label>

                      <input
                        // type="date"
                        type="text"
                        required
                        
                        id="birthday"
                        name="Gender"
                        autocomplete="family-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        value={user.Gender}
                        onChange={handleInputChange}
                        />

                      {/* <select
                        
                        id="country"
                        name="Gender"
                        autocomplete="country"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>Male</option>
                        <option>Female</option>
                      </select> */}
                    </div>

                    <div className="col-span-6">
                      <label
                        for="street_address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Street address
                      </label>
                      <input
                      value={user.Address}
                      onChange={handleInputChange}
                        type="text"
                        required

                        name="Address"
                        id="street_address"
                        autocomplete="street-address"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        for="nic"
                        className="block text-sm font-medium text-gray-700"
                      >
                        NIC
                      </label>
                      <input
                       value={user.NIC}
                       onChange={handleInputChange}
                        type="text"
                        name="NIC"
                        required

                        id="first_name"
                        autocomplete="postal-code"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
        </div>
      </div>
      <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
        <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Save
        </button>
      </div>
    </div>
  </form>
  )
}

export default AddForm